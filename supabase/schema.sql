-- NOTE: This file contains SQL for setting up your Supabase database schema
-- You can run these commands in the Supabase SQL editor to set up your tables

-- Enable Row Level Security (RLS) by default
ALTER DATABASE postgres SET "app.settings.app_id" TO 'tenderflow';

-- Create a secure schema for our tables
CREATE SCHEMA IF NOT EXISTS private;

-- Set up Storage
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true);

INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', false);

-- Set up profiles table for user information
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  company_name TEXT,
  email TEXT NOT NULL,
  avatar_url TEXT,
  account_type TEXT DEFAULT 'client' CHECK (account_type IN ('client', 'admin', 'supplier')),
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create RLS policies for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policy for viewing profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

-- Policy for updating profiles
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);


-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update timestamps
CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- Create tenders table to store tender listings
CREATE TABLE public.tenders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  value NUMERIC(15, 2),
  company TEXT NOT NULL,
  requirements TEXT,
  deadline TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'closed', 'awarded')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create RLS policies for tenders
ALTER TABLE public.tenders ENABLE ROW LEVEL SECURITY;

-- Policy for viewing published tenders - anyone can see published tenders
CREATE POLICY "Anyone can view published tenders" ON public.tenders
  FOR SELECT USING (status = 'published');

-- Policy for viewing own tenders
CREATE POLICY "Users can view their own tenders" ON public.tenders
  FOR SELECT USING (auth.uid() = user_id);

-- Policy for creating tenders
CREATE POLICY "Users can create tenders" ON public.tenders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy for updating tenders
CREATE POLICY "Users can update their own tenders" ON public.tenders
  FOR UPDATE USING (auth.uid() = user_id);

-- Trigger to update timestamps
CREATE TRIGGER tenders_updated_at
  BEFORE UPDATE ON public.tenders
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- Create applications table for tender applications
CREATE TABLE public.applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  tender_id UUID REFERENCES public.tenders(id) NOT NULL,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  proposal TEXT NOT NULL,
  quoted_price NUMERIC(15, 2),
  documents TEXT[],
  status TEXT DEFAULT 'submitted' CHECK (status IN ('submitted', 'under_review', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(tender_id, user_id) -- Each user can only have one application per tender
);

-- Create RLS policies for applications
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Policy for viewing own applications
CREATE POLICY "Users can view their own applications" ON public.applications
  FOR SELECT USING (auth.uid() = user_id);

-- Policy for creating applications
CREATE POLICY "Users can create applications for published tenders" ON public.applications
  FOR INSERT WITH CHECK (
    auth.uid() = user_id AND
    EXISTS (SELECT 1 FROM public.tenders WHERE id = tender_id AND status = 'published')
  );

-- Policy for updating applications
CREATE POLICY "Users can update their own applications" ON public.applications
  FOR UPDATE USING (auth.uid() = user_id);

-- Trigger to update timestamps
CREATE TRIGGER applications_updated_at
  BEFORE UPDATE ON public.applications
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- Create a purchase orders table
CREATE TABLE public.purchase_orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  supplier TEXT,
  total_amount NUMERIC(15, 2),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'submitted', 'approved', 'rejected', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create RLS policies for purchase_orders
ALTER TABLE public.purchase_orders ENABLE ROW LEVEL SECURITY;

-- Policy for viewing own purchase orders
CREATE POLICY "Users can view their own purchase orders" ON public.purchase_orders
  FOR SELECT USING (auth.uid() = user_id);

-- Policy for creating purchase orders
CREATE POLICY "Users can create purchase orders" ON public.purchase_orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy for updating purchase orders
CREATE POLICY "Users can update their own purchase orders" ON public.purchase_orders
  FOR UPDATE USING (auth.uid() = user_id);

-- Trigger to update timestamps
CREATE TRIGGER purchase_orders_updated_at
  BEFORE UPDATE ON public.purchase_orders
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- Create purchase order items table
CREATE TABLE public.po_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  po_id UUID REFERENCES public.purchase_orders(id) ON DELETE CASCADE NOT NULL,
  item_name TEXT NOT NULL,
  description TEXT,
  quantity INTEGER NOT NULL,
  unit_price NUMERIC(15, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create RLS policies for po_items
ALTER TABLE public.po_items ENABLE ROW LEVEL SECURITY;

-- Policy for viewing po_items
CREATE POLICY "Users can view po_items of their purchase orders" ON public.po_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.purchase_orders 
      WHERE id = po_id AND user_id = auth.uid()
    )
  );

-- Policy for inserting po_items
CREATE POLICY "Users can insert po_items to their purchase orders" ON public.po_items
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.purchase_orders 
      WHERE id = po_id AND user_id = auth.uid()
    )
  );

-- Policy for updating po_items
CREATE POLICY "Users can update po_items of their purchase orders" ON public.po_items
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.purchase_orders 
      WHERE id = po_id AND user_id = auth.uid()
    )
  );

-- Trigger to update timestamps
CREATE TRIGGER po_items_updated_at
  BEFORE UPDATE ON public.po_items
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- Create a sourcing requests table
CREATE TABLE public.sourcing_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  budget NUMERIC(15, 2),
  deadline TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'fulfilled', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create RLS policies for sourcing_requests
ALTER TABLE public.sourcing_requests ENABLE ROW LEVEL SECURITY;

-- Policy for viewing own sourcing requests
CREATE POLICY "Users can view their own sourcing requests" ON public.sourcing_requests
  FOR SELECT USING (auth.uid() = user_id);

-- Policy for creating sourcing requests
CREATE POLICY "Users can create sourcing requests" ON public.sourcing_requests
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy for updating sourcing requests
CREATE POLICY "Users can update their own sourcing requests" ON public.sourcing_requests
  FOR UPDATE USING (auth.uid() = user_id);

-- Trigger to update timestamps
CREATE TRIGGER sourcing_requests_updated_at
  BEFORE UPDATE ON public.sourcing_requests
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

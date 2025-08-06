# TenderFlow Backend Setup with Supabase

This document provides instructions on setting up the Supabase backend for the TenderFlow application.

## Prerequisites

- Supabase account (sign up at [https://supabase.com/](https://supabase.com/))
- Supabase project created

## Setup Instructions

### 1. Set up your Supabase project

1. Go to [https://app.supabase.com/](https://app.supabase.com/) and sign in
2. Create a new project if you haven't already
3. Choose a name, password, and region for your project
4. Wait for the project to be created

### 2. Set up database schema

1. Navigate to the SQL Editor in your Supabase dashboard
2. Copy the contents of `supabase/schema.sql` from this repository
3. Paste the SQL into the editor and run the queries
4. This will create all necessary tables with proper Row Level Security (RLS) policies

### 3. Configure environment variables

1. Copy the `.env.example` file to `.env`
2. Find your Supabase URL and anon key in your Supabase dashboard under Settings > API
3. Update the `.env` file with these values:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Storage setup

The SQL schema already includes commands to create the following storage buckets:

- `avatars`: Public bucket for user profile avatars
- `documents`: Private bucket for sensitive documents

You should configure the storage permissions in the Supabase dashboard:

1. Go to Storage in your Supabase dashboard
2. For each bucket, configure the appropriate RLS policies

## Authentication

TenderFlow uses Supabase Auth with email/password authentication. The system is already set up with the following features:

- User registration
- User login
- Password recovery
- Profile management

## Database Tables

The following tables are created in the schema:

- `profiles`: User profile information
- `tenders`: Tender listings
- `applications`: Tender applications
- `purchase_orders`: Purchase orders
- `po_items`: Purchase order line items
- `sourcing_requests`: Requests for sourcing products

Each table has appropriate RLS policies to ensure data security.

## Row Level Security (RLS)

All tables have RLS enabled with policies that:

- Allow users to view their own data
- Allow users to update their own data
- Prevent users from accessing other users' data
- Allow public access to published tenders

## Testing

You can test the backend functionality by:

1. Running the frontend application
2. Creating a new user account
3. Verifying that you can create and read data
4. Checking that RLS policies prevent unauthorized access

## Troubleshooting

If you encounter issues:

1. Check that your environment variables are set correctly
2. Verify that all SQL commands executed successfully
3. Check the Supabase logs for any errors
4. Ensure that storage buckets are configured correctly

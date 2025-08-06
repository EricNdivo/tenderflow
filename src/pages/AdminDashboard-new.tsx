import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Users, 
  FileText, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  XCircle,
  Eye,
  Edit,
  MessageSquare,
  Filter,
  Search,
  Download,
  Upload,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Timer,
  Wallet,
  Star,
  Activity,
  Bell,
  Settings,
  UserCheck,
  UserX,
  Calendar,
  Building,
  CreditCard,
  Phone,
  Mail,
  MapPin,
  Shield,
  Plus,
  MoreHorizontal,
  Trash2,
  Archive,
  Briefcase
} from "lucide-react";

const AdminDashboard = () => {
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);

  // Admin statistics
  const adminStats = {
    totalApplications: 47,
    pendingReview: 12,
    approved: 18,
    rejected: 5,
    disbursed: 12,
    totalRequested: "KSH 48.7M",
    totalDisbursed: "KSH 22.1M",
    avgProcessingTime: "2.8 days",
    approvalRate: "82%"
  };

  // All applications from users
  const [applications] = useState([
    {
      id: "TF001",
      applicantName: "John Kamau",
      applicantEmail: "john.kamau@email.com",
      companyName: "TechSoft Solutions Ltd",
      type: "Tender Support",
      subType: "Independent SME",
      amount: "KSH 2,500,000",
      status: "Under Review",
      priority: "High",
      submittedDate: "2024-01-15",
      lastUpdated: "2024-01-20",
      documents: 8,
      assignedTo: "Admin Team",
      reviewNotes: "Technical evaluation pending",
      tenderDetails: {
        tenderNumber: "KCB/T/2024/001",
        tenderingEntity: "Kenya Commercial Bank",
        tenderCategory: "ICT Services",
        tenderTitle: "Supply & Installation of Banking Software",
        tenderValue: "KSH 15,000,000",
        submissionDeadline: "2024-02-28",
        evaluationCriteria: "70% Technical, 30% Financial",
        bondRequired: "KSH 150,000 (1%)",
        contractPeriod: "24 months",
        location: "Nairobi, Kenya",
        sector: "Financial Services"
      },
      applicantDetails: {
        phone: "+254 712 345 678",
        location: "Nairobi, Kenya",
        businessCategory: "ICT Services",
        kraPin: "P000123456A",
        registrationNumber: "C.12345/2023"
      }
    },
    {
      id: "TF002",
      applicantName: "Sarah Wanjiku",
      applicantEmail: "sarah.wanjiku@medplus.co.ke",
      companyName: "MedPlus Supplies Ltd",
      type: "PO Support",
      subType: "Partial Funding",
      amount: "KSH 1,200,000",
      status: "Approved",
      priority: "Medium",
      submittedDate: "2024-01-10",
      lastUpdated: "2024-01-18",
      documents: 6,
      assignedTo: "Jane Muthoni",
      reviewNotes: "All documents verified, approved for disbursement",
      tenderDetails: {
        tenderNumber: "MOH/PO/2024/087",
        tenderingEntity: "Ministry of Health",
        tenderCategory: "Medical Supplies",
        tenderTitle: "Supply of Laboratory Equipment",
        tenderValue: "KSH 8,500,000",
        submissionDeadline: "Completed",
        evaluationCriteria: "Technical Compliance",
        bondRequired: "KSH 85,000",
        contractPeriod: "12 months",
        location: "Multiple Counties",
        sector: "Healthcare"
      },
      applicantDetails: {
        phone: "+254 722 987 654",
        location: "Kisumu, Kenya",
        businessCategory: "Medical Supplies",
        kraPin: "P000987654B",
        registrationNumber: "C.98765/2023"
      }
    },
    {
      id: "TF003",
      applicantName: "Peter Ochieng",
      applicantEmail: "peter@roadworks.co.ke",
      companyName: "Highway Construction Ltd",
      type: "Tender Support",
      subType: "Secondary SME",
      amount: "KSH 800,000",
      status: "Pending Documents",
      priority: "Low",
      submittedDate: "2024-01-20",
      lastUpdated: "2024-01-21",
      documents: 4,
      assignedTo: "Michael Otieno",
      reviewNotes: "Missing KYC documents and bank statements",
      tenderDetails: {
        tenderNumber: "KENHA/T/2024/045",
        tenderingEntity: "Kenya National Highways Authority",
        tenderCategory: "Construction Services",
        tenderTitle: "Road Maintenance Services - Subcontract",
        tenderValue: "KSH 5,200,000",
        submissionDeadline: "2024-03-15",
        evaluationCriteria: "50% Technical, 40% Financial, 10% Local Content",
        bondRequired: "KSH 52,000",
        contractPeriod: "18 months",
        location: "Mombasa County",
        sector: "Infrastructure"
      },
      applicantDetails: {
        phone: "+254 733 456 789",
        location: "Mombasa, Kenya",
        businessCategory: "Construction",
        kraPin: "P000456789C",
        registrationNumber: "C.45678/2022"
      }
    },
    {
      id: "TF004",
      applicantName: "Grace Nyong'o",
      applicantEmail: "grace@powertech.co.ke",
      companyName: "PowerTech Solutions Ltd",
      type: "Source & Supply",
      subType: "Procurement",
      amount: "KSH 1,800,000",
      status: "Disbursed",
      priority: "High",
      submittedDate: "2024-01-05",
      lastUpdated: "2024-01-12",
      documents: 9,
      assignedTo: "Alice Mutiso",
      reviewNotes: "Successfully disbursed, contract execution in progress",
      tenderDetails: {
        tenderNumber: "KPLC/SC/2024/012",
        tenderingEntity: "Kenya Power & Lighting Company",
        tenderCategory: "Electrical Supplies",
        tenderTitle: "Supply of Electrical Transformers",
        tenderValue: "KSH 12,000,000",
        submissionDeadline: "Completed",
        evaluationCriteria: "Technical Specifications Met",
        bondRequired: "KSH 120,000",
        contractPeriod: "9 months",
        location: "Nairobi & Central Kenya",
        sector: "Energy & Utilities"
      },
      applicantDetails: {
        phone: "+254 701 234 567",
        location: "Nakuru, Kenya",
        businessCategory: "Electrical Supplies",
        kraPin: "P000234567D",
        registrationNumber: "C.23456/2023"
      }
    },
    {
      id: "TF005",
      applicantName: "David Kiprop",
      applicantEmail: "david@agrisupply.co.ke",
      companyName: "AgriSupply Kenya Ltd",
      type: "Tender Support",
      subType: "Independent SME",
      amount: "KSH 950,000",
      status: "Rejected",
      priority: "Medium",
      submittedDate: "2024-01-12",
      lastUpdated: "2024-01-19",
      documents: 5,
      assignedTo: "Robert Kiprotich",
      reviewNotes: "Insufficient financial capacity, credit score below threshold",
      tenderDetails: {
        tenderNumber: "MOA/T/2024/023",
        tenderingEntity: "Ministry of Agriculture",
        tenderCategory: "Agricultural Supplies",
        tenderTitle: "Supply of Farm Equipment",
        tenderValue: "KSH 7,800,000",
        submissionDeadline: "2024-02-15",
        evaluationCriteria: "60% Technical, 40% Financial",
        bondRequired: "KSH 78,000",
        contractPeriod: "15 months",
        location: "Eldoret, Kenya",
        sector: "Agriculture"
      },
      applicantDetails: {
        phone: "+254 715 678 901",
        location: "Eldoret, Kenya",
        businessCategory: "Agricultural Supplies",
        kraPin: "P000678901E",
        registrationNumber: "C.67890/2023"
      }
    },
    {
      id: "TF006",
      applicantName: "Mary Akinyi",
      applicantEmail: "mary@techsupply.co.ke",
      companyName: "TechSupply Ltd",
      type: "PO Support",
      subType: "Full Funding",
      amount: "KSH 3,200,000",
      status: "Under Review",
      priority: "High",
      submittedDate: "2024-01-18",
      lastUpdated: "2024-01-22",
      documents: 7,
      assignedTo: "Peter Mwangi",
      reviewNotes: "Financial analysis in progress",
      tenderDetails: {
        tenderNumber: "KRA/PO/2024/156",
        tenderingEntity: "Kenya Revenue Authority",
        tenderCategory: "ICT Equipment",
        tenderTitle: "Supply of Computer Hardware",
        tenderValue: "KSH 18,000,000",
        submissionDeadline: "2024-03-01",
        evaluationCriteria: "Technical Specifications",
        bondRequired: "KSH 180,000",
        contractPeriod: "6 months",
        location: "Nairobi, Kenya",
        sector: "Government"
      },
      applicantDetails: {
        phone: "+254 720 345 678",
        location: "Nairobi, Kenya",
        businessCategory: "ICT Equipment",
        kraPin: "P000345678F",
        registrationNumber: "C.34567/2023"
      }
    },
    {
      id: "TF007",
      applicantName: "James Mutua",
      applicantEmail: "james@constructo.co.ke",
      companyName: "Constructo Ltd",
      type: "Source & Supply",
      subType: "Materials",
      amount: "KSH 2,100,000",
      status: "Approved",
      priority: "Medium",
      submittedDate: "2024-01-14",
      lastUpdated: "2024-01-20",
      documents: 8,
      assignedTo: "Grace Wambui",
      reviewNotes: "Approved for materials procurement financing",
      tenderDetails: {
        tenderNumber: "NMS/SS/2024/089",
        tenderingEntity: "Nairobi Metropolitan Services",
        tenderCategory: "Construction Materials",
        tenderTitle: "Supply of Building Materials",
        tenderValue: "KSH 25,000,000",
        submissionDeadline: "2024-02-20",
        evaluationCriteria: "Quality & Price",
        bondRequired: "KSH 250,000",
        contractPeriod: "8 months",
        location: "Nairobi County",
        sector: "Construction"
      },
      applicantDetails: {
        phone: "+254 735 456 789",
        location: "Nairobi, Kenya",
        businessCategory: "Construction Materials",
        kraPin: "P000456789G",
        registrationNumber: "C.45678/2022"
      }
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-green-500 text-white hover:bg-green-600">✓ Approved</Badge>;
      case "Disbursed":
        return <Badge className="bg-blue-500 text-white hover:bg-blue-600">💰 Disbursed</Badge>;
      case "Under Review":
        return <Badge className="bg-amber-500 text-white hover:bg-amber-600">🔄 Under Review</Badge>;
      case "Pending Documents":
        return <Badge className="bg-orange-500 text-white hover:bg-orange-600">📄 Pending Docs</Badge>;
      case "Rejected":
        return <Badge className="bg-red-500 text-white hover:bg-red-600">❌ Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "Disbursed":
        return <Wallet className="h-5 w-5 text-blue-500" />;
      case "Under Review":
        return <Timer className="h-5 w-5 text-amber-500" />;
      case "Pending Documents":
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case "Rejected":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-600 bg-red-50 border-red-200";
      case "Medium": return "text-amber-600 bg-amber-50 border-amber-200";
      case "Low": return "text-green-600 bg-green-50 border-green-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const updateApplicationStatus = (applicationId: string, newStatus: string) => {
    // This would typically make an API call to update the status
    console.log(`Updating application ${applicationId} to ${newStatus}`);
  };

  const ApplicationCard = ({ app, bgGradient, iconBg }: { app: any, bgGradient: string, iconBg: string }) => (
    <Card key={app.id} className={`border hover:shadow-xl transition-all duration-300 ${bgGradient} border-opacity-30`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <div className={`p-3 ${iconBg} rounded-lg shadow-md`}>
              {getStatusIcon(app.status)}
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">{app.id} - {app.applicantName}</h3>
              <p className="text-gray-600 text-sm">{app.companyName} • {app.subType}</p>
              <div className="flex items-center space-x-2 mt-2">
                {getStatusBadge(app.status)}
                <Badge variant="outline" className={`text-xs border ${getPriorityColor(app.priority)}`}>
                  {app.priority} Priority
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-indigo-600 border-indigo-300 hover:bg-indigo-50"
              onClick={() => setSelectedApplication(selectedApplication === app.id ? null : app.id)}
            >
              <Eye className="h-4 w-4 mr-2" />
              {selectedApplication === app.id ? 'Hide Details' : 'View Details'}
            </Button>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Review
            </Button>
            <Button variant="outline" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Amount</p>
            <p className="font-bold text-lg text-gray-900">{app.amount}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Submitted</p>
            <p className="font-semibold text-gray-700">{app.submittedDate}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Assigned To</p>
            <p className="font-semibold text-gray-700">{app.assignedTo}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Documents</p>
            <p className="font-semibold text-gray-700">{app.documents} uploaded</p>
          </div>
        </div>

        {/* Detailed Application View */}
        {selectedApplication === app.id && (
          <div className="border-t border-gray-200 pt-6 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Applicant Details */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                  <UserCheck className="h-4 w-4 mr-2" />
                  Applicant Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-semibold text-gray-900">{app.applicantEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-semibold text-gray-900">{app.applicantDetails.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold text-gray-900">{app.applicantDetails.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">KRA PIN:</span>
                    <span className="font-semibold text-gray-900">{app.applicantDetails.kraPin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reg Number:</span>
                    <span className="font-semibold text-gray-900">{app.applicantDetails.registrationNumber}</span>
                  </div>
                </div>
              </div>

              {/* Tender Details */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-bold text-emerald-900 mb-3 flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Tender Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tender No:</span>
                    <span className="font-semibold text-gray-900">{app.tenderDetails.tenderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Entity:</span>
                    <span className="font-semibold text-gray-900">{app.tenderDetails.tenderingEntity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Value:</span>
                    <span className="font-bold text-emerald-700">{app.tenderDetails.tenderValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sector:</span>
                    <span className="font-semibold text-gray-900">{app.tenderDetails.sector}</span>
                  </div>
                </div>
              </div>

              {/* Review Notes */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-lg border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Review Notes
                </h4>
                <p className="text-sm text-gray-700 mb-3">{app.reviewNotes}</p>
                <div className="space-y-2">
                  <textarea 
                    placeholder="Add review comments..."
                    className="w-full p-2 text-sm border border-amber-200 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    rows={2}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-3 w-3 mr-1" />
                  Download Docs
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="h-3 w-3 mr-1" />
                  Contact
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-600 border-red-300 hover:bg-red-50"
                  onClick={() => updateApplicationStatus(app.id, "Rejected")}
                >
                  <XCircle className="h-3 w-3 mr-1" />
                  Reject
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-amber-600 border-amber-300 hover:bg-amber-50"
                  onClick={() => updateApplicationStatus(app.id, "Pending Documents")}
                >
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Request Docs
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  onClick={() => updateApplicationStatus(app.id, "Approved")}
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Approve
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Admin Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                  <p className="text-gray-600 mt-1">Manage all TenderFlow applications and users</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="border-gray-300">
                <Bell className="h-4 w-4 mr-2" />
                Notifications (5)
              </Button>
              <Button variant="outline" className="border-gray-300">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                <Settings className="h-4 w-4 mr-2" />
                Admin Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Admin Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">Total Applications</CardTitle>
              <FileText className="h-5 w-5 text-white/80" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{applications.length}</div>
              <p className="text-xs text-blue-100">+{Math.floor(applications.length * 0.2)} this week</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-100">Pending Review</CardTitle>
              <Timer className="h-5 w-5 text-white/80" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{applications.filter(app => app.status === "Under Review").length}</div>
              <p className="text-xs text-amber-100">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-100">Approval Rate</CardTitle>
              <TrendingUp className="h-5 w-5 text-white/80" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">
                {Math.round((applications.filter(app => app.status === "Approved" || app.status === "Disbursed").length / applications.length) * 100)}%
              </div>
              <p className="text-xs text-green-100">Above target (80%)</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-indigo-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-100">Total Value</CardTitle>
              <Wallet className="h-5 w-5 text-white/80" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">
                KSH {(applications.reduce((sum, app) => sum + parseFloat(app.amount.replace(/[^\d.]/g, '')), 0) / 1000000).toFixed(1)}M
              </div>
              <p className="text-xs text-purple-100">Total requested</p>
            </CardContent>
          </Card>
        </div>

        {/* Application Type Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-emerald-100">Tender Support</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <FileText className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">
                {applications.filter(app => app.type === "Tender Support").length}
              </div>
              <p className="text-xs text-emerald-100">
                KSH {(applications
                  .filter(app => app.type === "Tender Support")
                  .reduce((total, app) => total + parseFloat(app.amount.replace(/[^\d.]/g, '')), 0) / 1000000).toFixed(1)}M total
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">PO Support</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">
                {applications.filter(app => app.type === "PO Support").length}
              </div>
              <p className="text-xs text-blue-100">
                KSH {(applications
                  .filter(app => app.type === "PO Support")
                  .reduce((total, app) => total + parseFloat(app.amount.replace(/[^\d.]/g, '')), 0) / 1000000).toFixed(1)}M total
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-100">Source & Supply</CardTitle>
              <div className="p-2 bg-white/20 rounded-lg">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">
                {applications.filter(app => app.type === "Source & Supply").length}
              </div>
              <p className="text-xs text-purple-100">
                KSH {(applications
                  .filter(app => app.type === "Source & Supply")
                  .reduce((total, app) => total + parseFloat(app.amount.replace(/[^\d.]/g, '')), 0) / 1000000).toFixed(1)}M total
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Applications by Category */}
        <Tabs defaultValue="tender-support" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white shadow-lg p-1 rounded-xl border h-16">
            <TabsTrigger 
              value="tender-support" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white py-3"
            >
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Tender Support</div>
                  <div className="text-xs opacity-80">
                    {applications.filter(app => app.type === "Tender Support").length} applications
                  </div>
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="po-support" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white py-3"
            >
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">PO Support</div>
                  <div className="text-xs opacity-80">
                    {applications.filter(app => app.type === "PO Support").length} applications
                  </div>
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="source-supply" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white py-3"
            >
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Source & Supply</div>
                  <div className="text-xs opacity-80">
                    {applications.filter(app => app.type === "Source & Supply").length} applications
                  </div>
                </div>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Tender Support Applications */}
          <TabsContent value="tender-support" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                  <CardHeader className="pb-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold flex items-center">
                          <FileText className="h-6 w-6 mr-2" />
                          Tender Support Applications
                        </CardTitle>
                        <CardDescription className="text-emerald-100 mt-1">
                          Independent SME and Secondary SME tender financing
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {applications.filter(app => app.type === "Tender Support").map((app) => (
                      <ApplicationCard 
                        key={app.id} 
                        app={app} 
                        bgGradient="bg-gradient-to-r from-emerald-50/30 to-teal-50/30 border-emerald-300" 
                        iconBg="bg-emerald-100" 
                      />
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Tender Support Sidebar */}
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-emerald-900">Tender Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-emerald-100 rounded-lg">
                        <p className="text-sm text-emerald-700">Average Amount</p>
                        <p className="text-2xl font-bold text-emerald-900">
                          KSH {(applications
                            .filter(app => app.type === "Tender Support")
                            .reduce((sum, app) => sum + parseFloat(app.amount.replace(/[^\d.]/g, '')), 0) / 
                            applications.filter(app => app.type === "Tender Support").length / 1000000
                          ).toFixed(1)}M
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <p className="text-xs text-gray-600">Approved</p>
                          <p className="font-bold text-green-600">
                            {applications.filter(app => app.type === "Tender Support" && (app.status === "Approved" || app.status === "Disbursed")).length}
                          </p>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <p className="text-xs text-gray-600">Pending</p>
                          <p className="font-bold text-amber-600">
                            {applications.filter(app => app.type === "Tender Support" && app.status === "Under Review").length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-gradient-to-r from-emerald-600 to-teal-600">
                      <Plus className="h-4 w-4 mr-2" />
                      New Tender Review
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Export Tender Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* PO Support Applications */}
          <TabsContent value="po-support" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                  <CardHeader className="pb-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold flex items-center">
                          <CreditCard className="h-6 w-6 mr-2" />
                          Purchase Order Support
                        </CardTitle>
                        <CardDescription className="text-blue-100 mt-1">
                          Full funding and partial funding for purchase orders
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {applications.filter(app => app.type === "PO Support").map((app) => (
                      <ApplicationCard 
                        key={app.id} 
                        app={app} 
                        bgGradient="bg-gradient-to-r from-blue-50/30 to-indigo-50/30 border-blue-300" 
                        iconBg="bg-blue-100" 
                      />
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* PO Support Sidebar */}
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-blue-900">PO Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-blue-100 rounded-lg">
                        <p className="text-sm text-blue-700">Average Amount</p>
                        <p className="text-2xl font-bold text-blue-900">
                          KSH {(applications
                            .filter(app => app.type === "PO Support")
                            .reduce((sum, app) => sum + parseFloat(app.amount.replace(/[^\d.]/g, '')), 0) / 
                            Math.max(applications.filter(app => app.type === "PO Support").length, 1) / 1000000
                          ).toFixed(1)}M
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <p className="text-xs text-gray-600">Approved</p>
                          <p className="font-bold text-green-600">
                            {applications.filter(app => app.type === "PO Support" && (app.status === "Approved" || app.status === "Disbursed")).length}
                          </p>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <p className="text-xs text-gray-600">Pending</p>
                          <p className="font-bold text-amber-600">
                            {applications.filter(app => app.type === "PO Support" && app.status === "Under Review").length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-indigo-600">
                      <Plus className="h-4 w-4 mr-2" />
                      New PO Review
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Export PO Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Source & Supply Applications */}
          <TabsContent value="source-supply" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <Card className="border-0 shadow-xl bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                  <CardHeader className="pb-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold flex items-center">
                          <Briefcase className="h-6 w-6 mr-2" />
                          Source & Supply Applications
                        </CardTitle>
                        <CardDescription className="text-purple-100 mt-1">
                          Procurement and materials sourcing financing
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {applications.filter(app => app.type === "Source & Supply").map((app) => (
                      <ApplicationCard 
                        key={app.id} 
                        app={app} 
                        bgGradient="bg-gradient-to-r from-purple-50/30 to-pink-50/30 border-purple-300" 
                        iconBg="bg-purple-100" 
                      />
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Source & Supply Sidebar */}
              <div className="space-y-6">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-purple-900">Supply Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-purple-100 rounded-lg">
                        <p className="text-sm text-purple-700">Average Amount</p>
                        <p className="text-2xl font-bold text-purple-900">
                          KSH {(applications
                            .filter(app => app.type === "Source & Supply")
                            .reduce((sum, app) => sum + parseFloat(app.amount.replace(/[^\d.]/g, '')), 0) / 
                            Math.max(applications.filter(app => app.type === "Source & Supply").length, 1) / 1000000
                          ).toFixed(1)}M
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <p className="text-xs text-gray-600">Approved</p>
                          <p className="font-bold text-green-600">
                            {applications.filter(app => app.type === "Source & Supply" && (app.status === "Approved" || app.status === "Disbursed")).length}
                          </p>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                          <p className="text-xs text-gray-600">Pending</p>
                          <p className="font-bold text-amber-600">
                            {applications.filter(app => app.type === "Source & Supply" && app.status === "Under Review").length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-pink-600">
                      <Plus className="h-4 w-4 mr-2" />
                      New Supply Review
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Export Supply Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

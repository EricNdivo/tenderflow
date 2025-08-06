import { useState } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { useAuthContext } from "../context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  FileText, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Plus, 
  Download,
  Eye,
  TrendingUp,
  Calendar,
  Users,
  BarChart3,
  PieChart,
  Activity,
  Bell,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Briefcase,
  CreditCard,
  Wallet,
  Star,
  MessageSquare,
  Filter,
  Search,
  Upload,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Timer,
  X,
  Save,
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Shield,
  Key,
  Smartphone,
  Globe,
  Camera,
  Edit3
} from "lucide-react";

const Dashboard = () => {
  const { user, profile } = useAuthContext();
  const [expandedApplications, setExpandedApplications] = useState<string[]>([]);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  
  // Get user display name - prefer profile name, fallback to email
  const getUserDisplayName = () => {
    if (profile?.name) return profile.name;
    if (user?.email) {
      // Extract name part from email (before @)
      const emailName = user.email.split('@')[0];
      // Capitalize first letter and replace dots/underscores with spaces
      return emailName.charAt(0).toUpperCase() + emailName.slice(1).replace(/[._]/g, ' ');
    }
    return "User";
  };

  const toggleApplicationDetails = (applicationId: string) => {
    setExpandedApplications(prev => 
      prev.includes(applicationId) 
        ? prev.filter(id => id !== applicationId)
        : [...prev, applicationId]
    );
  };

  const isApplicationExpanded = (applicationId: string) => {
    return expandedApplications.includes(applicationId);
  };

  const [applications] = useState([
    {
      id: "TF001",
      type: "Tender Support",
      subType: "Independent SME",
      amount: "KSH 2,500,000",
      status: "Under Review",
      progress: 85,
      submittedDate: "2024-01-15",
      documents: 8,
      priority: "High",
      estimatedDecision: "2024-02-01",
      fundingType: "Working Capital",
      // Enhanced tender details
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
      financingDetails: {
        requestedAmount: "KSH 2,500,000",
        fundingPurpose: "Performance Bond & Working Capital",
        repaymentPeriod: "18 months",
        interestRate: "12% p.a.",
        securityOffered: "Tender Contract",
        riskAssessment: "Low-Medium"
      }
    },
    {
      id: "TF002", 
      type: "PO Support",
      subType: "Partial Funding",
      amount: "KSH 1,200,000",
      status: "Approved",
      progress: 100,
      submittedDate: "2024-01-10",
      documents: 6,
      priority: "Medium",
      estimatedDecision: "Completed",
      fundingType: "Purchase Order",
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
      financingDetails: {
        requestedAmount: "KSH 1,200,000",
        fundingPurpose: "Purchase Order Financing",
        repaymentPeriod: "6 months",
        interestRate: "10% p.a.",
        securityOffered: "Purchase Order",
        riskAssessment: "Low"
      }
    },
    {
      id: "TF003",
      type: "Tender Support", 
      subType: "Secondary SME",
      amount: "KSH 800,000",
      status: "Pending Documents",
      progress: 45,
      submittedDate: "2024-01-20",
      documents: 4,
      priority: "Low",
      estimatedDecision: "2024-02-15",
      fundingType: "Contract Finance",
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
      financingDetails: {
        requestedAmount: "KSH 800,000",
        fundingPurpose: "Mobilization & Equipment",
        repaymentPeriod: "12 months",
        interestRate: "14% p.a.",
        securityOffered: "Contract & Guarantor",
        riskAssessment: "Medium"
      }
    },
    {
      id: "TF004",
      type: "Source & Supply",
      subType: "Procurement",
      amount: "KSH 1,800,000",
      status: "Disbursed",
      progress: 100,
      submittedDate: "2024-01-05",
      documents: 9,
      priority: "High",
      estimatedDecision: "Completed",
      fundingType: "Supply Chain",
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
      financingDetails: {
        requestedAmount: "KSH 1,800,000",
        fundingPurpose: "Procurement & Logistics",
        repaymentPeriod: "8 months",
        interestRate: "11% p.a.",
        securityOffered: "Supply Contract",
        riskAssessment: "Low"
      }
    }
  ]);

  const [recentActivities] = useState([
    { action: "Document uploaded", description: "KYC documents for TF001", time: "2 hours ago", type: "upload" },
    { action: "Application approved", description: "TF002 has been approved", time: "1 day ago", type: "success" },
    { action: "Review scheduled", description: "TF001 review meeting on Feb 1", time: "2 days ago", type: "calendar" },
    { action: "Payment disbursed", description: "KSH 1,200,000 disbursed for TF002", time: "3 days ago", type: "payment" }
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
        return <Badge className="bg-red-500 text-white hover:bg-red-600">📄 Pending Docs</Badge>;
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
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-600 bg-red-50";
      case "Medium": return "text-amber-600 bg-amber-50";
      case "Low": return "text-green-600 bg-green-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "upload": return <Upload className="h-4 w-4 text-blue-500" />;
      case "success": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "calendar": return <Calendar className="h-4 w-4 text-purple-500" />;
      case "payment": return <CreditCard className="h-4 w-4 text-emerald-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        {}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                  <BarChart3 className="h-8 w-8 text-emerald-600 mr-3" />
                  Dashboard
                </h1>
                <p className="text-gray-600 mt-1">Welcome back, {getUserDisplayName()}! Here's what's happening with your financing applications.</p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" className="border-gray-300">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Application
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-100">Total Applications</CardTitle>
                <div className="p-2 bg-white/20 rounded-lg">
                  <FileText className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">4</div>
                <p className="text-xs text-blue-100 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +25% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-emerald-100">Total Requested</CardTitle>
                <div className="p-2 bg-white/20 rounded-lg">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">KSH 6.3M</div>
                <p className="text-xs text-emerald-100 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Across all applications
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-purple-100">Approved & Disbursed</CardTitle>
                <div className="p-2 bg-white/20 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">2</div>
                <p className="text-xs text-purple-100 flex items-center">
                  <Wallet className="h-3 w-3 mr-1" />
                  KSH 3M disbursed
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-500 to-amber-600 text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-amber-100">Success Rate</CardTitle>
                <div className="p-2 bg-white/20 rounded-lg">
                  <Target className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">95%</div>
                <p className="text-xs text-amber-100 flex items-center">
                  <Star className="h-3 w-3 mr-1" />
                  Industry leading
                </p>
              </CardContent>
            </Card>
          </div>

          {}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                        <Briefcase className="h-6 w-6 text-emerald-600 mr-2" />
                        Your Applications
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        Track and manage your financing applications
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-5 bg-gray-100 p-1 rounded-lg">
                      <TabsTrigger value="all" className="data-[state=active]:bg-white">All (4)</TabsTrigger>
                      <TabsTrigger value="pending" className="data-[state=active]:bg-white">Pending (1)</TabsTrigger>
                      <TabsTrigger value="review" className="data-[state=active]:bg-white">Review (1)</TabsTrigger>
                      <TabsTrigger value="approved" className="data-[state=active]:bg-white">Approved (1)</TabsTrigger>
                      <TabsTrigger value="disbursed" className="data-[state=active]:bg-white">Disbursed (1)</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="all" className="space-y-4 mt-6">
                      {applications.map((app) => (
                        <Card key={app.id} className="border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-start space-x-4">
                                <div className="p-3 bg-emerald-50 rounded-lg">
                                  {getStatusIcon(app.status)}
                                </div>
                                <div>
                                  <h3 className="font-bold text-lg text-gray-900">{app.id} - {app.type}</h3>
                                  <p className="text-gray-600 text-sm">{app.subType} • {app.fundingType}</p>
                                  <div className="flex items-center space-x-2 mt-2">
                                    {getStatusBadge(app.status)}
                                    <Badge variant="outline" className={`text-xs ${getPriorityColor(app.priority)}`}>
                                      {app.priority} Priority
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="text-emerald-600 border-emerald-300 hover:bg-emerald-50"
                                  onClick={() => toggleApplicationDetails(app.id)}
                                >
                                  <Eye className="h-4 w-4 mr-2" />
                                  {isApplicationExpanded(app.id) ? 'Hide Details' : 'View Details'}
                                </Button>
                                <Button variant="outline" size="sm">
                                  <MessageSquare className="h-4 w-4 mr-2" />
                                  Contact
                                </Button>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                              <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Requested Amount</p>
                                <p className="font-bold text-lg text-gray-900">{app.amount}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Submitted</p>
                                <p className="font-semibold text-gray-700">{app.submittedDate}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Documents</p>
                                <p className="font-semibold text-gray-700">{app.documents} uploaded</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Decision Date</p>
                                <p className="font-semibold text-gray-700">{app.estimatedDecision}</p>
                              </div>
                            </div>

                            {/* Comprehensive Tender Information - Only show when expanded */}
                            {isApplicationExpanded(app.id) && (
                              <>
                                {/* Comprehensive Tender Information */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                                  {/* Tender Details */}
                                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                                    <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                                      <FileText className="h-4 w-4 mr-2" />
                                      Tender Information
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Tender Number:</span>
                                        <span className="font-semibold text-gray-900">{app.tenderDetails.tenderNumber}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Entity:</span>
                                        <span className="font-semibold text-gray-900">{app.tenderDetails.tenderingEntity}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Category:</span>
                                        <span className="font-semibold text-gray-900">{app.tenderDetails.tenderCategory}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Sector:</span>
                                        <span className="font-semibold text-gray-900">{app.tenderDetails.sector}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Total Value:</span>
                                        <span className="font-bold text-blue-700">{app.tenderDetails.tenderValue}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Contract Period:</span>
                                        <span className="font-semibold text-gray-900">{app.tenderDetails.contractPeriod}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Location:</span>
                                        <span className="font-semibold text-gray-900">{app.tenderDetails.location}</span>
                                      </div>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-blue-200">
                                      <p className="text-xs font-medium text-blue-800">Title:</p>
                                      <p className="text-sm font-semibold text-gray-900">{app.tenderDetails.tenderTitle}</p>
                                    </div>
                                  </div>

                                  {/* Financing Details */}
                                  <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-lg border border-emerald-200">
                                    <h4 className="font-bold text-emerald-900 mb-3 flex items-center">
                                      <CreditCard className="h-4 w-4 mr-2" />
                                      Financing Details
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Purpose:</span>
                                        <span className="font-semibold text-gray-900">{app.financingDetails.fundingPurpose}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Amount:</span>
                                        <span className="font-bold text-emerald-700">{app.financingDetails.requestedAmount}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Interest Rate:</span>
                                        <span className="font-semibold text-gray-900">{app.financingDetails.interestRate}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Repayment:</span>
                                        <span className="font-semibold text-gray-900">{app.financingDetails.repaymentPeriod}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Security:</span>
                                        <span className="font-semibold text-gray-900">{app.financingDetails.securityOffered}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Risk Level:</span>
                                        <span className={`font-semibold px-2 py-1 rounded text-xs ${
                                          app.financingDetails.riskAssessment === 'Low' ? 'bg-green-100 text-green-800' :
                                          app.financingDetails.riskAssessment === 'Low-Medium' ? 'bg-yellow-100 text-yellow-800' :
                                          app.financingDetails.riskAssessment === 'Medium' ? 'bg-orange-100 text-orange-800' :
                                          'bg-red-100 text-red-800'
                                        }`}>
                                          {app.financingDetails.riskAssessment}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Additional Tender Requirements */}
                                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-4">
                                  <h4 className="font-bold text-amber-900 mb-2 flex items-center">
                                    <AlertTriangle className="h-4 w-4 mr-2" />
                                    Key Requirements
                                  </h4>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                      <span className="text-gray-600">Bond Required:</span>
                                      <p className="font-bold text-amber-700">{app.tenderDetails.bondRequired}</p>
                                    </div>
                                    <div>
                                      <span className="text-gray-600">Submission Deadline:</span>
                                      <p className="font-semibold text-gray-900">{app.tenderDetails.submissionDeadline}</p>
                                    </div>
                                    <div>
                                      <span className="text-gray-600">Evaluation Criteria:</span>
                                      <p className="font-semibold text-gray-900">{app.tenderDetails.evaluationCriteria}</p>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}

                            <div className="mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">Application Progress</span>
                                <span className="text-sm font-bold text-emerald-600">{app.progress}%</span>
                              </div>
                              <Progress value={app.progress} className="h-3 bg-gray-200" />
                            </div>

                            <div className="flex justify-between items-center">
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm" className="text-xs">
                                  <Download className="h-3 w-3 mr-1" />
                                  Download Report
                                </Button>
                                <Button variant="outline" size="sm" className="text-xs">
                                  <Upload className="h-3 w-3 mr-1" />
                                  Upload Docs
                                </Button>
                              </div>
                              <p className="text-xs text-gray-500">Last updated: 2 hours ago</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {}
            <div className="space-y-6">
              {}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                    <Activity className="h-5 w-5 text-emerald-600 mr-2" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Tender Application
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-blue-300 text-blue-600 hover:bg-blue-50">
                    <FileText className="h-4 w-4 mr-2" />
                    New PO Application
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-purple-300 text-purple-600 hover:bg-purple-50">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Source & Supply
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setIsSettingsModalOpen(true)}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Button>
                </CardContent>
              </Card>

              {}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                    <Bell className="h-5 w-5 text-emerald-600 mr-2" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-600 mt-1">{activity.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full text-sm">
                    View All Activity
                  </Button>
                </CardContent>
              </Card>

              {}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                    <PieChart className="h-5 w-5 text-emerald-600 mr-2" />
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-green-800">Approval Rate</p>
                      <p className="text-2xl font-bold text-green-600">95%</p>
                    </div>
                    <div className="text-green-500">
                      <TrendingUp className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-blue-800">Avg. Processing Time</p>
                      <p className="text-2xl font-bold text-blue-600">3.2 days</p>
                    </div>
                    <div className="text-blue-500">
                      <Clock className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-purple-800">Total Funded</p>
                      <p className="text-2xl font-bold text-purple-600">KSH 3M</p>
                    </div>
                    <div className="text-purple-500">
                      <Wallet className="h-8 w-8" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Account Settings Modal */}
      {isSettingsModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Account Settings</h2>
                  <p className="text-emerald-100 text-sm">Manage your profile and preferences</p>
                </div>
              </div>
              <button
                onClick={() => setIsSettingsModalOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Profile Information */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Personal Information */}
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center text-gray-900">
                          <User className="h-5 w-5 text-emerald-600 mr-2" />
                          Personal Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
                            <div className="relative">
                              <input
                                type="text"
                                placeholder={getUserDisplayName()}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                              />
                              <Edit3 className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address</label>
                            <div className="relative">
                              <input
                                type="email"
                                value={user?.email || ''}
                                disabled
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                              />
                              <Mail className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Phone Number</label>
                            <div className="relative">
                              <input
                                type="tel"
                                placeholder="+254 700 000 000"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                              />
                              <Phone className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Location</label>
                            <div className="relative">
                              <input
                                type="text"
                                placeholder="Nairobi, Kenya"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                              />
                              <MapPin className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Business Information */}
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center text-gray-900">
                          <Building className="h-5 w-5 text-emerald-600 mr-2" />
                          Business Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Company Name</label>
                            <input
                              type="text"
                              placeholder="Your Company Ltd"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Registration Number</label>
                            <input
                              type="text"
                              placeholder="C.123456/2023"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Business Category</label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                              <option>Construction</option>
                              <option>ICT Services</option>
                              <option>Medical Supplies</option>
                              <option>General Supplies</option>
                              <option>Professional Services</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">KRA PIN</label>
                            <input
                              type="text"
                              placeholder="P000000000A"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Security Settings */}
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center text-gray-900">
                          <Shield className="h-5 w-5 text-emerald-600 mr-2" />
                          Security & Privacy
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Key className="h-5 w-5 text-gray-600" />
                              <div>
                                <p className="font-medium text-gray-900">Change Password</p>
                                <p className="text-sm text-gray-600">Update your account password</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">Change</Button>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Smartphone className="h-5 w-5 text-gray-600" />
                              <div>
                                <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                                <p className="text-sm text-gray-600">Add an extra layer of security</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">Enable</Button>
                          </div>

                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <Globe className="h-5 w-5 text-gray-600" />
                              <div>
                                <p className="font-medium text-gray-900">Login Sessions</p>
                                <p className="text-sm text-gray-600">Manage active sessions</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">Manage</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Profile Picture & Quick Settings */}
                  <div className="space-y-6">
                    {/* Profile Picture */}
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-center text-gray-900">Profile Picture</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="relative inline-block mb-4">
                          <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                            {getUserDisplayName().charAt(0)}
                          </div>
                          <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg border-2 border-emerald-500 hover:bg-emerald-50 transition-colors">
                            <Camera className="h-4 w-4 text-emerald-600" />
                          </button>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{getUserDisplayName()}</h3>
                        <p className="text-gray-600 text-sm">{user?.email}</p>
                        <Button variant="outline" size="sm" className="mt-3">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload New Photo
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Account Status */}
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-gray-900">Account Status</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Verification Status</span>
                          <Badge className="bg-green-500 text-white">✓ Verified</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Member Since</span>
                          <span className="text-sm font-medium text-gray-900">January 2024</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Account Type</span>
                          <Badge variant="outline" className="text-emerald-600 border-emerald-200">Premium</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Notification Preferences */}
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center text-gray-900">
                          <Bell className="h-5 w-5 text-emerald-600 mr-2" />
                          Notifications
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Email Notifications</span>
                            <input type="checkbox" defaultChecked className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">SMS Alerts</span>
                            <input type="checkbox" className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Application Updates</span>
                            <input type="checkbox" defaultChecked className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Marketing Emails</span>
                            <input type="checkbox" className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setIsSettingsModalOpen(false)}
                    className="px-6"
                  >
                    Cancel
                  </Button>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      className="px-6 text-red-600 border-red-300 hover:bg-red-50"
                    >
                      Delete Account
                    </Button>
                    <Button
                      className="px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default Dashboard;
import { useState } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
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
  Timer
} from "lucide-react";

const Dashboard = () => {
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
      fundingType: "Working Capital"
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
      fundingType: "Purchase Order"
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
      fundingType: "Contract Finance"
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
      fundingType: "Supply Chain"
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
        {/* Enhanced Header */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                  <BarChart3 className="h-8 w-8 text-emerald-600 mr-3" />
                  Dashboard
                </h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your financing applications.</p>
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
          {/* Enhanced Stats Cards */}
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

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Applications Section - Takes 2/3 of space */}
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
                                <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-300 hover:bg-emerald-50">
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Details
                                </Button>
                                <Button variant="outline" size="sm">
                                  <MessageSquare className="h-4 w-4 mr-2" />
                                  Contact
                                </Button>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                              <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Amount</p>
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

            {/* Sidebar - Takes 1/3 of space */}
            <div className="space-y-6">
              {/* Quick Actions */}
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
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Activity */}
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

              {/* Performance Metrics */}
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
      <Footer />
    </>
  );
};

export default Dashboard;
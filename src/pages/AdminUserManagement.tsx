import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Users, 
  UserCheck, 
  UserX, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Building, 
  CreditCard, 
  Shield, 
  Settings, 
  BarChart3, 
  FileText, 
  DollarSign, 
  Clock, 
  TrendingUp, 
  Activity, 
  Bell, 
  Download, 
  Upload, 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  MoreHorizontal,
  Database,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  Key,
  Smartphone
} from "lucide-react";

const AdminUserManagement = () => {
  const [selectedTab, setSelectedTab] = useState("users");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  // Mock user data
  const [users] = useState([
    {
      id: "USR001",
      name: "John Kamau",
      email: "john.kamau@email.com",
      phone: "+254 712 345 678",
      company: "TechSoft Solutions Ltd",
      location: "Nairobi, Kenya",
      joinDate: "2024-01-10",
      lastLogin: "2024-01-20 14:30",
      status: "Active",
      verified: true,
      applications: 3,
      totalRequested: "KSH 4,200,000",
      totalApproved: "KSH 2,500,000",
      successRate: "85%",
      riskLevel: "Low",
      accountType: "Premium"
    },
    {
      id: "USR002", 
      name: "Sarah Wanjiku",
      email: "sarah.wanjiku@medplus.co.ke",
      phone: "+254 722 987 654",
      company: "MedPlus Supplies Ltd",
      location: "Kisumu, Kenya",
      joinDate: "2024-01-08",
      lastLogin: "2024-01-19 09:15",
      status: "Active",
      verified: true,
      applications: 2,
      totalRequested: "KSH 2,800,000",
      totalApproved: "KSH 1,200,000",
      successRate: "100%",
      riskLevel: "Low",
      accountType: "Standard"
    },
    {
      id: "USR003",
      name: "Peter Ochieng",
      email: "peter@roadworks.co.ke", 
      phone: "+254 733 456 789",
      company: "Highway Construction Ltd",
      location: "Mombasa, Kenya",
      joinDate: "2024-01-15",
      lastLogin: "2024-01-21 16:45",
      status: "Pending Verification",
      verified: false,
      applications: 1,
      totalRequested: "KSH 800,000",
      totalApproved: "KSH 0",
      successRate: "0%",
      riskLevel: "Medium",
      accountType: "Basic"
    },
    {
      id: "USR004",
      name: "Grace Nyong'o",
      email: "grace@powertech.co.ke",
      phone: "+254 701 234 567", 
      company: "PowerTech Solutions Ltd",
      location: "Nakuru, Kenya",
      joinDate: "2024-01-05",
      lastLogin: "2024-01-18 11:20",
      status: "Active",
      verified: true,
      applications: 4,
      totalRequested: "KSH 6,500,000",
      totalApproved: "KSH 5,800,000",
      successRate: "92%",
      riskLevel: "Low",
      accountType: "Premium"
    },
    {
      id: "USR005",
      name: "David Kiprop",
      email: "david@agrisupply.co.ke",
      phone: "+254 715 678 901",
      company: "AgriSupply Kenya Ltd", 
      location: "Eldoret, Kenya",
      joinDate: "2024-01-12",
      lastLogin: "2024-01-16 13:30",
      status: "Suspended",
      verified: true,
      applications: 2,
      totalRequested: "KSH 1,500,000",
      totalApproved: "KSH 0",
      successRate: "0%",
      riskLevel: "High",
      accountType: "Basic"
    }
  ]);

  // System metrics
  const systemMetrics = {
    serverUptime: "99.9%",
    databaseHealth: "Optimal",
    activeUsers: 142,
    totalTransactions: 1847,
    systemLoad: "32%",
    storageUsed: "68%",
    networkLatency: "12ms",
    errorRate: "0.02%"
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-500 text-white">✓ Active</Badge>;
      case "Pending Verification":
        return <Badge className="bg-amber-500 text-white">⏳ Pending</Badge>;
      case "Suspended":
        return <Badge className="bg-red-500 text-white">⛔ Suspended</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getRiskBadge = (level: string) => {
    switch (level) {
      case "Low":
        return <Badge className="bg-green-100 text-green-800 border-green-300">Low Risk</Badge>;
      case "Medium":
        return <Badge className="bg-amber-100 text-amber-800 border-amber-300">Medium Risk</Badge>;
      case "High":
        return <Badge className="bg-red-100 text-red-800 border-red-300">High Risk</Badge>;
      default:
        return <Badge variant="outline">{level}</Badge>;
    }
  };

  const getAccountTypeBadge = (type: string) => {
    switch (type) {
      case "Premium":
        return <Badge className="bg-purple-500 text-white">👑 Premium</Badge>;
      case "Standard":
        return <Badge className="bg-blue-500 text-white">⭐ Standard</Badge>;
      case "Basic":
        return <Badge className="bg-gray-500 text-white">Basic</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">System Administration</h1>
                <p className="text-gray-600 mt-1">Manage users, applications, and system settings</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-gray-300">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Admin User
              </Button>
            </div>
          </div>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-lg p-1 rounded-xl border">
            <TabsTrigger value="users" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
              <Users className="h-4 w-4 mr-2" />
              User Management
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
              <Server className="h-4 w-4 mr-2" />
              System Health
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* User Management Tab */}
          <TabsContent value="users" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* User Statistics */}
              <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-sm">Total Users</p>
                        <p className="text-2xl font-bold">{users.length}</p>
                      </div>
                      <Users className="h-8 w-8 text-blue-200" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100 text-sm">Active Users</p>
                        <p className="text-2xl font-bold">{users.filter(u => u.status === "Active").length}</p>
                      </div>
                      <UserCheck className="h-8 w-8 text-green-200" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-amber-100 text-sm">Pending Verification</p>
                        <p className="text-2xl font-bold">{users.filter(u => u.status === "Pending Verification").length}</p>
                      </div>
                      <Clock className="h-8 w-8 text-amber-200" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-pink-500 text-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-red-100 text-sm">Suspended</p>
                        <p className="text-2xl font-bold">{users.filter(u => u.status === "Suspended").length}</p>
                      </div>
                      <UserX className="h-8 w-8 text-red-200" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Users List */}
              <div className="lg:col-span-3">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">User Directory</CardTitle>
                        <CardDescription>Manage all registered users and their accounts</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                        <Button variant="outline" size="sm">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {users.map((user) => (
                      <Card key={user.id} className="border hover:border-indigo-300 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                {user.name.charAt(0)}
                              </div>
                              <div>
                                <h3 className="font-bold text-lg text-gray-900">{user.name}</h3>
                                <p className="text-gray-600 text-sm">{user.company}</p>
                                <div className="flex items-center space-x-2 mt-2">
                                  {getStatusBadge(user.status)}
                                  {getRiskBadge(user.riskLevel)}
                                  {getAccountTypeBadge(user.accountType)}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setSelectedUser(selectedUser === user.id ? null : user.id)}
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                {selectedUser === user.id ? 'Hide' : 'View'}
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                            <div>
                              <p className="text-xs text-gray-500 font-medium">Applications</p>
                              <p className="font-bold text-gray-900">{user.applications}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-medium">Success Rate</p>
                              <p className="font-bold text-gray-900">{user.successRate}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-medium">Total Requested</p>
                              <p className="font-bold text-gray-900">{user.totalRequested}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-medium">Last Login</p>
                              <p className="font-bold text-gray-900">{user.lastLogin}</p>
                            </div>
                          </div>

                          {selectedUser === user.id && (
                            <div className="border-t border-gray-200 pt-6 mt-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                  <h4 className="font-semibold text-gray-900 flex items-center">
                                    <UserCheck className="h-4 w-4 mr-2 text-indigo-600" />
                                    Contact Information
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex items-center space-x-2">
                                      <Mail className="h-4 w-4 text-gray-400" />
                                      <span>{user.email}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Phone className="h-4 w-4 text-gray-400" />
                                      <span>{user.phone}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <MapPin className="h-4 w-4 text-gray-400" />
                                      <span>{user.location}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Calendar className="h-4 w-4 text-gray-400" />
                                      <span>Joined: {user.joinDate}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  <h4 className="font-semibold text-gray-900 flex items-center">
                                    <BarChart3 className="h-4 w-4 mr-2 text-indigo-600" />
                                    Account Metrics
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span>Total Approved:</span>
                                      <span className="font-semibold text-green-600">{user.totalApproved}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Verification Status:</span>
                                      <span className={`font-semibold ${user.verified ? 'text-green-600' : 'text-amber-600'}`}>
                                        {user.verified ? '✓ Verified' : '⏳ Pending'}
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Risk Assessment:</span>
                                      <span className={`font-semibold ${
                                        user.riskLevel === 'Low' ? 'text-green-600' : 
                                        user.riskLevel === 'Medium' ? 'text-amber-600' : 'text-red-600'
                                      }`}>
                                        {user.riskLevel}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* User Actions */}
                              <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200">
                                <div className="flex space-x-2">
                                  <Button variant="outline" size="sm">
                                    <Mail className="h-3 w-3 mr-1" />
                                    Send Email
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <FileText className="h-3 w-3 mr-1" />
                                    View Applications
                                  </Button>
                                </div>
                                <div className="flex space-x-2">
                                  {user.status === "Suspended" ? (
                                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                      <UserCheck className="h-3 w-3 mr-1" />
                                      Reactivate
                                    </Button>
                                  ) : (
                                    <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50">
                                      <UserX className="h-3 w-3 mr-1" />
                                      Suspend
                                    </Button>
                                  )}
                                  <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50">
                                    <Trash2 className="h-3 w-3 mr-1" />
                                    Delete
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* User Actions Sidebar */}
              <div className="space-y-6">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-gradient-to-r from-indigo-600 to-purple-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New User
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Upload className="h-4 w-4 mr-2" />
                      Bulk Import
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Export Users
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Bell className="h-4 w-4 mr-2" />
                      Send Notification
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* System Health Tab */}
          <TabsContent value="system" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* System Metrics */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                      <Server className="h-6 w-6 text-indigo-600 mr-2" />
                      System Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-center space-x-3">
                            <CheckCircle2 className="h-6 w-6 text-green-600" />
                            <div>
                              <p className="font-semibold text-green-800">Server Uptime</p>
                              <p className="text-sm text-green-600">All systems operational</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-green-600">{systemMetrics.serverUptime}</p>
                            <p className="text-xs text-green-500">Last 30 days</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex items-center space-x-3">
                            <Database className="h-6 w-6 text-blue-600" />
                            <div>
                              <p className="font-semibold text-blue-800">Database Health</p>
                              <p className="text-sm text-blue-600">Connected & optimized</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-blue-600">{systemMetrics.databaseHealth}</p>
                            <p className="text-xs text-blue-500">Performance</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <div className="flex items-center space-x-3">
                            <Cpu className="h-6 w-6 text-purple-600" />
                            <div>
                              <p className="font-semibold text-purple-800">System Load</p>
                              <p className="text-sm text-purple-600">CPU & Memory usage</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-purple-600">{systemMetrics.systemLoad}</p>
                            <p className="text-xs text-purple-500">Current load</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                          <div className="flex items-center space-x-3">
                            <Users className="h-6 w-6 text-emerald-600" />
                            <div>
                              <p className="font-semibold text-emerald-800">Active Users</p>
                              <p className="text-sm text-emerald-600">Currently online</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-emerald-600">{systemMetrics.activeUsers}</p>
                            <p className="text-xs text-emerald-500">Live count</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-200">
                          <div className="flex items-center space-x-3">
                            <HardDrive className="h-6 w-6 text-amber-600" />
                            <div>
                              <p className="font-semibold text-amber-800">Storage Used</p>
                              <p className="text-sm text-amber-600">Disk utilization</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-amber-600">{systemMetrics.storageUsed}</p>
                            <p className="text-xs text-amber-500">Of total capacity</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg border border-teal-200">
                          <div className="flex items-center space-x-3">
                            <Wifi className="h-6 w-6 text-teal-600" />
                            <div>
                              <p className="font-semibold text-teal-800">Network Latency</p>
                              <p className="text-sm text-teal-600">Response time</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-teal-600">{systemMetrics.networkLatency}</p>
                            <p className="text-xs text-teal-500">Average</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* System Controls */}
              <div className="space-y-6">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">System Controls</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-gradient-to-r from-green-600 to-emerald-600">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      System Backup
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-blue-300 text-blue-600">
                      <Database className="h-4 w-4 mr-2" />
                      Database Optimize
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-purple-300 text-purple-600">
                      <Activity className="h-4 w-4 mr-2" />
                      Performance Monitor
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-amber-300 text-amber-600">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Maintenance Mode
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">Recent Alerts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-green-800">System Update Completed</p>
                        <p className="text-xs text-green-600">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Database className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">Database Backup Successful</p>
                        <p className="text-xs text-blue-600">6 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-amber-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-amber-800">High Traffic Alert</p>
                        <p className="text-xs text-amber-600">12 hours ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <BarChart3 className="h-6 w-6 text-indigo-600 mr-2" />
                    Platform Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-600">Total Transactions</p>
                        <p className="text-2xl font-bold text-blue-900">{systemMetrics.totalTransactions}</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-600">Success Rate</p>
                        <p className="text-2xl font-bold text-green-900">97.8%</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Processing Speed</span>
                        <span className="font-semibold">Excellent</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <TrendingUp className="h-6 w-6 text-indigo-600 mr-2" />
                    Performance Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-green-800">Application Volume</p>
                        <p className="text-sm text-green-600">↗️ 24% increase</p>
                      </div>
                      <div className="text-2xl font-bold text-green-600">+47</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-blue-800">User Registration</p>
                        <p className="text-sm text-blue-600">↗️ 18% increase</p>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">+23</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-purple-800">Approval Rate</p>
                        <p className="text-sm text-purple-600">↗️ 5% improvement</p>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">82%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Settings className="h-6 w-6 text-indigo-600 mr-2" />
                    System Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">Automatic Backups</p>
                        <p className="text-sm text-gray-600">Daily system backup at 2:00 AM</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">Email Notifications</p>
                        <p className="text-sm text-gray-600">Admin alerts and reports</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">Maintenance Mode</p>
                        <p className="text-sm text-gray-600">System maintenance window</p>
                      </div>
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Shield className="h-6 w-6 text-indigo-600 mr-2" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-600">Required for all admin accounts</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">Session Timeout</p>
                        <p className="text-sm text-gray-600">Auto logout after inactivity</p>
                      </div>
                      <select className="border rounded px-3 py-1">
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">IP Restrictions</p>
                        <p className="text-sm text-gray-600">Limit admin access by IP</p>
                      </div>
                      <input type="checkbox" className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminUserManagement;

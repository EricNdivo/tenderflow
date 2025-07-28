import { useState } from "react";
import Header from "../components/ui/Header";
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
  Eye 
} from "lucide-react";

const Dashboard = () => {
  const [applications] = useState([
    {
      id: "TF001",
      type: "Tender Support",
      subType: "Independent SME",
      amount: "KSH 2,500,000",
      status: "Under Review",
      progress: 65,
      submittedDate: "2024-01-15",
      documents: 8
    },
    {
      id: "TF002", 
      type: "PO Support",
      subType: "Partial Funding",
      amount: "KSH 1,200,000",
      status: "Approved",
      progress: 100,
      submittedDate: "2024-01-10",
      documents: 6
    },
    {
      id: "TF003",
      type: "Tender Support", 
      subType: "Secondary SME",
      amount: "KSH 800,000",
      status: "Pending Documents",
      progress: 30,
      submittedDate: "2024-01-20",
      documents: 4
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge variant="default" className="bg-success text-success-foreground">Approved</Badge>;
      case "Under Review":
        return <Badge variant="secondary">Under Review</Badge>;
      case "Pending Documents":
        return <Badge variant="destructive">Pending Documents</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "Under Review":
        return <Clock className="h-4 w-4 text-accent" />;
      case "Pending Documents":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Manage your financing applications</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Application
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                +1 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Requested</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">KSH 4.5M</div>
              <p className="text-xs text-muted-foreground">
                Across all applications
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">
                KSH 1.2M approved
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                Awaiting review
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Applications Table */}
        <Card>
          <CardHeader>
            <CardTitle>Your Applications</CardTitle>
            <CardDescription>
              Track the status of your financing applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4 mt-6">
                {applications.map((app) => (
                  <Card key={app.id} className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(app.status)}
                          <div>
                            <h3 className="font-semibold">{app.id} - {app.type}</h3>
                            <p className="text-sm text-muted-foreground">{app.subType}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(app.status)}
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Amount</p>
                          <p className="font-semibold">{app.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Submitted</p>
                          <p className="font-semibold">{app.submittedDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Documents</p>
                          <p className="font-semibold">{app.documents} uploaded</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Progress</p>
                          <div className="flex items-center space-x-2">
                            <Progress value={app.progress} className="flex-1" />
                            <span className="text-sm font-medium">{app.progress}%</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download Report
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
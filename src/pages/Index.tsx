
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { TrendingUp, TrendingDown, Users, MessageSquare, Heart, Share2, Eye, Calendar, Download, Filter, RefreshCw } from "lucide-react";

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  
  // Mock data for demonstration
  const overviewStats = [
    { title: "Total Followers", value: "127.3K", change: "+12.3%", trend: "up", icon: Users },
    { title: "Engagement Rate", value: "4.2%", change: "+0.8%", trend: "up", icon: Heart },
    { title: "Total Posts", value: "1,247", change: "+23", trend: "up", icon: MessageSquare },
    { title: "Reach", value: "89.1K", change: "-2.1%", trend: "down", icon: Eye },
  ];

  const engagementData = [
    { name: "Mon", likes: 1200, comments: 89, shares: 45 },
    { name: "Tue", likes: 1450, comments: 102, shares: 67 },
    { name: "Wed", likes: 1680, comments: 134, shares: 89 },
    { name: "Thu", likes: 1320, comments: 95, shares: 52 },
    { name: "Fri", likes: 1890, comments: 167, shares: 98 },
    { name: "Sat", likes: 2100, comments: 189, shares: 112 },
    { name: "Sun", likes: 1750, comments: 145, shares: 87 },
  ];

  const platformData = [
    { name: "Instagram", value: 45, color: "#E1306C" },
    { name: "Twitter", value: 25, color: "#1DA1F2" },
    { name: "LinkedIn", value: 20, color: "#0077B5" },
    { name: "TikTok", value: 10, color: "#000000" },
  ];

  const growthData = [
    { month: "Jan", followers: 98500 },
    { month: "Feb", followers: 103200 },
    { month: "Mar", followers: 108900 },
    { month: "Apr", followers: 115600 },
    { month: "May", followers: 122300 },
    { month: "Jun", followers: 127300 },
  ];

  const topPosts = [
    { id: 1, platform: "Instagram", content: "Summer collection launch", likes: 2845, comments: 67, shares: 123 },
    { id: 2, platform: "Twitter", content: "Behind the scenes video", likes: 1956, comments: 89, shares: 245 },
    { id: 3, platform: "LinkedIn", content: "Industry insights article", likes: 892, comments: 45, shares: 67 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Social Media Dashboard</h1>
              <p className="text-slate-400">Comprehensive analytics and insights</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        {stat.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                        )}
                        <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className="bg-blue-600/20 p-3 rounded-full">
                      <IconComponent className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-slate-800/50 border-slate-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Top Content
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Engagement Chart */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Weekly Engagement</CardTitle>
                  <CardDescription className="text-slate-400">
                    Likes, comments, and shares over the past week
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                      <XAxis dataKey="name" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                        labelStyle={{ color: '#f1f5f9' }}
                      />
                      <Bar dataKey="likes" stackId="a" fill="#3b82f6" />
                      <Bar dataKey="comments" stackId="a" fill="#06b6d4" />
                      <Bar dataKey="shares" stackId="a" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Platform Distribution */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Platform Distribution</CardTitle>
                  <CardDescription className="text-slate-400">
                    Follower distribution across platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Growth Chart */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Follower Growth</CardTitle>
                <CardDescription className="text-slate-400">
                  Total followers growth over the past 6 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                      labelStyle={{ color: '#f1f5f9' }}
                    />
                    <Area type="monotone" dataKey="followers" stroke="#3b82f6" fill="url(#colorGradient)" />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-400" />
                    Audience Demographics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Age 18-24</span>
                      <span className="text-white">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Age 25-34</span>
                      <span className="text-white">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Age 35-44</span>
                      <span className="text-white">18%</span>
                    </div>
                    <Progress value={18} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-400">Age 45+</span>
                      <span className="text-white">5%</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-green-400" />
                    Best Posting Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300">Monday</span>
                    <Badge variant="secondary" className="bg-green-600/20 text-green-400">2-4 PM</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300">Wednesday</span>
                    <Badge variant="secondary" className="bg-green-600/20 text-green-400">10-12 PM</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300">Friday</span>
                    <Badge variant="secondary" className="bg-green-600/20 text-green-400">3-5 PM</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-purple-400" />
                    Trending Hashtags
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400">#marketing</span>
                    <span className="text-slate-400">12.5K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400">#socialmedia</span>
                    <span className="text-slate-400">8.9K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400">#branding</span>
                    <span className="text-slate-400">6.2K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400">#digitalmarketing</span>
                    <span className="text-slate-400">4.7K</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Top Performing Posts</CardTitle>
                <CardDescription className="text-slate-400">
                  Your most engaging content across all platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {post.platform}
                        </Badge>
                        <span className="text-white font-medium">{post.content}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1 text-red-400" />
                          {post.likes.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1 text-blue-400" />
                          {post.comments}
                        </div>
                        <div className="flex items-center">
                          <Share2 className="h-4 w-4 mr-1 text-green-400" />
                          {post.shares}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Automated Reports</CardTitle>
                  <CardDescription className="text-slate-400">
                    Schedule and manage your reporting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Weekly Summary</p>
                      <p className="text-slate-400 text-sm">Every Monday at 9 AM</p>
                    </div>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Monthly Analytics</p>
                      <p className="text-slate-400 text-sm">1st of each month</p>
                    </div>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg">
                    <div>
                      <p className="text-white font-medium">Quarterly Review</p>
                      <p className="text-slate-400 text-sm">Every 3 months</p>
                    </div>
                    <Badge variant="outline" className="border-slate-600 text-slate-400">Paused</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Export Data</CardTitle>
                  <CardDescription className="text-slate-400">
                    Download your analytics data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Download Full Report (PDF)
                  </Button>
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Export Raw Data (CSV)
                  </Button>
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Custom Report Builder
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

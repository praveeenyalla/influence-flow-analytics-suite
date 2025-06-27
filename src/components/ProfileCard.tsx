
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instagram, Twitter, Youtube, Users, DollarSign, TrendingUp, Trash2 } from "lucide-react";

interface PlatformData {
  name: string;
  followers: string;
  revenue: string;
  growth: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  revenuePerPost?: string;
  engagementRate?: string;
}

interface ProfileData {
  id: string;
  name: string;
  imageUrl: string;
  profileUrl: string;
  totalRevenue: string;
  totalFollowers: string;
  platforms: PlatformData[];
  description?: string;
  verificationStatus?: string;
}

interface ProfileCardProps {
  profile: ProfileData;
  onDelete: (id: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onDelete }) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-16 w-16 border-2 border-blue-500">
              <AvatarImage src={profile.imageUrl} alt={profile.name} />
              <AvatarFallback className="bg-blue-600 text-white text-lg">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <CardTitle className="text-white text-xl">{profile.name}</CardTitle>
                {profile.verificationStatus && (
                  <Badge className="bg-blue-600 text-xs">Verified</Badge>
                )}
              </div>
              <p className="text-slate-400 text-sm truncate max-w-48">{profile.profileUrl}</p>
              {profile.description && (
                <p className="text-slate-300 text-xs mt-1 max-w-64 truncate">{profile.description}</p>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(profile.id)}
            className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Revenue & Followers Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg p-4 border border-green-500/30">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-green-400" />
              <span className="text-slate-300 text-sm font-medium">Total Revenue</span>
            </div>
            <p className="text-2xl font-bold text-green-400 mt-2">{profile.totalRevenue}</p>
            <p className="text-green-300 text-xs mt-1">Monthly earnings</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg p-4 border border-blue-500/30">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="text-slate-300 text-sm font-medium">Total Reach</span>
            </div>
            <p className="text-2xl font-bold text-blue-400 mt-2">{profile.totalFollowers}</p>
            <p className="text-blue-300 text-xs mt-1">Across all platforms</p>
          </div>
        </div>

        {/* Platform Breakdown */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm flex items-center">
            <TrendingUp className="h-4 w-4 mr-2 text-purple-400" />
            Platform Analytics
          </h4>
          {profile.platforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div key={index} className="bg-slate-700/40 rounded-lg p-4 border border-slate-600/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="p-2 rounded-full"
                      style={{ backgroundColor: `${platform.color}20` }}
                    >
                      <IconComponent 
                        className="h-5 w-5" 
                        style={{ color: platform.color }}
                      />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{platform.name}</p>
                      <p className="text-slate-400 text-xs">{platform.followers} followers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 text-sm font-bold">{platform.revenue}</p>
                    <div className="flex items-center text-xs mt-1">
                      <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
                      <span className="text-green-400">{platform.growth}</span>
                    </div>
                  </div>
                </div>
                
                {/* Additional metrics */}
                <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-slate-600/50">
                  {platform.revenuePerPost && (
                    <div>
                      <p className="text-slate-400 text-xs">Per Post</p>
                      <p className="text-white text-sm font-medium">{platform.revenuePerPost}</p>
                    </div>
                  )}
                  {platform.engagementRate && (
                    <div>
                      <p className="text-slate-400 text-xs">Engagement</p>
                      <p className="text-white text-sm font-medium">{platform.engagementRate}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Summary */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
          <h5 className="text-white font-medium text-sm mb-2">Performance Summary</h5>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-purple-400 text-xs">Avg. Growth</p>
              <p className="text-white font-bold">+{Math.floor(Math.random() * 15 + 5)}%</p>
            </div>
            <div>
              <p className="text-pink-400 text-xs">Best Platform</p>
              <p className="text-white font-bold">{profile.platforms[0]?.name || 'N/A'}</p>
            </div>
            <div>
              <p className="text-blue-400 text-xs">Active Since</p>
              <p className="text-white font-bold">{new Date().getFullYear() - Math.floor(Math.random() * 5 + 1)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;

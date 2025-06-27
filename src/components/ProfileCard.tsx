
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
}

interface ProfileData {
  id: string;
  name: string;
  imageUrl: string;
  profileUrl: string;
  totalRevenue: string;
  totalFollowers: string;
  platforms: PlatformData[];
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
            <Avatar className="h-12 w-12">
              <AvatarImage src={profile.imageUrl} alt={profile.name} />
              <AvatarFallback className="bg-blue-600 text-white">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-white text-lg">{profile.name}</CardTitle>
              <p className="text-slate-400 text-sm truncate max-w-32">{profile.profileUrl}</p>
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
        {/* Revenue Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-green-400" />
              <span className="text-slate-400 text-sm">Total Revenue</span>
            </div>
            <p className="text-xl font-bold text-white mt-1">{profile.totalRevenue}</p>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-3">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-400" />
              <span className="text-slate-400 text-sm">Total Followers</span>
            </div>
            <p className="text-xl font-bold text-white mt-1">{profile.totalFollowers}</p>
          </div>
        </div>

        {/* Platform Details */}
        <div className="space-y-2">
          <h4 className="text-white font-medium text-sm">Platform Breakdown</h4>
          {profile.platforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div key={index} className="flex items-center justify-between p-2 bg-slate-700/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-1.5 rounded-full" style={{ backgroundColor: `${platform.color}20` }}>
                    <IconComponent className="h-4 w-4" style={{ color: platform.color }} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{platform.name}</p>
                    <p className="text-slate-400 text-xs">{platform.followers} followers</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-400 text-sm font-medium">{platform.revenue}</p>
                  <div className="flex items-center text-xs">
                    <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
                    <span className="text-green-400">{platform.growth}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;

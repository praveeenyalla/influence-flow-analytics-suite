
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, User, Link, DollarSign, Instagram, Twitter, Youtube } from "lucide-react";

interface AddProfileModalProps {
  onAddProfile: (profileData: any) => void;
}

const AddProfileModal: React.FC<AddProfileModalProps> = ({ onAddProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    profileUrl: '',
    imageUrl: ''
  });

  // Enhanced profile data generator with more realistic metrics
  const generateProfileData = (name: string, url: string, imageUrl: string) => {
    const isInfluencer = Math.random() > 0.3; // 70% chance of being an influencer
    const tier = Math.random();
    
    // Determine follower tier (Mega > Macro > Micro > Nano)
    let baseFactor = 1;
    let description = "Content Creator & Influencer";
    
    if (tier > 0.95) { // Mega influencer (5%)
      baseFactor = 50;
      description = "Global Celebrity & Brand Ambassador";
    } else if (tier > 0.8) { // Macro influencer (15%)
      baseFactor = 10;
      description = "Social Media Influencer & Entrepreneur";
    } else if (tier > 0.5) { // Micro influencer (30%)
      baseFactor = 3;
      description = "Content Creator & Brand Partner";
    } else { // Nano influencer (50%)
      baseFactor = 1;
      description = "Rising Content Creator";
    }

    // Generate platform-specific data
    const platforms = [
      {
        name: 'Instagram',
        followers: ((Math.floor(Math.random() * 5000000 * baseFactor) + 100000)).toLocaleString() + 'K',
        revenue: '$' + (Math.floor(Math.random() * 150000 * baseFactor) + 5000).toLocaleString(),
        growth: '+' + (Math.floor(Math.random() * 25) + 8) + '%',
        icon: Instagram,
        color: '#E1306C',
        revenuePerPost: '$' + (Math.floor(Math.random() * 50000 * baseFactor) + 500).toLocaleString(),
        engagementRate: (Math.random() * 8 + 2).toFixed(1) + '%'
      },
      {
        name: 'YouTube',
        followers: ((Math.floor(Math.random() * 8000000 * baseFactor) + 50000)).toLocaleString() + 'K',
        revenue: '$' + (Math.floor(Math.random() * 200000 * baseFactor) + 8000).toLocaleString(),
        growth: '+' + (Math.floor(Math.random() * 20) + 12) + '%',
        icon: Youtube,
        color: '#FF0000',
        revenuePerPost: '$' + (Math.floor(Math.random() * 75000 * baseFactor) + 1000).toLocaleString(),
        engagementRate: (Math.random() * 6 + 4).toFixed(1) + '%'
      },
      {
        name: 'Twitter',
        followers: ((Math.floor(Math.random() * 3000000 * baseFactor) + 25000)).toLocaleString() + 'K',
        revenue: '$' + (Math.floor(Math.random() * 80000 * baseFactor) + 3000).toLocaleString(),
        growth: '+' + (Math.floor(Math.random() * 18) + 5) + '%',
        icon: Twitter,
        color: '#1DA1F2',
        revenuePerPost: '$' + (Math.floor(Math.random() * 25000 * baseFactor) + 200).toLocaleString(),
        engagementRate: (Math.random() * 5 + 1.5).toFixed(1) + '%'
      },
      {
        name: 'TikTok',
        followers: ((Math.floor(Math.random() * 6000000 * baseFactor) + 80000)).toLocaleString() + 'K',
        revenue: '$' + (Math.floor(Math.random() * 120000 * baseFactor) + 4000).toLocaleString(),
        growth: '+' + (Math.floor(Math.random() * 35) + 15) + '%',
        icon: ({ className }: { className?: string }) => <div className={className}>🎵</div>,
        color: '#000000',
        revenuePerPost: '$' + (Math.floor(Math.random() * 40000 * baseFactor) + 300).toLocaleString(),
        engagementRate: (Math.random() * 12 + 6).toFixed(1) + '%'
      }
    ];

    // Calculate totals
    const totalRevenue = platforms.reduce((sum, platform) => {
      return sum + parseInt(platform.revenue.replace(/[$,]/g, ''));
    }, 0);

    const totalFollowers = platforms.reduce((sum, platform) => {
      const followers = parseInt(platform.followers.replace(/[K,]/g, '')) * 1000;
      return sum + followers;
    }, 0);

    return {
      id: Date.now().toString(),
      name: name || 'Profile User',
      imageUrl: imageUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`,
      profileUrl: url,
      totalRevenue: '$' + totalRevenue.toLocaleString(),
      totalFollowers: (totalFollowers / 1000000).toFixed(1) + 'M',
      platforms: platforms,
      description: description,
      verificationStatus: isInfluencer ? 'verified' : undefined
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const profileData = generateProfileData(formData.name, formData.profileUrl, formData.imageUrl);
    onAddProfile(profileData);
    
    setFormData({ name: '', profileUrl: '', imageUrl: '' });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <User className="h-6 w-6 mr-2 text-blue-400" />
            Add New Profile
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="name" className="text-slate-300 font-medium">Profile Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Donald Trump, MrBeast, etc."
              className="bg-slate-700 border-slate-600 text-white mt-1"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="profileUrl" className="text-slate-300 font-medium">Profile URL *</Label>
            <Input
              id="profileUrl"
              value={formData.profileUrl}
              onChange={(e) => setFormData({ ...formData, profileUrl: e.target.value })}
              placeholder="https://instagram.com/username"
              className="bg-slate-700 border-slate-600 text-white mt-1"
              required
            />
            <p className="text-slate-400 text-xs mt-1">
              Enter any social media profile URL (Instagram, YouTube, Twitter, etc.)
            </p>
          </div>
          
          <div>
            <Label htmlFor="imageUrl" className="text-slate-300 font-medium">Profile Image URL</Label>
            <Input
              id="imageUrl"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              placeholder="https://example.com/image.jpg (optional)"
              className="bg-slate-700 border-slate-600 text-white mt-1"
            />
            <p className="text-slate-400 text-xs mt-1">
              Leave empty to auto-generate avatar
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              <DollarSign className="h-4 w-4 mr-2" />
              Analyze Profile
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProfileModal;

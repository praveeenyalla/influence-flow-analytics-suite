
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, User, Link, DollarSign } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate fetching profile data from URL
    const mockProfileData = {
      id: Date.now().toString(),
      name: formData.name || 'Profile User',
      imageUrl: formData.imageUrl || 'https://via.placeholder.com/100',
      profileUrl: formData.profileUrl,
      totalRevenue: '$' + (Math.floor(Math.random() * 500000) + 50000).toLocaleString(),
      totalFollowers: (Math.floor(Math.random() * 10000000) + 100000).toLocaleString() + 'M',
      platforms: [
        {
          name: 'Instagram',
          followers: (Math.floor(Math.random() * 5000000) + 500000).toLocaleString() + 'K',
          revenue: '$' + (Math.floor(Math.random() * 200000) + 20000).toLocaleString(),
          growth: '+' + (Math.floor(Math.random() * 20) + 5) + '%',
          icon: ({ className }: { className?: string }) => <div className={className}>📷</div>,
          color: '#E1306C'
        },
        {
          name: 'Twitter',
          followers: (Math.floor(Math.random() * 3000000) + 200000).toLocaleString() + 'K',
          revenue: '$' + (Math.floor(Math.random() * 100000) + 10000).toLocaleString(),
          growth: '+' + (Math.floor(Math.random() * 15) + 3) + '%',
          icon: ({ className }: { className?: string }) => <div className={className}>🐦</div>,
          color: '#1DA1F2'
        },
        {
          name: 'YouTube',
          followers: (Math.floor(Math.random() * 2000000) + 100000).toLocaleString() + 'K',
          revenue: '$' + (Math.floor(Math.random() * 150000) + 15000).toLocaleString(),
          growth: '+' + (Math.floor(Math.random() * 25) + 8) + '%',
          icon: ({ className }: { className?: string }) => <div className={className}>📺</div>,
          color: '#FF0000'
        },
        {
          name: 'TikTok',
          followers: (Math.floor(Math.random() * 4000000) + 300000).toLocaleString() + 'K',
          revenue: '$' + (Math.floor(Math.random() * 80000) + 8000).toLocaleString(),
          growth: '+' + (Math.floor(Math.random() * 30) + 10) + '%',
          icon: ({ className }: { className?: string }) => <div className={className}>🎵</div>,
          color: '#000000'
        }
      ]
    };

    onAddProfile(mockProfileData);
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
      <DialogContent className="bg-slate-800 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <User className="h-5 w-5 mr-2 text-blue-400" />
            Add New Profile
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-slate-300">Profile Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Donald Trump"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="profileUrl" className="text-slate-300">Profile URL</Label>
            <Input
              id="profileUrl"
              value={formData.profileUrl}
              onChange={(e) => setFormData({ ...formData, profileUrl: e.target.value })}
              placeholder="https://instagram.com/username"
              className="bg-slate-700 border-slate-600 text-white"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="imageUrl" className="text-slate-300">Profile Image URL (Optional)</Label>
            <Input
              id="imageUrl"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className="bg-slate-700 border-slate-600 text-white"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              <DollarSign className="h-4 w-4 mr-2" />
              Add Profile & Fetch Data
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

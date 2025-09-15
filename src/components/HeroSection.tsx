import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footprints, IndianRupee, Smartphone, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm animate-money-float">
            <Footprints className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Walk & <span className="text-primary-glow">Earn</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Turn your daily steps into real money! Earn ₹1 for every 1,500 steps, 
            up to ₹10 per day.
          </p>

          <Button variant="secondary" size="xl" className="shadow-hero">
            <Smartphone className="w-5 h-5" />
            Start Walking & Earning
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 shadow-card transition-smooth hover:bg-white/15">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
                <Footprints className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Track Steps</h3>
              <p className="text-white/80">
                Automatically count your daily steps with our smart tracking system
              </p>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 shadow-card transition-smooth hover:bg-white/15">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
                <IndianRupee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Earn Money</h3>
              <p className="text-white/80">
                Get ₹1 for every 1,500 steps, with up to ₹10 daily earnings
              </p>
            </div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 shadow-card transition-smooth hover:bg-white/15">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">UPI Withdrawal</h3>
              <p className="text-white/80">
                Instantly withdraw your earnings directly to your bank account
              </p>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 border-t border-white/20">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">10,000+</p>
            <p className="text-white/80">Active Walkers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">₹2.5L+</p>
            <p className="text-white/80">Earnings Paid</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">50M+</p>
            <p className="text-white/80">Steps Tracked</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
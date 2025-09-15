import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footprints, IndianRupee, Trophy, Zap } from "lucide-react";

const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [dailyEarnings, setDailyEarnings] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  
  const stepsToNextReward = 1500 - (steps % 1500);
  const rewardsEarnedToday = Math.floor(steps / 1500);
  const maxDailyRewards = 10;
  const progressPercentage = ((steps % 1500) / 1500) * 100;
  
  // Simulate step counting (replace with actual pedometer in production)
  useEffect(() => {
    const interval = setInterval(() => {
      setSteps(prev => {
        const newSteps = prev + Math.floor(Math.random() * 5);
        const newRewards = Math.floor(newSteps / 1500);
        const cappedRewards = Math.min(newRewards, maxDailyRewards);
        setDailyEarnings(cappedRewards);
        return newSteps;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleConvertSteps = () => {
    if (steps >= 1500 && rewardsEarnedToday < maxDailyRewards) {
      setTotalEarnings(prev => prev + 1);
      // In production, show ad here before conversion
      alert("🎉 Congratulations! You earned ₹1!");
    }
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {/* Main Step Counter Card */}
      <Card className="gradient-card p-6 shadow-card transition-smooth hover:shadow-glow">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 animate-step-pulse">
            <Footprints className="w-10 h-10 text-primary" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-foreground">{steps.toLocaleString()}</h2>
            <p className="text-muted-foreground">Steps Today</p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Next Reward</span>
              <span>{stepsToNextReward} steps</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className="gradient-step h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Earnings Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 gradient-card shadow-card">
          <div className="flex items-center space-x-2">
            <IndianRupee className="w-5 h-5 text-earn" />
            <div>
              <p className="text-2xl font-bold text-earn">₹{dailyEarnings}</p>
              <p className="text-xs text-muted-foreground">Today</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 gradient-card shadow-card">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-reward" />
            <div>
              <p className="text-2xl font-bold text-reward">₹{totalEarnings}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Conversion Button */}
      {rewardsEarnedToday < maxDailyRewards && steps >= 1500 && (
        <Button 
          onClick={handleConvertSteps}
          variant="reward"
          size="xl"
          className="w-full animate-reward-celebration"
        >
          <Zap className="w-5 h-5" />
          Convert Steps to ₹1
        </Button>
      )}

      {/* Daily Limit Indicator */}
      <Card className="p-4 gradient-card shadow-card">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Daily Progress</span>
          <span className="text-sm font-medium">
            {rewardsEarnedToday}/{maxDailyRewards} rewards
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mt-2">
          <div 
            className="gradient-reward h-2 rounded-full transition-all duration-500"
            style={{ width: `${(rewardsEarnedToday / maxDailyRewards) * 100}%` }}
          />
        </div>
      </Card>
    </div>
  );
};

export default StepCounter;
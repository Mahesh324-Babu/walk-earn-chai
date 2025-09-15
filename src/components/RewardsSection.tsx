import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Gift, Calendar, TrendingUp } from "lucide-react";

const RewardsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first 1,500 steps",
      reward: "₹1 + ₹5 bonus",
      completed: true,
      icon: Trophy,
    },
    {
      id: 2,
      title: "Daily Walker",
      description: "Walk 7 days in a row",
      reward: "₹25 bonus",
      completed: true,
      icon: Calendar,
    },
    {
      id: 3,
      title: "Step Master",
      description: "Reach 10,000 steps in a day",
      reward: "₹15 bonus",
      completed: false,
      progress: 8450,
      target: 10000,
      icon: Target,
    },
    {
      id: 4,
      title: "Consistency King",
      description: "Walk 30 days in a row",
      reward: "₹100 bonus",
      completed: false,
      progress: 7,
      target: 30,
      icon: Star,
    },
  ];

  const weeklyChallenge = {
    title: "Weekly Challenge",
    description: "Walk 50,000 steps this week",
    progress: 28450,
    target: 50000,
    reward: "₹50 bonus",
    daysLeft: 3,
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Weekly Challenge */}
      <Card className="gradient-card p-6 shadow-card">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">{weeklyChallenge.title}</h3>
            </div>
            <Badge variant="secondary" className="animate-money-float">
              {weeklyChallenge.daysLeft} days left
            </Badge>
          </div>

          <p className="text-muted-foreground">{weeklyChallenge.description}</p>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span className="font-medium">
                {weeklyChallenge.progress.toLocaleString()} / {weeklyChallenge.target.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className="gradient-step h-3 rounded-full transition-all duration-500"
                style={{ width: `${(weeklyChallenge.progress / weeklyChallenge.target) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-reward">{weeklyChallenge.reward}</span>
            <Button variant="hero" size="sm">
              <Gift className="w-4 h-4" />
              Claim Reward
            </Button>
          </div>
        </div>
      </Card>

      {/* Achievements */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Achievements</h3>
        
        <div className="grid gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            const progressPercentage = achievement.progress && achievement.target 
              ? (achievement.progress / achievement.target) * 100 
              : 0;

            return (
              <Card 
                key={achievement.id} 
                className={`p-4 shadow-card transition-smooth hover:shadow-glow ${
                  achievement.completed 
                    ? "gradient-reward border-reward/20" 
                    : "gradient-card"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${
                    achievement.completed 
                      ? "bg-white/20" 
                      : "bg-primary/10"
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      achievement.completed 
                        ? "text-white" 
                        : "text-primary"
                    }`} />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className={`font-bold ${
                          achievement.completed ? "text-white" : "text-foreground"
                        }`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm ${
                          achievement.completed 
                            ? "text-white/80" 
                            : "text-muted-foreground"
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                      <Badge 
                        variant={achievement.completed ? "default" : "secondary"}
                        className={achievement.completed ? "bg-white/20 text-white" : ""}
                      >
                        {achievement.reward}
                      </Badge>
                    </div>

                    {!achievement.completed && achievement.progress && achievement.target && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">
                            {achievement.progress.toLocaleString()} / {achievement.target.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="gradient-step h-2 rounded-full transition-all duration-500"
                            style={{ width: `${progressPercentage}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {achievement.completed && (
                      <Button variant="secondary" size="sm" className="bg-white/20 text-white border-white/20 hover:bg-white/30">
                        <Trophy className="w-4 h-4" />
                        Completed
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Daily Streak */}
      <Card className="gradient-card p-6 shadow-card">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <Star className="w-8 h-8 text-primary animate-step-pulse" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-primary">7 Days</h3>
            <p className="text-muted-foreground">Current Streak</p>
          </div>

          <p className="text-sm text-muted-foreground">
            Keep walking daily to maintain your streak and unlock bonus rewards!
          </p>
        </div>
      </Card>
    </div>
  );
};

export default RewardsSection;
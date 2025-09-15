import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Footprints, Wallet, Trophy, Menu, X } from "lucide-react";

interface AppNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const AppNavigation = ({ activeSection, setActiveSection }: AppNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "steps", label: "Steps", icon: Footprints },
    { id: "wallet", label: "Wallet", icon: Wallet },
    { id: "rewards", label: "Rewards", icon: Trophy },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-50 bg-background border-b border-border shadow-card">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold gradient-hero bg-clip-text text-transparent">
            Walk & Earn
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-card">
            <div className="grid grid-cols-2 gap-2 p-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col h-16 gap-1"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs">{item.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 min-h-screen border-r border-border bg-background/50 backdrop-blur-sm">
        <div className="p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              Walk & Earn
            </h1>
            <p className="text-sm text-muted-foreground">Fitness Rewards App</p>
          </div>

          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => setActiveSection(item.id)}
                  className="w-full justify-start gap-3 h-12 transition-smooth"
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          {/* Quick Stats Card */}
          <Card className="p-4 gradient-card shadow-card">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Today's Progress</p>
              <div className="space-y-1">
                <p className="text-lg font-bold text-primary">8,450 steps</p>
                <p className="text-sm text-earn">₹5 earned</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-card z-50">
        <div className="grid grid-cols-4 gap-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => setActiveSection(item.id)}
                className={`h-16 rounded-none flex flex-col gap-1 ${
                  activeSection === item.id ? "text-primary bg-primary/10" : ""
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AppNavigation;
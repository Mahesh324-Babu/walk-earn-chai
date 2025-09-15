import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import StepCounter from "@/components/StepCounter";
import WithdrawalSection from "@/components/WithdrawalSection";
import RewardsSection from "@/components/RewardsSection";
import AppNavigation from "@/components/AppNavigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection />;
      case "steps":
        return (
          <div className="p-4 pt-8 pb-20">
            <h2 className="text-2xl font-bold text-center mb-6">Step Tracker</h2>
            <StepCounter />
          </div>
        );
      case "wallet":
        return (
          <div className="p-4 pt-8 pb-20">
            <h2 className="text-2xl font-bold text-center mb-6">Wallet</h2>
            <WithdrawalSection />
          </div>
        );
      case "rewards":
        return (
          <div className="p-4 pt-8 pb-20">
            <h2 className="text-2xl font-bold text-center mb-6">Rewards & Achievements</h2>
            <RewardsSection />
          </div>
        );
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="md:flex">
        <AppNavigation 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;

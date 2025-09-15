import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, IndianRupee, Send, Shield } from "lucide-react";

const WithdrawalSection = () => {
  const [upiId, setUpiId] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const availableBalance = 47; // Mock balance

  const handleWithdraw = () => {
    if (!upiId || !withdrawAmount) {
      alert("Please enter UPI ID and amount");
      return;
    }
    
    const amount = parseFloat(withdrawAmount);
    if (amount < 10) {
      alert("Minimum withdrawal amount is ₹10");
      return;
    }
    
    if (amount > availableBalance) {
      alert("Insufficient balance");
      return;
    }

    // In production, process UPI transfer here
    alert(`₹${amount} withdrawal initiated to ${upiId}`);
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      {/* Balance Card */}
      <Card className="gradient-card p-6 shadow-card">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-earn/10">
            <IndianRupee className="w-8 h-8 text-earn" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-earn animate-money-float">
              ₹{availableBalance}
            </h2>
            <p className="text-muted-foreground">Available Balance</p>
          </div>
        </div>
      </Card>

      {/* Withdrawal Form */}
      <Card className="gradient-card p-6 shadow-card">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold">Withdraw Earnings</h3>
            <p className="text-sm text-muted-foreground">
              Minimum withdrawal: ₹10
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="upi">UPI ID</Label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="upi"
                  placeholder="yourname@paytm"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="amount"
                  type="number"
                  placeholder="10"
                  min="10"
                  max={availableBalance}
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Button 
              onClick={handleWithdraw}
              variant="earn"
              size="lg"
              className="w-full"
            >
              <Send className="w-4 h-4" />
              Withdraw to UPI
            </Button>
          </div>

          {/* Quick Amount Buttons */}
          <div className="flex gap-2">
            {[10, 25, 50].map((amount) => (
              <Button
                key={amount}
                variant="outline"
                size="sm"
                onClick={() => setWithdrawAmount(amount.toString())}
                disabled={amount > availableBalance}
                className="flex-1"
              >
                ₹{amount}
              </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* Security Info */}
      <Card className="p-4 bg-muted/50 border-muted">
        <div className="flex items-start space-x-3">
          <Shield className="w-5 h-5 text-primary mt-0.5" />
          <div className="text-sm">
            <p className="font-medium">Secure Transactions</p>
            <p className="text-muted-foreground">
              All withdrawals are processed securely through UPI. 
              Processing time: 1-2 minutes.
            </p>
          </div>
        </div>
      </Card>

      {/* Recent Transactions */}
      <Card className="gradient-card p-4 shadow-card">
        <h4 className="font-medium mb-3">Recent Withdrawals</h4>
        <div className="space-y-2">
          {[
            { amount: 25, date: "Today", status: "Completed" },
            { amount: 15, date: "Yesterday", status: "Completed" },
            { amount: 30, date: "2 days ago", status: "Completed" },
          ].map((transaction, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-muted/20 last:border-0">
              <div>
                <p className="font-medium">₹{transaction.amount}</p>
                <p className="text-xs text-muted-foreground">{transaction.date}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success">
                {transaction.status}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default WithdrawalSection;
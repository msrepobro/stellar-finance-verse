
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CreditCard, Shield, Wallet } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white flex flex-col">
      <header className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#9b87f5]">Snipiverse</div>
        <nav>
          <Link to="/login" className="mr-4 hover:text-[#9b87f5]">Login</Link>
          <Link to="/signup" className="hover:text-[#9b87f5]">Sign Up</Link>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Your <span className="text-[#9b87f5]">Secure</span> Banking Solution
          </h1>
          <p className="text-xl text-gray-300">
            Modern, multi-chain banking with top-tier security and seamless blockchain integration.
          </p>
          <div className="flex space-x-4">
            <Button 
              variant="default" 
              className="bg-[#9b87f5] hover:bg-[#8a76e3] text-white"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#2A303C] p-6 rounded-xl text-center">
            <CreditCard className="mx-auto mb-4 text-[#9b87f5]" size={48} />
            <h3 className="font-bold">Multi-Chain</h3>
            <p className="text-sm text-gray-400">Ethereum, Solana, Secret Network</p>
          </div>
          <div className="bg-[#2A303C] p-6 rounded-xl text-center">
            <Shield className="mx-auto mb-4 text-[#9b87f5]" size={48} />
            <h3 className="font-bold">Secure</h3>
            <p className="text-sm text-gray-400">End-to-End Encryption</p>
          </div>
          <div className="bg-[#2A303C] p-6 rounded-xl text-center col-span-2">
            <Wallet className="mx-auto mb-4 text-[#9b87f5]" size={48} />
            <h3 className="font-bold">Comprehensive Banking</h3>
            <p className="text-sm text-gray-400">Manage All Your Assets in One Place</p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-8 text-center text-gray-400">
        © 2025 Snipiverse Banking Haven. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Index;

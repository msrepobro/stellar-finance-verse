
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#2A303C] p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <Input 
            type="email" 
            placeholder="Email" 
            className="bg-[#1A1F2C] border-[#9b87f5]/30 text-white" 
          />
          <Input 
            type="password" 
            placeholder="Password" 
            className="bg-[#1A1F2C] border-[#9b87f5]/30 text-white" 
          />
          <Button 
            className="w-full bg-[#9b87f5] hover:bg-[#8a76e3]"
          >
            Sign In
          </Button>
        </form>
        <div className="text-center mt-4 text-gray-400">
          Don't have an account? {" "}
          <Link to="/signup" className="text-[#9b87f5] hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

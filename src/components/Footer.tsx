
import React from 'react';
import { Shield, FileText, RefreshCw } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zerobox-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-montserrat font-bold gradient-text">
              ZeroBox Startup
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The secret business model that's changing lives across India. 
              No inventory, no office, just pure profit potential.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-neon-green" />
              <span>100% Secure & Trusted</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-montserrat font-semibold text-off-white">
              Important Links
            </h4>
            <div className="space-y-2">
              <a href="/privacy-policy" className="block text-gray-400 hover:text-neon-green transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="block text-gray-400 hover:text-neon-green transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center space-x-8 space-y-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-neon-green" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <FileText className="w-4 h-4 text-zerobox-yellow" />
              <span>Privacy Protected</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <RefreshCw className="w-4 h-4 text-neon-green" />
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ZeroBox Startup. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This product is not affiliated with any government organization. 
            Results may vary based on individual effort and implementation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

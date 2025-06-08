import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white w-full py-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold leading-relaxed mb-8">tuBanco</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Products */}
          <div className="flex flex-col space-y-3">
            <h2 className="font-semibold text-lg mb-2">Products</h2>
            <Link 
              href="/checking-account" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Checking Account
            </Link>
            <Link 
              href="/savings-account" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Savings Account
            </Link>
            <Link 
              href="/debit-card" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Debit Card
            </Link>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-3">
            <h2 className="font-semibold text-lg mb-2">Services</h2>
            <Link 
              href="/online-banking" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Online Banking
            </Link>
            <Link 
              href="/mobile-app" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Mobile App
            </Link>
            <Link 
              href="/loans" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Loans
            </Link>
          </div>

          {/* Support */}
          <div className="flex flex-col space-y-3">
            <h2 className="font-semibold text-lg mb-2">Support</h2>
            <Link 
              href="/help-center" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Help Center
            </Link>
            <Link 
              href="/contact-us" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link 
              href="/faqs" 
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              FAQs
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="text-center text-gray-500 text-sm">
            © {year} tuBanco. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
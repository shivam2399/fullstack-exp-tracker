'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const userData = localStorage.getItem('user');
    
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (user) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex flex-col items-center justify-center p-8">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">{user.name}</span>!
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Ready to track your expenses? Let's get started with managing your finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Go to Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl shadow-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200 font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Logout
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expense Tracker</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Take control of your finances with our simple and intuitive expense tracking application. 
          Monitor your spending, set budgets, and achieve your financial goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/login" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Sign In
          </Link>
          <Link 
            href="/signup" 
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}

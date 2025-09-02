import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to Expense Tracker</h1>
      <p className="text-lg text-gray-700 max-w-md text-center">
        Track your expenses easily. Please login or sign up to continue.
      </p>
      <div className="flex space-x-4">
        <Link 
          href="/login" 
          className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link 
          href="/signup" 
          className="px-6 py-3 bg-green-600 text-white rounded shadow hover:bg-green-700 transition"
        >
          Sign Up
        </Link>
      </div>
    </main>
  );
}

import AuthForm from "../../../components/AuthForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join us and start tracking your expenses</p>
        </div>
        <AuthForm type="signup" />
      </div>
    </div>
  );
}

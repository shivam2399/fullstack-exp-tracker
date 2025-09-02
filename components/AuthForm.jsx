'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm({ type }) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Add API call logic here for login/signup
  }

  // Toggle the form between login and signup
  function toggleForm() {
    if (type === "login") {
      router.push("/signup");
    } else {
      router.push("/login");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded shadow-md w-full max-w-md space-y-6"
    >
      <h2 className="text-3xl font-semibold text-center">
        {type === "login" ? "Sign In" : "Sign Up"}
      </h2>

      {type === "signup" && (
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
      >
        {type === "login" ? "Sign In" : "Sign Up"}
      </button>

      <button
        type="button"
        onClick={toggleForm}
        className="w-full py-3 text-center text-blue-600 underline hover:text-blue-700 transition"
      >
        {type === "login"
          ? "New user? Sign Up"
          : "Already have an account? Sign In"}
      </button>

      {error && <p className="text-red-500 text-center">{error}</p>}
    </form>
  );
}

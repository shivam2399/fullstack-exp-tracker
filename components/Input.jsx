// components/Input.jsx
import React from 'react';

export default function Input({ label, type = "text", name, placeholder, value, onChange, required = false }) {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

import React, { useState } from 'react'

const FormGroup = ({ label, placeholder, type = "text", value, onChange, name }) => {
  const [focused, setFocused] = useState(false)

  return (
    <div className="mb-5">
      <label className={`block text-xs font-semibold tracking-widest uppercase mb-2 transition-colors duration-200 ${focused ? 'text-indigo-400' : 'text-gray-500'}`}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-gray-100 text-sm placeholder-neutral-600 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
      />
    </div>
  )
}

export default FormGroup
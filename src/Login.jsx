import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  // 1) validate the inputs
  const validate = () => {
    const newErrors = {};

    if (!formData.userName.trim()) {
      newErrors.userName = 'Enter a username';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be more than 6 characters';
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Enter a valid e-mail';
    }

    return newErrors;
  };

  // 2) update state when typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3) submit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully 🎉');
      console.log(formData);
      setErrors({});              // clear old errors
      // optional: clear the form
      // setFormData({ userName: '', password: '', email: '' });
    } else {
      setErrors(newErrors);       // show the red messages
    }
  };

  // 4) the UI
  return (
    <div className="flex items-center justify-center w-full h-full bg-white p-4 rounded">
      <div className="w-1/2">
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label>UserName</label>
            <input
              name="userName"
              type="text"
              placeholder="Enter your username"
              value={formData.userName}
              onChange={handleChange}
              className="w-full"
             
            />
            {errors.userName && <p style={{ color: 'red' }}>{errors.userName}</p>}
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your e-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full"

            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="******"
              value={formData.password}
              onChange={handleChange}
              className="w-full"
          
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>

          <button type="submit" className="bg-blue-950 mt-6 py-2 text-white rounded px-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import FireComponent from "../components/Fire";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    number: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: 'Lecteur' // Default role
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen bg-[#050829] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
        {/* Fire Component - positioned absolutely behind content */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
            <FireComponent />
        </div>
        
        {/* Content container with higher z-index */}
        <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Register Form
            </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/10 backdrop-blur-sm py-8 px-4 shadow-xl shadow-indigo-500/10 border border-white/20 rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300/30 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/5 text-white hover:bg-white/10 transition duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="number" className="block text-sm font-medium text-white">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="number"
                  name="number"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="Enter your phone number"
                  value={formData.number}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300/30 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/5 text-white hover:bg-white/10 transition duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300/30 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/5 text-white hover:bg-white/10 transition duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300/30 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/5 text-white hover:bg-white/10 transition duration-200 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300/30 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/5 text-white hover:bg-white/10 transition duration-200 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-white">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full pl-4 pr-10 py-3 text-base border-gray-300/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/5 text-white rounded-lg hover:bg-white/10 transition duration-200"
              >
                <option className="bg-gray-700 text-white" value="Admin">Admin</option>
                <option className="bg-gray-700 text-white" value="Controleur">Controleur</option>
                <option className="bg-gray-700 text-white" value="Lecteur">Lecteur</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 hover:shadow-indigo-500/30"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
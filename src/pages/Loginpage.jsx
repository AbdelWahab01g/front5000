import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { Eye, EyeOff } from 'lucide-react';
import bgImage from '../imgs/background0.jpeg';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    console.log('Tentative de connexion avec :', username);
    setError('');
    
    // Ajouter ici la logique d'authentification
  };

  return (
    <>
      {/* Import Google Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />

      <div 
        className="flex items-center justify-center w-full h-screen bg-cover bg-center p-4"
        style={{ 
            backgroundImage: `url(${bgImage})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
            >
        
        {/* Animation sur la div de connexion */}
        <motion.div 
          className="w-[610px] h-[705px] relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Background Blur Box */}
          <div className="w-[610px] h-[705px] absolute bg-opacity-8 rounded-[31px] shadow-[4px_9px_50px_0px_rgba(0,0,0,0.25)] border-2 border-white backdrop-blur-[16px]" />

          {/* Title */}
          <div className="absolute left-[209px] top-[73px] text-red-600 text-5xl font-semibold">
            Log in
          </div>

          {/* Form */}
          <form onSubmit={handleLogin}>
            {/* Username Input */}
            <div className="absolute left-[70px] top-[214px] w-[470px] h-20 bg-white rounded-[10px]">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-full bg-transparent px-4 text-slate-800 text-2xl font-normal outline-none"
                autoComplete="username"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              />
            </div>

            {/* Password Input */}
            <div className="absolute left-[70px] top-[332px] w-[470px] h-20 bg-white rounded-[10px] flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-full bg-transparent px-4 text-slate-800 text-2xl font-normal outline-none"
                autoComplete="current-password"
                style={{ fontFamily: 'Rubik, sans-serif' }}
              />
              {/* Eye Icon */}
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-600 hover:text-gray-800"
              >
                {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <p className="absolute left-[70px] top-[420px] text-red-500 text-lg" style={{ fontFamily: 'Rubik, sans-serif' }}>
                {error}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="absolute left-[70px] top-[463px] w-[470px] h-20 bg-red-600 rounded-[10px] text-white text-3xl font-medium hover:bg-red-700 transition"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              Login
            </button>
          </form>

          {/* Forget Password Link */}
          <a href="#" className="absolute left-[70px] top-[594px] text-rose-600 text-2xl font-medium cursor-pointer hover:underline" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Forget Password?
          </a>
        </motion.div>
      </div>
    </>
  );
}

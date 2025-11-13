import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';

const Header: React.FC = () => {
  const { session } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="py-8 text-center relative">
      <h1 className="text-4xl font-bold text-gray-800">
        ADHD 습관 도우미
      </h1>
      <p className="text-lg text-gray-500 mt-2">
        차근차근, 하나씩 습관을 만들어가요.
      </p>
      {session && (
        <div className="absolute top-4 right-4 text-sm text-right">
            <p className="text-gray-600 mb-2">환영합니다, {session.user.email}</p>
            <button 
                onClick={handleLogout}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md"
            >
                로그아웃
            </button>
        </div>
      )}
    </header>
  );
};

export default Header;
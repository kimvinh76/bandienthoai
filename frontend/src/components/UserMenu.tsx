"use client";

import React, { useEffect, useState } from 'react';
import { authService, getAuthToken, clearAuthToken } from '../services/authService';
import { useRouter } from 'next/navigation';

export default function UserMenu() {
  const [user, setUser] = useState<{ name?: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    if (!token) return;
    let mounted = true;
    authService.getMe()
      .then((data) => {
        if (mounted) setUser(data || null);
      })
      .catch(() => {
        setUser(null);
      });
    const onAuthChanged = () => {
      const t = getAuthToken();
      if (!t) { setUser(null); return; }
      authService.getMe().then(d => setUser(d || null)).catch(() => setUser(null));
    };
    window.addEventListener('authChanged', onAuthChanged);
    return () => { mounted = false; window.removeEventListener('authChanged', onAuthChanged); };
  }, []);

  function handleLogout() {
    if (typeof window !== 'undefined') {
      clearAuthToken();
    }
    setUser(null);
    router.push('/auth/login');
  }

  if (!user) {
    return (
      <div className="flex items-center gap-4">
        <a href="/auth/login" className="text-sm text-blue-600">Login</a>
        <a href="/auth/register" className="text-sm text-gray-700">Register</a>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm">Hello, {user.name}</span>
      <button onClick={handleLogout} className="text-sm text-red-600">Logout</button>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { authService, saveAuthToken } from '../../../services/authService';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '', address: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await authService.register(form);
      if (res && res.token) {
        saveAuthToken(res.token);
        router.push('/');
      }
    } catch (err: any) {
      setError(err?.message || 'Đăng ký thất bại');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Đăng ký</h2>
      {error && <div className="text-red-500 mb-3">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Tên" value={form.name} onChange={handleChange} className="w-full border p-2" />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full border p-2" />
        <input type="password" name="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} className="w-full border p-2" />
        <input name="phone" placeholder="Số điện thoại" value={form.phone} onChange={handleChange} className="w-full border p-2" />
        <textarea name="address" placeholder="Địa chỉ" value={form.address} onChange={handleChange} className="w-full border p-2" />
        <div className="flex justify-end">
          <button type="submit" disabled={loading} className="bg-indigo-600 text-white px-4 py-2 rounded">
            {loading ? 'Đang xử lý...' : 'Đăng ký'}
          </button>
        </div>
      </form>
    </div>
  );
}

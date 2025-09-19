"use client";

import React, { useState } from 'react';
import UserList from '../../components/UserList';
import UserForm from '../../components/UserForm';
import { User } from '../../types/User';

export default function AdminUsersPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAddUser = () => {
    setEditingUser(undefined);
    setShowForm(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingUser(undefined);
    setRefreshKey(prev => prev + 1);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingUser(undefined);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin - Quản lý Users</h1>
        <button onClick={handleAddUser} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Thêm User Mới</button>
      </div>

      {showForm ? (
        <UserForm user={editingUser} onSuccess={handleFormSuccess} onCancel={handleFormCancel} />
      ) : (
        <UserList key={refreshKey} onEditUser={handleEditUser} />
      )}
    </div>
  );
}

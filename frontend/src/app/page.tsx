'use client'

import React from 'react'

export default function BuyerHome() {
  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold">Welcome to Phone Store</h1>
        <p className="mt-4 text-gray-600">Browse phones, login to purchase, or register for an account.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/shop" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Shop</a>
        </div>
      </div>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-2">Featured</h2>
        <p className="text-gray-600">We'll show featured phones here (placeholder).</p>
      </section>
    </div>
  )
}
import React from 'react'
import '../globals.css'

export const metadata = {
  title: 'Admin - Phone Store'
}

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <h1 className="text-lg font-semibold">Admin Dashboard</h1>
                <nav className="flex items-center gap-4">
                  <a href="/admin" className="text-sm text-gray-700">Users</a>
                  <a href="/admin/products" className="text-sm text-gray-700">Products</a>
                </nav>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

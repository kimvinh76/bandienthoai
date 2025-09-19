import type { Metadata } from 'next'
import './globals.css'
import UserMenu from '../components/UserMenu'

export const metadata: Metadata = {
  title: 'User Management - Next.js + Spring Boot',
  description: 'Ứng dụng quản lý user sử dụng Next.js frontend và Spring Boot backend',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-6">
                    <a href="/" className="text-xl font-bold text-gray-900">Phone Store</a>
                    <nav className="flex items-center gap-4">
                      <a href="/" className="text-sm text-gray-700 hover:text-gray-900">Home</a>
                      <a href="/shop" className="text-sm text-gray-700 hover:text-gray-900">Shop</a>
                    </nav>
                  </div>
                  <div className="flex items-center gap-4">
                    <UserMenu />
                  </div>
                </div>
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
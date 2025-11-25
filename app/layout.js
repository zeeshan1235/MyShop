import './globals.css';

// This is the structure for the entire website, including navigation and footer
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          {/* Menu/Logo Placeholder */}
          <h1 className="text-2xl font-bold text-gray-800">MyShop</h1>
          <div className="text-sm text-gray-500">
            {/* Navigation links will go here later */}
          </div>
        </nav>
        <main className="min-h-screen bg-gray-50 pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}

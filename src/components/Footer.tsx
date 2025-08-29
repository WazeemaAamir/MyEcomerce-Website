export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo / Brand */}
        <div className="text-gray-700 font-bold text-lg">
          MyStore
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs sm:text-sm text-center">
          © {new Date().getFullYear()} MyStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

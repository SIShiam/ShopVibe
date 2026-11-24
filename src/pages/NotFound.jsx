import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-xl border border-neutral-200 p-8 sm:p-10 text-center">
        
        <div className="text-xs font-mono text-neutral-400 mb-2">
          ERROR // 404
        </div>

        <h1 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-2">
          Page not found
        </h1>

        <p className="text-xs sm:text-sm text-neutral-500 mb-6 leading-relaxed">
          The requested URL does not match any route in the application. Please navigate to the catalog.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <Link
            to="/products"
            className="w-full sm:w-auto h-9 px-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Browse product catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to="/"
            className="w-full sm:w-auto h-9 px-4 border border-neutral-200 hover:bg-neutral-50 text-neutral-700 rounded-lg text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

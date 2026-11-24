import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-md border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand / Logo */}
          <Link to="/products" className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded bg-neutral-900 text-white flex items-center justify-center font-mono text-[11px] font-medium tracking-tight">
              SV
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-semibold tracking-tight text-neutral-900">
                ShopVibe
              </span>
              <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
                Archive // Vol. 01
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`
              }
            >
              Catalog
              <span className="ml-1.5 text-[10px] font-mono text-neutral-400">
                12
              </span>
            </NavLink>

            <Link
              to="/products/1"
              className="text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-1"
            >
              <span>Featured unit</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </Link>

            <div className="h-3 w-px bg-neutral-200" />

            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span>Catalog live</span>
            </div>
          </nav>

          {/* Action / Primary button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/products"
              className="h-8 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium transition-colors flex items-center justify-center active:scale-[0.98]"
            >
              Browse catalog
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 rounded-lg border border-neutral-200 text-neutral-700 flex items-center justify-center hover:bg-neutral-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-4 space-y-2 shadow-xs">
          <Link
            to="/products"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors"
          >
            <span>Product catalog</span>
            <span className="text-xs font-mono text-neutral-400">12 items</span>
          </Link>
          <Link
            to="/products/1"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
          >
            <span>Featured unit (Sony WH-1000XM5)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </Link>
          <div className="pt-2 border-t border-neutral-100">
            <Link
              to="/products"
              onClick={() => setMobileOpen(false)}
              className="w-full h-10 rounded-lg bg-neutral-900 text-white text-sm font-medium flex items-center justify-center"
            >
              View all products
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

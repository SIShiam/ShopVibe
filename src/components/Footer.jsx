import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, RefreshCw } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 mt-20 border-t border-neutral-800 text-xs">
      
      {/* Guarantees band */}
      <div className="border-b border-neutral-800 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="flex items-center gap-3">
              <Truck className="w-4 h-4 text-neutral-300 shrink-0" />
              <div>
                <span className="font-medium text-neutral-200 block text-xs">Express shipping</span>
                <span className="text-[11px] text-neutral-500">Tracked global dispatch</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-neutral-300 shrink-0" />
              <div>
                <span className="font-medium text-neutral-200 block text-xs">12-month coverage</span>
                <span className="text-[11px] text-neutral-500">Official manufacturer terms</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <RefreshCw className="w-4 h-4 text-neutral-300 shrink-0" />
              <div>
                <span className="font-medium text-neutral-200 block text-xs">30-day evaluation</span>
                <span className="text-[11px] text-neutral-500">Hassle-free return policy</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main footer navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-3 sm:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-white text-neutral-900 flex items-center justify-center font-mono text-[11px] font-semibold">
                SV
              </span>
              <span className="text-sm font-semibold text-white tracking-tight">ShopVibe</span>
            </div>
            <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
              Archival catalog and reference implementation of dynamic client routing with React Router.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500 pt-1">
              <span>REACT 19</span>
              <span>·</span>
              <span>REACT ROUTER</span>
              <span>·</span>
              <span>TAILWIND CSS</span>
            </div>
          </div>

          {/* Catalog Index Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-tight text-neutral-300">
              Direct Routes
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Full Catalog Index
                </Link>
              </li>
              <li>
                <Link to="/products/1" className="hover:text-white transition-colors">
                  Product 01: Sony WH-1000XM5
                </Link>
              </li>
              <li>
                <Link to="/products/2" className="hover:text-white transition-colors">
                  Product 02: Apple Watch Series 9
                </Link>
              </li>
              <li>
                <Link to="/products/3" className="hover:text-white transition-colors">
                  Product 03: MacBook Pro 14"
                </Link>
              </li>
              <li>
                <Link to="/products/999" className="text-neutral-500 hover:text-neutral-300 transition-colors">
                  Route test: Invalid ID 999
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-tight text-neutral-300">
              Hardware Series
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-500">
              <li>Acoustic & Sound Hardware</li>
              <li>Wearables & Sensors</li>
              <li>Computing & Display</li>
              <li>Optics & Cameras</li>
              <li>Workplace Ergonomics</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-500">
          <p>© {CURRENT_YEAR} ShopVibe Studio. Task 02: Dynamic Product Details.</p>
          <p className="font-mono">Dynamic Routing · useParams()</p>
        </div>
      </div>

    </footer>
  );
}

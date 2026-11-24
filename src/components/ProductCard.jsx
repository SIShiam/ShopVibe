import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const { id, name, price, originalPrice, category, brand, rating, reviewsCount, image, inStock } = product;

  return (
    <article className="group bg-white rounded-xl border border-neutral-200/90 hover:border-neutral-400 transition-colors duration-150 flex flex-col justify-between overflow-hidden">
      
      {/* Top Image Container */}
      <div className="relative aspect-4/3 bg-neutral-100 overflow-hidden border-b border-neutral-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />

        {/* Archival category tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-0.5 rounded bg-white/95 border border-neutral-200/80 text-[11px] font-mono font-medium text-neutral-700 shadow-xs">
            {category}
          </span>
        </div>

        {/* Stock status indicator */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/95 border border-neutral-200/80 text-[11px] font-mono text-neutral-600 shadow-xs">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                inStock ? 'bg-emerald-600' : 'bg-neutral-400'
              }`}
            />
            {inStock ? 'In stock' : 'Backorder'}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-1.5">
          {/* Brand & Index line */}
          <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>{brand}</span>
            <span className="text-[11px] text-neutral-400">REF {String(id).padStart(2, '0')}</span>
          </div>

          {/* Product Title */}
          <h3 className="text-sm sm:text-base font-medium text-neutral-900 leading-snug line-clamp-2">
            <Link
              to={`/products/${id}`}
              className="hover:underline focus:outline-none focus:underline"
            >
              {name}
            </Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 pt-0.5">
            <Star className="w-3.5 h-3.5 text-neutral-700 fill-neutral-700" />
            <span className="font-medium text-neutral-800 tabular-nums">{rating}</span>
            <span className="text-neutral-400">({reviewsCount.toLocaleString()})</span>
          </div>
        </div>

        {/* Price & Action row */}
        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-semibold text-neutral-900 tabular-nums">
              ${price.toFixed(2)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-xs text-neutral-400 line-through tabular-nums">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Details Button - Requirement 3 & 4 */}
          <Link
            to={`/products/${id}`}
            className="h-8 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium inline-flex items-center gap-1.5 transition-colors active:scale-[0.98]"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </article>
  );
}

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, X, SlidersHorizontal, ArrowRight } from 'lucide-react';

export default function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'All' || product.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <section className="mb-8 sm:mb-12 border-b border-neutral-200 pb-8 sm:pb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                <span>CATALOG INDEX</span>
                <span>/</span>
                <span>SERIES 2026</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
                Hardware and Instruments
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Twelve precision personal devices, audio instruments, and everyday tools. Select any item to inspect its technical specifications and dynamic route attributes.
              </p>
            </div>

            {/* Quick catalog route index */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500">
              <span className="text-neutral-400">Routes:</span>
              <Link
                to="/products/1"
                className="px-2.5 py-1 rounded border border-neutral-200 hover:border-neutral-400 text-neutral-700 transition-colors flex items-center gap-1"
              >
                <span>/products/1</span>
                <ArrowRight className="w-3 h-3 text-neutral-400" />
              </Link>
              <Link
                to="/products/5"
                className="px-2.5 py-1 rounded border border-neutral-200 hover:border-neutral-400 text-neutral-700 transition-colors flex items-center gap-1"
              >
                <span>/products/5</span>
                <ArrowRight className="w-3 h-3 text-neutral-400" />
              </Link>
              <Link
                to="/products/999"
                className="px-2.5 py-1 rounded border border-neutral-200 hover:border-neutral-400 text-neutral-600 transition-colors"
                title="Test invalid product ID route"
              >
                <span>/products/999 (404 test)</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-neutral-200/90 mb-8 space-y-4">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search catalog by name, brand, or specification..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-500" />
              <label htmlFor="sortSelect" className="text-xs text-neutral-500">
                Sort:
              </label>
              <select
                id="sortSelect"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg px-2.5 py-2 text-neutral-800 focus:outline-none focus:ring-1 focus:ring-neutral-900 cursor-pointer"
              >
                <option value="featured">Featured sequence</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
                <option value="rating">Highest customer rating</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-tight shrink-0 mr-1">
              Category:
            </span>
            {categories.map((category) => {
              const active = selectedCategory.toLowerCase() === category.toLowerCase();
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    active
                      ? 'bg-neutral-900 text-white'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

        </div>

        {/* Count Bar */}
        <div className="flex items-center justify-between mb-6 px-1 text-xs text-neutral-500">
          <div>
            Showing <span className="font-medium text-neutral-900 tabular-nums">{filteredProducts.length}</span> of{' '}
            <span className="font-medium text-neutral-900 tabular-nums">{products.length}</span> items
          </div>

          {(selectedCategory !== 'All' || searchQuery || sortBy !== 'featured') && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-medium text-neutral-900 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3 h-3" />
              Reset filters
            </button>
          )}
        </div>

        {/* Product Grid - Requirements 2 & 3 */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-xl border border-neutral-200 p-10 sm:p-14 text-center max-w-md mx-auto my-12">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mx-auto text-neutral-500 mb-3">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900 mb-1">
              No matching records
            </h3>
            <p className="text-xs text-neutral-500 mb-5 leading-relaxed">
              No product matched "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              onClick={handleResetFilters}
              className="h-8 px-4 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
            >
              Reset filters and view all
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

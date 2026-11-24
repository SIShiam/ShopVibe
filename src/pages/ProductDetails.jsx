import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import {
  ArrowLeft,
  Star,
  Check,
  Truck,
  ShieldCheck,
  RefreshCw,
  Share2,
  ChevronRight,
  SlidersHorizontal,
  ArrowRight
} from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  // Requirement 5: URL parameter via useParams()
  const { id } = useParams();

  // Find product by id
  const product = products.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Requirement 7: Invalid Product ID Not Found screen
  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6">
        <div className="max-w-lg w-full bg-white rounded-xl border border-neutral-200 p-8 sm:p-10 text-center">
          
          <div className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600 mx-auto mb-4">
            <SlidersHorizontal className="w-6 h-6" />
          </div>

          <div className="text-xs font-mono text-neutral-400 mb-2">
            STATUS 404 // PARAMETER ERROR
          </div>

          <h1 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-2">
            Product record not found
          </h1>

          <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
            No item matches URL parameter <code className="font-mono text-neutral-800 bg-neutral-100 px-1.5 py-0.5 rounded">id: "{id}"</code>. Valid catalog identifiers range from <code className="font-mono text-neutral-800">1</code> to <code className="font-mono text-neutral-800">{products.length}</code>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Link
              to="/products"
              className="w-full sm:w-auto h-9 px-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium inline-flex items-center justify-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to catalog</span>
            </Link>

            <Link
              to="/products/1"
              className="w-full sm:w-auto h-9 px-4 border border-neutral-200 hover:bg-neutral-50 text-neutral-700 rounded-lg text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Inspect product 01</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>
          </div>

          {/* Quick suggestions */}
          <div className="pt-6 border-t border-neutral-100 text-left">
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-tight mb-3">
              Available catalog items:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {products.slice(0, 4).map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-neutral-50 border border-neutral-100 transition-colors"
                >
                  <img src={p.image} alt={p.name} className="w-8 h-8 rounded object-cover bg-neutral-100" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-neutral-800 truncate">{p.name}</p>
                    <p className="text-[11px] font-mono text-neutral-500 tabular-nums">${p.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Requirement 6: Specific product details
  const {
    name,
    price,
    originalPrice,
    category,
    brand,
    rating,
    reviewsCount,
    image,
    description,
    features,
    specs,
    inStock
  } = product;

  const discountAmount = originalPrice && originalPrice > price ? (originalPrice - price).toFixed(2) : null;

  // Related products
  const relatedProducts = products
    .filter((p) => p.id !== id && (p.category === category || true))
    .slice(0, 4);

  const handleAddToCart = () => {
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2400);
  };

  const galleryImages = [image, image, image];

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-200/80">
          <nav className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono overflow-x-auto whitespace-nowrap">
            <Link to="/products" className="hover:text-neutral-900 transition-colors">
              Catalog
            </Link>
            <ChevronRight className="w-3 h-3 text-neutral-300 shrink-0" />
            <span className="text-neutral-600">{category}</span>
            <ChevronRight className="w-3 h-3 text-neutral-300 shrink-0" />
            <span className="text-neutral-900 font-medium truncate max-w-xs">{name}</span>
          </nav>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors self-start sm:self-auto"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to listing</span>
          </Link>
        </div>

        {/* Main Product Layout: Split 2 Columns */}
        <div className="bg-white rounded-xl border border-neutral-200/90 p-5 sm:p-8 lg:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left: Product Imagery (Moment 1) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-square w-full rounded-lg bg-neutral-100 overflow-hidden border border-neutral-200/80">
                <img
                  src={galleryImages[selectedPhotoIndex]}
                  alt={name}
                  className="w-full h-full object-cover object-center"
                />

                {/* Quiet Index & Category Label */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-white/95 border border-neutral-200/80 text-[11px] font-mono text-neutral-700">
                    {category}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/95 border border-neutral-200/80 text-[11px] font-mono text-neutral-500">
                    REF {String(id).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-3 gap-2">
                {galleryImages.map((thumbSrc, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPhotoIndex(index)}
                    className={`aspect-4/3 rounded-lg overflow-hidden border transition-colors cursor-pointer ${
                      selectedPhotoIndex === index
                        ? 'border-neutral-900'
                        : 'border-neutral-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={thumbSrc} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Guarantees / Service Notes */}
              <div className="mt-4 pt-4 border-t border-neutral-100 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 bg-neutral-50 rounded-lg">
                  <Truck className="w-4 h-4 text-neutral-700 mx-auto mb-1" />
                  <span className="font-medium text-neutral-800 block text-[11px]">Free delivery</span>
                  <span className="text-[10px] text-neutral-500">2-4 days</span>
                </div>
                <div className="p-2.5 bg-neutral-50 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-neutral-700 mx-auto mb-1" />
                  <span className="font-medium text-neutral-800 block text-[11px]">1-year term</span>
                  <span className="text-[10px] text-neutral-500">Official warranty</span>
                </div>
                <div className="p-2.5 bg-neutral-50 rounded-lg">
                  <RefreshCw className="w-4 h-4 text-neutral-700 mx-auto mb-1" />
                  <span className="font-medium text-neutral-800 block text-[11px]">30 days</span>
                  <span className="text-[10px] text-neutral-500">Simple return</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Information & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Meta & Stock Line */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-tight">
                    {brand} · ITEM {String(id).padStart(3, '0')}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-600">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        inStock ? 'bg-emerald-600' : 'bg-neutral-400'
                      }`}
                    />
                    {inStock ? 'In stock and shipping' : 'Currently backordered'}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-neutral-900 tracking-tight leading-snug">
                  {name}
                </h1>

                {/* Rating & Review Meta */}
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <div className="flex items-center gap-1 text-neutral-800 font-medium">
                    <Star className="w-3.5 h-3.5 fill-neutral-800 text-neutral-800" />
                    <span className="tabular-nums">{rating}</span>
                  </div>
                  <span>·</span>
                  <span>{reviewsCount.toLocaleString()} verified customer assessments</span>
                </div>

                {/* Pricing Block */}
                <div className="py-4 border-y border-neutral-100 flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-semibold text-neutral-900 tabular-nums">
                    ${price.toFixed(2)}
                  </span>
                  {originalPrice && originalPrice > price && (
                    <span className="text-sm text-neutral-400 line-through tabular-nums">
                      ${originalPrice.toFixed(2)}
                    </span>
                  )}
                  {discountAmount && (
                    <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                      Reduced ${discountAmount}
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-tight">
                    Overview
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Key Features */}
                {features && features.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-tight">
                      Key Highlights
                    </h3>
                    <ul className="space-y-1.5">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                          <Check className="w-3.5 h-3.5 text-neutral-700 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical Specification Sheet (Moment 2) */}
                {specs && (
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-mono text-neutral-400 uppercase tracking-tight">
                      Technical Specifications
                    </h3>
                    <div className="border border-neutral-200 rounded-lg overflow-hidden divide-y divide-neutral-100 text-xs">
                      {Object.entries(specs).map(([key, val]) => (
                        <div
                          key={key}
                          className="px-3.5 py-2.5 flex items-center justify-between bg-neutral-50/50"
                        >
                          <span className="font-mono text-neutral-500">{key}</span>
                          <span className="font-medium text-neutral-900 tabular-nums">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Order Controls */}
              <div className="pt-6 mt-6 border-t border-neutral-100 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  
                  {/* Quantity Stepper */}
                  <div className="flex items-center justify-between sm:justify-start border border-neutral-200 rounded-lg bg-neutral-50 p-1 shrink-0">
                    <span className="text-xs font-mono text-neutral-500 px-2 sm:hidden">Qty:</span>
                    <div className="flex items-center">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1 || !inStock}
                        className="w-8 h-8 rounded bg-white border border-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-10 text-center font-mono font-medium text-sm text-neutral-900 tabular-nums">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        disabled={!inStock}
                        className="w-8 h-8 rounded bg-white border border-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={handleAddToCart}
                    disabled={!inStock}
                    className={`flex-1 h-10 px-5 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] ${
                      addedNotice
                        ? 'bg-neutral-800 text-white'
                        : inStock
                        ? 'bg-neutral-900 hover:bg-neutral-800 text-white'
                        : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                    }`}
                  >
                    {addedNotice ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to order ({quantity})</span>
                      </>
                    ) : (
                      <span>{inStock ? 'Add to order' : 'Unit out of stock'}</span>
                    )}
                  </button>

                  {/* Share button */}
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.href);
                      alert('Product link copied: ' + window.location.href);
                    }}
                    className="h-10 px-3 rounded-lg border border-neutral-200 hover:bg-neutral-50 text-neutral-600 transition-colors cursor-pointer shrink-0"
                    title="Copy product URL"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>SKU: NXS-00{id}</span>
                  <span>URL: /products/{id}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Related Items Section */}
        {relatedProducts.length > 0 && (
          <section className="pt-2">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900 tracking-tight">
                  Related catalog units
                </h2>
                <p className="text-xs text-neutral-500">
                  Adjacent hardware in category {category}
                </p>
              </div>

              <Link
                to="/products"
                className="text-xs font-medium text-neutral-700 hover:text-neutral-900 flex items-center gap-1"
              >
                <span>View all items</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}

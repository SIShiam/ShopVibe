import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#fafafa] text-neutral-900">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            {/* Redirect root / to /products */}
            <Route path="/" element={<Navigate to="/products" replace />} />
            
            {/* Required Route 1: Product Listing */}
            <Route path="/products" element={<ProductListing />} />
            
            {/* Required Route 2: Dynamic Product Details using :id */}
            <Route path="/products/:id" element={<ProductDetails />} />
            
            {/* 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

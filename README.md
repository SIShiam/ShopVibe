# Task 02: Dynamic Product Details Application

A modern e-commerce application demonstrating **Dynamic Routing** with React 19, React Router v7, Vite, and Tailwind CSS.

---

## 🎯 Task Objectives & Requirements Checklist

| # | Requirement | Implementation Status | Notes |
|---|---|:---:|---|
| 1 | **কমপক্ষে ১০টি Product-এর data তৈরি করতে হবে** (Minimum 10 products mock data) | ✅ Complete | 12 high-quality products created in [`src/data/products.js`](src/data/products.js) with categories, prices, specs, and features |
| 2 | **একটি Product Listing page তৈরি করতে হবে** (Product Listing page) | ✅ Complete | Created in [`src/pages/ProductListing.jsx`](src/pages/ProductListing.jsx) with category filters, live search, and sorting |
| 3 | **প্রতিটি Product-এর জন্য নিচের তথ্য দেখাতে হবে**:<br>• Product Image<br>• Product Name<br>• Price<br>• Category<br>• Details Button | ✅ Complete | Implemented on [`src/components/ProductCard.jsx`](src/components/ProductCard.jsx) — includes image, name, price, category badge, rating, and Details button |
| 4 | **Details button click করলে নির্দিষ্ট Product Details page-এ যেতে হবে** | ✅ Complete | `<Link to={`/products/${product.id}`}>` seamlessly navigates to `/products/:id` |
| 5 | **URL parameter ব্যবহার করে Product ID পেতে হবে** | ✅ Complete | Handled via React Router's `useParams()` hook in [`src/pages/ProductDetails.jsx`](src/pages/ProductDetails.jsx) |
| 6 | **ID অনুযায়ী নির্দিষ্ট Product-এর বিস্তারিত তথ্য দেখাতে হবে** | ✅ Complete | Renders full details: gallery, brand, rating, overview, bulleted features, specs table, and related products |
| 7 | **Invalid Product ID হলে Not Found message দেখাতে হবে** | ✅ Complete | Displays a user-friendly "Product Not Found" screen with error explanation and quick links back to products |

---

## 🛣️ Required Routes

```jsx
/products          -> Product Listing Page (Catalog with filters and cards)
/products/:id      -> Dynamic Product Details Page (Powered by useParams())
/                  -> Redirects directly to /products
*                  -> 404 Page Not Found route
```

---

## 🛠️ Required Hooks & Components Used

- `useParams()`: Extracts the dynamic `:id` parameter from the URL in `ProductDetails.jsx`.
- `Dynamic Routing`: Declared in `App.jsx` using `<Route path="/products/:id" element={<ProductDetails />} />`.
- `Link`: Used for client-side navigation between listing and detail pages without full page reloads.
- `Route`: Defines URL route endpoints in `App.jsx`.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Lint Check
```bash
npm run lint
```

---

## 📂 Project Structure

```
PROJECT-6/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky navigation header with brand and links
│   │   ├── Footer.jsx         # Footer with guarantees and links
│   │   ├── ProductCard.jsx    # Card with Image, Name, Price, Category & Details Button
│   │   └── ScrollToTop.jsx    # Scrolls to top on route navigation
│   ├── data/
│   │   └── products.js        # 12 detailed product entries across multiple categories
│   ├── pages/
│   │   ├── ProductListing.jsx # /products page with search, filters & sort
│   │   ├── ProductDetails.jsx # /products/:id page using useParams() with Not Found handling
│   │   └── NotFound.jsx       # 404 page for unknown URLs
│   ├── App.jsx                # BrowserRouter, Routes & Route definitions
│   ├── index.css              # Tailwind CSS imports & global styles
│   └── main.jsx               # React 19 entry point
├── index.html
├── package.json
└── vite.config.js
```

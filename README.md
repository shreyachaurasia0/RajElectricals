# E-Commerce Platform

A full-stack e-commerce application with admin dashboard, customer frontend, and RESTful backend API.

## 📋 Project Overview

This is a modern e-commerce solution featuring:
- **Customer-facing storefront** with product browsing and checkout
- **Admin dashboard** for inventory and order management
- **RESTful API backend** with authentication and payment processing
- **Real-time cart management** and order tracking

---

## 🏗️ Project Structure

```
RE/
├── frontend/          # Customer e-commerce store (React + Tailwind)
├── admin/             # Admin dashboard (React + Tailwind)
├── backend/           # Node.js/Express API server
└── README.md          # This file
```

### **Frontend** (`/frontend`)
React-based customer-facing application with:
- Product listing and filtering by category
- Shopping cart management
- User authentication
- Order placement and tracking
- Product search and recommendations
- Responsive UI with Tailwind CSS

**Key Dependencies:** React, React Router, Axios, Framer Motion, Tailwind CSS

### **Admin** (`/admin`)
React-based admin dashboard for:
- Product management (add, edit, delete)
- Order management and status tracking
- Inventory overview
- Sales analytics

**Key Dependencies:** React, React Router, Axios, Tailwind CSS

### **Backend** (`/backend`)
Node.js Express server providing:
- REST API endpoints for products, users, carts, orders
- User authentication with JWT
- Payment gateway integration (Stripe, Razorpay)
- Image upload handling (Cloudinary)
- MongoDB database management

**Key Dependencies:** Express, Mongoose, JWT, Bcrypt, Cloudinary, Stripe, Razorpay

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | React 19, Vite, Tailwind CSS, React Router, Axios |
| **Admin** | React 19, Vite, Tailwind CSS, React Router, Axios |
| **Backend** | Node.js, Express 5, MongoDB, Mongoose |
| **Authentication** | JWT (JSON Web Tokens), Bcrypt |
| **Payments** | Stripe, Razorpay |
| **File Storage** | Cloudinary |
| **Build Tool** | Vite |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas cluster)
- Cloudinary account (for image uploads)
- Stripe/Razorpay account (for payments)

### Backend Setup

```bash
cd backend
npm install

# Create .env file with:
# PORT=4000
# MONGODB_URI=your_mongodb_connection_string
# CLOUDINARY_NAME=your_cloudinary_name
# CLOUDINARY_API_KEY=your_api_key
# CLOUDINARY_API_SECRET=your_api_secret
# JWT_SECRET=your_secret_key
# STRIPE_SECRET_KEY=your_stripe_key
# RAZORPAY_KEY_ID=your_razorpay_key

npm run server    # Development with nodemon
npm start         # Production
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev       # Start development server (http://localhost:5173)
npm run build     # Build for production
```

### Admin Setup

```bash
cd admin
npm install
npm run dev       # Start development server (http://localhost:5174)
npm run build     # Build for production
```

---

## 📚 API Routes

### Users
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - Login user
- `POST /api/user/logout` - Logout user

### Products
- `GET /api/product/list` - Get all products
- `POST /api/product/add` - Add new product (admin)
- `PUT /api/product/:id` - Update product (admin)
- `DELETE /api/product/:id` - Delete product (admin)

### Cart
- `GET /api/cart/get` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart

### Orders
- `POST /api/order/place` - Place new order
- `GET /api/order/userorders` - Get user's orders
- `GET /api/order/list` - Get all orders (admin)
- `PUT /api/order/:id` - Update order status (admin)

---

## 🔑 Key Features

### Customer Features
- ✅ User registration and authentication
- ✅ Browse products by category
- ✅ Search and filter functionality
- ✅ Add items to cart
- ✅ Checkout with address details
- ✅ Multiple payment methods (Stripe, Razorpay)
- ✅ Order tracking
- ✅ Responsive design

### Admin Features
- ✅ Add/Edit/Delete products
- ✅ Manage product images and details
- ✅ Track all orders
- ✅ Update order status
- ✅ View sales data
- ✅ Categories and inventory management

### Backend Features
- ✅ JWT-based authentication
- ✅ Password encryption with Bcrypt
- ✅ MongoDB database integration
- ✅ Cloudinary image handling
- ✅ Payment gateway integration
- ✅ CORS enabled for frontend

---

## 🔐 Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (encrypted),
  cartData: Object
}
```

### Product Model
```javascript
{
  name: String,
  description: String,
  price: Number,
  image: Array,
  category: String,
  subCategory: String,
  bestseller: Boolean,
  specifications: String,
  features: String,
  brand: String,
  warranty: String,
  deliveryCharge: Number,
  date: Number
}
```

### Order Model
```javascript
{
  userId: String,
  items: Array,
  amount: Number,
  address: Object,
  status: String,
  paymentMethod: String,
  payment: Boolean,
  date: Number
}
```

---

## 🚀 Running the Application

### Development Mode (All services)

**Terminal 1 - Backend:**
```bash
cd backend && npm run server
```

**Terminal 2 - Frontend:**
```bash
cd frontend && npm run dev
```

**Terminal 3 - Admin:**
```bash
cd admin && npm run dev
```

### Production Build

```bash
# Build all applications
cd frontend && npm run build
cd admin && npm run build

# Run backend
cd backend && npm start
```

---

## 📝 Environment Configuration

Create `.env` files in respective directories:

**`backend/.env`**
```
PORT=4000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secret
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
STRIPE_SECRET_KEY=your_key
RAZORPAY_KEY_ID=your_key
```

---

## 🎨 Styling

Both frontend and admin use **Tailwind CSS v4** for styling with:
- Responsive design utilities
- Custom color schemes
- Animation support

---

## 📧 Contact & Support

For issues or questions, please refer to the project documentation or contact the development team.

**Author:** Shreya Chaurasia

---

## 📄 License

## Backend API Server ##

Node.js/Express RESTful API for the e-commerce platform.

## 📋 Overview

Handles all backend operations including user authentication, product management, shopping cart functionality, and order processing with payment integration.

## 🚀 Quick Start

```bash
npm install
npm run server    # Development with nodemon
npm start         # Production
```

## 📁 Directory Structure

```
backend/
├── config/              # Configuration files
│   ├── cloudinary.js   # Cloudinary image service config
│   └── mongodb.js      # MongoDB connection
├── controllers/         # Business logic
│   ├── userController.js
│   ├── productController.js
│   ├── cartController.js
│   ├── orderController.js
│   └── contactController.js
├── middleware/          # Express middleware
│   ├── auth.js         # JWT authentication
│   ├── adminAuth.js    # Admin authorization
│   └── multer.js       # File upload handling
├── models/             # MongoDB schemas
│   ├── userModel.js
│   ├── productModel.js
│   └── orderModel.js
├── routes/             # API endpoints
│   ├── userRoute.js
│   ├── productRoute.js
│   ├── cartRoute.js
│   ├── orderRoute.js
│   └── contactRoute.js
├── .env                # Environment variables
├── server.js           # Main server file
└── package.json
```

## 🔌 Main Routes

### User Management (`/api/user`)
- `POST /register` - Create new account
- `POST /login` - Authenticate user
- `POST /logout` - Logout user

### Products (`/api/product`)
- `GET /list` - Fetch all products
- `POST /add` - Add product (admin only)
- `PUT /update/:id` - Update product (admin only)
- `DELETE /remove/:id` - Delete product (admin only)

### Shopping Cart (`/api/cart`)
- `GET /get` - Retrieve user's cart
- `POST /add` - Add item to cart
- `POST /remove` - Remove item from cart

### Orders (`/api/order`)
- `POST /place` - Create new order
- `GET /userorders` - Fetch user's orders
- `GET /list` - Get all orders (admin)
- `PUT /status/:id` - Update order status (admin)
- `POST /verifyStripe` - Verify Stripe payment
- `POST /verifyRazorpay` - Verify Razorpay payment

## 🔐 Authentication

- Uses **JWT (JSON Web Tokens)** for stateless authentication
- Passwords hashed with **Bcrypt**
- JWT token required in headers for protected routes

## 💾 Database

**MongoDB** connection with Mongoose ODM. Three main collections:
- **users** - User accounts with encrypted passwords
- **products** - Product catalog
- **orders** - Order history and status

## 📤 File Upload

- Uses **Cloudinary** for image storage
- Handles product images and user uploads
- Configured in `config/cloudinary.js`

## 💳 Payment Integration

### Stripe
- Payment processing endpoint
- Webhook verification

### Razorpay
- Alternative payment gateway
- Order verification system

## ⚙️ Environment Variables Required

```
PORT                        # API port (default: 4000)
MONGODB_URI                 # MongoDB connection string
JWT_SECRET                  # JWT signing secret
CLOUDINARY_NAME             # Cloudinary account name
CLOUDINARY_API_KEY          # Cloudinary API key
CLOUDINARY_API_SECRET       # Cloudinary API secret
STRIPE_SECRET_KEY           # Stripe secret key
RAZORPAY_KEY_ID             # Razorpay API key ID
RAZORPAY_KEY_SECRET         # Razorpay API secret
```

## 📦 Key Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **jsonwebtoken** - JWT authentication
- **bcrypt** - Password hashing
- **cloudinary** - Image hosting
- **stripe** - Payment processing
- **razorpay** - Alternative payments
- **multer** - File upload handling
- **cors** - Cross-origin requests
- **dotenv** - Environment variables

## 🧪 Testing

Currently no test framework configured. Add tests using Jest or Mocha.

## 🔍 Middleware

- **CORS** - Enabled for frontend communication
- **JSON parser** - Smart parser that skips multipart uploads
- **URL encoded parser** - Form data handling
- **Auth middleware** - JWT verification
- **Admin auth** - Admin authorization checks

---



ISC License

# Apple Empire Frontend 🍎

[![Next.js](https://img.shields.io/badge/Next.js-15.0.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.2.1-764ABC)](https://redux-toolkit.js.org/)

Apple Empire is a modern, full-featured e-commerce frontend application built with Next.js and TypeScript. It provides a seamless shopping experience with advanced features like cart management, user authentication, EMI plans, pre-orders, and integrated payment processing.

## 🌟 Features

### 🛍️ E-commerce Core
- **Product Catalog**: Browse products by categories and brands
- **Product Details**: Detailed product pages with variants, pricing, and specifications
- **Shopping Cart**: Add, remove, and modify cart items with real-time updates
- **Wishlist**: Save favorite products for later
- **Product Comparison**: Compare multiple products side by side
- **Search & Filters**: Advanced product search and filtering capabilities

### 👤 User Management
- **Authentication**: Secure login/signup system with JWT tokens
- **User Profiles**: Manage personal information and preferences
- **Order History**: View past orders and order details
- **Guest Checkout**: Shop without creating an account

### 💳 Payment & Checkout
- **Secure Checkout**: Multi-step checkout process
- **Payment Integration**: Integrated payment gateway
- **EMI Plans**: Flexible EMI options for customers
- **Pre-orders**: Support for pre-order functionality
- **Promo Codes**: Apply discount coupons

### 📱 User Experience
- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Theme switching capability
- **Animations**: Smooth animations with AOS library
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Elegant loading indicators

### 🏪 Business Features
- **Shop Address**: Physical store location information
- **Policies**: Return, exchange, warranty, and privacy policies
- **FAQs**: Comprehensive help section
- **Contact**: Customer support and contact information
- **Blog**: Content management for articles

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.0.3** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5.7.2** - Type safety

### Styling & UI
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **React Icons** - Additional icons
- **AOS** - Animate On Scroll library

### State Management
- **Redux Toolkit 2.2.1** - State management
- **React Redux 9.1.0** - React bindings for Redux
- **RTK Query** - Data fetching and caching

### Forms & Validation
- **React Hook Form 7.51.1** - Form handling
- **Custom Validators** - Form validation utilities

### Additional Libraries
- **Axios 1.7.5** - HTTP client
- **Swiper 11.1.14** - Touch slider
- **React Hot Toast 2.4.1** - Toast notifications
- **JS Cookie 3.0.5** - Cookie management
- **JWT** - JSON Web Token handling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hisanmastery/Apple-Empire-Frontend.git
   cd Apple-Empire-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=your_api_base_url
   NEXT_PUBLIC_PAYMENT_GATEWAY_URL=your_payment_gateway_url
   # Add other environment variables as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot/
│   │   └── two-step-verification/
│   ├── (landing-layout)/         # Main application routes
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── products/
│   │   ├── category/
│   │   ├── brand/
│   │   ├── offers/
│   │   ├── dashboard/
│   │   └── [other pages]/
│   ├── globals.css
│   └── layout.tsx
├── components/                   # Reusable UI components
│   ├── auth/                     # Authentication components
│   ├── cart/                     # Shopping cart components
│   ├── checkout/                 # Checkout process components
│   ├── common/                   # Shared components
│   ├── home/                     # Homepage components
│   ├── shared/                   # Layout components
│   └── ui/                       # Base UI components
├── store/                        # Redux store configuration
│   ├── api/                      # API slice definitions
│   ├── features/                 # Feature-based slices
│   ├── reducers/                 # Combined reducers
│   ├── provider.tsx              # Redux provider
│   └── store.ts                  # Store configuration
├── hooks/                        # Custom React hooks
├── lib/                          # Utility libraries
├── utils/                        # Helper functions
├── constants/                    # Application constants
├── interfaces/                   # TypeScript interfaces
├── data/                         # Static data
└── config/                       # Configuration files
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎯 Key Features Breakdown

### Cart Management
- **Persistent Cart**: Cart data syncs between localStorage and backend
- **Guest Cart**: Shop without authentication
- **Quantity Management**: Increment/decrement product quantities
- **Cart Synchronization**: Automatic sync when user logs in

### Authentication Flow
- **JWT-based Authentication**: Secure token-based auth
- **Password Reset**: Forgot password functionality
- **Two-step Verification**: Enhanced security
- **Auto-login**: Remember user sessions

### EMI & Payment
- **EMI Calculator**: Calculate EMI plans for products
- **Multiple Payment Methods**: Support for various payment options
- **Payment Gateway Integration**: Secure payment processing
- **Order Tracking**: Real-time order status updates

### Product Management
- **Product Variants**: Support for different product options
- **Dynamic Pricing**: Offer prices and discounts
- **Stock Management**: Real-time stock updates
- **Product Reviews**: Customer feedback system

## 🌐 API Integration

The application integrates with a backend API for:
- User authentication and management
- Product catalog and inventory
- Cart and wishlist operations
- Order processing and payment
- EMI plan calculations
- Dynamic content management

## 📱 Responsive Design

- **Mobile-first approach**: Optimized for mobile devices
- **Breakpoint system**: Responsive across all screen sizes
- **Touch-friendly**: Optimized for touch interactions
- **Performance optimized**: Fast loading on all devices

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Client-side form validation
- **XSS Protection**: Sanitized user inputs
- **Secure Headers**: Security headers implementation

## 🚀 Performance Optimizations

- **Next.js App Router**: Improved performance and developer experience
- **Image Optimization**: Next.js Image component with optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **Lazy Loading**: Components and images loaded on demand
- **Caching**: API response caching with RTK Query

## 🛡️ Best Practices

- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Reusable and maintainable components
- **State Management**: Centralized state with Redux Toolkit
- **Error Handling**: Comprehensive error handling and user feedback
- **Accessibility**: WCAG compliant components

## 📞 Support & Contact

- **Email**: support@appleempire.com
- **Phone**: +880-XXX-XXXXXX
- **Address**: Basement-1, Shop No-27, Bashundhara City Shopping Mall, Panthapath, Dhaka

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Apple Empire. All rights reserved.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Redux Toolkit** - For simplified state management

---

**Apple Empire** - Your trusted destination for quality products with exceptional service.

🌐 **Website**: [Apple Empire](https://appleempire.com)  
📧 **Email**: info@appleempire.com  
📱 **Phone**: +880-XXX-XXXXXX

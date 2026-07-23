"use client";

import { useState, useCallback, useMemo, useEffect, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMinus,
  HiPlus,
  HiTrash,
  HiArrowRight,
  HiShoppingBag,
  HiShieldCheck,
  HiTruck,
  HiCreditCard,
  HiStar,
  HiHeart,
  HiCheckCircle,
  HiArrowLeft,
  HiSparkles,
  HiFire,
  HiGift,
  HiMapPin,
} from "react-icons/hi2";
import { useCart } from "@/Components/providers/CartProvider";

const WHATSAPP_NUMBER = "918280547730";

// Optimized animation variants (using GPU-accelerated properties only)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.15,
    },
  },
};

// Memoized Cart Item Component for better performance
const CartItem = memo(
  ({ item, updateQty, removeFromCart, saveForLater, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        variants={itemVariants}
        layout
        exit={itemVariants.exit}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`p-6 transition-colors duration-200 ${
          isHovered ? "bg-gradient-to-r from-blue-50/50 to-indigo-50/50" : ""
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="flex gap-4 sm:gap-6">
          {/* Product Image */}
          <Link
            href={`/products/${item.slug}`}
            className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 group shadow-sm"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 96px, 128px"
              loading="lazy"
            />
            {item.brand && (
              <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-medium text-[#082d4a] shadow-sm">
                {item.brand}
              </div>
            )}
          </Link>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <Link href={`/products/${item.slug}`}>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 hover:text-[#082d4a] transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <HiStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? "text-yellow-400" : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300">|</span>
                  <span className="text-sm text-green-600 font-medium">
                    In Stock
                  </span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-[#082d4a]">
                    ₹{item.price.toLocaleString()}
                  </span>
                  {item.originalPrice && (
                    <>
                      <span className="text-sm text-gray-400 line-through">
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        {Math.round(
                          ((item.originalPrice - item.price) /
                            item.originalPrice) *
                            100,
                        )}
                        % OFF
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="flex sm:flex-col items-center sm:items-end gap-4">
                <div className="flex items-center gap-0 bg-gray-100 rounded-full p-1">
                  <button
                    type="button"
                    onClick={() => updateQty(item.slug, item.qty - 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-50 shadow-sm transition-colors active:scale-95"
                    aria-label="Decrease quantity"
                  >
                    <HiMinus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="w-10 text-center text-sm font-semibold text-gray-900 tabular-nums">
                    {item.qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQty(item.slug, item.qty + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#082d4a] text-white shadow-sm hover:bg-[#0a3857] transition-colors active:scale-95"
                    aria-label="Increase quantity"
                  >
                    <HiPlus className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => saveForLater(item)}
                    className="text-sm text-gray-400 hover:text-[#082d4a] transition-colors flex items-center gap-1"
                  >
                    <HiHeart className="w-4 h-4" />
                    <span className="hidden sm:inline">Save</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.slug)}
                    className="text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1"
                  >
                    <HiTrash className="w-4 h-4" />
                    <span className="hidden sm:inline">Remove</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-2 text-right">
              <span className="text-sm text-gray-500">Item Total: </span>
              <span className="text-sm font-semibold text-gray-900">
                ₹{(item.price * item.qty).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  },
);

CartItem.displayName = "CartItem";

export default function CartPage() {
  const { items, updateQty, removeFromCart, subtotal } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [formError, setFormError] = useState("");
  const [savedItems, setSavedItems] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Memoized calculations
  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.qty, 0),
    [items],
  );

  const deliveryCharge = useMemo(() => (subtotal > 999 ? 0 : 99), [subtotal]);

  const grandTotal = useMemo(
    () => subtotal + deliveryCharge,
    [subtotal, deliveryCharge],
  );

  // Optimized handlers with useCallback
  const handleNameChange = useCallback((e) => {
    setCustomerName(e.target.value);
    setFormError("");
  }, []);

  const handlePhoneChange = useCallback((e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setCustomerPhone(value);
    setFormError("");
  }, []);

  const handleAddressChange = useCallback((e) => {
    setCustomerAddress(e.target.value);
    setFormError("");
  }, []);

  const saveForLater = useCallback(
    (item) => {
      setSavedItems((prev) => [...prev, item]);
      removeFromCart(item.slug);
    },
    [removeFromCart],
  );

  const moveToCart = useCallback((item) => {
    setSavedItems((prev) => prev.filter((i) => i.slug !== item.slug));
  }, []);

  // Build WhatsApp message
  const buildWhatsAppMessage = useCallback(() => {
    const lines = [];
    lines.push("🛍️ *New Order*");
    lines.push("━━━━━━━━━━━━━━━━");
    lines.push(`👤 *Customer:* ${customerName.trim()}`);
    lines.push(`📱 *Phone:* ${customerPhone.trim()}`);
    lines.push(`📍 *Address:* ${customerAddress.trim()}`);
    lines.push("━━━━━━━━━━━━━━━━");
    lines.push("📋 *Order Items:*");

    items.forEach((item, index) => {
      const lineTotal = (item.price * item.qty).toFixed(2);
      lines.push(
        `${index + 1}. ${item.name}${item.brand ? ` (${item.brand})` : ""}`,
      );
      lines.push(`   ${item.qty} × ₹${item.price} = ₹${lineTotal}`);
    });

    lines.push("━━━━━━━━━━━━━━━━");
    lines.push(`📦 *Items:* ${totalItems}`);
    lines.push(`💰 *Subtotal:* ₹${subtotal.toFixed(2)}`);
    if (deliveryCharge > 0) {
      lines.push(`🚚 *Delivery:* ₹${deliveryCharge}`);
    } else {
      lines.push(`🚚 *Delivery:* FREE`);
    }
    lines.push(`✨ *Total:* ₹${grandTotal.toFixed(2)}`);
    lines.push("━━━━━━━━━━━━━━━━");
    lines.push("🙏 Thank you for your order!");

    return lines.join("\n");
  }, [
    items,
    customerName,
    customerPhone,
    customerAddress,
    totalItems,
    subtotal,
    deliveryCharge,
    grandTotal,
  ]);

  const handleContinue = useCallback(() => {
    const name = customerName.trim();
    const phone = customerPhone.trim();
    const address = customerAddress.trim();

    if (!name || !phone || !address) {
      setFormError("Please fill in all required fields");
      return;
    }

    const digitCount = phone.replace(/\D/g, "");
    if (digitCount.length < 10) {
      setFormError("Please enter a valid 10-digit phone number");
      return;
    }

    if (address.length < 10) {
      setFormError("Please enter a complete delivery address");
      return;
    }

    setFormError("");
    setIsProcessing(true);

    const message = buildWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setIsProcessing(false);
    }, 300);
  }, [customerName, customerPhone, customerAddress, buildWhatsAppMessage]);

  // Whether all 3 required fields are valid — used to enable/disable the button
  const isFormValid = useMemo(() => {
    const name = customerName.trim();
    const phone = customerPhone.trim();
    const address = customerAddress.trim();
    return (
      name.length > 0 &&
      phone.replace(/\D/g, "").length === 10 &&
      address.length >= 10
    );
  }, [customerName, customerPhone, customerAddress]);

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-[#082d4a] to-[#0d4f7c] rounded-3xl mb-8 shadow-2xl shadow-[#082d4a]/20">
              <HiShoppingBag className="w-14 h-14 text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto text-lg">
              Looks like you haven&apos;t added anything to your cart yet.
              Explore our products and find something you love!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#082d4a] to-[#0d4f7c] text-white rounded-2xl font-semibold shadow-xl shadow-[#082d4a]/20 hover:shadow-2xl hover:shadow-[#082d4a]/30 transition-all duration-300">
                  Browse Products
                  <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/">
                <button className="inline-flex items-center px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold hover:border-[#082d4a] hover:text-[#082d4a] transition-all duration-300">
                  <HiArrowLeft className="mr-2" />
                  Back to Home
                </button>
              </Link>
            </div>

            {/* Features */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                {
                  icon: HiSparkles,
                  text: "Premium Quality",
                  color: "from-amber-500 to-orange-500",
                },
                {
                  icon: HiFire,
                  text: "Trending Now",
                  color: "from-red-500 to-pink-500",
                },
                {
                  icon: HiGift,
                  text: "Great Deals",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#082d4a] via-[#0a3857] to-[#0d4f7c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <HiTruck className="w-4 h-4" />
              <span className="hidden sm:inline">
                Free delivery on orders above ₹999
              </span>
              <span className="sm:hidden">Free delivery above ₹999</span>
            </div>
            <div className="hidden sm:flex items-center gap-6">
              <span className="flex items-center gap-1">
                <HiShieldCheck className="w-4 h-4" />
                Secure Checkout
              </span>
              <span className="flex items-center gap-1">
                <HiCreditCard className="w-4 h-4" />
                Easy Payments
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#082d4a] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Cart</span>
        </nav>

        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Cart Header */}
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HiShoppingBag className="w-6 h-6 text-[#082d4a]" />
                    <h1 className="text-2xl font-bold text-gray-900">
                      Shopping Cart ({totalItems} items)
                    </h1>
                  </div>
                  <Link
                    href="/products"
                    className="text-sm text-[#082d4a] hover:underline flex items-center gap-1"
                  >
                    <HiArrowLeft className="w-4 h-4" />
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Cart Items */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="divide-y divide-gray-50"
              >
                <AnimatePresence mode="popLayout">
                  {items.map((item, index) => (
                    <CartItem
                      key={item.slug}
                      item={item}
                      index={index}
                      updateQty={updateQty}
                      removeFromCart={removeFromCart}
                      saveForLater={saveForLater}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Saved Items Section */}
            {savedItems.length > 0 && (
              <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <HiHeart className="w-5 h-5 text-red-500" />
                    Saved for Later ({savedItems.length})
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {savedItems.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => moveToCart(item)}
                      className="flex items-center gap-3 p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">₹{item.price}</p>
                      </div>
                      <HiPlus className="w-4 h-4 text-[#082d4a] flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-4 mt-6 lg:mt-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Price Details */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <HiCreditCard className="w-5 h-5 text-[#082d4a]" />
                    Price Details
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">
                      Price ({totalItems} items)
                    </span>
                    <span className="font-medium text-gray-900">
                      ₹{subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Delivery Charges</span>
                    {deliveryCharge === 0 ? (
                      <span className="text-green-600 font-medium flex items-center gap-1">
                        <HiCheckCircle className="w-4 h-4" />
                        FREE
                      </span>
                    ) : (
                      <span className="font-medium text-gray-900">
                        ₹{deliveryCharge}
                      </span>
                    )}
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-semibold text-gray-900">
                        Total Amount
                      </span>
                      <span className="text-2xl font-bold text-[#082d4a]">
                        ₹{grandTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  {deliveryCharge > 0 && (
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-xl text-xs text-blue-700 border border-blue-100">
                      <span className="font-medium">🎉 Almost there!</span> Add
                      ₹{(999 - subtotal).toFixed(2)} more to get FREE delivery!
                    </div>
                  )}
                </div>
              </div>

              {/* Customer Details */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <HiShieldCheck className="w-5 h-5 text-[#082d4a]" />
                  Contact Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="customerName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="customerName"
                      type="text"
                      value={customerName}
                      onChange={handleNameChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#082d4a]/20 focus:border-[#082d4a] transition-all bg-gray-50 hover:bg-white focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="customerPhone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="customerPhone"
                      type="tel"
                      value={customerPhone}
                      onChange={handlePhoneChange}
                      placeholder="Enter 10-digit number"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#082d4a]/20 focus:border-[#082d4a] transition-all bg-gray-50 hover:bg-white focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="customerAddress"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Delivery Address *
                    </label>
                    <div className="relative">
                      <HiMapPin className="absolute left-4 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                      <textarea
                        id="customerAddress"
                        value={customerAddress}
                        onChange={handleAddressChange}
                        placeholder="House no, street, area, city, pincode"
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#082d4a]/20 focus:border-[#082d4a] transition-all bg-gray-50 hover:bg-white focus:bg-white resize-none"
                      />
                    </div>
                  </div>
                  {formError && (
                    <div className="text-sm text-red-500 bg-red-50 p-3 rounded-xl border border-red-100">
                      {formError}
                    </div>
                  )}
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handleContinue}
                disabled={isProcessing || !isFormValid}
                className="w-full relative flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#082d4a] to-[#0d4f7c] text-white text-base font-semibold rounded-2xl hover:from-[#0a3857] hover:to-[#0f5a8a] transition-all shadow-lg shadow-[#082d4a]/20 hover:shadow-xl hover:shadow-[#082d4a]/30 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Place Order via WhatsApp
                    <HiArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    icon: HiShieldCheck,
                    text: "Secure",
                    color: "text-green-500",
                  },
                  {
                    icon: HiTruck,
                    text: "Fast Delivery",
                    color: "text-blue-500",
                  },
                  {
                    icon: HiCreditCard,
                    text: "Easy Pay",
                    color: "text-purple-500",
                  },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1 p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
                  >
                    <badge.icon className={`w-5 h-5 ${badge.color}`} />
                    <span className="text-xs text-gray-600 text-center">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

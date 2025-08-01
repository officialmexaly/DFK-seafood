"use client"

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Search, User, Menu, X, Star, ArrowRight, Zap, Shield, Truck, Fish, Waves, Clock, Award, ChefHat, Thermometer, MapPin, Phone, Mail, Users, TrendingUp, Globe, Anchor, Camera, Video } from 'lucide-react';

const SeafoodEcommerce = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [currentView, setCurrentView] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "Atlantic Salmon Fillet",
      price: 28,
      originalPrice: 35,
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=300&fit=crop",
      category: "fish",
      rating: 4.9,
      reviews: 124,
      badge: "Fresh Today",
      weight: "1 lb",
      origin: "Norway"
    },
    {
      id: 2,
      name: "King Crab Legs",
      price: 89,
      originalPrice: 110,
      image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&h=300&fit=crop",
      category: "shellfish",
      rating: 4.8,
      reviews: 89,
      badge: "Premium",
      weight: "2 lbs",
      origin: "Alaska"
    },
    {
      id: 3,
      name: "Jumbo Shrimp",
      price: 24,
      originalPrice: 32,
      image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&h=300&fit=crop",
      category: "shellfish",
      rating: 4.7,
      reviews: 203,
      badge: "Wild Caught",
      weight: "1.5 lbs",
      origin: "Gulf of Mexico"
    },
    {
      id: 4,
      name: "Fresh Tuna Steaks",
      price: 45,
      originalPrice: 55,
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=300&fit=crop",
      category: "fish",
      rating: 4.6,
      reviews: 67,
      badge: "Sushi Grade",
      weight: "8 oz",
      origin: "Pacific"
    },
    {
      id: 5,
      name: "Lobster Tails",
      price: 65,
      originalPrice: 80,
      image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=300&h=300&fit=crop",
      category: "shellfish",
      rating: 4.9,
      reviews: 156,
      badge: "Live Fresh",
      weight: "4 pieces",
      origin: "Maine"
    },
    {
      id: 6,
      name: "Sea Bass Fillet",
      price: 32,
      originalPrice: 42,
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=300&fit=crop",
      category: "fish",
      rating: 4.5,
      reviews: 98,
      badge: "Sustainable",
      weight: "1.2 lbs",
      origin: "Mediterranean"
    },
    {
      id: 7,
      name: "Scallops",
      price: 38,
      originalPrice: 48,
      image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&h=300&fit=crop",
      category: "shellfish",
      rating: 4.8,
      reviews: 112,
      badge: "Diver Caught",
      weight: "1 lb",
      origin: "Atlantic"
    },
    {
      id: 8,
      name: "Mahi Mahi",
      price: 26,
      originalPrice: 34,
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=300&fit=crop",
      category: "fish",
      rating: 4.6,
      reviews: 85,
      badge: "Tropical Fresh",
      weight: "1.5 lbs",
      origin: "Hawaii"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "2M+", label: "Pounds Delivered", icon: TrendingUp },
    { number: "15+", label: "Countries Sourced", icon: Globe },
    { number: "24/7", label: "Fresh Guarantee", icon: Clock }
  ];

  const locations = [
    {
      id: 1,
      name: "Pacific Northwest",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      specialty: "Wild Salmon & Dungeness Crab",
      description: "Our primary sourcing location for premium Pacific seafood"
    },
    {
      id: 2,
      name: "Maine Coast",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      specialty: "Lobster & Fresh Oysters",
      description: "Traditional fishing grounds for the finest East Coast shellfish"
    },
    {
      id: 3,
      name: "Gulf of Mexico",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      specialty: "Shrimp & Red Snapper",
      description: "Warm waters producing the most flavorful Gulf seafood"
    }
  ];

  const team = [
    {
      id: 1,
      name: "Captain James Mitchell",
      role: "Head of Sourcing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&face",
      experience: "25 Years at Sea"
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Quality Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&face",
      experience: "Marine Biology PhD"
    },
    {
      id: 3,
      name: "Chef David Kim",
      role: "Culinary Advisor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&face",
      experience: "Michelin Star Chef"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Seafood', icon: '🐟' },
    { id: 'fish', name: 'Fresh Fish', icon: '🐠' },
    { id: 'shellfish', name: 'Shellfish', icon: '🦐' },
    { id: 'frozen', name: 'Frozen', icon: '❄️' }
  ];

  const recipes = [
    {
      id: 1,
      name: "Grilled Salmon with Herbs",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
      time: "25 mins",
      difficulty: "Easy"
    },
    {
      id: 2,
      name: "Lobster Bisque",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      time: "45 mins",
      difficulty: "Medium"
    },
    {
      id: 3,
      name: "Shrimp Scampi Pasta",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      time: "20 mins",
      difficulty: "Easy"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Chef Marcus Johnson",
      role: "Executive Chef",
      comment: "The quality is unmatched. My restaurant only sources from Afro Seafood's.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&face"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Home Cook",
      comment: "Fresh delivery every time. The salmon was restaurant quality!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&face"
    },
    {
      id: 3,
      name: "David Chen",
      role: "Sushi Chef",
      comment: "Perfect sushi-grade tuna. My customers love the freshness.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&face"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const toggleWishlist = (product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const ProductCard = ({ product, index = 0 }) => {
    const isInWishlist = wishlistItems.some(item => item.id === product.id);
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
      <div 
        className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 w-64 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {product.badge}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
              -{discount}%
            </span>
          </div>
          <button
            onClick={() => toggleWishlist(product)}
            className={`absolute top-12 right-3 p-2 rounded-full transition-all duration-300 ${
              isInWishlist 
                ? 'bg-red-500 text-white' 
                : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
          </div>
          
          <h3 className="font-bold text-base mb-2 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>

          <div className="flex justify-between text-xs text-gray-500 mb-3">
            <span>{product.weight}</span>
            <span>{product.origin}</span>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          </div>
          
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-2 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  const HomePage = () => (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-teal-900 to-cyan-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <Waves className="absolute inset-0 w-full h-full text-white/10" />
        <div className={`relative z-10 text-center text-white max-w-4xl px-6 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <Fish className="w-16 h-16 mx-auto mb-6 text-teal-300 animate-bounce" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
            Afro Seafood's
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Premium fresh seafood delivered daily from ocean to your door
          </p>
          <button 
            onClick={() => setCurrentView('products')}
            className="group bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl flex items-center gap-3 mx-auto animate-pulse"
          >
            Shop Fresh Seafood
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 text-gray-800 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>Why Choose Afro Seafood's?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: Thermometer, title: "Fresh Daily", desc: "Delivered within 24 hours of catch", color: "text-blue-600" },
            { icon: Shield, title: "Quality Guaranteed", desc: "100% satisfaction or money back", color: "text-teal-600" },
            { icon: Truck, title: "Fast Delivery", desc: "Same day delivery in major cities", color: "text-cyan-600" },
            { icon: Award, title: "Sustainably Sourced", desc: "Responsibly caught seafood", color: "text-green-600" }
          ].map((feature, idx) => (
            <div 
              key={idx} 
              className={`text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 w-72 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <feature.icon className={`w-10 h-10 mx-auto mb-4 ${feature.color}`} />
              <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 text-gray-800 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>Today's Fresh Catch</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button 
            onClick={() => setCurrentView('products')}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105"
          >
            View All Seafood
          </button>
        </div>
      </div>

      {/* Recipe Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <ChefHat className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-bounce" />
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Chef's Recommendations</h2>
            <p className="text-gray-600 text-lg">Delicious recipes to make the most of your fresh seafood</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {recipes.map((recipe, index) => (
              <div 
                key={recipe.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 w-80 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">{recipe.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {recipe.time}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {recipe.difficulty}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold text-center mb-12 text-gray-800 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 w-80 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 250}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl font-bold text-white mb-4 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>Stay Updated with Daily Catches</h2>
          <p className={`text-blue-100 mb-8 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>Get notifications when your favorite seafood is fresh and available</p>
          <div className={`max-w-md mx-auto flex gap-4 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/10 backdrop-blur-lg text-white placeholder-white/70"
            />
            <button className="bg-white/20 backdrop-blur-lg text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 border border-white/20">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section with Glassmorphism */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className={`text-4xl font-bold text-center mb-12 text-gray-800 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>Afro Seafood's by the Numbers</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`bg-white/20 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 w-64 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sourcing Locations Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Anchor className="w-12 h-12 mx-auto mb-4 text-blue-600 animate-bounce" />
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Sourcing Locations</h2>
            <p className="text-gray-600 text-lg">From the finest fishing grounds around the world</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {locations.map((location, index) => (
              <div 
                key={location.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden w-80 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{location.name}</h3>
                    <p className="text-sm opacity-90">{location.specialty}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{location.description}</p>
                  <button className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    <MapPin className="w-4 h-4" />
                    View on Map
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Team Section with Glassmorphism */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-blue-900 to-cyan-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4 text-white">Meet Our Expert Team</h2>
            <p className="text-blue-100 text-lg">The people behind your perfect seafood experience</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, index) => (
              <div 
                key={member.id}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 w-72 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/30"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-200 mb-2">{member.role}</p>
                <p className="text-sm text-blue-100">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section with Glassmorphism */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Video className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold mb-4 text-gray-800">From Ocean to Your Table</h2>
            <p className="text-gray-600 text-lg">Watch how we maintain freshness every step of the way</p>
          </div>
          <div className={`max-w-4xl mx-auto ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            <div className="relative group cursor-pointer">
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-teal-600 h-96">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Our Commitment to Quality</h3>
                    <p className="text-blue-100">See how we ensure every catch meets our premium standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section with Glassmorphism */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-600 to-cyan-600"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-12 ${isLoaded ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
            <p className="text-blue-100 text-lg">Have questions? We're here to help with your seafood needs</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Phone, title: "Call Us", info: "1-800-SEAFOOD", desc: "Mon-Fri 8AM-8PM EST" },
              { icon: Mail, title: "Email Us", info: "hello@oceanfinest.com", desc: "24/7 Support Available" },
              { icon: MapPin, title: "Visit Us", info: "123 Harbor Way", desc: "Seattle, WA 98101" }
            ].map((contact, index) => (
              <div 
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 w-72 ${isLoaded ? 'animate-slideInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <contact.icon className="w-10 h-10 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                <p className="text-blue-100 font-semibold mb-1">{contact.info}</p>
                <p className="text-sm text-blue-200">{contact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ProductsPage = () => (
    <div className="container mx-auto px-6 py-8">
      {/* Search and Filter Bar */}
      <div className="mb-8 space-y-6">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search seafood..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <Fish className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <p className="text-xl text-gray-500">No seafood found matching your criteria.</p>
        </div>
      )}
    </div>
  );

  const CartPage = () => (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Fresh Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingCart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
          <p className="text-xl text-gray-500 mb-6">Your cart is empty</p>
          <button 
            onClick={() => setCurrentView('products')}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300"
          >
            Shop Fresh Seafood
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-6">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{item.weight} • {item.origin}</p>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h3 className="font-bold text-xl mb-4 text-gray-800">Order Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fresh Delivery</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Ice Packaging</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-blue-600">${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 mb-3">
              Checkout Securely
            </button>
            <p className="text-xs text-gray-500 text-center">🧊 Delivered fresh with ice packing</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Fish className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Afro Seafood's
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { key: 'home', label: 'Home' },
                { key: 'products', label: 'Fresh Seafood' },
                { key: 'cart', label: 'Cart' }
              ].map(item => (
                <button
                  key={item.key}
                  onClick={() => setCurrentView(item.key)}
                  className={`font-semibold transition-colors hover:text-blue-600 ${
                    currentView === item.key ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User className="w-6 h-6 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <Heart className="w-6 h-6 text-gray-700" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setCurrentView('cart')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              >
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-white/20">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {[
                { key: 'home', label: 'Home' },
                { key: 'products', label: 'Fresh Seafood' },
                { key: 'cart', label: 'Cart' }
              ].map(item => (
                <button
                  key={item.key}
                  onClick={() => {
                    setCurrentView(item.key);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left font-semibold py-2 transition-colors hover:text-blue-600 ${
                    currentView === item.key ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {currentView === 'home' && <HomePage />}
        {currentView === 'products' && <ProductsPage />}
        {currentView === 'cart' && <CartPage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="w-8 h-8 text-teal-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Afro Seafood's
                </h3>
              </div>
              <p className="text-gray-400 mb-4">Premium fresh seafood delivered daily from ocean to your door. Sustainably sourced, expertly handled, and guaranteed fresh.</p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Thermometer className="w-4 h-4" />
                <span>Always delivered at optimal temperature</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Fresh Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Fresh Fish</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shellfish</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sushi Grade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Frozen Seafood</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Freshness Guarantee</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Delivery Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Storage Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Our Fleet</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chef Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">&copy; 2025 Afro Seafood's. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <span className="text-gray-400 text-sm">🌊 Sustainably Sourced</span>
                <span className="text-gray-400 text-sm">❄️ Cold Chain Certified</span>
                <span className="text-gray-400 text-sm">🚚 24hr Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        /* Glassmorphism utilities */
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .glass-dark {
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default SeafoodEcommerce;
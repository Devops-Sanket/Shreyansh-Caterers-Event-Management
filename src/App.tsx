/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Award,
  ShieldCheck,
  Utensils,
  ChevronRight,
  CalendarDays,
  Check,
  CheckCircle2,
  MessageSquare,
  Menu,
  X,
  Plus,
  Sparkles,
  Heart,
  Camera,
  Briefcase,
  Users,
  Building,
  Volume2,
  HelpCircle,
  ThumbsUp,
  Flame,
  ArrowRight
} from "lucide-react";

import {
  BUSINESS_INFO,
  CULINARY_SPECIALTIES,
  SERVICES,
  EVENT_SHOWCASE,
  REVIEWS,
  GALLERY_PHOTOS,
  FAQS,
  LOCAL_SEO_KEYWORDS
} from "./data";

import NashikCanvasBackground from "./components/NashikCanvasBackground";
import VoiceWelcome from "./components/VoiceWelcome";
import CateringEstimator from "./components/CateringEstimator";

export default function App() {
  // Navigation states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Specialties Active Section Tab
  const [activeSpecialtyTab, setActiveSpecialtyTab] = useState(CULINARY_SPECIALTIES[0].id);

  // Gallery view filter
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("All");

  // Selected lightbox image
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<typeof GALLERY_PHOTOS[0] | null>(null);

  // Form Fields State
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryDate, setInquiryDate] = useState("");
  const [inquiryType, setInquiryType] = useState("Wedding");
  const [inquiryGuests, setInquiryGuests] = useState("150");
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  // Sticky Navigation Bar detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form Submit Action (Generates customized WhatsApp redirection or locally saves)
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;

    // Build specific WhatsApp Inquiry Text
    const waText = `*WEBSITE INQUIRY - SHREYANSH CATERERS*%0A%0A` +
      `*Client:* ${inquiryName}%0A` +
      `*Phone:* ${inquiryPhone}%0A` +
      `*Event Type:* ${inquiryType}%0A` +
      `*Guest Count:* ${inquiryGuests} People%0A` +
      `*Event Date:* ${inquiryDate || "Not Set"}%0A` +
      `*Message:* ${inquiryMessage || "Please arrange thali details."}%0A%0A` +
      `Please contact me directly to proceed with booking calculations. Thank you!`;

    setIsSubmitSuccess(true);
    setTimeout(() => {
      // Redirect to WhatsApp
      window.open(`https://wa.me/918511071957?text=${waText}`, "_blank");
      setIsSubmitSuccess(false);
    }, 1200);
  };

  const categories = ["All", "Cuisines", "Decoration", "Catering"];
  
  const filteredGallery = activeGalleryFilter === "All"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(photo => photo.category === activeGalleryFilter);

  return (
    <div className="font-sans min-h-screen selection:bg-saffron-100 selection:text-saffron-900 relative">
      
      {/* 1. Cinematic Nashik 3D-styled Interactive Canvas Background */}
      <NashikCanvasBackground />

      {/* 2. Audio Greetings voice narrator tool */}
      <VoiceWelcome />

      {/* 3. Top Banner & Brand Hub Highlights */}
      <header className="w-full text-xs font-medium bg-[#1F1710] text-[#EBE6DD] py-2 px-4 shadow-sm z-50 relative font-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center text-center">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-saffron-500" />
              <span>DGP Nagar 2, Ambad, Nashik</span>
            </span>
            <span className="h-3 w-px bg-stone-700 hidden md:inline"></span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-saffron-500" />
              <span>Open: 9:00 AM – 9:00 PM (Daily)</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 bg-[#2C2117] text-[#FACF91] px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-[#3E2F20]">
              <Star className="h-3 w-3 fill-[#FACF91]" />
              <span>4.7 Star Rated Company</span>
            </span>
            <a href="tel:+918511071957" className="hover:text-saffron-400 font-bold transition-all flex items-center gap-1 text-[11px]">
              <Phone className="h-3 w-3 text-saffron-500 animate-bounce" />
              <span>Call Support: +91 8511071957</span>
            </a>
          </div>
        </div>
      </header>

      {/* 4. Elegant Sticky Header Navigation with Professional Polish */}
      <nav
        id="navbar-widget"
        className={`sticky top-0 w-full transition-all duration-300 z-40 ${
          isScrolled
            ? "glass-polish shadow-md py-3"
            : "bg-[#FFFDF5]/90 backdrop-blur-md py-4 border-b border-[#C5A059]/25"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo Brand with Indian Motifs */}
          <a href="#hero-section" className="flex items-center gap-2.5 group">
            <div className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-[#1F2937] flex items-center justify-center text-white shadow-md relative overflow-hidden group-hover:scale-105 transition-transform">
              <Utensils className="h-5 w-5 text-[#C5A059]" />
              <div className="absolute inset-0 border border-[#C5A059]/20 rounded-full scale-90" />
            </div>
            <div>
              <span className="block text-base md:text-lg font-serif font-extrabold text-[#1F2937] tracking-tight leading-none group-hover:text-saffron-600 transition-colors">
                Shreyansh Caterers
              </span>
              <span className="block text-[10px] md:text-[11px] text-[#C5A059] font-medium uppercase tracking-wider font-sans mt-1">
                Pure Veg & Event Management • Nashik
              </span>
            </div>
          </a>

          {/* Desktop Navigation list */}
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-slate-700 tracking-wide">
            <a href="#about-section" className="hover:text-saffron-600 transition-colors leading-5">About Us</a>
            <a href="#specialties-section" className="hover:text-saffron-600 transition-colors leading-5">Our Specialties</a>
            <a href="#services-section" className="hover:text-saffron-600 transition-colors leading-5">Services</a>
            <a href="#estimator-section" className="hover:text-saffron-600 transition-colors leading-5 text-[#b55512]">Custom Planner</a>
            <a href="#showcase-section" className="hover:text-saffron-600 transition-colors leading-5">Wedding Decor</a>
            <a href="#gallery-section" className="hover:text-saffron-600 transition-colors leading-5">Gallery</a>
            <a href="# отзывы-testimonials" className="hover:text-saffron-600 transition-colors leading-5">Reviews</a>
            <a href="#contact-section" className="hover:text-saffron-600 transition-colors leading-5">Contact</a>
          </div>

          {/* Call to Activity CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#estimator-section"
              className="py-2.5 px-4 rounded-xl border border-saffron-500 text-saffron-600 text-xs font-bold hover:bg-saffron-550 hover:bg-saffron-500 hover:text-white transition-all shadow-sm"
            >
              Plan Menu
            </a>
            <a
              href="https://wa.me/918511071957"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-saffron-500 to-gold-500 text-white text-xs font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all font-sans"
            >
              Book Catering
            </a>
          </div>

          {/* Mobile Hamburg menu click triggers */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="mobile-menu-trigger"
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-slate-700 hover:text-saffron-600 hover:bg-cream-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu expanded state panels */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              id="mobile-navigation-drawer"
              className="lg:hidden bg-[#FAF9F5] border-t border-[#fbe6ba]/45 px-6 py-4 space-y-3.5 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col gap-3 font-semibold text-sm text-[#1F2937]">
                <a href="#about-section" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-saffron-500 flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span>About Us</span> <ChevronRight className="h-4 w-4 text-stone-300" />
                </a>
                <a href="#specialties-section" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-saffron-500 flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span>Traditional Specialties</span> <ChevronRight className="h-4 w-4 text-stone-300" />
                </a>
                <a href="#services-section" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-saffron-500 flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span>Catering Packages</span> <ChevronRight className="h-4 w-4 text-stone-300" />
                </a>
                <a href="#estimator-section" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-saffron-500 flex items-center justify-between py-1.5 border-b border-stone-100 text-saffron-600">
                  <span>Interactive Buffet Planner</span> <ChevronRight className="h-4 w-4 text-saffron-300" />
                </a>
                <a href="#showcase-section" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-saffron-500 flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span>Wedding Stages</span> <ChevronRight className="h-4 w-4 text-stone-300" />
                </a>
                <a href="#gallery-section" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-saffron-500 flex items-center justify-between py-1.5 border-b border-stone-100">
                  <span>Photographs Gallery</span> <ChevronRight className="h-4 w-4 text-stone-300" />
                </a>
                <a href="#contact-section" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-saffron-500 flex items-center justify-between py-1.5">
                  <span>Contact Details</span> <ChevronRight className="h-4 w-4 text-stone-300" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-100">
                <a
                  href="tel:+918511071957"
                  className="py-3 px-4 rounded-xl border border-stone-300 hover:bg-stone-50 text-slate-800 text-xs font-bold text-center flex items-center justify-center gap-1"
                >
                  <Phone className="h-3 w-3" />
                  <span>Call Shreyansh</span>
                </a>
                <a
                  href="https://wa.me/918511071957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-saffron-500 text-white text-xs font-bold text-center flex items-center justify-center gap-1 shadow-md"
                >
                  <MessageSquare className="h-3 w-3" />
                  <span>Catering WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 5. HERO SECTION */}
      <section
        id="hero-section"
        className="relative pt-8 pb-16 md:pt-16 md:pb-28 overflow-hidden max-w-7xl mx-auto px-4 md:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left: Text Content Layout */}
          <div className="lg:col-span-7 text-left space-y-6 relative z-10">
            {/* Top Rating Pill */}
            <div className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-saffron-50 border border-saffron-200/60 shadow-sm">
              <span className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                ))}
              </span>
              <span className="text-xs font-bold text-[#b55512] font-sans">
                Nashik’s Gold Standard (4.7★)
              </span>
            </div>

            {/* Business Titles */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif font-extrabold text-[#1F2937] tracking-tight leading-tight">
              Shreyansh Caterers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#F27D26] italic">
                & Event Management
              </span>
            </h1>

            {/* Tagline defined in metadata */}
            <p className="text-lg md:text-xl font-sans font-medium text-slate-700 max-w-xl italic border-l-4 border-[#F27D26] pl-4 py-1">
              "Pure Veg Catering & Event Management for Every Celebration"
            </p>

            <p className="text-sm md:text-base text-slate-500 font-sans leading-relaxed max-w-lg">
              Nashik's premier culinary craftsmen catering traditional Maharashtrian weddings, Brahmin Satvik poojas, premium Punjabi feasts, and royal Gujarati parties. We effortlessly serve gatherings of up to 1000+ guest capacities.
            </p>

            {/* Quick trust metrics badge */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-800 leading-none">Pure Veg Only</span>
                  <span className="block text-[10px] text-slate-400 mt-0.5">100% Sacred Kitchen</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center">
                  <Award className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-800 leading-none">Est. 2020</span>
                  <span className="block text-[10px] text-slate-400 mt-0.5">5+ Years of Trust</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="h-9 w-9 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
                  <Flame className="h-4 w-4 text-saffron-500 diya-glow" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-800 leading-none">Nashik Local</span>
                  <span className="block text-[10px] text-slate-400 mt-0.5">Ambad & DGP Nagar</span>
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="#estimator-section"
                className="py-4 px-8 rounded-2xl bg-gradient-to-r from-saffron-500 to-gold-500 hover:from-saffron-600 hover:to-gold-600 hover:-translate-y-0.5 active:translate-y-0 text-white font-sans font-bold text-sm text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Utensils className="h-4 w-4" />
                <span>Book Catering Thali</span>
              </a>
              <a
                href="tel:+918511071957"
                className="py-4 px-8 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:bg-cream-100 font-sans font-bold text-sm text-center transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="h-4 w-4 text-saffron-500" />
                <span>Call Now: +91 8511071957</span>
              </a>
            </div>
          </div>

          {/* Hero Right: Pure Veg Thali Visual with real CSS steam lines & floating leaves */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-10 lg:py-0">
            {/* Elegant luxury circular background frames */}
            <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-[#FACF91]/50 scale-110 pointer-events-none animate-spin duration-100" />
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-tr from-amber-50 to-orange-50 -z-10 blur-xl opacity-70" />
            
            {/* The Thali container */}
            <div className="relative group">
              {/* Thali shadow background */}
              <div className="absolute inset-5 rounded-full bg-stone-900/10 blur-2xl group-hover:scale-105 transition-transform duration-500" />

              {/* Pure Veg Maharashtrian Thali main image */}
              <img
                src={CULINARY_SPECIALTIES[0].image}
                alt="Shreyansh Royal Pure Veg Catering Thali Nashik"
                referrerPolicy="no-referrer"
                className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full object-cover border-4 border-white shadow-2xl relative z-10 transition-transform duration-700 hover:rotate-6"
              />

              {/* Saffron and Gold Accent Petal / Spices overlay circles floating */}
              <div className="absolute top-2 left-6 z-20 h-10 w-10 bg-white shadow-md border border-saffron-200 rounded-full flex items-center justify-center text-xs animate-bounce" style={{ animationDuration: "3s" }}>
                🍁
              </div>
              <div className="absolute bottom-6 right-2 z-20 h-12 w-12 bg-white shadow-lg border border-gold-200 rounded-full flex items-center justify-center text-base animate-bounce" style={{ animationDuration: "4.5s" }}>
                🌶️
              </div>
              <div className="absolute bottom-1/3 left-0 z-20 h-10 w-10 bg-white shadow-md border border-amber-100 rounded-full flex items-center justify-center text-xs animate-pulse" style={{ animationDuration: "2s" }}>
                🍊
              </div>

              {/* STEAM PIPING RISE SIMULATION (CSS Activated) */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-35 flex gap-1 justify-center pointer-events-none h-24">
                <span className="w-1 bg-[#b55512]/15 rounded-full steam-line filter blur-sm" />
                <span className="w-1 bg-[#da7122]/10 rounded-full steam-line-delayed-1 filter blur-sm" />
                <span className="w-1 bg-[#c29b23]/15 rounded-full steam-line-delayed-2 filter blur-sm" />
              </div>
            </div>

            {/* Pure Veg Green Badge */}
            <div className="absolute top-4 right-1/4 z-20 flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 py-1.5 px-3.5 rounded-full text-[11px] font-bold text-emerald-700 shadow shadow-emerald-100">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 border border-white inline-block animate-ping" />
              <span>100% PURE VEGETARIAN</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. ABOUT US SECTION */}
      <section
        id="about-section"
        className="py-16 md:py-24 border-t border-cream-200 bg-cream-luxury/50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image setup */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-saffron-100 rounded-full -z-10 mix-blend-multiply filter blur-xl opacity-75" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-100 rounded-full -z-10 mix-blend-multiply filter blur-xl opacity-75" />
              
              <div className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                <img
                  src={SERVICES[0].image}
                  alt="Shreyansh Catering and Event Team Buffet setup"
                  referrerPolicy="no-referrer"
                  className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* 5+ Years overlay text with Professional Polish elements */}
                <div className="absolute bottom-4 left-4 right-4 glass-polish p-4 rounded-2xl border border-white/45 flex items-center gap-4">
                  <span className="font-serif text-3xl font-extrabold text-saffron-600 block leading-none">
                    5+
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-[#1F2937]">Years of Golden Taste</span>
                    <span className="block text-[10px] text-slate-500">Established in Nashik (2020)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-saffron-600 tracking-wider uppercase">
                <Award className="h-4 w-4" />
                <span>Trusted Catering Architects</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                Crafting Culinary Legacies in Ambad Since 2020
              </h2>

              <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
                Shreyansh Caterers & Event Management is a trusted pure vegetarian catering company in Nashik providing premium services since 2020. Located opposite Balaji Mobile at Quadra Pentagon Apartment, DGP Nagar 2, Ambad, we specialize in high-end weddings, traditional birthday parties, housewarming grhapravesham rituals, and orthodox Brahmin-style satvik feasts.
              </p>

              <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed">
                We take pure pride in offering a fully independent commercial culinary team that never tolerates food mixing. Every single grain of spice is curated directly to align with cultural Vedic expectations. Beyond food, our extensive event decorations provide structural mandap design setups and wedding stages that transport clients to high-end royal properties.
              </p>

              {/* Core Strength list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2 text-xs md:text-sm font-sans font-medium text-slate-700">
                  <Check className="h-4 w-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                  <span>Gujarati, Punjabi & Marwari authentic cooks</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-sans font-medium text-slate-700">
                  <Check className="h-4 w-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                  <span>Brahmin No-Onion No-Garlic absolute purity</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-sans font-medium text-slate-700">
                  <Check className="h-4 w-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                  <span>Complete wedding mandaps & stage floral setup</span>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm font-sans font-medium text-slate-700">
                  <Check className="h-4 w-4 text-emerald-600 bg-emerald-50 rounded-full p-0.5 shrink-0" />
                  <span>State of the art ISO-style hygienic kitchen</span>
                </div>
              </div>

              {/* Founder Signature Quote Quote sign */}
              <div className="pt-4 border-t border-[#fbe6ba]/45 flex items-center gap-4">
                <p className="italic text-xs font-sans text-slate-500">
                  "Our sole ultimate priority is food hygiene and rich flavor. We feed your family and guests as if we are serving God."
                </p>
                <div className="text-right shrink-0">
                  <span className="block text-xs font-bold font-serif text-slate-800">Shreyansh</span>
                  <span className="block text-[10px] text-[#9e7d16] uppercase font-sans">Founder Director</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. SPECIALTIES SECTION (Premium Cuisine list) */}
      <section
        id="specialties-section"
        className="py-16 md:py-24 bg-cream-luxury/60 border-t border-cream-200"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-12">
          
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#F27D26] uppercase flex items-center justify-center gap-1.5">
              <Utensils className="h-4 w-4" />
              <span>Gourmet Traditions Showcase</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#1F2937]">
              Our 6 Pillars of Culinary Specialties
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-sans">
              Authentic multi-cuisine master chefs representing India's finest regional vegetarian cooking. Highly safe, hygienic, and cooked with gold standard ingredients.
            </p>
          </div>

          {/* Specialty Tabs Selector */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {CULINARY_SPECIALTIES.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setActiveSpecialtyTab(spec.id)}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                  activeSpecialtyTab === spec.id
                    ? "bg-[#1F2937] text-white shadow-md shadow-slate-900/10 scale-105"
                    : "bg-white text-slate-600 border border-[#C5A059]/20 hover:border-saffron-300"
                }`}
              >
                {spec.cuisine}
              </button>
            ))}
          </div>

          {/* Selected Specialty Content Layout Panel */}
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              {CULINARY_SPECIALTIES.map((spec) => {
                if (spec.id !== activeSpecialtyTab) return null;
                return (
                  <motion.div
                    key={spec.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-cream-200/50"
                  >
                    {/* Specialty Image inside Tab */}
                    <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-md max-h-[350px]">
                      <img
                        src={spec.image}
                        alt={spec.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-4 text-xs font-bold bg-saffron-500 text-white px-3 py-1 rounded-full">
                        ● Live Cater Counters
                      </span>
                    </div>

                    {/* Specialty text listing items */}
                    <div className="md:col-span-7 text-left space-y-4">
                      <span className="text-xs font-bold text-slate-400 font-mono uppercase tracking-widest">{spec.cuisine} Cuisine Code</span>
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">{spec.name}</h3>
                      <p className="text-xs md:text-sm text-slate-550 leading-relaxed font-sans">{spec.description}</p>
                      
                      <div className="pt-2">
                        <span className="text-xs font-bold text-slate-800 tracking-wider block mb-2.5">FEATURED SPECIALS:</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-700">
                          {spec.highlightItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 bg-gradient-to-r from-saffron-500 to-gold-500 rounded-full" />
                              <span className="font-semibold">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex flex-wrap gap-3 items-center">
                        <a
                          href="#estimator-section"
                          className="text-xs font-bold text-saffron-600 bg-saffron-50 px-3 py-2 rounded-lg border border-saffron-100 flex items-center gap-1 hover:bg-saffron-500 hover:text-white transition-colors"
                        >
                          <span>Estimate pricing thali</span>
                          <ChevronRight className="h-3 w-3" />
                        </a>
                        <span className="text-[11px] text-slate-450 font-sans italic">Custom preparation available in Ambad Nashik</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 8. SERVICES SECTION (Grid with hover actions) */}
      <section
        id="services-section"
        className="py-16 md:py-24 bg-cream-luxury/50 border-t border-cream-200"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase flex items-center justify-center gap-1.5">
              <Award className="h-4 w-4" />
              <span>Full-Stack Celebrations Coverage</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#1F2937]">
              Catering & Event Management Services
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-sans">
              From premium customized menus to full-scale wedding stage designs and marigold path setups. We serve with absolute elite hygiene.
            </p>
          </div>

          {/* Services Cards Grid with Professional Polish elevation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((serv) => (
              <div
                key={serv.id}
                id={`service-card-${serv.id}`}
                className="group bg-white rounded-2xl border border-[#C5A059]/20 shadow-sm p-5 space-y-4 hover:shadow-xl hover:border-saffron-100 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Card Thumbnail Image */}
                  <div className="w-full h-44 rounded-xl overflow-hidden relative">
                    <img
                      src={serv.image}
                      alt={serv.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 rounded-lg text-xs font-extrabold text-slate-800 shadow">
                      ● Pure Veg
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-saffron-600 transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-450 leading-relaxed font-sans">
                    {serv.description}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    {serv.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-650 font-sans font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <a
                    href="#estimator-section"
                    className="text-xs font-bold text-slate-700 hover:text-saffron-600 flex items-center gap-1 font-sans"
                  >
                    <span>Instant Planner Quote</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <span className="text-[10px] text-slate-400 font-sans tracking-wide uppercase font-bold">Ambad Division</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. INTERACTIVE MENUS BUILDER SECTION (Calculates quote detail redirection) */}
      <section
        id="estimator-section"
        className="py-16 md:py-24 bg-gradient-to-b from-[#1F2937] to-[#121824] text-white overflow-hidden relative"
      >
        {/* Floating background graphic rings */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full border border-dashed border-[#C5A059]/10 pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-8 w-80 h-80 rounded-full border border-dashed border-[#C5A059]/10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-20 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold tracking-widest text-[#F27D26] uppercase flex items-center justify-center gap-1.5">
              <Sparkles className="h-4 w-4 text-amber-200 animate-spin" />
              <span>Lead Generator Suite</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-white">
              Configure Your Ceremony Menu
            </h2>
            <p className="text-sm text-stone-300 font-sans leading-relaxed">
              Design a custom configuration for your up-to 1000+ guests feast. Calculate estimated thali items and instantly send an inquiry to Shreyansh on WhatsApp in one click.
            </p>
          </div>

          {/* Loaded catering estimator component file */}
          <CateringEstimator />
        </div>
      </section>

      {/* 10. WEDDING & STAGES SHOWCASE */}
      <section
        id="showcase-section"
        className="py-16 md:py-24 bg-cream-luxury/55 border-t border-cream-200 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#F27D26] uppercase flex items-center justify-center gap-1.5">
              <Camera className="h-4 w-4 text-saffron-500 animate-pulse" />
              <span>Floral mandaps & Royal Stage Decors</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#1F2937]">
              Cinematic Event Management Settings
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-sans">
              Review our beautifully lit Maharashtrian setups modeled with fresh flower garlands for high-end families.
            </p>
          </div>

          {/* Event management slide displays */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {EVENT_SHOWCASE.map((show) => (
              <div
                key={show.id}
                className="bg-white border border-[#C5A059]/20 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between"
              >
                <div className="w-full h-52 relative overflow-hidden">
                  <img
                    src={show.image}
                    alt={show.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1710]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 text-left space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-serif font-bold text-slate-900">{show.title}</h3>
                    <p className="text-xs md:text-sm text-slate-450 leading-relaxed font-sans">{show.description}</p>
                    
                    <div className="pt-2">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#9e7d16]">What's Included:</span>
                      <div className="mt-1.5 space-y-1">
                        {show.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-sans font-medium">
                            <span className="h-1 bg-saffron-500 w-1 rounded-full shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <a
                      href="#contact-section"
                      className="text-xs font-bold text-saffron-600 hover:text-saffron-700 font-sans"
                    >
                      Enquire Stage Package
                    </a>
                    <span className="text-[11px] text-[#bca075] font-mono">Premium Option</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. WHY CHOOSE US (Counters section) */}
      <section
        id="why-choose-us"
        className="py-16 md:py-24 bg-gradient-to-r from-saffron-50 to-gold-50 border-t border-cream-200"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-12">
          
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-saffron-500 uppercase flex items-center justify-center gap-1.5">
              <Award className="h-4 w-4 text-saffron-500" />
              <span>We Deliver perfection</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-slate-900">
              Why Shreyansh is Nashik's Trust Factor
            </h2>
            <p className="text-sm text-slate-500 font-sans leading-relaxed">
              We focus on absolute quality metrics. We have established rigorous benchmarks that turn catering events into hassle-free achievements.
            </p>
          </div>

          {/* Milestones grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { num: "1000+", label: "Guests Capacity", desc: "For Grand banquets", color: "text-saffron-600 font-bold", icon: Users },
              { num: "5+ Yrs", label: "Pure Trust", desc: "Established in 2020", color: "text-amber-600 font-bold", icon: Clock },
              { num: "100%", label: "Pure Vegetarian", desc: "No Onion-Garlic options", color: "text-emerald-700 font-bold", icon: ShieldCheck },
              { num: "20+", label: "Expert Chefs", desc: "Regional thali experts", color: "text-indigo-600 font-bold", icon: Utensils },
              { num: "15 min", label: "Response Rate", desc: "WhatsApp hotline", color: "text-red-600 font-bold", icon: MessageSquare },
              { num: "Clean", label: "Hygienic Kitchen", desc: "High water filtration", color: "text-pink-600 font-bold", icon: Building }
            ].map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#fbe6ba]/40 p-5 text-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="h-10 w-10 mx-auto rounded-full bg-saffron-50 flex items-center justify-center text-saffron-600 mb-3">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <span className={`block text-xl md:text-2xl font-serif tracking-tight leading-none ${stat.color}`}>
                    {stat.num}
                  </span>
                  <span className="block text-xs font-bold text-slate-800 mt-2 leading-tight">
                    {stat.label}
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-1 leading-none">
                    {stat.desc}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 12. GALLERY SECTION (Photo filters masonry modal popup) */}
      <section
        id="gallery-section"
        className="py-16 md:py-24 bg-cream-luxury/50 border-t border-cream-200"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10 text-center">
          
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase flex items-center justify-center gap-1.5">
              <Camera className="h-4 w-4" />
              <span>Visual Gallery Collection</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#1F2937]">
              Photographs from Nashik Banquets
            </h2>
            <p className="text-sm text-slate-500 font-sans leading-relaxed">
              Explore authentic high-resolution snapshots of our wedding settings, traditional plating schemes, dessert counters, and custom mandap decoration displays.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveGalleryFilter(cat)}
                className={`py-2 px-4 rounded-xl text-xs font-bold transition-all ${
                  activeGalleryFilter === cat
                    ? "bg-saffron-500 text-white shadow-md shadow-saffron-500/10 scale-105"
                    : "bg-stone-100 text-slate-600 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedLightboxImage(photo)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200 outline-none cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={photo.img}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-saffron-300">
                    {photo.category}
                  </span>
                  <h3 className="text-sm font-sans font-bold text-white mt-1">
                    {photo.title}
                  </h3>
                  <span className="text-[11px] text-[#EBE6DD] mt-1 italic">
                    Tap to view larger screen
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Pop-up view panel */}
          <AnimatePresence>
            {selectedLightboxImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedLightboxImage(null)}
                className="fixed inset-0 z-55 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={selectedLightboxImage.img}
                    alt={selectedLightboxImage.title}
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[70vh] object-contain mx-auto"
                  />
                  
                  <div className="p-6 bg-stone-950 text-left border-t border-stone-800">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-saffron-400 uppercase tracking-widest block mb-1">
                          {selectedLightboxImage.category} Collection
                        </span>
                        <h4 className="text-base md:text-lg font-serif font-bold text-white">
                          {selectedLightboxImage.title}
                        </h4>
                      </div>
                      <button
                        onClick={() => setSelectedLightboxImage(null)}
                        className="py-2.5 px-4 rounded-xl bg-stone-850 hover:bg-stone-800 text-stone-300 font-bold font-sans text-xs flex items-center gap-1 border border-stone-700"
                      >
                        <X className="h-4 w-4" />
                        <span>Close</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-4 text-xs font-sans text-slate-500 italic">
            * All displayed photos represent real setup designs curated for pure veg weddings and parties in Maharashtra.
          </div>

        </div>
      </section>

      {/* 13. TESTIMONIALS SECTION (Indian client ratings) */}
      <section
        id=" отзывы-testimonials"
        className="py-16 md:py-24 bg-cream-luxury/60 border-t border-cream-200"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#F27D26] uppercase flex items-center justify-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              <span>Genuine Local Testimonials</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#1F2937]">
              Approved by Elite Nashik Families
            </h2>
            <p className="text-sm text-slate-500 font-sans leading-relaxed">
              Do not take our word for it—read native client logs from Indira Nagar, Ambad, and Gangapur Road who celebrate their special moments with Shreyansh.
            </p>
          </div>

          {/* Testimonial Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-3xl p-6 md:p-8 border border-cream-200/50 shadow-md flex flex-col justify-between space-y-4 relative"
              >
                {/* Saffron accent corner shape */}
                <div className="absolute top-0 right-0 h-10 w-10 bg-gradient-to-bl from-saffron-100 to-transparent rounded-tr-3xl" />

                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400" />
                    ))}
                  </div>

                  <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-sans italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-50 text-left">
                  <div>
                    <span className="block text-xs font-bold text-slate-900">{rev.name}</span>
                    <span className="block text-[10px] text-slate-450 mt-0.5">{rev.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {rev.tags.map((tg, idx) => (
                      <span key={idx} className="text-[9px] font-bold bg-amber-50 text-saffron-600 px-2 py-0.5 rounded border border-amber-100">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Pilot Badge */}
          <div className="bg-white rounded-2xl max-w-2xl mx-auto p-4 border border-cream-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-800">Aggregate Rating Level</span>
                <span className="block text-[10px] text-slate-400 mt-0.5">Based on local client logs from Nashik and surrounding Ambad</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-[#1F1710] text-[#FACF91] px-3 py-1 rounded-lg">
                4.7 / 5.0 Star Rated
              </span>
              <span className="text-xs text-slate-400 font-sans">(184 validated reviews)</span>
            </div>
          </div>

        </div>
      </section>

      {/* 14. LOCAL FAQ SECTION */}
      <section
        id="faq-section"
        className="py-16 md:py-24 bg-cream-luxury/50 border-t border-cream-200"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-10 text-left">
          
          <div className="space-y-3 text-center">
            <span className="text-xs font-bold tracking-widest text-[#F27D26] uppercase flex items-center justify-center gap-1.5">
              <HelpCircle className="h-4 w-4" />
              <span>Frequently Asked Questions</span>
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-[#1F2937] leading-tight">
              Answering Your Catering Queries
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#C5A059]/20 space-y-2 hover:border-[#C5A059] transition-all"
              >
                <h3 className="text-sm font-sans font-bold text-slate-900 flex items-start gap-2.5 leading-snug">
                  <span className="h-5 w-5 bg-saffron-500/10 text-saffron-600 rounded-full flex items-center justify-center text-xs shrink-0 font-mono mt-0.5">Q</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 15. CONTACT & INQUIRY FORM (Premium with Local map locator) */}
      <section
        id="contact-section"
        className="py-16 md:py-24 bg-gradient-to-br from-[#FFFDF5] to-[#EBE6DD] border-t border-cream-200"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form Inquiry panel */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-cream-200 flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-saffron-500/10 flex items-center justify-center text-saffron-600">
                    <Sparkles className="h-4 w-4 animate-spin" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-saffron-600">Submit Booking Dates</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-[#1F2937]">
                  Enquire Catering Dates Availability
                </h2>
                
                <p className="text-xs md:text-sm text-slate-500 font-sans leading-relaxed">
                  Fill in the details below. Our booking manager Shreyansh will verify availability for weddings or celebrations on your requested date.
                </p>

                {/* React Form */}
                <form onSubmit={handleFormSubmit} className="space-y-4 pt-2 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-500">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="E.g., Anand Deshmukh"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full text-xs font-sans border border-slate-200 bg-[#FFFDF5] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 mt-1"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-500">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="E.g., +91 9988776655"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full text-xs font-sans border border-slate-200 bg-[#FFFDF5] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-500">
                        Occasion Type
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full text-xs font-sans border border-slate-200 bg-[#FFFDF5] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 mt-1"
                      >
                        <option value="Wedding Ceremony">Wedding Ceremony</option>
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="House Warming POOJA">House Warming POOJA</option>
                        <option value="Traditional Brahmin Pooja">Traditional Brahmin Pooja</option>
                        <option value="Small Family high-tea">Small Family high-tea</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-500">
                        Guest Count
                      </label>
                      <input
                        type="number"
                        placeholder="150"
                        value={inquiryGuests}
                        onChange={(e) => setInquiryGuests(e.target.value)}
                        className="w-full text-xs font-sans border border-slate-200 bg-[#FFFDF5] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 mt-1"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-500">
                        Event Date
                      </label>
                      <input
                        type="date"
                        value={inquiryDate}
                        onChange={(e) => setInquiryDate(e.target.value)}
                        className="w-full text-xs font-sans border border-slate-200 bg-[#FFFDF5] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 mt-1 text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-500">
                      Message / Custom Dietary Requirements
                    </label>
                    <textarea
                      placeholder="Share menu details, pure veg expectation, live stalls, custom items, wedding decor preference..."
                      rows={3}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full text-xs font-sans border border-slate-200 bg-[#FFFDF5] p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 mt-1 leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitSuccess}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold font-sans text-xs uppercase tracking-widest shadow-md transition-all duration-300 ${
                        isSubmitSuccess
                          ? "bg-emerald-600 text-white cursor-wait"
                          : "bg-saffron-500 hover:bg-saffron-600 active:scale-95 text-white cursor-pointer"
                      }`}
                    >
                      {isSubmitSuccess ? "✓ Launching WhatsApp Chat..." : "Get Live Pricing redial on WhatsApp"}
                    </button>
                    
                    <div className="flex justify-between items-center text-[10px] text-slate-400 mt-2 font-sans px-1">
                      <span>* Safe & secure. Launches standard WhatsApp Messenger.</span>
                      <span>100% Free Consultation</span>
                    </div>
                  </div>
                </form>
              </div>

            </div>

            {/* Right Column: Address Map & Contacts details */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              <div className="bg-[#FFFDF5] rounded-3xl p-6 border border-[#C5A059]/40 shadow space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">Official Operations Hub</span>
                
                <h3 className="text-lg font-serif font-extrabold text-[#1F2937]">
                  {BUSINESS_INFO.name}
                </h3>

                <div className="space-y-4 text-xs md:text-sm text-slate-700 font-sans">
                  
                  <div className="flex gap-3 items-start">
                    <MapPin className="h-5 w-5 text-[#F27D26] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block uppercase text-[10px] text-[#C5A059] tracking-wider">OFFICE ADDRESS:</span>
                      <span className="mt-0.5 block leading-relaxed text-slate-650">
                        {BUSINESS_INFO.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Phone className="h-5 w-5 text-[#F27D26] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block uppercase text-[10px] text-[#C5A059] tracking-wider">PHONE DETAILS:</span>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="mt-0.5 block font-bold text-[#F27D26] text-base leading-relaxed hover:underline">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Clock className="h-5 w-5 text-[#F27D26] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block uppercase text-[10px] text-[#C5A059] tracking-wider">BUSINESS OPERATIONAL HOURS:</span>
                      <span className="mt-0.5 block leading-relaxed text-slate-600">
                        {BUSINESS_INFO.hours}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Verified Embedded Google Maps */}
              <div className="rounded-3xl overflow-hidden shadow-md border-4 border-white h-72 relative">
                <iframe
                  title="Shreyansh Caterers & Event Management Location Nashik Google Map"
                  src={BUSINESS_INFO.google_maps_url}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 16. FOOTER */}
      <footer className="bg-gradient-to-br from-[#1F2937] to-[#111827] text-[#FAF6F0] pt-16 pb-8 paithani-border z-10 relative font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            
            {/* Col 1 Brand message */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-[#F27D26] flex items-center justify-center text-white">
                  <Utensils className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-extrabold text-white tracking-widest uppercase">Shreyansh Caterers</h4>
                  <span className="text-[10px] text-[#C5A059] tracking-widest font-mono block">PURE VEG EXTRAORDINAIRE</span>
                </div>
              </div>

              <p className="text-xs text-stone-400 font-sans leading-relaxed max-w-sm">
                Since 2020, providing Nashik and neighboring Ambad region with state-of-the-art pure vegetarian wedding catering, customized Satvik delicacies, and luxury event managements.
              </p>

              <div>
                <span className="text-[10px] font-bold text-stone-500 block uppercase tracking-wider mb-2">LOCAL HYGIENE COMPLIANCE:</span>
                <span className="inline-block text-[10px] font-bold text-[#C5A059] bg-[#111827] border border-stone-800 rounded px-2.5 py-1">
                  ✓ 100% PURE GEOGRAPHY & SEPARATE commercial VESSELS
                </span>
              </div>
            </div>

            {/* Col 2 Quick Actions */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-extrabold text-[#FACF91] tracking-widest uppercase pb-2 border-b border-stone-800">
                OUR CUISINES
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>• Authentic Maharashtrian Brahmin Thali</li>
                <li>• Shahi Punjabi Catering Buffet</li>
                <li>• Sweet-Savory Gujarati Royal Plates</li>
                <li>• Traditional Marwari Halwai Services</li>
                <li>• Pure Satvik Vedic Preparations</li>
              </ul>
            </div>

            {/* Col 3 Services links */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-extrabold text-[#FACF91] tracking-widest uppercase pb-2 border-b border-stone-800 font-mono">
                AMBAD NASHIK HEADQUARTERS
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                Quadra Pentagon Apartment, DGP Nagar 2, Opposite Balaji Mobile, Ambad, Nashik - 422010, Maharashtra, India
              </p>
              
              <div className="pt-2 text-xs text-stone-300 font-sans">
                <span className="block font-bold">Hotline direct dial:</span>
                <a href="tel:+918511071957" className="text-base font-serif font-extrabold text-[#FACF91] hover:underline block mt-0.5">
                  +91 8511071957
                </a>
              </div>
            </div>

          </div>

          {/* Local search engine tags to improve Local SEO Ranking */}
          <div className="pt-8 border-t border-stone-800">
            <span className="text-[10px] uppercase font-bold text-stone-600 block tracking-widest mb-3">Nashik Local SEO Target Tags:</span>
            <div className="flex flex-wrap gap-2 text-[10px] text-stone-500">
              {LOCAL_SEO_KEYWORDS.map((key, idx) => (
                <span key={idx} className="bg-stone-900 border border-stone-800 hover:border-stone-700 px-3 py-1 rounded transition-colors block">
                  {key}
                </span>
              ))}
            </div>
          </div>

          {/* Copy-write panel */}
          <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-[11px] text-stone-500 font-sans gap-4 text-center">
            <p>© {new Date().getFullYear()} Shreyansh Caterers & Event Management Ambad Nashik. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#about-section" className="hover:text-stone-300">Privacy Policy</a>
              <a href="#estimator-section" className="hover:text-stone-300">Pricing terms</a>
              <a href="#estimator-section" className="hover:text-stone-300 font-semibold text-saffron-400">Pure Veg Pledge</a>
            </div>
          </div>

        </div>
      </footer>

      {/* 17. FLOATING CONTACT ACTIONS FOR QUICK INQUIRY IN MOBILE (WhatsApp & Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating Call Button */}
        <a
          href="tel:+918511071957"
          aria-label="Direct Phone Link to founder Shreyansh"
          className="p-3.5 bg-gradient-to-tr from-saffron-500 to-amber-500 text-white rounded-full shadow-xl shadow-saffron-500/10 hover:scale-110 active:scale-95 transition-transform"
        >
          <Phone className="h-5 w-5" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/918511071957"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instant Whatsapp query line redirection"
          className="p-3.5 bg-[#25D366] text-white rounded-full shadow-xl shadow-emerald-500/10 hover:scale-110 active:scale-95 transition-transform animate-pulse"
        >
          <MessageSquare className="h-5 w-5" />
        </a>
      </div>

    </div>
  );
}

// Shreyansh Caterers & Event Management data definitions

import thaliImg from './assets/images/mah_thali_royal_1779530547658.png';
import weddingImg from './assets/images/wedding_stage_decor_1779530564668.png';
import buffetImg from './assets/images/buffet_serving_setup_1779530582583.png';
import sweetImg from './assets/images/traditional_delicates_sweets_1779530601150.png';

export interface SpecialtyItem {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  highlightItems: string[];
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
  image: string;
}

export interface EventShowcaseItem {
  id: string;
  title: string;
  description: string;
  backdropAccent: string;
  features: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  tags: string[];
  date: string;
}

export interface FoodPriceConfig {
  guestCount: number;
  cuisineType: string;
  servicesSelected: string[];
}

export const BUSINESS_INFO = {
  name: "Shreyansh Caterers & Event Management",
  shortName: "Shreyansh Caterers",
  tagline: "Pure Veg Catering & Event Management for Every Celebration",
  established: "2020",
  founder: "Shreyansh",
  rating: 4.7,
  ratingCount: 184,
  capacity: "1000+ Guests",
  phone: "+91 8511071957",
  whatsapp_link: "https://wa.me/918511071957?text=Hi%20Shreyansh%20Caterers,%20I'm%20interested%20in%20your%20catering%20services%20for%20an%20upcoming%20event.",
  email: "webdesigner0023@gmail.com",
  address: "Quadra Pentagon Apartment, DGP Nagar 2, Opposite Balaji Mobile, Ambad, Nashik - 422010, Maharashtra, India",
  google_maps_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9143890252195!2d73.7422473!3d19.932822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd962cdb5cfc77%3A0xf63a033c7c25fc03!2sAmbad%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716440000000!5m2!1sen!2sin",
  hours: "Monday to Sunday: 9:00 AM – 9:00 PM"
};

export const CULINARY_SPECIALTIES: SpecialtyItem[] = [
  {
    id: "mah-cuisine",
    name: "Classic Maharashtrian Thali",
    cuisine: "Maharashtrian",
    description: "Authentic spicy, tangy and sweet Maharashtrian delights made with home-ground masalas.",
    highlightItems: ["Puran Poli with Sajuk Tup", "Katachi Amti", "Masale Bhaat", "Kothimbir Vadi", "Mattha"],
    image: thaliImg
  },
  {
    id: "mah-brahmin",
    name: "Maharashtrian Brahmin Satvik",
    cuisine: "Maharashtrian Brahmin",
    description: "Prepared traditional Brahmin-style without onion and garlic, maintaining highly auspicious Vedic purity.",
    highlightItems: ["Varana-Bhaat", "Aloo Paneer Curry", "Moong Dal Khichdi", "Shrikhand", "Khamang Kakdi"],
    image: thaliImg
  },
  {
    id: "guj-cuisine",
    name: "Royal Gujarati Thali",
    cuisine: "Gujarati",
    description: "A harmonious balance of sweet, sour, and savory flavors presented in traditional style.",
    highlightItems: ["Dhokla & Khandvi", "Gujarati Kadhi", "Ringan Nu Shak", "Phulka Rotli", "Basundi / Aamras"],
    image: sweetImg
  },
  {
    id: "punj-cuisine",
    name: "Spiced North Indian Feast",
    cuisine: "Punjabi",
    description: "Rich, aromatic and buttery dishes cooked with premium cashew pastes and fresh cottage cheese.",
    highlightItems: ["Paneer Butter Masala", "Dal Makhani", "Amritsari Kulcha", "Jeera Rice", "Pindi Chole"],
    image: buffetImg
  },
  {
    id: "raj-cuisine",
    name: "Traditional Mewari Cuisine",
    cuisine: "Rajasthani",
    description: "Rich desert delicacies cooked in pure desi ghee, keeping ancient culinary legacies alive.",
    highlightItems: ["Dal Baati Churma", "Gatte Ki Sabzi", "Ker Sangri", "Mirchi Vada", "Mawa Kachori"],
    image: sweetImg
  },
  {
    id: "marwari-cuisine",
    name: "Marwari Festive Buffet",
    cuisine: "Marwari",
    description: "A luxurious array of pure vegetarian royal treats carefully crafted for celebratory weddings.",
    highlightItems: ["Shahi Paneer", "Panchmel Dal", "Churma Ladoo", "Kadhi Pakoda", "Badam Halwa"],
    image: buffetImg
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding",
    title: "Grand Wedding Catering",
    description: "Our hallmark service catering up to 1000+ guests. Featuring multi-cuisine live food stalls, elegant silver thali services, welcome drink mocktail bars, and premium dessert stations.",
    features: ["Customized Menu Designing", "Live Counter Interactive Exhibits", "VIP Buffet Services", "Elegant Uniformed Wait Staff", "Hygienic Traditional Preparation"],
    iconName: "Gift",
    image: weddingImg
  },
  {
    id: "birthday",
    title: "Birthday Party Special",
    description: "Delightful food menus focusing on young guests and adults alike. Quick-bites, cotton candy stalls, live pasta counters, and hygienic mini high-teas.",
    features: ["Kid-Friendly Non-Spicy Menus", "Popcorn & Ice-Cream Stalls", "Interactive Mocktail Bars", "Quick Buffet Logistics", "Clean Disposal Systems"],
    iconName: "PartyPopper",
    image: sweetImg
  },
  {
    id: "house-party",
    title: "Cozy House Parties",
    description: "Intimate catering designed for gatherings of 25 to 100 guests, bringing high-end hospitality directly to your dining table.",
    features: ["Compact Tabletop Buffets", "Multi-course Tasting Cards", "Post-Event Quick Cleanup", "Personal Chef Deployments", "Custom Starters & Platters"],
    iconName: "Home",
    image: thaliImg
  },
  {
    id: "house-warming",
    title: "House Warming (Vastu Pooja)",
    description: "Pure vegetarian traditional Satvik food prepared with strict adherence to purity, ideal after home-blessing poojas.",
    features: ["No Onion No Garlic Options", "Served in Traditional Bio-Plates", "Warm Festive Prasad Thalis", "Sajuk Tup Shira & Ladoos", "Polite Traditional Hospitalities"],
    iconName: "Sparkles",
    image: thaliImg
  },
  {
    id: "event-mgmt",
    title: "Complete Event Management",
    description: "End-to-end wedding, ritual, and banquet execution in Nashik. We look after stage setups, marigold mandap decors, sound systems, and flower paths.",
    features: ["Floral Entry Way Portals", "LED Ambient Mood Lighting", "Traditional Shenai & Music Setup", "Photographer Co-ordinations", "VIP Guest Welcomes"],
    iconName: "CalendarDays",
    image: weddingImg
  },
  {
    id: "home-delivery",
    title: "Hygienic Home Delivery",
    description: "Bulk packed warm meals or mini-buffet kits safely delivered in micro-leakproof premium containers directly to your doorstep for family celebrations.",
    features: ["Strict Thermal Insulation Pots", "Tamper-Evident Security Seals", "Pre-portioned Serving Utensils", "On-Time Navigational Execution", "Super Hygienic ISO Standards"],
    iconName: "Truck",
    image: buffetImg
  }
];

export const EVENT_SHOWCASE: EventShowcaseItem[] = [
  {
    id: "showcase-wedding-stage",
    title: "Imperial Floral Stage Decoration",
    description: "A beautiful fusion of fresh white jasmine strings and golden marigold arches, highlighted by soft amber LED projections, customized for elite Nashik weddings.",
    backdropAccent: "bg-amber-100/60",
    features: ["Handcrafted Floral Chandelier", "Royal Maharaja Seating Chairs", "Velvet Accent Drops", "Dynamic Backdrop Sizing"],
    image: weddingImg
  },
  {
    id: "showcase-mandap",
    title: "Traditional Maharashtrian Mandap Setup",
    description: "Authentic canopy layout using bamboo, organic banana leaf portals, warm clay diyas, and premium fabric drapings for sacred wedding pheras.",
    backdropAccent: "bg-saffron-50",
    features: ["Sacred Fire Kund Protection", "Authentic Rangoli Accent Path", "Traditional Shehnai Surround Sound", "Ghee-lit Brass Hanging Diya Pillars"],
    image: weddingImg
  },
  {
    id: "showcase-buffet-counter",
    title: "Golden Canopy Buffet Presentation",
    description: "Beautifully lit linear food islands framed by copper chaffing dishes, luxury linen runners, and elegant flower centerpieces keeping food highly appealing.",
    backdropAccent: "bg-amber-50",
    features: ["Copper-Heated Serving Platters", "Digital Item Name Placards", "Spotless Hygiene Glass Guards", "Custom Spice Aromatherapy Pillars"],
    image: buffetImg
  }
];

export const REVIEWS: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Anand Deshmukh",
    location: "Indira Nagar, Nashik",
    text: "We booked Shreyansh Caterers for my sister’s wedding in Nashik and we are extremely pleased! The Maharashtrian Brahmin food was outstanding. Every guest appreciated the genuine basundi and hot puran poli. The service was polite, highly recommended!",
    rating: 5,
    tags: ["Wedding", "Brahmin Satvik"],
    date: "12 days ago"
  },
  {
    id: "rev-2",
    name: "Shweta Kulkarni",
    location: "Ambad, Nashik",
    text: "The absolute best catering service in Ambad Nashik. Very clean kitchen, pure veg foods with incredible spice balance. We hired them for our Vastu Shanti event. They prepared everything without onion/garlic, and the taste of the katachi amti was heavenly.",
    rating: 5,
    tags: ["House Warming", "Traditional"],
    date: "1 month ago"
  },
  {
    id: "rev-3",
    name: "Rajesh Patel",
    location: "Gangapur Road, Nashik",
    text: "Excellent Gujarati and Marwari dishes! They managed the event beautifully. The team is very professional, uniforms and masks were maintained. There was no shortage of food, and everyone served with a beautiful smile.",
    rating: 5,
    tags: ["Gujarati Thali", "Event Management"],
    date: "2 months ago"
  },
  {
    id: "rev-4",
    name: "Sachin Sonawane",
    location: "DGP Nagar 2, Nashik",
    text: "Professional food and decoration. Shreyansh took care of both the wedding stage floral set up and catering for 800+ guests. High speed and excellent quality in Nashik. Highly trustworthy veg catering!",
    rating: 4,
    tags: ["Wedding Buffet", "Stage Decor"],
    date: "3 months ago"
  }
];

export const GALLERY_PHOTOS = [
  {
    id: "g1",
    title: "Royal Maharashtrian Thali Banquet",
    category: "Cuisines",
    img: thaliImg
  },
  {
    id: "g2",
    title: "Elegant Mandap Entrance Setup",
    category: "Decoration",
    img: weddingImg
  },
  {
    id: "g3",
    title: "Premium Stainless Steel Chafing Buffet",
    category: "Catering",
    img: buffetImg
  },
  {
    id: "g4",
    title: "Desi Ghee Indian Sweets Table",
    category: "Cuisines",
    img: sweetImg
  },
  {
    id: "g5",
    title: "Sacred Traditional Phera Mandap",
    category: "Decoration",
    img: weddingImg
  },
  {
    id: "g6",
    title: "Assorted Gujarati Farsan Live Counter",
    category: "Catering",
    img: sweetImg
  }
];

export const FAQS = [
  {
    q: "Do you specialize exclusively in pure vegetarian catering?",
    a: "Yes. Shreyansh Caterers is a strictly 100% pure veg catering and event management company in Nashik. We do not cook, serve or handle non-vegetarian food, ensuring maximum spiritual purity and hygiene for traditional functions."
  },
  {
    q: "Can you provide catering for events without Onion and Garlic (Satvik)?",
    a: "Absolutely. We are famous in Nashik for our Maharashtrian Brahmin Satvik menus and Jain menus. These are prepared in designated clean vessels with absolute devotion and traditional standards."
  },
  {
    q: "What is your maximum catering guest capacity?",
    a: "We have an experienced team and fully commercial kitchen setups capable of catering to grand upscale events of 1000+ guests easily, as well as cozy home parties of 25+ guests."
  },
  {
    q: "Do you handle complete wedding decoration along with catering?",
    a: "Yes! We provide full-service event managements in Nashik, covering the wedding stage, floral mandaps, audio & sound, lighting setups, entry passages, and catering logistics all in one beautifully managed package."
  }
];

export const LOCAL_SEO_KEYWORDS = [
  "Caterers in Nashik",
  "Event Management in Nashik",
  "Wedding Caterers in Nashik",
  "Pure Veg Caterers Nashik",
  "Maharashtrian Caterers Near Me",
  "Wedding Event Planner Nashik",
  "Catering Services in Ambad Nashik",
  "Best Caterers Near Me"
];

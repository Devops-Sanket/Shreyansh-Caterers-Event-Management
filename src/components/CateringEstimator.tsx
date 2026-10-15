import { useState } from "react";
import { Users, Utensils, CalendarDays, Sparkles, Phone, MessageSquarePlus } from "lucide-react";
import { BUSINESS_INFO, CULINARY_SPECIALTIES, SERVICES } from "../data";

export default function CateringEstimator() {
  const [guestCount, setGuestCount] = useState<number>(150);
  const [selectedCuisineId, setSelectedCuisineId] = useState<string>("mah-cuisine");
  const [selectedServices, setSelectedServices] = useState<string[]>(["wedding"]);
  const [eventName, setEventName] = useState<string>("Wedding Ceremony");
  const [customNotes, setCustomNotes] = useState<string>("");

  const activeCuisine = CULINARY_SPECIALTIES.find(c => c.id === selectedCuisineId) || CULINARY_SPECIALTIES[0];

  const handleServiceToggle = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const getCapacityBadgeText = (count: number) => {
    if (count < 50) return { label: "Boutique Group", style: "bg-amber-100 text-amber-900 border-amber-200" };
    if (count < 250) return { label: "Premium Gathering", style: "bg-saffron-50 text-saffron-600 border-saffron-200" };
    if (count < 600) return { label: "Grand Celebration", style: "bg-emerald-50 text-emerald-700 border-emerald-200" };
    return { label: "Royal Banquet Event (1000+ support)", style: "bg-red-50 text-red-700 border-red-200 animate-pulse" };
  };

  const badge = getCapacityBadgeText(guestCount);

  // Compile full custom message to send on WhatsApp
  const generateWhatsAppMessage = () => {
    const servicesText = selectedServices
      .map(s => SERVICES.find(sv => sv.id === s)?.title || s)
      .join(", ");

    const text = `*NEW BOOKING INQUIRY - SHREYANSH CATERERS*%0A%0A` +
      `*Event Name:* ${eventName}%0A` +
      `*Estimated Guests:* ${guestCount} People%0A` +
      `*Selected Cuisine:* ${activeCuisine.name} (${activeCuisine.cuisine})%0A` +
      `*Selected Services:* ${servicesText}%0A` +
      `*Featured Items Demanded:* ${activeCuisine.highlightItems.slice(0, 3).join(", ")}%0A` +
      `*Specific Notes:* ${customNotes ? customNotes : "None requested."}%0A%0A` +
      `Please contact me with a custom pricing proposal and date availability for my Nashik celebration!`;

    return `https://wa.me/918511071957?text=${text}`;
  };

  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-cream-200/60 bg-white" id="estimator-tool">
      {/* Estimator Header banner */}
      <div className="bg-gradient-to-r from-saffron-500 to-gold-500 p-6 md:p-8 text-white relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Utensils className="h-24 w-24" />
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-saffron-100 mb-1">
          <Sparkles className="h-4 w-4 text-amber-200 animate-pulse" />
          <span>Interactive Event Catering Planner</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
          Customize Your Menu & Plan Your Event
        </h3>
        <p className="text-saffron-100/90 text-sm font-sans mt-2 max-w-xl">
          Adjust the parameters to configure your custom pure veg feast. Review recommendations and send us your configuration instantly on WhatsApp.
        </p>
      </div>

      <div className="p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FAFBF9]">
        {/* Sliders and Toggles: Column 1 */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Guest Count Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-700 font-sans flex items-center gap-1.5">
                <Users className="h-4 w-4 text-saffron-500" />
                <span>Estimated Guest Capacity</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="font-mono text-lg font-bold text-saffron-600 bg-saffron-50 px-2.5 py-0.5 rounded-lg border border-saffron-100">
                  {guestCount}
                </span>
                <span className="text-xs text-slate-500">Guests</span>
              </div>
            </div>

            <input
              type="range"
              min="25"
              max="1500"
              step="25"
              value={guestCount}
              onChange={(e) => setGuestCount(parseInt(e.target.value))}
              className="w-full accent-saffron-500 bg-slate-200 py-3 rounded-lg cursor-pointer transition-colors"
            />
            
            <div className="flex justify-between items-center mt-2.5">
              <span className="text-xs text-slate-400">Min: 25</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${badge.style}`}>
                {badge.label}
              </span>
              <span className="text-xs text-slate-400">Max: 1500+</span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Core Event Type Field input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 block">
                Occasion Name
              </label>
              <select
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full text-sm font-sans border border-slate-200 bg-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-black"
                style={{ color: "#000000" }}
              >
                <option value="Grand Royal Wedding">Grand Royal Wedding</option>
                <option value="Traditional Maharashtrian Wedding">Traditional Maharashtrian Wedding</option>
                <option value="Ring Ceremony / Engagement">Ring Ceremony / Engagement</option>
                <option value="Birthday Celebration Party">Birthday Celebration Party</option>
                <option value="Vastu Pooja (House Warming)">Vastu Pooja (House Warming)</option>
                <option value="Traditional Upanayana (Thread Ceremony)">Traditional Upanayana (Thread Ceremony)</option>
                <option value="Corporate / Family Gathering">Corporate / Family Gathering</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 block">
                Cuisine Theme Selection
              </label>
              <select
                value={selectedCuisineId}
                onChange={(e) => setSelectedCuisineId(e.target.value)}
                className="w-full text-sm font-sans border border-slate-200 bg-white rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-black"
                style={{ color: "#000000" }}
              >
                {CULINARY_SPECIALTIES.map((cuis) => (
                  <option key={cuis.id} value={cuis.id}>
                    {cuis.name} ({cuis.cuisine})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Supplementary Services Checked Toggles */}
          <div>
            <label className="text-sm font-bold text-slate-700 font-sans mb-3 block flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4 text-saffron-500" />
              <span>Supplementary Packages Requested</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {SERVICES.map((serv) => {
                const isSelected = selectedServices.includes(serv.id);
                return (
                  <button
                    key={serv.id}
                    type="button"
                    onClick={() => handleServiceToggle(serv.id)}
                    className={`flex flex-col items-start p-3 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "bg-slate-900 text-white border-transparent shadow"
                        : "bg-white text-slate-600 border-slate-200 hover:border-saffron-200 hover:bg-cream-100/40"
                    }`}
                  >
                    <span className="text-[13px] font-bold block truncate w-full">{serv.title}</span>
                    <span className={`text-[10px] mt-1 ${isSelected ? "text-saffron-300" : "text-slate-400"}`}>
                      {isSelected ? "✓ Included" : "+ Tap to add"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes Fields */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 block">
              Additional Details & Dietary Instructions
            </label>
            <textarea
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="E.g., Require traditional silver thali service, need Welcome Drinks stall, Jain food arrangements for 50 people, family members are arriving from Pune..."
              rows={2}
              className="w-full text-xs font-sans border border-slate-200 bg-white p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 leading-relaxed text-slate-700"
            />
          </div>

        </div>

        {/* Dynamic Proposal Board: Column 1 */}
        <div className="lg:col-span-5 bg-gradient-to-br from-cream-100 to-saffron-50 rounded-2xl p-6 border border-[#fbe6ba]/45 flex flex-col justify-between shadow-inner">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-saffron-500/10 flex items-center justify-center text-saffron-600">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e7d16]">Your Ceremony Proposal</span>
            </div>

            {/* Simulated Live Proposal Display Box */}
            <div className="bg-white rounded-xl p-5 border border-amber-200/50 shadow-sm space-y-4">
              <div className="pb-3 border-b border-dashed border-amber-200">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">Selected Gourmet Feast</span>
                <h4 className="text-lg font-serif font-bold text-saffron-600 mt-0.5">{activeCuisine.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1 font-sans italic">
                  "{activeCuisine.description}"
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">Recommended Menu Specialties</span>
                <ul className="mt-2.5 space-y-1.5">
                  {activeCuisine.highlightItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-sans">
                      <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-4 text-xs font-sans">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Total Guests</span>
                  <span className="text-sm font-bold text-slate-800">{guestCount} People</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase">Pure Veg Code</span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 inline-block mt-0.5">
                    ● 100% VEG
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white/60 rounded-xl border border-amber-200/30 text-[11px] text-slate-500 font-sans leading-relaxed">
              💡 <span className="font-bold text-slate-700">Nashik Local Trust Factor:</span> We source all milk products from pure local dairies and cook purely in filtered groundnut oil and premium Desi Ghee. Suitable for auspicious festivals!
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl font-sans font-bold text-xs md:text-sm tracking-wide shadow-md bg-[#25D366] hover:bg-[#20ba56] text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquarePlus className="h-4 w-4" />
              <span>Get Free Quote on WhatsApp</span>
            </a>

            <div className="flex justify-between items-center text-[11px] text-slate-500 px-1 font-sans">
              <span>Rating: <strong>4.7★</strong> (180+ votes)</span>
              <span>Fast reply within 15 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX, Sparkles, X, ChevronRight } from "lucide-react";

export default function VoiceWelcome() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const hasSpokenOnce = useRef(false);

  const speakMessage = () => {
    if (isMuted) return;

    // Standard hospitality welcome lines
    const text = "Welcome to Shreyansh Caterers and Event Management, Nashik's trusted pure veg catering partner for weddings, parties, and celebrations.";

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Stop current speech
      const utterance = new SpeechSynthesisUtterance(text);

      // Try to resolve an elegant Indian or professional English voice
      const voices = window.speechSynthesis.getVoices();
      
      // Look for Indian accent (e.g. Heera, Rishi, Google English (India))
      const indianVoice = voices.find(
        (v) =>
          v.lang.includes("en-IN") ||
          v.name.includes("India") ||
          v.name.includes("Indian")
      );

      if (indianVoice) {
        utterance.voice = indianVoice;
      }
      
      utterance.rate = 0.95; // Slightly slower, highly professional and premium tempo
      utterance.pitch = 1.05; // Friendly and clear tone

      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Safe autoplay trigger inside React on absolute first user click or scroll
  useEffect(() => {
    const handleVoiceFirstInteraction = () => {
      if (hasSpokenOnce.current || isMuted) return;
      hasSpokenOnce.current = true;
      speakMessage();
      // Remove listeners once triggers are initialized
      window.removeEventListener("click", handleVoiceFirstInteraction);
      window.removeEventListener("scroll", handleVoiceFirstInteraction);
    };

    window.addEventListener("click", handleVoiceFirstInteraction);
    window.addEventListener("scroll", handleVoiceFirstInteraction);

    // Some browsers need a slight delay to load Speech voices
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
    }

    return () => {
      window.removeEventListener("click", handleVoiceFirstInteraction);
      window.removeEventListener("scroll", handleVoiceFirstInteraction);
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isMuted]);

  const handleManualTrigger = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      speakMessage();
    }
  };

  const handleMuteBtn = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMuted) {
      setIsMuted(false);
      // Give a tiny timeout and speak
      setTimeout(() => speakMessage(), 100);
    } else {
      setIsMuted(true);
      stopSpeaking();
    }
  };

  return (
    <>
      {/* Floating Global Audio Controller bottom left */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
        <button
          onClick={handleManualTrigger}
          id="audio-indicator-btn"
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg border text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
            isSpeaking
              ? "bg-gradient-to-r from-saffron-500 to-amber-500 text-white border-transparent"
              : "bg-white text-slate-700 border-[#FAF6F0] hover:bg-cream-100"
          }`}
          title="Listen to Welcome Audio Intro"
        >
          {isSpeaking ? (
            <>
              {/* Animating Waveform Bars */}
              <div className="flex gap-0.5 items-end h-3.5 w-4 my-auto">
                <span className="w-0.5 h-full bg-white rounded-full animate-bounce duration-300"></span>
                <span className="w-0.5 h-1/2 bg-white rounded-full animate-bounce duration-500"></span>
                <span className="w-0.5 h-3/4 bg-white rounded-full animate-bounce duration-400"></span>
                <span className="w-0.5 h-2/3 bg-white rounded-full animate-bounce duration-250"></span>
              </div>
              <span className="font-sans text-xs tracking-wide">Playing Intro...</span>
            </>
          ) : (
            <>
              <Volume2 className="h-4 w-4 text-saffron-500 animate-pulse" />
              <span className="font-sans text-xs tracking-wide">Play Voice Intro</span>
            </>
          )}
        </button>

        {/* Global Speak mute bypass icon toggle */}
        <button
          onClick={handleMuteBtn}
          id="global-mute-toggle"
          aria-label={isMuted ? "Unmute Voice greeting" : "Mute Voice greeting"}
          className={`p-3 rounded-full shadow-lg border transition-all duration-200 hover:scale-105 active:scale-95 ${
            isMuted
              ? "bg-red-50 text-red-600 border-red-100"
              : "bg-white text-slate-500 border-slate-100 hover:text-slate-800"
          }`}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      {/* Greeting Toast shown in top right corner (desktop only to prevent mobile nav overlay) */}
      {showToast && (
        <div 
          id="audio-intro-toast"
          className="hidden md:block fixed top-24 right-4 md:right-8 z-30 max-w-sm w-80 md:w-96 p-4 rounded-xl shadow-xl bg-white border border-[#fbe6ba]/80 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:border-saffron-200"
        >
          {/* Saffron side line decoration */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-saffron-500 to-gold-500" />
          
          <div className="flex justify-between items-start gap-3 pl-2">
            <div className="flex-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-saffron-600 tracking-wider uppercase mb-1">
                <Sparkles className="h-3 w-3" />
                <span>Presidential Greeting</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-800 font-serif leading-5">
                Shreyansh Welcome Intro
              </h4>
              <p className="text-xs text-slate-500 font-sans mt-1 leading-relaxed">
                Click Play below or click anywhere to hear our audio introduction in a warm Indian professional voice.
              </p>
              
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={handleManualTrigger}
                  className="px-3 py-1.5 text-xs font-semibold bg-saffron-500 hover:bg-saffron-600 active:bg-saffron-700 text-white rounded-md flex items-center gap-1 shadow-sm transition-colors"
                >
                  {isSpeaking ? (
                    <>Mute Guide</>
                  ) : (
                    <>
                      <span>Listen to Audio</span>
                      <ChevronRight className="h-3 w-3" />
                    </>
                  )}
                </button>
                <button
                  onClick={handleMuteBtn}
                  className="text-xs text-slate-400 hover:text-slate-600 font-medium font-sans"
                >
                  {isMuted ? "Enable Sound" : "Mute Sound"}
                </button>
              </div>
            </div>

            <button
              onClick={() => setShowToast(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

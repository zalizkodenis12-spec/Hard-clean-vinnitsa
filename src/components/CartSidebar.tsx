"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  // Dummy data
  const [items, setItems] = useState([
    { id: 1, name: "Чистка дивана", price: 1500, qty: 1 },
    { id: 2, name: "Чистка килима", price: 800, qty: 2 },
  ]);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + delta };
          }
          return item;
        })
        .filter((item) => item.qty > 0)
    );
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full max-w-[400px] h-[100dvh] bg-[#FFC107] z-[100] flex flex-col shadow-2xl"
          >
            {/* Wavy Left Edge */}
            <div className="absolute top-0 left-[-60px] md:left-[-100px] h-full w-[61px] md:w-[101px] overflow-hidden pointer-events-none">
              <svg
                viewBox="0 0 120 1200"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <path
                  d="M60,0 C120,300 0,900 60,1200 L120,1200 L120,0 Z"
                  className="fill-[#FFC107]"
                />
              </svg>
            </div>

            {/* Header */}
            <div className="p-6 flex justify-between items-center border-b border-white/10 relative z-10">
              <h2 className="text-2xl font-bold font-serif text-white">Кошик</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full"
                aria-label="Закрити кошик"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 relative z-10">
              {items.length === 0 ? (
                <p className="text-white/70 text-center mt-10">Кошик порожній</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="bg-[#FFF3D6] rounded-2xl p-4 shadow-lg flex items-center gap-4">
                    {/* Placeholder for item image */}
                    <div className="w-16 h-16 bg-[#FFC107]/10 rounded-xl flex items-center justify-center shrink-0">
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-[#000000] mb-1">{item.name}</h4>
                      <p className="text-[#FFC107] font-bold">{item.price} ₴</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 bg-white rounded-xl p-1 border border-black/5 shadow-sm">
                      <button 
                        onClick={() => updateQty(item.id, 1)}
                        className="text-[#FFC107] font-bold w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        +
                      </button>
                      <span className="text-sm font-bold text-black">{item.qty}</span>
                      <button 
                        onClick={() => updateQty(item.id, -1)}
                        className="text-[#FFC107] font-bold w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        -
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            <div className="p-6 bg-[#FFC107] border-t border-white/10 relative z-10">
              <div className="flex justify-between items-center mb-6 text-white">
                <span className="text-lg font-medium opacity-80">Підсумок:</span>
                <span className="text-3xl font-bold font-serif">{total} ₴</span>
              </div>
              <button 
                onClick={() => alert("Перехід до оформлення")}
                className="w-full bg-white text-[#FFC107] py-4 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Оформити замовлення
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

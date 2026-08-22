"use client";

import { motion } from "framer-motion";

export default function HistorySection() {
  return (
    <section id="history" className="relative w-full bg-[#FFF3D6] z-10 flex flex-col md:flex-row">
      
      {/* Left Side: Header Image (Sticky only on desktop) */}
      <div className="w-full md:w-1/2 h-[40vh] md:h-screen relative md:sticky top-0 bg-[#F9F9F9] flex flex-col items-center justify-center overflow-hidden">
        {/* Light background image */}
        <div className="absolute inset-0 opacity-60 bg-[url('/photo-rubashki4.jpeg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[#FFF3D6]/70"></div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#000000] relative z-10 text-center mb-4 md:mb-6 drop-shadow-sm px-4 whitespace-nowrap">
          Як ми працюємо
        </h2>
        <div className="w-16 md:w-24 h-1 bg-[#FFC107] relative z-10 mb-4 md:mb-6"></div>
        <p className="text-[#000000]/80 text-lg md:text-2xl font-medium relative z-10 font-sans text-center px-8">
          3 прості кроки
        </p>
      </div>

      {/* Right Side: Scrolling Content */}
      <div className="w-full md:w-1/2 bg-[#FFF3D6] flex flex-col py-16 md:py-[20vh] px-6 md:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          className="mb-16 md:mb-[25vh]"
        >
          <span className="text-[#FFC107] font-bold text-xl md:text-2xl tracking-widest uppercase mb-2 md:mb-4 block">01</span>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#000000] mb-4 md:mb-6 leading-tight">Заявка</h3>
          <p className="text-lg md:text-xl text-[#000000]/80 leading-relaxed font-medium">
            Залишаєте заявку на сайті або просто телефонуєте нам. Наш менеджер оперативно зв'яжеться з вами, зорієнтує по вартості та допоможе підібрати зручний час для приїзду спеціаліста.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          className="mb-16 md:mb-[25vh]"
        >
          <span className="text-[#FFC107] font-bold text-xl md:text-2xl tracking-widest uppercase mb-2 md:mb-4 block">02</span>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#000000] mb-4 md:mb-6 leading-tight">Виїзд та обробка</h3>
          <p className="text-lg md:text-xl text-[#000000]/80 leading-relaxed font-medium">
            Майстер приїжджає до вас із необхідним професійним обладнанням та еко-засобами. Залежно від забруднень, ми виконуємо чистку на місці або забираємо речі до цеху для спеціалізованої обробки.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          className="mb-8 md:mb-[10vh]"
        >
          <span className="text-[#FFC107] font-bold text-xl md:text-2xl tracking-widest uppercase mb-2 md:mb-4 block">03</span>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#000000] mb-4 md:mb-6 leading-tight">Результат</h3>
          <p className="text-lg md:text-xl text-[#000000]/80 leading-relaxed font-medium">
            Після чистки та сушіння ми перевіряємо якість роботи. Ви отримуєте речі у чистому вигляді — без плям і запахів. Гарантуємо дбайливе ставлення до тканин і виконання без зайвих клопотів.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

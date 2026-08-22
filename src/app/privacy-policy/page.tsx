import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full pt-6 pb-6 bg-[#FFC107] z-50 flex items-center px-6 md:px-16 justify-between shadow-md">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-white tracking-wider cursor-pointer">
          HardClean
        </Link>
        <Link href="/" className="text-white font-sans font-semibold text-sm tracking-widest uppercase hover:text-gray-200 transition-colors">
          &larr; Назад на головну
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-[#000000]">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#FFC107] mb-8">Політика конфіденційності</h1>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Ця Політика конфіденційності описує, як HardClean (далі — «Компанія», «ми») обробляє персональні дані користувачів сайту.
          </p>

          <h2 className="text-2xl font-bold text-[#FFC107] mt-8 mb-4">1. Які дані ми збираємо</h2>
          <p>При оформленні заявки через форму на сайті ми можемо збирати:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Ім'я</li>
            <li>Номер телефону</li>
            <li>Обрані послуги/категорію</li>
            <li>Побажання клієнта до замовлення</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#FFC107] mt-8 mb-4">2. Для чого ми використовуємо ці дані</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Для зв'язку з клієнтом щодо оформленого замовлення</li>
            <li>Для уточнення деталей послуги (адреса виклику, час, побажання)</li>
            <li>Для покращення якості обслуговування</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#FFC107] mt-8 mb-4">3. Зберігання та захист даних</h2>
          <p>
            Ми не передаємо ваші персональні дані третім особам, окрім випадків, необхідних для виконання замовлення (наприклад, кур'єрська служба). Дані зберігаються тільки протягом часу, необхідного для обробки заявки.
          </p>

          <h2 className="text-2xl font-bold text-[#FFC107] mt-8 mb-4">4. Права користувача</h2>
          <p>
            Ви маєте право запросити видалення своїх даних з нашої бази, звернувшись за контактними даними, вказаними на сайті.
          </p>

          <h2 className="text-2xl font-bold text-[#FFC107] mt-8 mb-4">5. Контакти</h2>
          <p>
            З питань щодо цієї Політики звертайтесь через контакти, вказані на сайті.
          </p>

          <p className="mt-12 text-sm text-gray-500 font-semibold">
            Дата останнього оновлення: 19 серпня 2026
          </p>
        </div>
      </div>
    </main>
  );
}

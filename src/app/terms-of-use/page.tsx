import Link from "next/link";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#121212]">
      {/* Header */}
      <div className="w-full pt-6 pb-6 bg-[#FFC107] dark:bg-[#C9950A] z-50 flex items-center px-6 md:px-16 justify-between shadow-md">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-white dark:text-[#1F1F1F] tracking-wider cursor-pointer">
          HardClean
        </Link>
        <Link href="/" className="text-white dark:text-[#1F1F1F] font-sans font-semibold text-sm tracking-widest uppercase hover:text-gray-200 dark:hover:text-[#1F1F1F]/70 transition-colors">
          &larr; Назад на головну
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-[#000000] dark:text-[#F0F0F0]">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#FFC107] dark:text-[#E0A500] mb-8">Умови користування сайтом</h1>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold text-[#FFC107] dark:text-[#E0A500] mt-8 mb-4">1. Загальні положення</h2>
          <p>
            Використовуючи цей сайт та оформлюючи заявку, ви погоджуєтесь з цими Умовами.
          </p>

          <h2 className="text-2xl font-bold text-[#FFC107] dark:text-[#E0A500] mt-8 mb-4">2. Оформлення заявки</h2>
          <p>
            Заявка, оформлена через наші контакти або месенджери, є попереднім замовленням послуги. Остаточна вартість та терміни виконання узгоджуються з клієнтом після оцінки обсягу робіт майстром.
          </p>

          <h2 className="text-2xl font-bold text-[#FFC107] dark:text-[#E0A500] mt-8 mb-4">3. Оплата</h2>
          <p>
            Оплата здійснюється після виконання послуги готівкою або переказом на картку, якщо інше не було заздалегідь узгоджено з майстром.
          </p>

          <h2 className="text-2xl font-bold text-[#FFC107] dark:text-[#E0A500] mt-8 mb-4">4. Відповідальність</h2>
          <p>
            Компанія докладає всіх зусиль для якісного виконання послуг, однак не несе відповідальності за форс-мажорні обставини, що вплинули на терміни виконання.
          </p>

          <h2 className="text-2xl font-bold text-[#FFC107] dark:text-[#E0A500] mt-8 mb-4">5. Зміни умов</h2>
          <p>
            Компанія залишає за собою право змінювати ці Умови в односторонньому порядку без попереднього повідомлення.
          </p>

          <p className="mt-12 text-sm text-gray-500 dark:text-gray-400 font-semibold">
            Дата останнього оновлення: 19 серпня 2026
          </p>
        </div>
      </div>
    </main>
  );
}

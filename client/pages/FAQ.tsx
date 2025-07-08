import { useState } from "react";

const faqs = [
  {
    question: "Apa itu aplikasi ini?",
    answer:
      "Aplikasi ini adalah platform yang membantu Anda melakukan X dengan lebih mudah dan cepat.",
  },
  {
    question: "Bagaimana cara menggunakan fitur utama?",
    answer:
      "Anda dapat mulai dengan membuat akun, lalu mengikuti panduan di halaman Features.",
  },
  {
    question: "Apakah layanan ini gratis?",
    answer:
      "Beberapa fitur tersedia gratis, dan ada juga paket premium untuk fitur lanjutan.",
  },
  {
    question: "Di mana saya bisa menghubungi tim support?",
    answer:
      "Silakan hubungi kami melalui halaman Contact atau email langsung ke support@example.com.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-yellow-400">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-gray-800 hover:bg-gray-700 transition-colors font-medium text-yellow-400"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-900 border-t text-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

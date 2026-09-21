import { FaWhatsapp } from "react-icons/fa6";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233559999532"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dacosta Jerseys on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 hover:scale-105 transition duration-300"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}

export default WhatsAppButton;

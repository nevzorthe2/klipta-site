import { useState, useEffect } from "react";

export default function StockAlertSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("testimonials");
      if (section && window.scrollY + window.innerHeight > section.offsetTop + 100) {
        setShowTestimonials(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-gray-800 font-sans bg-[#F4F7FA]">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white text-[#1E2A38] border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-2xl font-extrabold tracking-wide text-[#00C2A8]">StockAlert</div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#services" className="hover:text-[#00C2A8]">Funcionalidades</a>
            <a href="#pricing" className="hover:text-[#00C2A8]">Preços</a>
            <a href="#testimonials" className="hover:text-[#00C2A8]">Depoimentos</a>
            <a href="#contact" className="hover:text-[#00C2A8]">Contacto</a>
            <a href="#contact" className="ml-4 bg-[#00C2A8] text-white px-4 py-2 rounded-full hover:bg-[#009f8a] transition">Agendar Demo</a>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
            <svg className="w-6 h-6 text-[#1E2A38]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white px-4 py-4 space-y-2 text-sm font-medium border-t border-gray-200">
            <a href="#services" className="block text-[#1E2A38] hover:text-[#00C2A8]">Funcionalidades</a>
            <a href="#pricing" className="block text-[#1E2A38] hover:text-[#00C2A8]">Preços</a>
            <a href="#testimonials" className="block text-[#1E2A38] hover:text-[#00C2A8]">Depoimentos</a>
            <a href="#contact" className="block text-white bg-[#00C2A8] px-4 py-2 rounded-full text-center">Agendar Demo</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00C2A8] to-[#007D74] text-white text-center py-40 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Alertas de stock em tempo real.</h1>
          <p className="text-xl mb-8 opacity-90">Receba notificações sempre que o inventário estiver abaixo do nível definido.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#pricing" className="bg-white text-[#00C2A8] font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition">Ver Planos</a>
            <a href="#contact" className="border border-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-[#00C2A8] transition">Marcar Demonstração</a>
          </div>
        </div>
      </section>

      {/* Placeholder for rest of site */}
      <section className="text-center py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1E2A38] mb-6">Site em desenvolvimento</h2>
          <p className="text-lg text-gray-600">Esta é a estrutura inicial do StockAlert. Adicione seções como Funcionalidades, Preços e Depoimentos aqui.</p>
        </div>
      </section>

      <footer className="bg-[#1E2A38] text-white text-center py-6 text-sm">
        <p>&copy; 2025 StockAlert. Todos os direitos reservados.</p>
        <p className="mt-2 text-gray-300 text-xs">🔒 All shared data is 100% confidential and securely handled.</p>
      </footer>
    </div>
  );
}


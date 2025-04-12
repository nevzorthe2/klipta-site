
// KliptaSite.jsx
import { useState, useEffect } from "react";

export default function KliptaSite() {
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
      <h1 className="text-center text-4xl font-bold py-20">Klipta site loaded successfully</h1>
    </div>
  );
}

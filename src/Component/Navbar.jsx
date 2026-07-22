import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  "Home",
  "About",
  "Specialities",
  "Robotic Surgery",
  "Gallery",
  "Contact",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#071220]/90 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-6 lg:px-10">

        <div className="h-24 flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-xl">

              <span className="text-3xl font-bold">+</span>

            </div>

            <div>

              <h2 className="text-2xl font-bold">
                Dr. Saurabh Tiwari
              </h2>

              <p className="text-blue-300 text-sm tracking-[4px] uppercase">
                Orthopedic Surgeon
              </p>

            </div>

          </div>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-[15px] font-medium text-gray-300 hover:text-white duration-300 after:absolute after:w-0 after:h-[2px] after:bg-blue-500 after:left-0 after:-bottom-2 hover:after:w-full after:duration-300"
              >
                {item}
              </a>
            ))}

          </nav>

          {/* CTA */}

          <div className="hidden lg:block">

            <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 duration-300 shadow-xl shadow-blue-500/30">

              Book Appointment

            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#081525]/95 backdrop-blur-xl border-t border-blue-500/20">

          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="block px-8 py-5 border-b border-blue-500/10 text-gray-300 hover:text-white hover:bg-blue-500/10"
            >
              {item}
            </a>
          ))}

          <div className="p-6">

            <button className="w-full py-4 rounded-xl bg-blue-600">
              Book Appointment
            </button>

          </div>

        </div>
      </div>

    </header>
  );
};

export default Navbar;
import {
  ArrowRight,
  Phone,
  UserRound,
  Cpu,
  HeartPulse,
  Building2,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#020817] py-16 text-white">
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-r
          from-[#1D4ED8]
          via-[#1E40AF]
          to-[#312E81]
          px-10
          py-12
        "
      >
        {/* Background Glow */}
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              Looking for Advanced
              <br />
              Robotic Surgical Care?
            </h2>

            <p className="mt-4 max-w-xl text-lg text-blue-100">
              Book a consultation today and experience world-class
              robotic surgery with personalized treatment plans.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:scale-105">
                Book Appointment
                <ArrowRight size={18} />
              </button>

              <button className="flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 backdrop-blur-xl">
                <Phone size={18} />
                +91 90000 00000
              </button>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl">
                <UserRound size={28} />
              </div>

              <h3 className="mt-4 font-semibold">
                Expert Care
              </h3>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl">
                <Cpu size={28} />
              </div>

              <h3 className="mt-4 font-semibold">
                Advanced Technology
              </h3>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl">
                <HeartPulse size={28} />
              </div>

              <h3 className="mt-4 font-semibold">
                Personalized Treatment
              </h3>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl">
                <Building2 size={28} />
              </div>

              <h3 className="mt-4 font-semibold">
                World Class Infrastructure
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
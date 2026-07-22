import {
  Play,
  ArrowRight,
  Award,
  Star,
  Users,
  BriefcaseMedical,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#020817] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#04142A] to-[#071D42]" />

        {/* Right Glow */}
        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-blue-600/20 blur-[150px]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

        {/* Bottom Line */}
        <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28">
        {/* HERO */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/50 px-5 py-2 text-sm text-blue-300">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              ROBOTIC SURGEON
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
              Precision.
              <br />
              Innovation.
              <br />
              <span className="text-blue-500">
                Better Outcomes.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-xl text-slate-300">
              Advanced Robotic Surgery for a Healthier Tomorrow
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                "Minimally Invasive",
                "Faster Recovery",
                "Less Pain",
                "Better Precision",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500 text-blue-400">
                    ✓
                  </div>

                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-5">
              <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-semibold shadow-xl shadow-blue-900/30">
                Book Appointment
                <ArrowRight size={18} />
              </button>

              <button className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-500">
                  <Play size={18} />
                </div>

                Watch Video
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute right-16 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />

            {/* Robotic Arm */}
            <img
              src="/robotic-arm.png"
              alt=""
              className="absolute left-0 top-10 z-0 opacity-80"
            />

            {/* Doctor */}
            <img
              src="/doctor.png"
              alt="Doctor"
              className="relative z-10 ml-auto max-w-xl"
            />

            {/* Achievement Card */}
            <div className="absolute bottom-8 right-0 z-20 w-[330px] rounded-3xl border border-blue-500/30 bg-white/10 p-6 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold">
                Youngest Robotic Surgeon
              </h3>

              <p className="mt-2 text-slate-300">
                in India - 2024
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-700 pt-5">
                <div>
                  <p className="text-sm text-slate-400">
                    Bharat Gaurav Puruskar
                  </p>
                  <p>2024</p>
                </div>

                <Award
                  size={42}
                  className="text-yellow-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-24 grid gap-5 rounded-3xl border border-slate-800 bg-[#07111F]/80 p-8 backdrop-blur-xl md:grid-cols-4">
          <div className="text-center">
            <BriefcaseMedical
              className="mx-auto text-blue-400"
              size={32}
            />

            <h2 className="mt-4 text-4xl font-bold text-blue-400">
              5000+
            </h2>

            <p className="mt-2 text-slate-400">
              Successful Surgeries
            </p>
          </div>

          <div className="text-center">
            <Star
              className="mx-auto text-blue-400"
              size={32}
            />

            <h2 className="mt-4 text-4xl font-bold text-blue-400">
              15+
            </h2>

            <p className="mt-2 text-slate-400">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <Users
              className="mx-auto text-blue-400"
              size={32}
            />

            <h2 className="mt-4 text-4xl font-bold text-blue-400">
              15000+
            </h2>

            <p className="mt-2 text-slate-400">
              Happy Patients
            </p>
          </div>

          <div className="text-center">
            <Star
              className="mx-auto text-blue-400"
              size={32}
            />

            <h2 className="mt-4 text-4xl font-bold text-blue-400">
              4.9/5
            </h2>

            <p className="mt-2 text-slate-400">
              Patient Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import {
  Award,
  GraduationCap,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#020817] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-blue-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#07111F]">
              <img
                src="/doctor-about.png"
                alt="Doctor"
                className="w-full object-cover"
              />

              {/* Signature */}
              <div className="absolute bottom-5 left-5">
                <h2 className="text-3xl italic text-white">
                  Dr. Nazrul Hasan
                </h2>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-sm uppercase tracking-[6px] text-blue-400">
              About
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              Dr. Nazrul Hasan
            </h2>

            <p className="mt-3 text-xl text-blue-400">
              MBBS, MS, FMAS, FIAGES, FAE, FALS Robotics
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Dr. Nazrul Hasan is a dedicated robotic surgeon with extensive
              experience in minimally invasive and advanced robotic surgical
              procedures. His expertise combines cutting-edge technology with
              compassionate patient care to deliver exceptional outcomes.
            </p>

            {/* Qualifications */}
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <GraduationCap
                  size={22}
                  className="text-blue-400"
                />

                <span>
                  MBBS, MS, FMAS, FIAGES, FAE, FALS Robotics
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Award
                  size={22}
                  className="text-blue-400"
                />

                <span>
                  Bharat Gaurav Puruskar - 2024
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Stethoscope
                  size={22}
                  className="text-blue-400"
                />

                <span>
                  Youngest Robotic Surgeon in India - 2024
                </span>
              </div>
            </div>

            {/* Button */}
            <button className="mt-10 flex items-center gap-3 rounded-xl border border-blue-500 bg-blue-500/10 px-7 py-4 text-blue-400 transition hover:bg-blue-500 hover:text-white">
              Know More About Doctor
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
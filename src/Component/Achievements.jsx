import {
  Award,
  Trophy,
  Cpu,
  ShieldCheck,
} from "lucide-react";

const achievements = [
  {
    title: "Bharat Gaurav Puruskar",
    year: "2024",
    icon: Award,
  },
  {
    title: "Youngest Robotic Surgeon in India",
    year: "2024",
    icon: Trophy,
  },
  {
    title: "Trained in Advanced Robotic Systems",
    year: "",
    icon: Cpu,
  },
  {
    title: "Commitment to Excellence & Innovation",
    year: "",
    icon: ShieldCheck,
  },
];

export default function Achievements() {
  return (
    <section className="relative bg-[#020817] py-16 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[5px] text-blue-400">
            Achievements & Recognition
          </p>

          <div className="mt-4 h-px w-full bg-slate-800" />
        </div>

        {/* Achievement Cards */}
        <div className="grid gap-6 lg:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  flex
                  items-center
                  gap-5
                  rounded-2xl
                  border
                  border-slate-800
                  bg-[#07111F]
                  p-6
                  transition-all
                  duration-300
                  hover:border-blue-500
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-500/30
                    bg-blue-500/10
                  "
                >
                  <Icon
                    size={28}
                    className="text-blue-400"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-medium leading-7">
                    {item.title}
                  </h3>

                  {item.year && (
                    <p className="mt-1 text-sm text-slate-400">
                      {item.year}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import {
  Bone,
  Activity,
  Dumbbell,
  Scissors,
  Baby,
  ShieldPlus,
} from "lucide-react";

const services = [
  {
    title: "Joint Replacement",
    desc: "Knee, Hip & Shoulder",
    icon: Bone,
  },
  {
    title: "Spine Surgery",
    desc: "Minimally Invasive Spine Care",
    icon: Activity,
  },
  {
    title: "Sports Injury",
    desc: "Ligament & Tendon Repair",
    icon: Dumbbell,
  },
  {
    title: "Arthroscopy",
    desc: "Knee, Shoulder & Ankle",
    icon: Scissors,
  },
  {
    title: "Pediatric Orthopaedics",
    desc: "Bone & Joint Care",
    icon: Baby,
  },
  {
    title: "Trauma Care",
    desc: "Advanced Trauma Management",
    icon: ShieldPlus,
  },
];

export default function Specialities() {
  return (
    <section className="bg-[#020817] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-blue-400 text-sm">
            Specialties
          </p>

          <h2 className="mt-2 text-5xl font-bold">
            Advanced Robotic Surgical Care
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-800
                  bg-[#07111F]
                  p-6
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:-translate-y-2
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-500/30
                    bg-blue-500/10
                  "
                >
                  <Icon
                    size={30}
                    className="text-blue-400"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
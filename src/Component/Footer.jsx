import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#020817] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="logo"
                className="h-14"
              />

              <div>
                <h2 className="text-2xl font-semibold">
                  Dr. Nazrul Hasan
                </h2>

                <p className="text-sm text-slate-400">
                  ROBOTIC SURGEON
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Delivering advanced robotic surgical care with precision,
              compassion, and innovation.
            </p>

            {/* <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-700
                      transition
                      hover:border-blue-500
                      hover:bg-blue-500/10
                    "
                  >
                    <Icon size={18} />
                  </div>
                )
              )}
            </div> */}
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3 text-slate-400">
              <li>Home</li>
              <li>About Doctor</li>
              <li>Specialties</li>
              <li>Robotic Surgery</li>
              <li>Patient Info</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold">
              Contact Info
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone
                  size={18}
                  className="text-blue-400"
                />
                +91 90000 00000
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Mail
                  size={18}
                  className="text-blue-400"
                />
                info@drnazrulhasan.com
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin
                  size={18}
                  className="text-blue-400"
                />
                Clinic Location, India
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-semibold">
              Our Location
            </h3>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-[#07111F]">
              <img
                src="/map.png"
                alt="Map"
                className="h-[220px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 Dr. Nazrul Hasan. All Rights Reserved.
          </p>

          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
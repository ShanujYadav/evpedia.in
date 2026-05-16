import ContactForm from "@/components/ContactForm";
import TopBar from "@/components/Topbar";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact Us | EV pedia",
  description:
    "Learn about our company, our mission, and how we provide supply chain finance solutions to help your business grow.",
  keywords: [
    "contact company",
    "Ev news",
    "sustainibility",
    "ev services"
  ],
  openGraph: {
    title: "Contact Us",
    description: "Know more about our services and team",
    url: "https://evpedia.in/contact",
    siteName: "EV pedia",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};



export default function ContactPage() {
  return (
    <>
      <TopBar
        title="Contact Us"
        subtitle="Have questions, feedback, or partnership ideas? Reach out to EVpedia and our team will get back to you."
      />

      <section className="bg-white py-32 px-6 md:px-16 lg:px-24 text-white">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* Address */}
          <div className="group bg-slate-900 p-10 rounded-2xl border border-white/10 hover:border-[#00b43e] transition">

            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-500/10 mb-6 transition group-hover:bg-[#00b43e]">
              <MapPin className="text-[#00b43e] transition group-hover:text-white" />
            </div>


            <p className="text-slate-300 text-lg leading-relaxed">
              New Delhi, India
            </p>
          </div>

          {/* Phone */}
          <div className="group bg-slate-900 p-10 rounded-2xl border border-white/10 hover:border-[#00b43e] transition">

            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-500/10 mb-6 transition group-hover:bg-[#00b43e]">
              <Phone className="text-[#00b43e] transition group-hover:text-white" />
            </div>



            <p className="text-slate-300 text-lg">
              +91 9758232317
            </p>
          </div>

          {/* Email */}
          <div className="group bg-slate-900 p-10 rounded-2xl border border-white/10 hover:border-[#00b43e] transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-500/10 mb-6 transition group-hover:bg-[#00b43e]">
              <Mail className="text-[#00b43e] transition group-hover:text-white" />
            </div>
            <p className="text-slate-300 text-lg">
              info@evpedia.in
            </p>
          </div>
        </div>
      </section >


      <section className="bg-gray-100 py-20 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="bg-[#022c22] text-white rounded-[40px] p-10 md:p-14 flex flex-col justify-center">
            <p className="text-green-400 tracking-widest uppercase text-sm mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-6">
              Tell us what matters.
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Share editorial ideas, partnership inquiries, or feedback about the
              reading experience. We review every message.
            </p>

          </div>

          <div className="bg-slate-900 rounded-[40px] p-8 md:p-12 border border-white/10">
            <form className="space-y-6">

              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-slate-950 text-white placeholder-slate-500 px-6 py-4 rounded-full outline-none border border-white/10 focus:border-[#00b43e] transition"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-slate-950 text-white placeholder-slate-500 px-6 py-4 rounded-full outline-none border border-white/10 focus:border-[#00b43e] transition"
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full bg-slate-950 text-white placeholder-slate-500 px-6 py-4 rounded-2xl outline-none border border-white/10 focus:border-[#00b43e] transition"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#00b43e] hover:bg-[#009735] text-white font-semibold py-4 rounded-full transition duration-300 shadow-[0_10px_30px_-10px_rgba(0,180,62,0.6)] hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

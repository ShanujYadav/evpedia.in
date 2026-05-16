import TopBar from "@/components/Topbar";
import { ArrowUpRight, Clock, ShieldCheck, Eye, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | EV pedia",
  description:
    "Learn about our company, our mission, and how we provide supply chain finance solutions to help your business grow.",
  keywords: [
    "about company",
    "Ev news",
    "sustainibility",
    "ev services"
  ],
  openGraph: {
    title: "About Us",
    description: "Know more about our services and team",
    url: "https://evpedia.in/about",
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



export default function AboutPage() {

  const features = [
    {
      icon: <ArrowUpRight className="text-[#00b43e]" />,
      title: "Stay Ahead of Mobility Trends",
      desc: "Latest insights, updates, and trends shaping the future of India.",
    },
    {
      icon: <Clock className="text-[#00b43e]" />,
      title: "Complete EV Ecosystem",
      desc: "Startups, automakers, infrastructure, and innovation—covered in one place.",
    },
    {
      icon: <ShieldCheck className="text-[#00b43e]" />,
      title: "Insights That Matter",
      desc: "Clear, concise updates to help you track and understand the EV market",
    },
  ];
  return (
    <>
      <TopBar
        title="About Us"
        subtitle="EVpedia is India’s leading platform for electric vehicle news, insights, and clean mobility trends and industry insights to empower EV enthusiasts and businesses."
      />


      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-black mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              EVpedia is a leading electric vehicle news and insights platform dedicated to covering the fast-growing EV ecosystem in India and across the world. Our platform delivers real-time updates on electric vehicles, EV charging infrastructure, battery technology, government EV policies, startup funding, and clean mobility innovations.
            </p>

            <Link href="/contact" className="hover:bg-green-500 bg-[#00b43e] text-white px-6 py-3 rounded-md shadow-md transition duration-300">
              Know More
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[420px]">
            <Image
              src="/banner.jpg" // put your image in public folder
              alt="Our team working together"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#022c22] py-20 px-6 md:px-16 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
            Our Vision & Mission
          </h2>
          <p className="text-white mt-4 max-w-2xl mx-auto">
            Driving innovation and empowering businesses with smart financial solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Vision */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 mb-6 group-hover:bg-[#00b43e] transition">
              <Eye className="text-[#00b43e] group-hover:text-white" size={28} />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Become the go-to platform for India's evolving EV and clean mobility ecosystem.
              We aim to connect industry stakeholders, decision-makers, startups, and enthusiasts
              through high-quality journalism and insight that supports the transition to cleaner transport.
            </p>

          </div>

          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 mb-6 group-hover:bg-[#00b43e] transition">
              <Target className="text-[#00b43e] group-hover:text-white" size={28} />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Deliver trusted EV intelligence that is timely, practical, and easy to understand.
              We simplify the fast-moving electric mobility landscape through clear reporting, market
              updates, infrastructure coverage, and policy analysis built for readers across the EV value chain.
            </p>
          </div>
        </div>
      </section>


      <section className="bg-gray-100 py-20 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left - Feature Cards */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl border border-white/10 hover:border-[#00b43e] hover:shadow-lg transition duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-black leading-tight mb-6">
              Powering India&apos;s Electric Mobility Revolution
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              As India accelerates its transition toward sustainable transportation, the electric vehicle sector is experiencing rapid growth driven by government incentives, technological innovation, and rising fuel costs. Industry projections indicate that India's EV market is expected to grow at over 40% CAGR in the coming years.

              EVpedia brings together automotive leaders, EV startups, charging network operators, policymakers, investors, and EV enthusiasts on one platform to stay informed about the future of mobility.
            </p>

            <Link href="/contact" className="bg-[#00b43e] hover:bg-green-500 cursor-pointer text-white px-6 py-3 rounded-md shadow-md transition">
              Get Started
            </Link>
          </div>
        </div>
      </section>






      {/* 
      <div className="mx-auto max-w-6xl py-16">
        <section className="rounded-[40px] bg-slate-950 p-8 shadow-[0_20px_70px_-35px_rgba(15,23,42,0.55)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00b43e]">
            About EVpedia News
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight text-white">
            Powering India&apos;s Electric Mobility Revolution
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            EVpedia is a leading electric vehicle news and insights platform dedicated to covering
            the fast-growing EV ecosystem in India and across the world. Our platform delivers
            real-time updates on electric vehicles, EV charging infrastructure, battery technology,
            government EV policies, startup funding, and clean mobility innovations.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
            As India accelerates its transition toward sustainable transportation, the electric
            vehicle sector is experiencing rapid growth driven by government incentives,
            technological innovation, and rising fuel costs. Industry projections indicate that
            India&apos;s EV market is expected to grow at over 40% CAGR in the coming years.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
            EVpedia brings together automotive leaders, EV startups, charging network operators,
            policymakers, investors, and EV enthusiasts on one platform to stay informed about the
            future of mobility.
          </p>
        </section>
        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-slate-900 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00b43e]">
              Mission
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
              Deliver trusted EV intelligence that is timely, practical, and easy to understand.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We simplify the fast-moving electric mobility landscape through clear reporting,
              market updates, infrastructure coverage, and policy analysis built for readers across
              the EV value chain.
            </p>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-900 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#00b43e]">
              Vision
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
              Become the go-to platform for India&apos;s evolving EV and clean mobility ecosystem.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              We aim to connect industry stakeholders, decision-makers, startups, and enthusiasts
              through high-quality journalism and insight that supports the transition to cleaner
              transport.
            </p>
          </div>
        </section>
      </div> */}

    </>

  );
}

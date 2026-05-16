import Image from "next/image";


export default function TopBar({ title, subtitle }) {
    
    return (
        <>
            <section className="relative w-full h-[60vh] flex items-center justify-center text-center">

                {/* Background Image */}
                <Image
                    src="/banner.jpg"
                    alt={`${title} banner`}
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay (important for readability) */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 px-4 sm:px-10 max-w-4xl text-white">

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif drop-shadow-lg">
                        {title}
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed drop-shadow-md">
                        {subtitle}
                    </p>

                </div>
            </section>
        </>
    );
}
import { Link } from 'react-router-dom'


export default function HeroBanner() {
    return (
        <section 
        className = "relative min-h-screen bg-caritas-magenta flex flex-col items-center justify-center text-white text-center px-4 py-20">
            <div className = "absolute inset-0 bg-black opacity-30" />

            {/* Content container */}
            <div className = "relative z-10 max-w-4xl ,x-auto">
                {/* Small label above the main heading */}
                <p className = "text-white font-semibold uppercase -tracking-widest text-sm mb-4">Caritas Of Hope</p>

                {/* Main headline */}
                <h1 className = "text-4xl md:text-6xl font-bold leading-tight mb-6">Empowering Communities Through Hope
                    <br />
                    <span className="text-caritas-green">Transforming Lives.</span>
                </h1>


                {/* Mission Subtext */}
                <p 
                className= "text-lg md:txt-xl text-gray-200 max-w-2xl mx-auto mb-10">
                    Join us in transforming lives through education, healthcare, and sustainable development. Together, we can build a brighter future for all.
                </p>

                {/* CTA Buttons Row */}
                <div className = "flex flex-col sm:flex-row gap-4 justify-center">
                    {/* Primary Button */}
                    <Link
                    to="/programs"
                    className = "bg-white hover:bg-opacity-90 text-caritas-red px-8 py-3 rounded-full font-semibold transition">
                        Get Involved
                    </Link>
                    
                    {/* Secondary Button */}
                    <Link
                    to="/about"
                    className = "border-2 border-white hover:bg-white hover:text-caritas-magenta text-caritas-red px-8 py-3 rounde-full font-semibold transition">
                        Learn More
                    </Link>
                </div>
            </div>


           

        </section>
    )
}
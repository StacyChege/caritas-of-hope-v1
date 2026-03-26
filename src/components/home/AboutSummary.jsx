import { Link } from "react-router-dom"

export default function AboutSummary() {
    return (
        <section className = "py-20 bg-white px-4">
            {/* Inner container */}
            <div className = "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left column: text content */}
                <div>
                    {/* Small coloured caps above every section heading 
                    Repeats on every section as a consistent visual pattern */}
                    <p className="text-caritas-red text-2xl">Who We Are</p>

                    <h2 className="text-xl md:text-4xl font-bold text-caritas-blue mb-6">A Foundation Built on Hope</h2>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        Caritas of Hope Foundation  was founded on September 20th, 2023 by Allan Ndata Wangechi
                        as a dedicated mental health organization. We have since grown onto a multi-sector 
                        foundation addressing Health, Education, Humanitarian Aid, Inclusivity, Diversity and Environment.
                    </p>
                    <p className="text-caritas-green leading-relaxed mb-8">
                        <span className="text-black font-bold">Our vision is simple:</span> A future for every dream.
                        Because no dream should fade away without a chance.
                    </p>

                    <Link
                    to="/about"
                    className="inline-block bg-caritas-blue hover:bg-opacity-90 text-white px-8 py-3 rounded-full font=semibold transition">
                        Learn More About Us
                    </Link>
                </div>
                {/* Right column: Founder quote card */}
                <div className="bg-caritas-blue rounded-2xl p-10 text-white">
                    {/* Large decorative quote Mark */}
                    <span className="text-caritas-magenta text-8xl leading-none font-serif">
                        "
                    </span>

                    {/* Belief Statement */}
                    <p className="text-2xl font-medium italic mt-2 mb-6">
                        Because no dream should fade away without a chance.
                        </p>

                    {/* Founder Attribution */}
                    <p className="text-caritas-magenta font-semibold">
                        - Allan Ndata Wangechi
                    </p>
                    <p>Founder and Executive Director, Caritas of Hope</p>
                </div>
            </div>
        </section>
    )
}
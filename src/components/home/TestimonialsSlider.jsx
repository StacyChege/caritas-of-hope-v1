const testimonials = [
    {
        name: "Grace",
        role: "Health Program Beneficiary",
        quote: "The health screening helped me detect a condition early. Caritas gave me a new lease on life.",
    },
    {
        name: "Peter",
        role: "Volunteer",
        quote: "Volunteering with Caritas opened my eyes to the power of community action. It changed how I see the world.",
    },
    {
        name: "James",
        role: "Partner Organization",
        quote: "We collaborated on a disaster relief project. The team's professionalism and compassion were unmatched.",
    },
];

export default function TestimonialsGrid() {
    return (
        <section className="py-20 bg-white px-4">
            <div className="max-w-6xl mx-auto">

                {/* Section header */}
                <div className="text-center mb-14">
                    <p className="text-caritas-magenta font-semibold uppercase tracking-widest text-sm mb-3">
                        Real Stories
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-caritas-blue">
                        Changing Lives Together
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Real voices. Real stories. Discover the impact of Caritas of Hope Foundation in action.
                    </p>
                </div>

                {/* Responsive Grid instead of Slider */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                
                                {/* Decorative quote mark */}
                                <span className="text-caritas-magenta text-5xl font-serif leading-none">"</span>

                                {/* Quote text */}
                                <p className="text-gray-600 leading-relaxed mt-2 mb-6 italic grow">
                                    {t.quote}
                                </p>

                                {/* Person Row */}
                                <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                                    <div className="w-12 h-12 rounded-full bg-caritas-blue flex items-center justify-center text-white font-bold text-lg shrink-0">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-caritas-blue leading-tight">
                                            {t.name}
                                        </p>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                                            {t.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
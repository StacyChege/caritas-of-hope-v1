import { Link } from "react-router-dom"

{/* Program Data
    To be replaced with data from API later */}

const programs = [
    {
        slug: "CHI",
        name: "Caritas Health Initiative",
        short: "Improving community health through screening, education and partnerships.",
        color: "bg-caritas-magenta",
        icon: "CHI", // Placeholder for program icon
    },
    {
        slug: "CEEP",
        name: "Caritas Education Empowerment Program",
        short: "Expanding access to learning, mentorship and skills training",
        color: "bg-caritas-blue",
        icon: "CEEP", // Placeholder for program icon
    },
    {
        slug: "CHRN",
        name: "Caritas Humanitarian Relief Network",
        short: "Rapid response to crises with aid, resources and rebuilding efforts.",
        color: "bg-caritas-red",
        icon: "CHRN", // Placeholder for program icon
    },
    {
        slug: "inclusivity",
        name: "Inclusivity and Diversity",
        short: "Ensuring equal opportunities and removing barriers to participation.",
        color: "bg-caritas-green",
        icon: "I&D", // Placeholder for program icon
    },
    {
        slug: "CGEP",
        name: "Caritas Green Earth Program",
        short: "Protecting nature through restoration, education and green livelihoods.",
        color: "bg-caritas-green-light",
        icon: "CGEP", // Placeholder for program icon
    },
]

export default function ProgramHighLights() {
    return (
        <section className="py-20 bg-gray-200 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Section header */}
                <div className="text-center mb-14">
                    <p className="text-caritas-magenta font-semibold uppercase tracking-wide text-sm mb-3">What We Do</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-caritas-blue">Our Programs</h2>
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">Five focused programs. One unified mission. Real impact in Kenyan communities.</p>
                </div>

                {/* Programs cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Loop through programs to create a card for each */}

                    {programs.map((program) => (
                        <div
                            key={program.slug}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-tranlate-y-1 transition-all duration-300 overflow-hidden">
                                <div className={`${program.color} h-2`} />

                                {/* Card Body */}
                                <div className="p-6">
                                    {/* Program Icon */}
                                    <div className={program.color + "bg-opacity-15 w-12 h-12 rounded-xl flex items-center justify-center text-white text-xs font-bold mb-4"}>{program.icon}</div>

                                    {/* Program Name */}
                                    <h3 className="text-caritas-blue font-bold text-lg mb-2 justify-start items-start">{program.name}</h3>

                                    {/* Program Short Description */}
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4 justify-start items-start">{program.short}</p>

                                    {/* Learn More Link */}
                                    <Link 
                                        to={`/programs/${program.slug}`}
                                        className="text-caritas-magenta font-semibold text-sm hover:underline"
                                    >
                                        Learn More &rarr;
                                    </Link>
                                </div>

                            </div>))}
                </div>
            </div>
        </section>
    )
}
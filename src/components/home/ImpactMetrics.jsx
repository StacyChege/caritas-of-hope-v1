const metrics = [
    { value: 500, suffix: "+", label: "Beneficiaries Reached" },
    { value: 50, suffix: "+", label: "Active Volunteers" },
    { value: 30, suffix: "+", label: "Projects Completed" },
    { value: 5, suffix: "", label: "Core Programs" },
];

export default function ImpactMetrics() {
    return (
        <section className="py-20 bg-caritas-blue text-white px-4">
            <div className="max-w-6xl mx-auto">
                
                {/* Section header */}
                <div className="text-center mb-14">
                    <p className="text-caritas-magenta font-semibold uppercase tracking-widest text-sm mb-3">
                        Our Impact
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Together We are Making Measurable Change
                    </h2>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {metrics.map((metric, index) => (
                        <div key={index}>
                            {/* Static Number - No library needed */}
                            <div className="text-5xl font-bold text-caritas-magenta">
                                {metric.value}{metric.suffix}
                            </div>

                            {/* Metric Label */}
                            <p className="mt-2 text-gray-300 font-medium">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
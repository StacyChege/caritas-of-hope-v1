import HeroBanner from "../components/home/HeroBanner"
import AboutSummary from "../components/home/AboutSummary"
import ProgramHighLights from "../components/home/ProgramHighLights"
import ImpactMetrics from "../components/home/ImpactMetrics"
import TestimonialsSlider from "../components/home/TestimonialsSlider"
import LatestNews from "../components/home/LatestNews"
import NewsLetterSignup from "../components/home/NewsLetterSignup"


export default function Home() {
    return (
        <main>
            {/* Hero Banner */}
            <HeroBanner />

           {/* Short summary of who Caritas of Hope is */}
            <AboutSummary />

            {/* Grid of the 5 Caritas of Hope Programs */}
            <ProgramHighLights />

            {/* Animated numbers showing impact */}
            <ImpactMetrics />


            {/* Rotating quotes from beneficiaries and volunteers */}
            <TestimonialsSlider />


            {/* Preview cards of the latest news posts */}
            <LatestNews />

            {/* Email newsletter signup form */}
            <NewsLetterSignup />
        </main>
    )
}
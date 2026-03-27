import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Navbar- sits at the top of every page */}
            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>


        {/* Temporary footer- will be replaced with a components */}
        <footer className="bg-caritas-blue text-white text-center py-6 text-sm">
            <p>&copy; 2026 Caritas of Hope Foundation. All rights reserved.</p>
        </footer>
        </div>
    )
}
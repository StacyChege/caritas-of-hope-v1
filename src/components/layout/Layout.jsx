import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="min-h-screen flex-col">
            <header className="bg-caritas-magenta text-blue p-4 text-xl font-bold">Caritas of Hope Foundation</header>
            <main className="flex-1">
                <Outlet />
            </main>
            <footer className="fixed bottom-0 left-0 w-full bg-caritas-magenta text-white p-4 text-center text-sm">
                &copy; {new Date().getFullYear()} Caritas of Hope Foundation. All rights reserved.
            </footer>
        </div>
    )
}
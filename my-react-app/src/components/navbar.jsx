    import { useState } from "react";
    import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

    export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigation = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contacts", href: "#contacts" },
    ];

    return (
        <nav className="w-full">
        {/* Desktop & mobile wrapper */}
        <div className="flex">
            {/* Left section */}
            <div className="flex items-center px-6 py-4  flex-1">
            <h1 className="text-lg font-medium text-gray-800">Anjana O</h1>
            </div>

            {/* Right section (desktop) */}
            <div className="hidden md:flex items-center px-8 py-4 space-x-10">
            {navigation.map((item) => (
                <a
                key={item.name}
                href={item.href}
                >
                {item.name}
                </a>
            ))}
            </div>

            {/* Mobile hamburger button */}
            <div className="md:hidden flex items-center px-6 py-4 ">
            <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-800" />
                ) : (
                <Bars3Icon className="w-6 h-6 text-gray-800" />
                )}
            </button>
            </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
            <div className="md:hidden px-6 py-4 space-y-4">
            {navigation.map((item) => (
                <a
                key={item.name}
                href={item.href}
                >
                {item.name}
                </a>
            ))}
            </div>
        )}
        </nav>
    );
    }

"use client";

import { useState } from "react";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#tech-stack" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <a href="#" className="text-xl font-bold text-white">
                    RPK<span className="text-blue-500">.</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm text-slate-400 transition hover:text-white"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <a
                    href="./rajendra-prasad-k-4YE.pdf"
                    download="Rajendra-Prasad-K-Resume.pdf"
                    className="hidden rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 md:block"
                >
                    Resume ↓
                </a>

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="rounded-lg border border-slate-700 p-2 text-slate-300 md:hidden"
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </nav>

            {menuOpen && (
                <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">
                    <div className="flex flex-col gap-5">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm text-slate-300 hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="./rajendra-prasad-k-4YE.pdf"
                            download="Rajendra-Prasad-K-Resume.pdf"
                            className="w-fit rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-200"
                        >
                            Download Resume ↓
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
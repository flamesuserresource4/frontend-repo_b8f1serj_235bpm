import { Rocket, Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400 animate-pulse" />
          <span className="text-white font-semibold tracking-tight">HoloTicket</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-white/80 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-sm text-white/80 hover:text-white transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
          >
            <Github className="h-4 w-4" /> Star on GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-black bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300 hover:opacity-90 transition"
          >
            <Rocket className="h-4 w-4" /> Launch App
          </a>
        </div>
      </div>
    </header>
  );
}

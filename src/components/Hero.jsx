import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/90" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-6">
            Futuristic Discord Ticketing • AI Assisted • Blazing Fast
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Manage Discord Tickets like it2s 2099
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            HoloTicket is a holographic-grade ticket tool for Discord communities. Automate triage, escalate to staff, and deliver stunning user experiences with zero friction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex justify-center rounded-md px-5 py-3 text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300 hover:opacity-90 transition">
              Get Started
            </a>
            <a href="#features" className="inline-flex justify-center rounded-md px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10">
              See Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

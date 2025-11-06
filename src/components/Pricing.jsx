export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Simple pricing for every server size
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Start free. Scale only when you need more power.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-white font-semibold">Starter</h3>
            <p className="text-sm text-white/70 mt-1">For small communities</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-white/60">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• 1 server</li>
              <li>• 3 ticket categories</li>
              <li>• Basic analytics</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center rounded-md px-4 py-2 text-sm font-semibold text-black bg-white hover:opacity-90">Get started</a>
          </div>
          {/* Pro */}
          <div className="rounded-2xl border-2 border-transparent bg-gradient-to-b from-white/10 to-white/[0.03] p-[2px]">
            <div className="rounded-2xl bg-black p-6 h-full">
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-200">
                Most popular
              </div>
              <h3 className="text-white font-semibold mt-3">Pro</h3>
              <p className="text-sm text-white/70 mt-1">For growing servers</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-white/60">/mo</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                <li>• Unlimited categories</li>
                <li>• AI auto-triage</li>
                <li>• Advanced analytics</li>
              </ul>
              <a href="#" className="mt-6 inline-flex justify-center rounded-md px-4 py-2 text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300 hover:opacity-90">Upgrade</a>
            </div>
          </div>
          {/* Enterprise */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-white font-semibold">Enterprise</h3>
            <p className="text-sm text-white/70 mt-1">For large organizations</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-bold text-white">Custom</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• SSO & compliance</li>
              <li>• Priority support</li>
              <li>• Dedicated cluster</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center rounded-md px-4 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}

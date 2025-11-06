import { Shield, Sparkles, Bot, Activity } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Holographic UX',
    desc: 'Immersive ticket flows that feel premium and on-brand, right inside Discord.'
  },
  {
    icon: Bot,
    title: 'AI Auto-Triage',
    desc: 'Summarize issues, detect intent, and route to the right team automatically.'
  },
  {
    icon: Shield,
    title: 'Role-Aware Security',
    desc: 'Granular controls with audit logs, transcripts, and compliance-friendly exports.'
  },
  {
    icon: Activity,
    title: 'Realtime Insights',
    desc: 'Live SLA tracking, backlog heatmaps, and satisfaction scoring at a glance.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
            Built for modern Discord communities
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Everything you need to support members at scale without the chaos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition group">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-300 flex items-center justify-center mb-4">
                <f.icon className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

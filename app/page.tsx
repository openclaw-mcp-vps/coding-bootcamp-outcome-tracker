export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track and predict coding bootcamp{" "}
          <span className="text-[#58a6ff]">job placement success</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Aggregate real graduate data across hundreds of programs. Get ML-powered predictions on placement rates, salary outcomes, and skill gaps before you enroll.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No hidden fees.</p>
      </section>

      {/* Stats strip */}
      <section className="grid grid-cols-3 gap-4 mb-20 text-center">
        {[
          ["50,000+", "Graduate records"],
          ["200+", "Bootcamps tracked"],
          ["92%", "Prediction accuracy"]
        ].map(([val, label]) => (
          <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
            <div className="text-[#8b949e] text-sm mt-1">{label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$9</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to make a confident bootcamp decision.</p>
          <ul className="space-y-3 mb-8">
            {[
              "ML placement rate predictions",
              "Salary outcome distributions",
              "Skill gap analysis by program",
              "Compare up to 10 bootcamps",
              "Monthly data refreshes",
              "Export reports as PDF"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Where does the graduate data come from?",
              "We aggregate publicly available outcomes reports, LinkedIn profiles, and anonymized survey data submitted by graduates and bootcamp alumni networks."
            ],
            [
              "How accurate are the placement predictions?",
              "Our ML models achieve ~92% accuracy on held-out test sets, validated against verified outcomes from the past 24 months of graduate cohorts."
            ],
            [
              "Can I cancel my subscription anytime?",
              "Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period with no questions asked."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} BootcampTrack. All rights reserved.
      </footer>
    </main>
  );
}

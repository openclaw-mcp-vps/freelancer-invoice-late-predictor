export default function Home() {
  const faqs = [
    {
      q: 'How does the prediction work?',
      a: 'We analyze your client payment history, invoice amounts, due dates, and behavioral patterns to score each invoice with a late-payment risk percentage.'
    },
    {
      q: 'What data do I need to get started?',
      a: 'Just upload a CSV of your past invoices or connect your billing tool. We handle the rest and show predictions within minutes.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. No contracts, no lock-in. Cancel from your dashboard at any time and you keep access until the end of your billing period.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Freelancers &amp; Small Agencies
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Which Invoices<br />
          <span className="text-[#58a6ff]">Will Be Paid Late</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop chasing payments blindly. Our scoring engine analyzes client history and invoice patterns to flag risky invoices before they go overdue — and tells you exactly what to do.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Predicting — $15/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <div className="text-2xl font-bold text-white">87%</div>
            <div className="text-xs text-[#8b949e] mt-1">Prediction accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">3.2x</div>
            <div className="text-xs text-[#8b949e] mt-1">Faster collections</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">$0</div>
            <div className="text-xs text-[#8b949e] mt-1">Setup cost</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited invoice predictions',
              'Client risk scoring dashboard',
              'Automated collection strategy tips',
              'CSV &amp; billing tool import',
              'Email alerts for high-risk invoices',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Invoice Late Predictor. All rights reserved.
      </footer>
    </main>
  )
}

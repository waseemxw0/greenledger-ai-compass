
export function WhoItsForSection() {
  const forList = [
    "Startups seeking funding",
    "SMBs wanting sustainability branding",
    "Consultants offering ESG services",
    "Manufacturers needing compliance",
    "Real estate developers with reporting requirements",
  ];
  return (
    <section className="max-w-2xl mx-auto mb-10 text-center">
      <h2 className="text-xl md:text-2xl font-bold mb-3">Who It’s For</h2>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {forList.map((item) =>
          <span key={item} className="bg-emerald/10 text-emerald rounded px-4 py-2 text-sm font-medium">{item}</span>
        )}
      </div>
    </section>
  );
}

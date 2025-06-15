
export function EmbeddedFormsSection() {
  return (
    <section className="py-10 bg-background border-b dark:bg-muted">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-12 md:flex-row md:justify-center md:items-stretch">
        <div className="w-full md:w-1/2 flex flex-col items-center bg-white/90 dark:bg-muted p-6 rounded-lg shadow-sm border mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Book a 1:1 Demo</h3>
          {/* Calendly embed - replace src with real link as needed */}
          <iframe
            title="Calendly Demo Booking"
            src="https://calendly.com/your-placeholder-link/demo"
            width="100%"
            height="370"
            className="border-none w-full rounded-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center bg-white/90 dark:bg-muted p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Request Early Access</h3>
          {/* Typeform embed - replace src with real link as needed */}
          <iframe
            title="Typeform Lead Form"
            src="https://form.typeform.com/to/your-placeholder"
            width="100%"
            height="370"
            className="border-none w-full rounded-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

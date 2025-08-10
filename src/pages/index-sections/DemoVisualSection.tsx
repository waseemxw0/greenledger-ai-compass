import preview1 from "@/assets/product-preview-1.jpg";
import preview2 from "@/assets/product-preview-2.jpg";

const PREVIEW_DASH_IMAGES = [
  { src: preview1, alt: "ESG dashboard preview with emissions chart" },
  { src: preview2, alt: "Sustainability analytics with tasks and alerts" },
];
export function DemoVisualSection() {
  return (
    <section className="py-8 sm:py-14 bg-white/80 dark:bg-background border-b">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Product Preview</h2>
        <p className="mb-7 text-muted-foreground text-center max-w-xl">
          See how easy it can be to run ESG reporting that impresses your customers, regulators, and team!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {PREVIEW_DASH_IMAGES.map((img, i) => (
            <div key={i} className="glass-card rounded-md overflow-hidden p-0 border">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-60 object-cover bg-muted"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <span className="text-xs text-muted-foreground mt-3">
          Dashboards and reports shown are for demonstration purposes.
        </span>
      </div>
    </section>
  );
}

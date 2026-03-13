import { Clock, type LucideIcon } from "lucide-react";

// --- Inclusions Section ---
interface InclusionItem {
  icon: LucideIcon;
  label: string;
}

interface InclusionsSectionProps {
  title?: string;
  description?: string;
  items: InclusionItem[];
}

export function InclusionsSection({
  title = "Yang Termasuk",
  description,
  items,
}: InclusionsSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-foreground">{title}</h2>
      {description && (
        <p className="mb-6 text-muted-foreground">{description}</p>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/50 p-4"
          >
            <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm text-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Itinerary Section (timeline with center line, time left, cards right) ---
interface ItineraryItem {
  time: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
}

interface ItinerarySectionProps {
  title: string;
  description?: string;
  items: ItineraryItem[];
}

export function ItinerarySection({
  title,
  description,
  items,
}: ItinerarySectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-foreground">{title}</h2>
      {description && (
        <p className="mb-6 text-muted-foreground">{description}</p>
      )}
      <div className="relative">
        {/* Center vertical line - aligns with circle center (time col + gap + half circle) */}
        <div className="absolute left-[calc(5rem+1rem+1.25rem)] top-5 bottom-5 w-px bg-primary/30 md:left-[calc(6rem+1rem+1.25rem)]" />
        <ul className="space-y-8">
          {items.map((item, i) => {
            const Icon = item.icon ?? Clock;
            return (
              <li
                key={i}
                className="relative grid grid-cols-[minmax(0,5rem)_auto_1fr] items-center gap-4 md:grid-cols-[minmax(0,6rem)_auto_1fr]"
              >
                {/* Time on left */}
                <div className="text-right">
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.time}
                  </span>
                </div>
                {/* Center circle with icon */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-background shadow-sm">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                {/* Content card on right with triangular pointer */}
                <div className="relative rounded-xl border border-border/60 bg-card p-4 shadow-sm">
                  <h3 className="font-semibold text-foreground">{item.label}</h3>
                  {item.description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// --- Price List Section ---
interface PriceItem {
  name: string;
  price: string;
  suffix?: string;
}

interface PriceListSectionProps {
  title: string;
  description?: string;
  items: PriceItem[];
  compact?: boolean;
}

function getPriceSuffix(item: PriceItem): string {
  if (item.suffix) return item.suffix;
  if (item.name === "Kambing Guling") return "/ekor";
  if (item.name === "Bus Pariwisata") return "/unit";
  return "/pax";
}

export function PriceListSection({
  title,
  description,
  items,
  compact = false,
}: PriceListSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-foreground">{title}</h2>
      {description && (
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.name}
            className={`flex items-center justify-between rounded-xl border border-border/60 bg-card/50 px-4 ${compact ? "py-3" : "py-4"
              }`}
          >
            <span
              className={`font-medium text-foreground ${compact ? "text-sm" : ""}`}
            >
              {item.name}
            </span>
            <span
              className={`font-semibold text-primary ${compact ? "text-sm" : ""}`}
            >
              {item.price}
              {getPriceSuffix(item)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

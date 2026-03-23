import Image from "next/image";
import { contact } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Variant = "button" | "link" | "card";

interface WhatsAppCtaProps {
  variant?: Variant;
  children?: React.ReactNode;
  message?: string;
  className?: string;
}

const defaultLabels: Record<Variant, string> = {
  button: "Hubungi via WhatsApp",
  link: "Tanya via WhatsApp",
  card: "Klik untuk chat",
};

export function WhatsAppCta({
  variant = "button",
  children,
  message,
  className,
}: WhatsAppCtaProps) {
  const label = children ?? defaultLabels[variant];
  const url = message
    ? `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`
    : contact.whatsappUrl;

  const baseProps = {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  if (variant === "button") {
    return (
      <a
        {...baseProps}
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#20BD5A] hover:shadow-xl",
          className
        )}
      >
        <Image
          src="/icon/whatsapp.png"
          alt=""
          width={24}
          height={24}
          className="brightness-0 invert shrink-0"
        />
        {label}
      </a>
    );
  }

  if (variant === "link") {
    return (
      <a
        {...baseProps}
        className={cn(
          "inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:underline",
          className
        )}
      >
        <Image
          src="/icon/whatsapp.png"
          alt=""
          width={16}
          height={16}
          className="shrink-0"
        />
        {label}
      </a>
    );
  }

  if (variant === "card") {
    return (
      <a
        {...baseProps}
        className={cn(
          "group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-950/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:border-emerald-800/55 dark:bg-emerald-950/35 dark:hover:border-emerald-600/50 dark:focus-visible:ring-emerald-400",
          className
        )}
      >
        <div
          className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-emerald-600 via-[#25D366] to-green-400"
          aria-hidden
        />
        <div className="flex gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/11 ring-1 ring-[#25D366]/20 transition-transform duration-300 group-hover:scale-[1.03] dark:bg-[#25D366]/15 dark:ring-[#25D366]/25">
            <Image
              src="/icon/whatsapp.png"
              alt=""
              width={36}
              height={36}
              className="shrink-0"
            />
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="text-lg font-semibold tracking-tight text-emerald-950 dark:text-emerald-50">
              WhatsApp
            </h3>
            <p className="mt-1 text-sm tabular-nums leading-relaxed text-emerald-800/75 dark:text-emerald-200/80">
              {contact.phone}
            </p>
          </div>
        </div>
        <p className="mt-auto border-t border-emerald-100 pt-4 text-sm font-medium text-[#128C7E] dark:border-emerald-800/50 dark:text-[#4ade80]">
          {label}
        </p>
      </a>
    );
  }

  return null;
}

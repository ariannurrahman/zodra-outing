import Image from "next/image";
import { contact } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

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
          "group flex flex-col rounded-2xl border border-teal-900/[0.07] bg-white p-5 text-left shadow-[0_1px_3px_rgba(13,148,136,0.07)] transition-all duration-200 hover:-translate-y-px hover:border-teal-500/35 hover:shadow-[0_12px_40px_-16px_rgba(20,184,166,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/40 focus-visible:ring-offset-2 dark:border-white/9 dark:bg-teal-950/45 dark:shadow-[0_1px_3px_rgba(0,0,0,0.2)] dark:hover:border-teal-400/40 dark:hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.45)] dark:focus-visible:ring-teal-400/40 dark:focus-visible:ring-offset-teal-950",
          className
        )}
      >
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/12 transition-transform duration-200 group-hover:scale-[1.02] dark:bg-[#25D366]/20">
            <Image
              src="/icon/whatsapp.png"
              alt=""
              width={28}
              height={28}
              className="shrink-0"
            />
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-teal-800/70 dark:text-teal-300/80">
              WhatsApp
            </h3>
            <p className="mt-1.5 text-base font-medium tabular-nums tracking-tight text-teal-950 dark:text-teal-50">
              {contact.phone}
            </p>
            <p className="mt-1 text-sm leading-snug text-teal-800/65 dark:text-teal-200/70">
              Respon cepat untuk cek jadwal & paket
            </p>
          </div>
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 transition-colors group-hover:text-teal-800 dark:text-teal-400 dark:group-hover:text-teal-300">
          {label}
          <ArrowUpRight
            className="size-4 shrink-0 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            aria-hidden
          />
        </span>
      </a>
    );
  }

  return null;
}

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
          "flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-colors hover:border-primary hover:bg-accent/50",
          className
        )}
      >
        <Image
          src="/icon/whatsapp.png"
          alt=""
          width={48}
          height={48}
          className="shrink-0"
        />
        <h3 className="mt-4 font-semibold text-foreground">WhatsApp</h3>
        <p className="mt-2 text-sm text-muted-foreground">{contact.phone}</p>
        <p className="mt-1 text-xs text-primary">{label}</p>
      </a>
    );
  }

  return null;
}

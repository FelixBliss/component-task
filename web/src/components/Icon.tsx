import React from "react";

export type AppIconName =
  | "medical" | "pregnancy" | "brain" | "globe" | "baby" | "heart"
  | "star" | "gift" | "video" | "clipboard" | "clock" | "syringe"
  | "bandage" | "nurse" | "hand" | "search" | "check" | "mail"
  | "whatsapp" | "home" | "info" | "settings" | "quiz" | "lock"
  | "timer" | "megaphone" | "arrowRight" | "arrowLeft" | "chevron"
  | "plus" | "question" | "document";

type Props = { name: AppIconName; size?: number; strokeWidth?: number; className?: string };

export default function Icon({ name, size = 20, strokeWidth = 1.9, className }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  const paths: Record<AppIconName, React.ReactNode> = {
    medical: <><path d="M12 3v18M3 12h18"/></>,
    pregnancy: <><circle cx="12" cy="5" r="2.5"/><path d="M9 21v-6a3 3 0 0 1 6 0v6M8 12l-2 4m10-4 2 4"/></>,
    brain: <><path d="M9.5 4.5A3.5 3.5 0 0 0 6 8a3 3 0 0 0 0 6 3 3 0 0 0 3 4.5"/><path d="M14.5 4.5A3.5 3.5 0 0 1 18 8a3 3 0 0 1 0 6 3 3 0 0 1-3 4.5"/><path d="M9 8h.01M15 8h.01M9 13h.01M15 13h.01M12 4v16"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    baby: <><circle cx="12" cy="6" r="3"/><path d="M7 21v-4a5 5 0 0 1 10 0v4M9 13h6"/></>,
    heart: <><path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"/></>,
    star: <><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></>,
    gift: <><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8H8.5a2.5 2.5 0 1 1 0-5C10.5 3 12 8 12 8Zm0 0h3.5a2.5 2.5 0 1 0 0-5C13.5 3 12 8 12 8Z"/></>,
    video: <><rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3z"/></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5V3h6v1.5M8 9h8M8 13h8M8 17h5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    syringe: <><path d="m14 4 6 6M13 5l6 6M4 20l8-8M6 14l4 4M3 21l3-3M14 10l-4 4"/></>,
    bandage: <><path d="m8 4 12 12-4 4L4 8a2.8 2.8 0 0 1 4-4Z"/><path d="m7 7 2 2m-5 1 2 2m8 0 2 2m-5 1 2 2"/></>,
    nurse: <><circle cx="12" cy="7" r="3"/><path d="M6 21a6 6 0 0 1 12 0M10 7h4M12 5v4"/></>,
    hand: <><path d="M8 12V6a1.5 1.5 0 0 1 3 0v5m0-4a1.5 1.5 0 0 1 3 0v4m0-2a1.5 1.5 0 0 1 3 0v5c0 4-2.5 6-6 6H9c-3 0-5-2-5-5v-3a1.5 1.5 0 0 1 3 0v1"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M9 9.5c.3 2 1.5 3.3 3.5 4.2.6.3 1.2.2 1.6-.3l.5-.7"/></>,
    home: <><path d="m3 10 9-7 9 7v10H3z"/><path d="M9 21v-6h6v6"/></>,
    info: <><circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7h.01"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20h-2.5v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H7v-2.5h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V4h2.5v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v2.5h-.1a1.7 1.7 0 0 0-1.6 1Z"/></>,
    quiz: <><path d="M5 3h14v18H5z"/><path d="M9 7h6M9 11h6M9 15h3"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    timer: <><circle cx="12" cy="13" r="8"/><path d="M9 3h6M12 5v2M12 13l3-2"/></>,
    megaphone: <><path d="m3 11 13-5v12L3 14z"/><path d="M16 10h2a3 3 0 0 1 0 6h-2M6 15l1.5 5"/></>,
    arrowRight: <path d="M5 12h14m-6-5 5 5-5 5"/>,
    arrowLeft: <path d="M19 12H5m6-5-5 5 5 5"/>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    plus: <path d="M12 5v14M5 12h14"/>,
    question: <><path d="M9.5 9a2.5 2.5 0 1 1 4.1 1.9c-1.1.9-1.6 1.3-1.6 2.6"/><path d="M12 17h.01"/></>,
    document: <><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4M9 11h6M9 15h6"/></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

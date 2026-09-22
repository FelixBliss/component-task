export type AppIconName =
  | "medical" | "pregnancy" | "brain" | "globe" | "baby" | "heart" | "star" | "gift"
  | "video" | "clipboard" | "clock" | "syringe" | "bandage" | "nurse" | "hand"
  | "search" | "check" | "mail" | "whatsapp" | "home" | "info" | "settings" | "quiz"
  | "lock" | "timer" | "megaphone" | "arrowRight" | "arrowLeft" | "chevron" | "plus"
  | "question" | "document";

type Props = { name: AppIconName; size?: number; className?: string };

const icons: Record<AppIconName, string> = {
  medical: "🩺", pregnancy: "🤰", brain: "🧠", globe: "🌐", baby: "👶",
  heart: "❤️", star: "⭐", gift: "🎁", video: "🎥", clipboard: "📋",
  clock: "🕐", syringe: "💉", bandage: "🩹", nurse: "👩‍⚕️", hand: "✋",
  search: "🔎", check: "✅", mail: "✉️", whatsapp: "💬", home: "🏠",
  info: "ℹ️", settings: "⚙️", quiz: "📝", lock: "🔒", timer: "⏱️",
  megaphone: "📢", arrowRight: "➡️", arrowLeft: "⬅️", chevron: "›",
  plus: "➕", question: "❓", document: "📄",
};

export default function Icon({ name, size = 20, className }: Props) {
  return (
    <span className={className} style={{ fontSize: size, lineHeight: 1, display: "inline-flex", alignItems: "center", justifyContent: "center" }} role="img" aria-hidden="true">
      {icons[name]}
    </span>
  );
}

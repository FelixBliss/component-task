import React from "react";
import {
  Activity, Baby, Bandage, Brain, Check, ChevronRight, CircleHelp, ClipboardList,
  Clock3, FileText, Gift, Globe2, Hand, HeartPulse, Home, Info, LockKeyhole,
  Mail, Megaphone, MessageCircle, Plus, Search, Settings, Star, Stethoscope, Syringe,
  Timer, UserRound, Video, ArrowLeft, ArrowRight, type LucideIcon
} from "lucide-react";

export type AppIconName =
  | "medical" | "pregnancy" | "brain" | "globe" | "baby" | "heart" | "star" | "gift"
  | "video" | "clipboard" | "clock" | "syringe" | "bandage" | "nurse" | "hand"
  | "search" | "check" | "mail" | "whatsapp" | "home" | "info" | "settings" | "quiz"
  | "lock" | "timer" | "megaphone" | "arrowRight" | "arrowLeft" | "chevron" | "plus"
  | "question" | "document";

type Props = { name: AppIconName; size?: number; strokeWidth?: number; className?: string };

const icons: Record<AppIconName, LucideIcon> = {
  medical: Activity,
  pregnancy: UserRound,
  brain: Brain,
  globe: Globe2,
  baby: Baby,
  heart: HeartPulse,
  star: Star,
  gift: Gift,
  video: Video,
  clipboard: ClipboardList,
  clock: Clock3,
  syringe: Syringe,
  bandage: Bandage,
  nurse: Stethoscope,
  hand: Hand,
  search: Search,
  check: Check,
  mail: Mail,
  whatsapp: MessageCircle,
  home: Home,
  info: Info,
  settings: Settings,
  quiz: ClipboardList,
  lock: LockKeyhole,
  timer: Timer,
  megaphone: Megaphone,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  chevron: ChevronRight,
  plus: Plus,
  question: CircleHelp,
  document: FileText,
};

export default function Icon({ name, size = 20, strokeWidth = 2, className }: Props) {
  const Component = icons[name];
  return <Component size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}

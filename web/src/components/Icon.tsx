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
  medical: Stethoscope,
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
  nurse: UserRound,
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

const iconColors: Record<AppIconName, string> = {
  medical: "#0EA5E9",
  pregnancy: "#EC4899",
  brain: "#8B5CF6",
  globe: "#06B6D4",
  baby: "#F59E0B",
  heart: "#EF4444",
  star: "#F59E0B",
  gift: "#F97316",
  video: "#EF4444",
  clipboard: "#3B82F6",
  clock: "#6366F1",
  syringe: "#10B981",
  bandage: "#14B8A6",
  nurse: "#0EA5E9",
  hand: "#F59E0B",
  search: "#64748B",
  check: "#22C55E",
  mail: "#3B82F6",
  whatsapp: "#22C55E",
  home: "#0EA5E9",
  info: "#3B82F6",
  settings: "#64748B",
  quiz: "#8B5CF6",
  lock: "#64748B",
  timer: "#F97316",
  megaphone: "#F59E0B",
  arrowRight: "#0EA5E9",
  arrowLeft: "#0EA5E9",
  chevron: "#64748B",
  plus: "#0EA5E9",
  question: "#8B5CF6",
  document: "#3B82F6",
};

export default function Icon({ name, size = 20, strokeWidth = 2, className }: Props) {
  const Component = icons[name];
  return (
    <Component
      size={size}
      strokeWidth={strokeWidth}
      color={iconColors[name]}
      className={className}
      aria-hidden="true"
    />
  );
}

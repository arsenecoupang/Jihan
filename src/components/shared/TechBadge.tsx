import { getTagIcon } from "@/lib/tagIcons";

interface TechBadgeProps {
  tag: string;
  variant?: "green" | "muted";
}

export function TechBadge({ tag, variant = "green" }: TechBadgeProps) {
  const icon = getTagIcon(tag);

  const colorClass =
    variant === "green"
      ? "bg-green-500/10 text-green-400 border border-green-500/20"
      : "bg-secondary text-muted-foreground";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full font-medium ${colorClass}`}
    >
      {icon && (
        <img
          src={icon}
          alt={tag}
          width={12}
          height={12}
          className="size-3 object-contain"
          loading="lazy"
        />
      )}
      {tag}
    </span>
  );
}

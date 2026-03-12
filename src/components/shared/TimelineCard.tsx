import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { TechBadge } from "@/components/shared/TechBadge";

interface TimelineCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  tags?: string[];
  images?: string[];
}

function TimelineCard({
  company,
  role,
  period,
  description,
  bullets,
  tags,
}: TimelineCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const slideY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div ref={ref} style={{ opacity, y: slideY }}>
      <motion.div
        whileHover={{
          y: -6,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        className={[
          "glass-card glass-shine rounded-2xl p-6 md:p-8 cursor-default",
          "transition-shadow duration-500",
          isInView
            ? "shadow-[0_0_35px_rgba(34,197,94,0.18)] ring-1 ring-green-500/30"
            : "",
        ].join(" ")}
      >
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <h3 className="text-xl font-bold">{company}</h3>
            <p className="text-sm text-muted-foreground mt-1">{role}</p>
          </div>
          <span className="text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
            {period}
          </span>
        </div>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        {bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-green-500" />
                {b}
              </li>
            ))}
          </ul>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border/30">
            {tags.map((tag) => (
              <TechBadge key={tag} tag={tag} variant="green" />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default TimelineCard;

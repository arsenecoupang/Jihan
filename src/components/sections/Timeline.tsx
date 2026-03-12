import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TimelineSectionProps {
  year: string;
  children: React.ReactNode;
}

function TimelineSection({ year, children }: TimelineSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.05, rootMargin: "-10% 0px -40% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex">
      <div className="w-16 md:w-24 shrink-0">
        <div className="sticky top-32 flex flex-col items-center gap-2 pt-1 z-10">
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.5 }}
              transition={{ duration: 0.4 }}
              className="absolute size-8 rounded-full bg-green-500/40 blur-md"
            />
            <motion.div
              animate={{ scale: isActive ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 size-4 rounded-full bg-green-500 border-[3px] border-background ring-2 ring-green-500/30"
            />
          </div>
          <motion.span
            animate={{
              color: isActive ? "#22c55e" : "#6b7280",
              scale: isActive ? 1.15 : 0.9,
            }}
            transition={{ duration: 0.3 }}
            className="text-sm md:text-base font-bold tabular-nums"
          >
            {year}
          </motion.span>
        </div>
      </div>

      <div className="flex-1 pb-24 pl-4 md:pl-8">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
}

export default TimelineSection;

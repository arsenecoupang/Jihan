import { ExternalLink } from "lucide-react";
import { TechBadge } from "@/components/shared/TechBadge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <div className="glass-card glass-shine rounded-xl p-6 group">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold group-hover:text-green-accent transition-colors">
          {title}
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-green-accent"
          >
            <ExternalLink className="size-4" />
          </a>
        )}
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TechBadge key={tag} tag={tag} variant="muted" />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;

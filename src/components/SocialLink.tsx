import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialLink = forwardRef<HTMLAnchorElement, SocialLinkProps>(
  ({ href, icon: Icon, label }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-lg hover:bg-card hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 ease-out"
      >
        <Icon className="w-5 h-5 text-accent-foreground group-hover:text-primary transition-colors duration-300" />
        <span className="font-medium text-card-foreground group-hover:text-primary transition-colors duration-300">
          {label}
        </span>
      </a>
    );
  }
);

SocialLink.displayName = "SocialLink";

export default SocialLink;

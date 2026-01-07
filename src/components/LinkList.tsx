import { Instagram, Twitter, Github, Linkedin, Youtube, Mail, Globe } from "lucide-react";
import SocialLink from "./SocialLink";

const links = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter / X" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  { href: "https://example.com", icon: Globe, label: "My Website" },
  { href: "mailto:hello@example.com", icon: Mail, label: "Email Me" },
];

const LinkList = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {links.map((link) => (
        <SocialLink
          key={link.label}
          href={link.href}
          icon={link.icon}
          label={link.label}
        />
      ))}
    </div>
  );
};

export default LinkList;

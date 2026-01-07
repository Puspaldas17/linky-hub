import { Twitter, Github, Linkedin, Youtube, Mail, Globe } from "lucide-react";
import SocialLink from "./SocialLink";

const links = [
  { href: "https://x.com/PuspalDas17", icon: Twitter, label: "Twitter / X" },
  { href: "https://github.com/Puspaldas17", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/puspal-das-995933253", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.youtube.com/@puspaldas1703", icon: Youtube, label: "YouTube" },
  { href: "https://puspal-portfolio.vercel.app/", icon: Globe, label: "My Website" },
  { href: "mailto:puspal1703@gmail.com", icon: Mail, label: "Email Me" },
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

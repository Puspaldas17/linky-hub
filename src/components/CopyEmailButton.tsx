import { Mail, Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface CopyEmailButtonProps {
  email: string;
}

const CopyEmailButton = ({ email }: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({
        title: "Email copied!",
        description: `${email} has been copied to your clipboard.`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 transition-all duration-300 text-sm"
    >
      <Mail className="w-4 h-4 text-primary" />
      <span className="text-card-foreground/80">{email}</span>
      {copied ? (
        <Check className="w-4 h-4 text-green-500 animate-scale-in" />
      ) : (
        <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      )}
    </button>
  );
};

export default CopyEmailButton;

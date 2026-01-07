import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ProfileCardProps {
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
}

const ProfileCard = ({ name, username, bio, avatarUrl }: ProfileCardProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <Avatar className="w-28 h-28 ring-4 ring-white/50 shadow-xl">
        <AvatarImage src={avatarUrl} alt={name} className="object-cover" />
        <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
          {name.split(' ').map(n => n[0]).join('')}
        </AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-card-foreground">{name}</h1>
        <p className="text-muted-foreground text-sm">@{username}</p>
      </div>
      <p className="text-card-foreground/80 max-w-xs text-sm leading-relaxed">{bio}</p>
    </div>
  );
};

export default ProfileCard;

import ProfileCard from "@/components/ProfileCard";
import LinkList from "@/components/LinkList";
import profileImage from "@/assets/profile-puspal.jpg";

const Index = () => {
  return (
    <div className="min-h-screen gradient-warm flex items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 w-full max-w-md mx-auto py-12">
        <div className="glass rounded-3xl p-8 shadow-2xl border border-border/30 animate-scale-in">
          <div className="space-y-8">
            <ProfileCard
              name="Puspal Das"
              username="puspaldas17"
              bio="Developer & Creator. Building cool stuff on the web. 🚀"
              avatarUrl={profileImage}
            />
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <LinkList />
            </div>
          </div>
        </div>

        <footer className="text-center mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-sm text-muted-foreground/70">
            Made with ♥
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;

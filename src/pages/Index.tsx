import ProfileCard from "@/components/ProfileCard";
import LinkList from "@/components/LinkList";
import profileImage from "@/assets/profile-puspal.jpg";

const Index = () => {
  return (
    <div className="min-h-screen gradient-warm flex items-center justify-center p-4">
      {/* Animated gradient background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
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
      </main>
    </div>
  );
};

export default Index;

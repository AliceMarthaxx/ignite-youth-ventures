import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Briefcase, Target } from "lucide-react";
import ebpLogo from "@/assets/ebp-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={ebpLogo} alt="EBP Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold text-primary">Youth Connect</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-bright-blue py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Empowering Youth Through{" "}
                <span className="text-bold-orange">Opportunity</span>
              </h1>
              <p className="text-xl text-white/90">
                Connect with mentors, access training programs, and discover job opportunities tailored for young entrepreneurs and students.
              </p>
              <div className="flex gap-4">
                <Link to="/auth">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Join Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="#about">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img src={ebpLogo} alt="EBP" className="w-full max-w-md mx-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for your entrepreneurial journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Mentorship</h3>
              <p className="text-muted-foreground">
                Connect with experienced entrepreneurs and industry professionals who can guide your journey.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Training Programs</h3>
              <p className="text-muted-foreground">
                Access courses, workshops, and resources to build your skills and knowledge.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Job Opportunities</h3>
              <p className="text-muted-foreground">
                Discover internships, part-time roles, and career opportunities from our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">About Youth Connect</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Youth Connect is a comprehensive platform designed to bridge the gap between young aspiring entrepreneurs and the opportunities they need to succeed.
                </p>
                <p className="text-lg">
                  Whether you're a campus student or someone without formal education, we believe everyone deserves access to quality mentorship, training, and career opportunities.
                </p>
                <p className="text-lg">
                  Our platform connects three key stakeholders:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-2">
                    <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Youth Entrepreneurs:</strong> Access opportunities and grow your skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <span><strong>Service Providers:</strong> Offer mentorship, training, and job opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <span><strong>NGO Administrators:</strong> Monitor and facilitate meaningful connections</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-12 rounded-2xl">
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-primary mb-2">Our Mission</h4>
                  <p className="text-muted-foreground">
                    To empower youth with the tools, connections, and opportunities needed to build successful entrepreneurial careers.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-secondary mb-2">Our Vision</h4>
                  <p className="text-muted-foreground">
                    A world where every young person has equal access to quality mentorship and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of young entrepreneurs who are already building their future.
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={ebpLogo} alt="EBP Logo" className="h-10 w-auto" />
                <span className="font-bold">Youth Connect</span>
              </div>
              <p className="text-white/70">
                Empowering youth through opportunity and connection.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link to="#" className="hover:text-white">Mentorship</Link></li>
                <li><Link to="#" className="hover:text-white">Training</Link></li>
                <li><Link to="#" className="hover:text-white">Jobs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link to="#about" className="hover:text-white">About</Link></li>
                <li><Link to="#" className="hover:text-white">Contact</Link></li>
                <li><Link to="#" className="hover:text-white">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link to="#" className="hover:text-white">Privacy</Link></li>
                <li><Link to="#" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 Youth Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

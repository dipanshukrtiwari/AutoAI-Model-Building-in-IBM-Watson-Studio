import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Target, 
  Users, 
  Smartphone, 
  Brain, 
  BarChart3, 
  Video, 
  Award,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  PlayCircle,
  UserCheck,
  Camera,
  Gamepad2
} from "lucide-react";
import heroImage from "@/assets/hero-sports.jpg";
import dashboardImage from "@/assets/dashboard-preview.jpg";
import aiAnalysisImage from "@/assets/ai-analysis.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center space-x-2">
          <Trophy className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-gradient-hero">SportAI</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="#platform" className="text-muted-foreground hover:text-primary transition-colors">Platform</a>
          <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">Community</a>
          <Button variant="hero" size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <Badge variant="secondary" className="mb-6 bg-gradient-secondary text-secondary-foreground">
              Democratizing Sports: AI for Every Athlete, Everywhere
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient-hero">AI-Powered</span><br />
              Sports Talent<br />
              <span className="text-gradient-secondary">Ecosystem</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Revolutionizing talent discovery in India through mobile-first AI assessments, 
              scientific coaching, and inclusive community engagement. From rural villages 
              to international stages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="animate-pulse-glow">
                <PlayCircle className="mr-2 h-5 w-5" />
                Start Your Journey
              </Button>
              <Button variant="glass" size="lg">
                <Video className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>10,000+ Athletes</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-secondary" />
                <span>All Sports</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
          <div className="relative animate-float">
            <img 
              src={heroImage} 
              alt="AI-powered sports talent ecosystem showcasing diverse Indian athletes"
              className="rounded-2xl shadow-elevated w-full"
            />
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Talent Discovery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="px-6 lg:px-12 py-20 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Core Features</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Empowering Every <span className="text-gradient-hero">Athlete</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform breaks down barriers and creates opportunities 
              for talent discovery across India's diverse sporting landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="h-8 w-8" />,
                title: "Remote Talent Discovery",
                description: "Video-based AI assessments enable talent discovery anywhere, anytime. No infrastructure barriers.",
                gradient: "bg-gradient-hero"
              },
              {
                icon: <BarChart3 className="h-8 w-8" />,
                title: "Performance Tracking",
                description: "Scientific dashboards track progress, identify strengths, and provide personalized recommendations.",
                gradient: "bg-gradient-secondary"
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "AI Coaching Insights",
                description: "Machine learning delivers personalized training plans and real-time technique analysis.",
                gradient: "bg-gradient-accent"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Dual Dashboards",
                description: "Separate interfaces for athletes to track growth and coaches to manage talent pipelines.",
                gradient: "bg-gradient-hero"
              },
              {
                icon: <Gamepad2 className="h-8 w-8" />,
                title: "Gamified Community",
                description: "Challenges, leaderboards, and social features drive engagement and motivation.",
                gradient: "bg-gradient-secondary"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure & Private",
                description: "Role-based access and privacy-first data management ensure trust and compliance.",
                gradient: "bg-gradient-accent"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <div className={`w-16 h-16 ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section id="platform" className="px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-gradient-secondary text-secondary-foreground">
                Athlete Dashboard
              </Badge>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Track Your <span className="text-gradient-secondary">Growth</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Athletes get personalized dashboards showing performance metrics, 
                training recommendations, and progress tracking. AI-powered insights 
                help optimize training and prevent injuries.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Target className="h-5 w-5" />, text: "Skill Assessment & Benchmarking" },
                  { icon: <TrendingUp className="h-5 w-5" />, text: "Performance Progress Tracking" },
                  { icon: <Brain className="h-5 w-5" />, text: "AI Training Recommendations" },
                  { icon: <Award className="h-5 w-5" />, text: "Achievement & Goal Management" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center text-secondary-foreground">
                      {item.icon}
                    </div>
                    <span className="text-base font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button variant="sport" size="lg">
                <UserCheck className="mr-2 h-5 w-5" />
                Explore Athlete Features
              </Button>
            </div>
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="AI-powered athlete dashboard showing performance metrics and training insights"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={aiAnalysisImage} 
                alt="AI video analysis showing motion tracking and technique assessment"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4 border-accent text-accent">
                Coach Analytics
              </Badge>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-gradient-accent">Scientific</span> Coaching
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Coaches access advanced analytics, talent pipelines, and AI-driven 
                insights to make data-informed decisions about athlete development 
                and team selection.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: <Video className="h-5 w-5" />, text: "Video Analysis & Form Assessment" },
                  { icon: <BarChart3 className="h-5 w-5" />, text: "Team Performance Analytics" },
                  { icon: <Users className="h-5 w-5" />, text: "Talent Pipeline Management" },
                  { icon: <Brain className="h-5 w-5" />, text: "AI Injury Risk Prediction" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-accent-foreground">
                      {item.icon}
                    </div>
                    <span className="text-base font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button variant="accent" size="lg">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Coach Tools
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Engagement */}
      <section id="community" className="px-6 lg:px-12 py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-white/30 text-white bg-white/10">
            Community Powered
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Join India's Largest Sports Community
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with athletes, coaches, and institutions across India. 
            Participate in challenges, share achievements, and grow together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { number: "10,000+", label: "Active Athletes", icon: <Users className="h-8 w-8" /> },
              { number: "500+", label: "Sports Institutions", icon: <Trophy className="h-8 w-8" /> },
              { number: "50+", label: "Different Sports", icon: <Target className="h-8 w-8" /> }
            ].map((stat, index) => (
              <div key={index} className="glass text-center p-8 rounded-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button variant="glass" size="lg" className="text-white border-white/30 hover:bg-white/20">
            <Smartphone className="mr-2 h-5 w-5" />
            Download Mobile App
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 lg:px-12 py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Discover Your <span className="text-gradient-hero">Potential?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join thousands of athletes already using AI to unlock their sporting potential. 
            Start your journey today with our free assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="animate-pulse-glow">
              <PlayCircle className="mr-2 h-5 w-5" />
              Start Free Assessment
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-12 border-t bg-background/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-gradient-hero">SportAI</span>
              </div>
              <p className="text-muted-foreground">
                Democratizing sports through AI-powered talent discovery and development.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Athlete Dashboard</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Coach Analytics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Institution Tools</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Athletes</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Coaches</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Institutions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SportAI. Empowering athletes, transforming sports.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
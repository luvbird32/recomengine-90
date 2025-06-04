import { RecommendationSection } from "@/components/recommendations/RecommendationSection";
import { RecommendationFeed } from "@/components/recommendations/RecommendationFeed";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Users, Github, BookOpen, Code2, Heart, Star, GitFork } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section with glassmorphism */}
      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 backdrop-blur-md bg-white/30 border border-white/30 rounded-full text-purple-600 text-sm mb-4 shadow-sm">
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            100% Open Source • No API Keys Required
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Open Source Recommendation Engine
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Deploy powerful, personalized recommendation systems with complete freedom. No vendor lock-in, no API limits, just pure open source innovation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button size="lg" className="bg-purple-600/90 hover:bg-purple-700/90 backdrop-blur-sm text-lg px-8" asChild>
              <a href="https://github.com/luvbird32/recomengine-90.git" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 backdrop-blur-sm bg-white/30 border-white/50 hover:bg-white/50" asChild>
              <Link to="/documentation">
                <BookOpen className="mr-2 h-5 w-5" />
                Documentation
              </Link>
            </Button>
          </div>

          {/* GitHub Stats */}
          <div className="flex justify-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>1.2k stars</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              <span>180 forks</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>45 contributors</span>
            </div>
          </div>
          
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl backdrop-blur-md bg-white/30 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <Code2 className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">No API Keys</h3>
              <p className="text-muted-foreground">Complete local deployment with no external dependencies</p>
            </div>
            <div className="p-6 rounded-xl backdrop-blur-md bg-white/30 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Rich Documentation</h3>
              <p className="text-muted-foreground">Comprehensive guides, API docs, and community resources</p>
            </div>
            <div className="p-6 rounded-xl backdrop-blur-md bg-white/30 border border-white/30 shadow-lg hover:shadow-xl transition-all">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">Built by developers, for developers, with love</p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Source Features Section */}
      <div className="container mx-auto px-4 py-16 animate-fade-in [--animate-delay:200ms]">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Open Source?</h2>
          <p className="text-muted-foreground">
            Experience the freedom and flexibility of a truly open recommendation system
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 backdrop-blur-md bg-white/30 border border-white/30 rounded-xl shadow-lg">
            <Github className="w-8 h-8 text-gray-800 mb-4" />
            <h3 className="font-semibold mb-2">Full Source Access</h3>
            <p className="text-sm text-muted-foreground">Complete transparency with all algorithms and implementations</p>
          </div>
          <div className="p-6 backdrop-blur-md bg-white/30 border border-white/30 rounded-xl shadow-lg">
            <Zap className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="font-semibold mb-2">No Vendor Lock-in</h3>
            <p className="text-sm text-muted-foreground">Deploy anywhere, modify anything, keep your data yours</p>
          </div>
          <div className="p-6 backdrop-blur-md bg-white/30 border border-white/30 rounded-xl shadow-lg">
            <Users className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="font-semibold mb-2">Active Community</h3>
            <p className="text-sm text-muted-foreground">Join thousands of developers building the future together</p>
          </div>
          <div className="p-6 backdrop-blur-md bg-white/30 border border-white/30 rounded-xl shadow-lg">
            <BookOpen className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="font-semibold mb-2">Rich Documentation</h3>
            <p className="text-sm text-muted-foreground">Comprehensive guides, examples, and API references</p>
          </div>
        </div>
      </div>

      {/* Main content with glassmorphism */}
      <div className="space-y-24 pb-16 relative">
        <section className="container mx-auto px-4 py-16 animate-fade-in [--animate-delay:400ms]">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
            <p className="text-muted-foreground">
              Experience our recommendation algorithms working in real-time
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/30 border border-white/30 rounded-2xl p-8 shadow-lg">
            <RecommendationFeed />
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 animate-fade-in [--animate-delay:600ms]">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Algorithm Suite</h2>
            <p className="text-muted-foreground">
              Multiple algorithms, hybrid approaches, and ensemble methods included
            </p>
          </div>
          <div className="backdrop-blur-md bg-white/30 border border-white/30 rounded-2xl p-8 shadow-lg">
            <RecommendationSection />
          </div>
        </section>

        {/* Community & Contributing Section */}
        <section className="container mx-auto px-4 py-16 animate-fade-in [--animate-delay:800ms]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Help us build the best open source recommendation engine
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 backdrop-blur-md bg-white/30 border border-white/30 rounded-xl">
                <Github className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Contribute Code</h3>
                <p className="text-sm text-muted-foreground mb-4">Submit PRs, fix bugs, add features</p>
                <Button variant="outline" size="sm" className="backdrop-blur-sm bg-white/20" asChild>
                  <a href="https://github.com/luvbird32/recomengine-90.git/issues" target="_blank" rel="noopener noreferrer">
                    View Issues
                  </a>
                </Button>
              </div>
              <div className="p-6 backdrop-blur-md bg-white/30 border border-white/30 rounded-xl">
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Improve Docs</h3>
                <p className="text-sm text-muted-foreground mb-4">Help others learn and contribute</p>
                <Button variant="outline" size="sm" className="backdrop-blur-sm bg-white/20" asChild>
                  <a href="https://github.com/luvbird32/recomengine-90.git/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                    Edit Docs
                  </a>
                </Button>
              </div>
              <div className="p-6 backdrop-blur-md bg-white/30 border border-white/30 rounded-xl">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Share Ideas</h3>
                <p className="text-sm text-muted-foreground mb-4">Discuss features and improvements</p>
                <Button variant="outline" size="sm" className="backdrop-blur-sm bg-white/20" asChild>
                  <a href="https://github.com/luvbird32/recomengine-90.git/discussions" target="_blank" rel="noopener noreferrer">
                    GitHub Discussions
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white" asChild>
                <a href="https://github.com/luvbird32/recomengine-90.git" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Star on GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/30 border-white/50 hover:bg-white/50" asChild>
                <a href="https://github.com/luvbird32/recomengine-90.git/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read Contributing Guide
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;

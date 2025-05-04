
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-mesh">
      {/* Animated Blobs */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-teal-500/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-coral-500/20 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm rounded-full glass animate-in">
            <Sparkles className="w-4 h-4 mr-2 text-purple-400" aria-hidden="true" />
            <span>AI-Powered Meme Generator</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium mb-6 leading-tight tracking-custom animate-in stagger-1">
            Generate Hilarious <span className="text-gradient">Memes</span> with AI in Seconds
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 animate-in stagger-2">
            Transform your ideas into meme gold with our advanced AI. Just type your prompt and watch as our tool creates the perfect meme for any situation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-in stagger-3">
            <Button 
              className="text-base px-8 py-6 bg-gradient-to-r from-purple-500 to-teal-500 hover:opacity-90 transition rounded-2xl shadow-lg shadow-purple-500/20"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className={`transition-transform duration-300 ${isHovered ? 'transform -translate-x-2' : ''}`}>
                Create Your First Meme
              </span>
              <span className={`transition-all duration-300 ${isHovered ? 'opacity-100 transform translate-x-1' : 'opacity-0 translate-x-4'} ml-2`}>
                →
              </span>
            </Button>
            <Button variant="outline" className="text-base px-8 py-6 bg-white/5 hover:bg-white/10 text-white rounded-2xl border-white/10">
              See Examples
            </Button>
          </div>

          {/* Preview Image */}
          <div className="relative w-full max-w-5xl animate-in stagger-4">
            <div className="absolute inset-0 bg-gradient-to-t from-dark-500 to-transparent z-10 pointer-events-none h-20 bottom-0 top-auto"></div>
            <div className="glass p-3 md:p-6 rounded-3xl border border-white/10 shadow-xl">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-4">
                      <div className="w-8 h-8 rounded-full bg-purple-500 animate-pulse"></div>
                    </div>
                    <p className="text-white/50 text-sm">Preview loading...</p>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="MemeAI Generator interface showing a meme creation dashboard"
                  className="object-cover w-full h-full rounded-xl"
                  loading="eager"
                />
                <div className="absolute bottom-4 left-4 right-4 glass py-3 px-4 rounded-xl flex items-center">
                  <input 
                    type="text" 
                    placeholder="Type your meme idea here..."
                    className="bg-transparent border-none outline-none flex-1 text-sm"
                    readOnly
                    aria-label="Meme idea input field"
                  />
                  <Button size="sm" className="ml-2 bg-purple-500 hover:bg-purple-600">Generate</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

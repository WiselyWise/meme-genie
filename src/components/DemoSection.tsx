
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";

const DemoSection = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMeme, setGeneratedMeme] = useState("");

  const demoMemes = [
    "When you finally fix a bug after 8 hours and it was just a typo",
    "Me explaining to my cat why I'm home early from work",
    "That moment when your code works and you don't know why",
    "When someone asks if I'm a morning person"
  ];

  const handleGenerate = () => {
    if (!prompt) return;
    
    setIsGenerating(true);
    
    // Simulate meme generation
    setTimeout(() => {
      setGeneratedMeme("https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=1010&auto=format&fit=crop");
      setIsGenerating(false);
    }, 2000);
  };

  const handleSampleClick = (sample: string) => {
    setPrompt(sample);
  };

  return (
    <section id="demo" className="py-24 bg-dark-600">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 animate-in">
            Try It <span className="text-gradient">Yourself</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-in stagger-1">
            See how easy it is to create a meme in seconds with our AI generator
          </p>
        </div>
        
        <div className="glass p-6 md:p-8 rounded-3xl animate-in stagger-2">
          <div className="mb-6">
            <label className="block text-sm mb-2 text-white/70">Your meme idea</label>
            <div className="flex gap-3">
              <Input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your meme idea here..."
                className="bg-white/5 border-white/10 placeholder:text-white/40 text-white"
              />
              <Button 
                onClick={handleGenerate}
                disabled={isGenerating || !prompt}
                className="bg-purple-500 hover:bg-purple-600 whitespace-nowrap"
              >
                {isGenerating ? (
                  <>
                    <Loader className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : "Generate Meme"}
              </Button>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-xs text-white/60 mb-3">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {demoMemes.map((meme, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleSampleClick(meme)}
                  className="bg-white/5 border-white/10 text-white/90 text-xs hover:bg-white/10"
                >
                  {meme}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="relative w-full aspect-video bg-dark-700 rounded-2xl overflow-hidden animate-in stagger-3">
            {!generatedMeme && !isGenerating && (
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <p className="text-white/50 mb-2">Your meme will appear here</p>
                <p className="text-white/30 text-sm">Enter a prompt above and click Generate</p>
              </div>
            )}
            
            {isGenerating && (
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 animate-pulse"></div>
                </div>
                <p className="text-white/50 text-sm">Generating your meme...</p>
              </div>
            )}
            
            {generatedMeme && !isGenerating && (
              <>
                <img 
                  src={generatedMeme}
                  alt="Generated meme" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button size="sm" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                    Share
                  </Button>
                  <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                    Download
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

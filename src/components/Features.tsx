
import {
  Zap,
  Layers,
  Share2,
  PaintBucket,
  Download,
  Lock
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-purple-400" aria-hidden="true" />,
      title: "Lightning Fast",
      description:
        "Generate custom memes in seconds, not minutes. Our AI works at the speed of your creativity.",
    },
    {
      icon: <Layers className="h-6 w-6 text-teal-400" aria-hidden="true" />,
      title: "Extensive Templates",
      description:
        "Access thousands of classic and trending meme templates all in one place.",
    },
    {
      icon: <PaintBucket className="h-6 w-6 text-coral-400" aria-hidden="true" />,
      title: "Style Customization",
      description:
        "Adjust fonts, colors, and layouts to make your memes truly unique and personal.",
    },
    {
      icon: <Share2 className="h-6 w-6 text-purple-400" aria-hidden="true" />,
      title: "Easy Sharing",
      description:
        "Share your creations directly to social media or download in multiple formats.",
    },
    {
      icon: <Download className="h-6 w-6 text-teal-400" aria-hidden="true" />,
      title: "Batch Creation",
      description:
        "Generate multiple memes at once for social media campaigns or content calendars.",
    },
    {
      icon: <Lock className="h-6 w-6 text-coral-400" aria-hidden="true" />,
      title: "Private & Secure",
      description:
        "Your creations and prompts are never stored or shared without your permission.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-dark-500">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 animate-in">
            Everything You Need for <span className="text-gradient">Epic Memes</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-in stagger-1">
            Our AI-powered platform gives you all the tools to create viral-worthy content in seconds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass border-white/10 overflow-hidden animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

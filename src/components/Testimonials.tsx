
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Social Media Manager",
      avatar: "https://i.pravatar.cc/150?img=1",
      quote: "MemeAI has revolutionized our social media content. We've seen a 300% increase in engagement since we started using it for our weekly memes.",
    },
    {
      name: "Sarah Williams",
      role: "Content Creator",
      avatar: "https://i.pravatar.cc/150?img=5",
      quote: "This tool saves me hours every week. The AI understands my humor style and helps me create memes that resonate with my audience.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      avatar: "https://i.pravatar.cc/150?img=8",
      quote: "The speed and quality of MemeAI is unmatched. Our team can now create and test multiple meme concepts in minutes instead of hours.",
    },
    {
      name: "Jessica Taylor",
      role: "Influencer",
      avatar: "https://i.pravatar.cc/150?img=9",
      quote: "My followers can't get enough of the memes I create with this tool. It's like having a comedy writer on call 24/7.",
    },
    {
      name: "David Wilson",
      role: "Community Manager",
      avatar: "https://i.pravatar.cc/150?img=3",
      quote: "We use MemeAI for all our community engagement posts. It's simple, fast, and the results always get people talking.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-dark-500">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 animate-in">
            Loved by <span className="text-gradient">Creators</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-in stagger-1">
            See what our users are saying about their experience with MemeAI
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-in stagger-2">
          <Carousel
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="glass border-white/10 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 flex-1">
                        <p className="text-sm text-white/80 italic">"{testimonial.quote}"</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{testimonial.name}</h4>
                          <p className="text-xs text-white/60">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-white/5 border-white/10 text-white hover:bg-white/10" />
              <CarouselNext className="bg-white/5 border-white/10 text-white hover:bg-white/10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

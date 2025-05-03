
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI meme generator work?",
      answer:
        "Our AI analyzes your text prompt to understand the humor and context. It then searches through thousands of templates to find the perfect match, applies your text with optimal placement, and generates a ready-to-share meme in seconds.",
    },
    {
      question: "Can I customize the memes after they're generated?",
      answer:
        "Yes! Once your meme is generated, you can adjust text placement, font styles, colors, and even swap out the template if you'd like. Our editor gives you full creative control.",
    },
    {
      question: "How many memes can I create?",
      answer:
        "Our free plan allows you to create up to 10 memes per day. Premium subscribers get unlimited meme generation along with access to exclusive templates and features.",
    },
    {
      question: "Can I use these memes commercially?",
      answer:
        "Yes, all memes created with our tool can be used for commercial purposes. However, please note that some meme templates may contain third-party content that has its own usage rights.",
    },
    {
      question: "Do you store the memes I create?",
      answer:
        "We only store memes temporarily for sharing purposes. After 30 days, or immediately after you download them, they are removed from our servers. Your data privacy is important to us.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "We currently offer a fully responsive web application that works great on mobile devices. Dedicated iOS and Android apps are in development and coming soon!",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-dark-600">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 animate-in">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto animate-in stagger-1">
            Everything you need to know about our meme generator
          </p>
        </div>

        <Accordion type="single" collapsible className="animate-in stagger-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="glass border border-white/10 mb-4 rounded-xl overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-white/5 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center animate-in stagger-3">
          <p className="text-white/70 mb-4">Still have questions?</p>
          <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
            Contact our support team <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

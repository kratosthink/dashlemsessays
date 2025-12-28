import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface NewsletterFormProps {
  compact?: boolean;
}

const NewsletterForm = ({ compact = false }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive my latest essays in your inbox.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 h-11 bg-background border-border-dark focus:border-display"
        />
        <Button 
          type="submit" 
          disabled={isLoading}
          className="h-11 px-6 font-medium"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-display">
          Subscribe to my newsletter
        </h2>
        <p className="mt-4 text-body leading-relaxed">
          I share my thoughts on design, technology, and life. No spam, unsubscribe anytime.
        </p>
        
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 bg-background border-border-dark focus:border-display text-center sm:text-left"
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="h-12 px-8 font-medium"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;

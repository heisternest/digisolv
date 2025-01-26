import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/text-area";
import { useState } from "react";

export function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Message sent successfully!");
      const form = event.target as HTMLFormElement;
      form.reset();
    } catch (error) {
      console.error("Failed to send message", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Clarity gives you the blocks & components you need to create a
              truly professional website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                Australia OFFICE HOURS
              </h3>
              <div className="mt-3">
                <p className="text-base">Monday-Friday</p>
                <p className="text-base">8:00 am to 5:00 pm</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                OUR ADDRESS
              </h3>
              <div className="mt-3">
                <p className="text-base">Suite 2, Level 3/19</p>
                <p className="text-base">Pitt St, Sydney NSW 2000</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                GET IN TOUCH
              </h3>
              <div className="mt-3 space-y-1">
                <p className="text-base">+1-246-888-0653</p>
                <p className="text-base">info@digisolv.com.au</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-8">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-base font-medium">
                  Your name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-base font-medium">
                  Write your message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write us your question here..."
                  required
                  className="mt-2 min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

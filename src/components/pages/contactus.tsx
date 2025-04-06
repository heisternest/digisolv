import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/text-area";
import { useState } from "react";
import { Navbar } from "../navbar";
import FooterSection from "../sections/footer";

export function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission
      const form = event.target as HTMLFormElement;
      const name = (form.name as unknown as HTMLInputElement).value;
      const email = form.email.value;
      const message = form.message.value;
      const subject = "Contact Form Submission";
      const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

      // Open the email client with pre-filled data
      const mailtoLink = `mailto:info@digisolv.au?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink; // This will open the email client

      form.reset();
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 pt-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                DigiSolv delivers secure, scalable, and reliable IT solutions to
                optimize your digital infrastructure. Our expertise spans
                managed IT services, cybersecurity, and cloud solutions, all
                tailored to meet your unique business objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-primary uppercase tracking-wider">
                  Australia OFFICE HOURS
                </h3>
                <div className="mt-3">
                  <p className="text-base">Monday-Friday</p>
                  <p className="text-base">8:00 am to 5:00 pm</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-primary uppercase tracking-wider">
                  OUR ADDRESS
                </h3>
                <div className="mt-3">
                  <p className="text-base">Suite 2, Level 3/19</p>
                  <p className="text-base">Pitt St, Sydney NSW 2000</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-primary uppercase tracking-wider">
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
                  className="w-full bg-primary hover:bg-blue-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4  md:py-24">
        <p className="text-lg my-10 font-bold tracking-tight sm:text-3xl">
          Find Us Here
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5728.842891695763!2d151.20635527728956!3d-33.862195873229204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae426ae35dc1%3A0x67a2cec7900a2f3!2sSuite%202%2C%20Level%203%2F19%20Pitt%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e1!3m2!1sen!2snp!4v1743321310962!5m2!1sen!2snp"
          className="w-full h-96 border-0"
          loading="lazy"
        ></iframe>
      </div>

      <div className="mt-5">
        <FooterSection />
      </div>
    </>
  );
}

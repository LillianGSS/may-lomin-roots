import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Stadium Address",
      details: ["May Lomin abi adi Stadium", "Tigray Region", "Ethiopia"]
    },
    {
      icon: Mail,
      title: "Email Contacts",
      details: ["info@maylomin.fc", "tickets@maylomin.fc", "academy@maylomin.fc"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Match Days Only"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-foreground mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-foreground-muted font-inter max-w-2xl mx-auto">
            Have questions? Want to join our academy? Ready to become a supporter? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-oswald font-bold text-2xl text-foreground mb-8">
              CONTACT INFORMATION
            </h3>
            
            {contactInfo.map((item, index) => (
              <Card key={index} className="group hover:shadow-club transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-club-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-oswald font-bold text-lg text-foreground mb-2">
                        {item.title}
                      </h4>
                      <div className="space-y-1">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-foreground-muted font-inter text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="bg-gradient-primary text-club-secondary">
              <CardHeader>
                <CardTitle className="font-oswald text-xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-inter mb-4">
                  Stay connected with May Lomin FC on social media for the latest updates, behind-the-scenes content, and match highlights.
                </p>
                <div className="flex space-x-4">
                  <Button variant="secondary" size="sm" className="bg-club-secondary text-club-primary hover:bg-club-secondary/90">
                    Facebook
                  </Button>
                  <Button variant="secondary" size="sm" className="bg-club-secondary text-club-primary hover:bg-club-secondary/90">
                    Twitter
                  </Button>
                  <Button variant="secondary" size="sm" className="bg-club-secondary text-club-primary hover:bg-club-secondary/90">
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="font-oswald text-2xl text-foreground">
                  SEND US A MESSAGE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-inter text-foreground">
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="font-inter" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-inter text-foreground">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="font-inter" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium font-inter text-foreground">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="font-inter" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium font-inter text-foreground">
                    Subject
                  </label>
                  <Input placeholder="What is this regarding?" className="font-inter" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium font-inter text-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={6}
                    className="font-inter resize-none"
                  />
                </div>

                <Button size="lg" className="w-full bg-club-primary hover:bg-club-primary-dark text-club-secondary font-inter font-semibold">
                  Send Message
                </Button>

                <p className="text-xs text-foreground-muted font-inter text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
"use client";

/* @ts-ignore */
import { useForm } from "react-hook-form";
/* @ts-ignore */
import { z } from "zod";
/* @ts-ignore */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  occasion: z.string().min(2, { message: "Please describe the occasion." }),
  message: z.string().optional(),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      occasion: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // Placeholder for form submission (e.g., API call)
    form.reset();
  }

  const services = [
    {
      title: "Wedding Badges",
      description: "Personalized badges for your special day, with names, dates, and themes.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bed68586-be1b-4fe2-a130-b183f64fec80.png",
    },
    {
      title: "Corporate Events",
      description: "Professional badges for conferences, team buildings, and awards.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e2a4843-a826-4376-a840-287787a3522e.png",
    },
    {
      title: "Birthday Celebrations",
      description: "Fun, colorful badges for parties and milestones.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/35bc293b-2468-4081-84b8-8828bfd88319.png",
    },
    {
      title: "Custom Awards",
      description: "Unique badges for achievements and recognitions.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20f30b53-6300-4279-b225-7649e426e5dd.png",
    },
  ];

  const testimonials = [
    { quote: "The badges were perfect for our wedding! Highly recommend.", author: "Jane D." },
    { quote: "Excellent quality and fast turnaround for our corporate event.", author: "John S." },
    { quote: "Made my birthday party extra special with custom designs.", author: "Emily R." },
  ];

  return (
    <>
      <Hero />
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>About Custom Badges Co.</CardTitle>
              <CardDescription>We craft personalized badges for occasions that matter, using high-quality materials and creative designs.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>With years of experience, we turn your ideas into memorable keepsakes for weddings, events, and more.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="occasion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occasion</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Wedding" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your badge ideas" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Submit Inquiry</Button>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
}

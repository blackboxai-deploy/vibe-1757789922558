import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1520d6e9-95f6-4698-abed-b72fc109e2d8.png')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Custom Badges for Your Special Moments</h1>
        <p className="text-xl md:text-2xl mb-8">Personalized designs for weddings, events, and more</p>
        <Button variant="secondary" size="lg" asChild>
          <a href="#contact">Get Started</a>
        </Button>
      </div>
    </section>
  );
}

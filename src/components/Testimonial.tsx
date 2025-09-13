import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
}

export default function Testimonial({ quote, author }: TestimonialProps) {
  return (
    <Card className="p-6">
      <CardContent className="flex flex-col gap-4">
        <p className="text-3xl text-muted-foreground leading-none">“</p>
        <p className="italic">{quote}</p>
        <p className="font-semibold text-right">- {author}</p>
      </CardContent>
    </Card>
  );
}

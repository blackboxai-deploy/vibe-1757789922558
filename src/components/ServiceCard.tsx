import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <img 
        src={image} 
        alt={`Custom ${title} badge design`} 
        className="w-full h-48 object-cover"
        onError={(e) => { e.currentTarget.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b70ad984-9cd4-4b4a-8ac7-cf1bb216339d.png"; }}
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

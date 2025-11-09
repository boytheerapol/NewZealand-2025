import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Hotel } from "lucide-react";
import { DayItinerary } from "@/data/itinerary";

interface DayCardProps {
  day: DayItinerary;
  onClick: () => void;
}

export default function DayCard({ day, onClick }: DayCardProps) {
  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="default" className="text-lg px-3 py-1">
            วันที่ {day.day}
          </Badge>
          <span className="text-sm text-muted-foreground">{day.date}</span>
        </div>
        <CardTitle className="text-xl mt-2">{day.title}</CardTitle>
        <CardDescription className="text-base">
          {day.highlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 mt-1">
              <span className="text-primary">•</span>
              <span>{highlight}</span>
            </div>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {day.locations.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{day.locations.length} สถานที่</span>
            </div>
          )}
          {day.accommodation && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Hotel className="w-4 h-4" />
              <span className="line-clamp-1">{day.accommodation}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

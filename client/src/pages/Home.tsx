import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Info } from "lucide-react";
import { itineraryData } from "@/data/itinerary";
import DayCard from "@/components/DayCard";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2071')] bg-cover bg-center opacity-20"></div>
        <div className="relative container py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              นิวซีแลนด์เกาะใต้
            </h1>
            <p className="text-xl md:text-2xl mb-2 opacity-90">
              ดินแดนแห่งธรรมชาติบริสุทธิ์
            </p>
            <p className="text-lg md:text-xl mb-6 opacity-80">
              1 – 8 ธันวาคม 2568
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setLocation("/info")}
                className="text-lg"
              >
                <Info className="w-5 h-5 mr-2" />
                ของฝาก & เตรียมตัว
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trip Highlights */}
      <div className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">ไฮไลท์การเดินทาง</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/highlight-queenstown.jpeg"
                  alt="Queenstown TSS Earnslaw"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4 text-center">
                <h3 className="font-semibold text-lg mb-2">Queenstown</h3>
                <p className="text-muted-foreground">
                  เมืองรีสอร์ทกลางขุนเขา ล่องเรือกลไฟโบราณ TSS Earnslaw
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/highlight-mtcook.jpg"
                  alt="Mount Cook Aoraki"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4 text-center">
                <h3 className="font-semibold text-lg mb-2">Mt. Cook</h3>
                <p className="text-muted-foreground">
                  อุทยานแห่งชาติ ล่องเรือชมธารน้ำแข็งทะเลสาบ Tasman
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/highlight-tekapo.jpg"
                  alt="Lake Tekapo Church of Good Shepherd"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4 text-center">
                <h3 className="font-semibold text-lg mb-2">Lake Tekapo</h3>
                <p className="text-muted-foreground">
                  โบสถ์เล็กกลางวิว ชมดาวยามค่ำคืน หนึ่งในจุดชมดาวที่สวยที่สุดในโลก
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Daily Itinerary */}
      <div className="container py-12">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Calendar className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">แผนการเดินทางรายวัน</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itineraryData.map((day) => (
            <DayCard
              key={day.day}
              day={day}
              onClick={() => setLocation(`/day/${day.day}`)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-primary/5 py-8 mt-12">
        <div className="container text-center">
          <p className="text-muted-foreground">
            "หนึ่งในเส้นทางที่สวยที่สุดในโลก… รอให้คุณมาสัมผัสด้วยตาตนเอง"
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            เดินทางโดยสายการบิน QANTAS Airways
          </p>
        </div>
      </div>
    </div>
  );
}

import { useRoute, useLocation } from "wouter";
import { itineraryData } from "@/data/itinerary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowUp, MapPin, Hotel, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { MapView } from "@/components/Map";
import ImageCarousel from "@/components/ImageCarousel";
import AccommodationModal from "@/components/AccommodationModal";
import Breadcrumb from "@/components/Breadcrumb";

export default function DayDetail() {
  const [, params] = useRoute("/day/:id");
  const [, setLocation] = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showAccommodationModal, setShowAccommodationModal] = useState(false);
  
  const dayId = parseInt(params?.id || "1");
  const day = itineraryData.find(d => d.day === dayId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dayId]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!day) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">ไม่พบข้อมูลวันที่ {dayId}</h1>
          <Button onClick={() => setLocation("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับหน้าหลัก
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8 shadow-lg">
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับหน้าหลัก
          </Button>
          <div className="flex items-center gap-4 mb-2">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              วันที่ {day.day}
            </Badge>
            <span className="text-lg">{day.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{day.title}</h1>
        </div>
      </div>

      <div className="container py-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb 
          items={[
            { label: `วันที่ ${day.day}: ${day.title}` }
          ]} 
        />

        {/* Highlights Section */}
        {day.highlights.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                ไฮไลท์ของวัน
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {day.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-base">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Google Maps Section (เปลี่ยนเป็นปุ่มเปิด Google Map) */}
        {day.googleMapUrl && (
          <Card className="mb-8 bg-linear-to-r from-blue-100/60 to-blue-300/30 border-blue-300 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                เส้นทางการเดินทางในวันนี้
              </CardTitle>
              <CardDescription>
                กดปุ่มเพื่อดูเส้นทางเดินทางและสถานที่ท่องเที่ยวของวันนี้
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
                onClick={() => window.open(day.googleMapUrl, '_blank', 'noopener,noreferrer')}
                size="lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                เปิดแผนที่ Google Map
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Locations Section */}
        {day.locations.length > 0 && (
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              สถานที่ท่องเที่ยว
            </h2>
            {day.locations.map((location, idx) => (
              <Card key={idx} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {location.description}
                  </CardDescription>
                </CardHeader>
                {location.images.length > 0 && (
                  <CardContent>
                    <ImageCarousel
                      images={location.images}
                      alt={location.name}
                      autoRotate={true}
                      interval={5000}
                    />
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Accommodation Section */}
        {day.accommodation && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hotel className="w-5 h-5 text-primary" />
                ที่พัก
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-lg">{day.accommodation}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAccommodationModal(true)}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  ดูรายละเอียด
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          {day.day > 1 ? (
            <Button
              variant="outline"
              onClick={() => setLocation(`/day/${day.day - 1}`)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              วันก่อนหน้า
            </Button>
          ) : (
            <div />
          )}
          {day.day < itineraryData.length ? (
            <Button onClick={() => setLocation(`/day/${day.day + 1}`)}>
              วันถัดไป
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-lg"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Accommodation Modal */}
      {day.accommodation && (
        <AccommodationModal
          isOpen={showAccommodationModal}
          onClose={() => setShowAccommodationModal(false)}
          hotelName={day.accommodation}
        />
      )}
    </div>
  );
}

import { useRoute, useLocation } from "wouter";
import { itineraryData } from "@/data/itinerary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowUp, MapPin, Hotel, Star } from "lucide-react";
import { useEffect, useState } from "react";
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
    <div className="min-h-screen bg-linear-to-b from-background to-accent/20">
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

        {/* Google Maps Section (ปุ่มเปิด Google Map) */}
        {day.day === 4 ? (
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
            <CardContent className="flex flex-col gap-4">
              <Button
                className="w-full py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
                onClick={() => window.open("https://www.google.com/maps/dir/Holiday+Inn+Express+%26+Suites+Queenstown+by+IHG/Jones+Family+Fruit+Stall/Wanaka+Lavender+Farm/Puzzling+World/Lake+View+Seafood+Restaurant/That+Wanaka+tree/Lindis+Pass+Viewpoint/-44.5044668,169.8795385/High+Country+Salmon/Lake+Ruataniwha+View+Point+2609+Twizel-Omarama+Road,+Glenbrook+7999,+New+Zealand/@-44.6325958,169.3062129,10z/data=!3m1!5s0xa9d54f4543106443:0x5cda9ce4e82dd203!4m57!4m56!1m5!1m1!1s0xa9d51d0514fbe873:0x7b4f9a0e93425869!2m2!1d168.665904!2d-45.033007!1m5!1m1!1s0xa9d52ae974eae357:0x83f172f96ff18273!2m2!1d169.1458602!2d-45.0583953!1m5!1m1!1s0xa9d54ec831f9f6bd:0x7f54350d3a9ec876!2m2!1d169.187222!2d-44.703827!1m5!1m1!1s0xa9d54f268575edf9:0xfa66441c199b7fcf!2m2!1d169.1615767!2d-44.6967084!1m5!1m1!1s0xa9d54fc685704b5d:0xa78b6bdc80306aea!2m2!1d169.1333072!2d-44.6959375!1m5!1m1!1s0xa9d545f8be1fcb13:0x394008aedefe80b4!2m2!1d169.1175501!2d-44.6983476!1m5!1m1!1s0xa82aa146df4736a5:0x5c1007f3174e73a!2m2!1d169.6453056!2d-44.5879997!1m0!1m5!1m1!1s0x6d2adf93b2460ddd:0x41e35fecbe705d5f!2m2!1d170.084506!2d-44.2910697!1m5!1m1!1s0x6d2adf1cf34ef3db:0xe3d65e5e4b88440!2m2!1d170.0841395!2d-44.2880291!3e0?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D", '_blank', 'noopener,noreferrer')}
                size="lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                เปิดแผนที่ Google Map (เส้นทางหลัก)
              </Button>
              <Button
                className="w-full py-4 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md transition"
                onClick={() => window.open("https://www.google.com/maps/dir/Lake+Ruataniwha+View+Point/Jasmine+Thai+Restaurant/-44.1970571,170.1234366/Lake+Pukaki+Viewpoint/Reflecting+Mountain+View/Peter's+Lookout,+Ben+Ohau,+New+Zealand/Lake+Pukaki+and+Mount+Cook+view+point/Glentanner+Lookout/Mount+Cook+%26+Tasman+River+Lookout/Mt+Cook+Lodge+%26+Motels/@-44.1738517,170.0557893,11z/data=!3m1!4b1!4m57!4m56!1m5!1m1!1s0x6d2adf1cf34ef3db:0xe3d65e5e4b88440!2m2!1d170.0841395!2d-44.2880291!1m5!1m1!1s0x6d2ae01dffb88923:0xd54d59c5f90c8b5a!2m2!1d170.098075!2d-44.256549!1m0!1m5!1m1!1s0x6d2b1dc5aabdb039:0x469e0b81042049cc!2m2!1d170.1398987!2d-44.1899355!1m5!1m1!1s0x6d2b03ca0b6adabb:0x438ba2d9fae0b6fd!2m2!1d170.1308431!2d-44.1148869!1m5!1m1!1s0x6d2b02f917b7b285:0x232eb35641a7d822!2m2!1d170.1357847!2d-44.0890299!1m5!1m1!1s0x6d2bab001945fe3f:0x2c402e34f878343!2m2!1d170.1311097!2d-43.9454938!1m5!1m1!1s0x6d2bad005ab6299f:0x35e92e90b0996822!2m2!1d170.1190016!2d-43.8824139!1m5!1m1!1s0x6d2bade5b3519f75:0xed8ecc0293947677!2m2!1d170.1107201!2d-43.8491716!1m5!1m1!1s0x6d2bb4ad18b9f8d9:0x86c08bc70d6d60bf!2m2!1d170.0987676!2d-43.7363846!3e0?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D", '_blank', 'noopener,noreferrer')}
                size="lg"
              >
                <MapPin className="w-5 h-5 mr-2" />
                เปิดแผนที่ Google Map (เส้นทาง Mt. Cook)
              </Button>
            </CardContent>
          </Card>
        ) : (
          day.googleMapUrl && (
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
          )
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

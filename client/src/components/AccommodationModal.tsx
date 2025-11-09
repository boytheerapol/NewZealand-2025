import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink } from "lucide-react";

interface AccommodationModalProps {
  isOpen: boolean;
  onClose: () => void;
  hotelName: string;
}

export default function AccommodationModal({ isOpen, onClose, hotelName }: AccommodationModalProps) {
  const getGoogleMapsUrl = (hotel: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel + " New Zealand")}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            ข้อมูลที่พัก
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">{hotelName}</h3>
            <p className="text-sm text-muted-foreground">
              โรงแรมที่พักสำหรับวันนี้
            </p>
          </div>
          
          <div className="pt-4 border-t">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(getGoogleMapsUrl(hotelName), '_blank')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              ดูตำแหน่งบน Google Maps
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="text-xs text-muted-foreground pt-2">
            <p>💡 คลิกปุ่มด้านบนเพื่อดูตำแหน่งที่พัก ที่อยู่ และเส้นทางบน Google Maps</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

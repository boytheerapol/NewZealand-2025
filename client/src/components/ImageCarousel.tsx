import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  autoRotate?: boolean;
  interval?: number;
}

export default function ImageCarousel({ 
  images, 
  alt, 
  autoRotate = true, 
  interval = 3000 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadingImages, setLoadingImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Reset loading state when images change
    setImageLoaded(false);
    setLoadingImages({});
  }, [images]);

  useEffect(() => {
    if (!autoRotate || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoRotate, interval, images.length]);

  const handleImageLoad = (index: number) => {
    setLoadingImages(prev => ({ ...prev, [index]: true }));
    if (index === currentIndex) {
      setImageLoaded(true);
    }
  };

  useEffect(() => {
    if (loadingImages[currentIndex]) {
      setImageLoaded(true);
    } else {
      setImageLoaded(false);
    }
  }, [currentIndex, loadingImages]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">ไม่มีรูปภาพ</p>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        {!loadingImages[0] && (
          <Skeleton className="absolute inset-0 w-full h-full" />
        )}
        <img
          src={images[0]}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loadingImages[0] ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => handleImageLoad(0)}
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden group">
      {/* Skeleton Loading */}
      {!imageLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {/* Main Image */}
      <img
        src={images[currentIndex]}
        alt={`${alt} - รูปที่ ${currentIndex + 1}`}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => handleImageLoad(currentIndex)}
      />
      
      {/* Preload other images */}
      {images.map((img, idx) => (
        idx !== currentIndex && (
          <img
            key={idx}
            src={img}
            alt=""
            className="hidden"
            onLoad={() => handleImageLoad(idx)}
          />
        )
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-background/60 hover:bg-background/80"
            }`}
            aria-label={`ไปยังรูปที่ ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-background/80 px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import security1 from "@/assets/security-1.jpg";

import security3 from "@/assets/security-3.jpg";



interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const images: GalleryImage[] = [
    {
    src: "https://i.ibb.co/tPq2WDP4/WP.jpg",
    alt: "Permissioned Access Control System",
    title: "Hyderabad Police",
  },
  {
    src: security1,
    alt: "Security Control Room",
    title: "24/7 Monitoring Center",
  },
 
  {
    src: security3,
    alt: "Security Personnel",
    title: "Professional Security Team",
  },
  
 
];

const ImageModal = ({
  image,
  onClose,
  onNext,
  onPrev,
}: {
  image: GalleryImage;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-card hover:bg-accent transition-colors z-10"
        aria-label="Close"
      >
        <X className="w-6 h-6 text-foreground" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 p-3 rounded-full bg-card hover:bg-accent transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 p-3 rounded-full bg-card hover:bg-accent transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      <div
        className="max-w-7xl max-h-[90vh] mx-4 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[var(--shadow-strong)]"
        />
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold text-foreground">{image.title}</h3>
          <p className="text-muted-foreground">{image.alt}</p>
        </div>
      </div>
    </div>
  );
};

const GalleryCard = ({
  image,
  onClick,
}: {
  image: GalleryImage;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg cursor-pointer bg-card transition-all duration-300 hover:shadow-[var(--shadow-medium)] hover:scale-[1.02]"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {image.title}
          </h3>
          <p className="text-sm text-muted-foreground">{image.alt}</p>
        </div>
      </div>
    </div>
  );
};

export const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Explore our comprehensive security solutions and professional team in action
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryCard
              key={index}
              image={image}
              onClick={() => setSelectedImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {selectedImageIndex !== null && (
        <ImageModal
          image={images[selectedImageIndex]}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

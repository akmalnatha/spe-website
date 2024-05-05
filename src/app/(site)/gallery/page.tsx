import Link from "next/link";
import galleryData from "@/lib/gallery"; // Import your image data

const GalleryPage = () => {
  return (
    <div className="w-full h-full bg-white relative overflow-hidden py-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryData.map((gallery, index) => (
          <div key={index} className="flex flex-col gap-4 px-8 py-auto mx-auto">
            <Link href={`/gallery/${gallery.index}`}>
              <h2 className="text-[#0033D0] font-extrabold font-plusJakartaSans text-lg text-start mb-3">
                {gallery.title}
              </h2>
              <img
                src={gallery.image}
                alt={`Event ${gallery.index}`}
                className="cursor-pointer"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;

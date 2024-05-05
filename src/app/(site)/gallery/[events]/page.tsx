import galleryData from "@/lib/gallery";

const EventPage = ({ params }: { params: { index: number } }) => {
  const index = params.index;

  // Find the gallery item with the matching index
  const eventGallery = galleryData.find((item) => item.index === index);

  console.log("Event gallery:", eventGallery);

  if (!eventGallery) {
    return <div>Event not found</div>;
  }

  return (
    <div className="w-full h-full bg-white relative overflow-hidden py-32">
      <h2>Event {index}</h2>
      <div className="flex flex-wrap">
        {eventGallery.events.map((event, idx) => (
          <img
            key={idx}
            src={event}
            alt={`Event ${index} Image ${idx}`}
            className="m-2" // Add margin for spacing
          />
        ))}
      </div>
    </div>
  );
};

export default EventPage;

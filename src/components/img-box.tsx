export default function ImageBox({ url }: { url: string }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden justify-evenly">
      <img src={url} alt="Image" className="h-auto w-full" />
    </div>
  );
}

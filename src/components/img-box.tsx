export default function ImageBox({ url }: { url: string }) {
  return (
    <div className="rounded-xl overflow-hidden justify-evenly">
      <img src={url} alt="Image" className="h-auto w-full" />
    </div>
  );
}

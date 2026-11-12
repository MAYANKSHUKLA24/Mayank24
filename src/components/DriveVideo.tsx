export default function DriveVideo({
  fileId,
  title,
  className = "",
}: {
  fileId: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black ${className}`}>
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        title={title}
        className="absolute inset-0 h-full w-full border-0"
        allow="autoplay"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

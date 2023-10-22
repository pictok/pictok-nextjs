import SoundPreview from "@/components/design/SoundPreview";

export default async function UploadSuccess({
  searchParams,
}: {
  searchParams: { image: string };
}) {
  const { image } = searchParams;

  return (
    <div className="mx-auto max-w-xl space-y-5 p-10">
      <h1 className="text-center text-xl font-bold">
        Image upload was successful!
      </h1>
      {image && (
        <>
          <img src={image} alt="preview" />
          <SoundPreview image={image} />
        </>
      )}
    </div>
  );
}

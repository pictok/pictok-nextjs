import Logo from "@/components/design/Logo";
import SoundPreview from "@/components/design/SoundPreview";

export default async function UploadSuccess({
  searchParams,
}: {
  searchParams: { image: string };
}) {
  const { image } = searchParams;

  return (
    <div className="mx-auto max-w-xl space-y-5 px-2 py-5">
      <div className="flex justify-center">
        <Logo />
      </div>
      <h1 className="text-center text-xl font-bold">
        Your image upload was successful!
      </h1>
      {image && (
        <>
          <div className="flex justify-center">
            <img src={image} alt="preview" />
          </div>
          <SoundPreview image={image} />
        </>
      )}
    </div>
  );
}

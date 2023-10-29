"use client";

import { useRef } from "react";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { supabase } from "@/db/supabase";
import { randomImageName } from "@/lib/randomImageName";
import { redirect } from "next/navigation";

export default function TakePhotoButton() {
  const photoInputRef = useRef<HTMLInputElement>(null);
  const handleClick = async () => {
    //Open the camera
    photoInputRef.current?.click();
    //Get the photo
    const files = photoInputRef.current?.files;
    if (!files || files.length == 0) return;
    const photo = files[0];
    //Generate a random image name
    const imageName = randomImageName() + photo.type.replace("image/", ".");
    //Upload the photo to supabase storage
    const { data, error } = await supabase.storage
      .from("images")
      .upload(imageName, photo);
    if (error) {
      console.error(error);
      return;
    }
    //Get the photo url
    const photoUrl = data?.path;
    console.log(photoUrl);
    //Redirect the user to the photo processing page.
    redirect("/");
  };
  return (
    <>
      <PrimaryButton
        onClick={handleClick}
        className="relative flex h-auto w-full  max-w-sm flex-col items-start justify-start gap-5 pb-3 pr-3 pt-10"
      >
        <h2 className="text-lg">Take Photo</h2>
        <div
          aria-hidden
          className="relative z-10 ml-auto mt-auto h-16 w-16 overflow-hidden"
        >
          <Image src="/images/assets/camera.png" fill={true} alt="Image icon" />
        </div>
        <div
          aria-hidden
          className="weird-circle absolute bottom-0 right-0 h-[100px] w-[100px] overflow-hidden rounded-br-3xl bg-primary-variant"
        ></div>
      </PrimaryButton>

      <input
        ref={photoInputRef}
        type="file"
        name="picture"
        id="picture"
        accept="image/*"
        capture="environment"
        className="hidden"
        aria-hidden
      />
    </>
  );
}
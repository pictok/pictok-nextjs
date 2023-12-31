import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";

export default function TakePhotoDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <PrimaryButton className="relative flex h-auto w-full max-w-sm flex-col items-start justify-start gap-5 pb-3 pr-3 pt-10">
          <h2 className="text-lg">Take Photo</h2>
          <div className="relative z-10 ml-auto mt-auto h-16 w-16 overflow-hidden">
            <Image
              src="/images/assets/camera.png"
              fill={true}
              alt="Camera icon"
            />
          </div>
          <div className="weird-circle absolute bottom-0 right-0 h-[100px] w-[100px] overflow-hidden rounded-br-3xl bg-primary-variant"></div>
        </PrimaryButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={4}>
        <DropdownMenuItem>
          <Link href="/webcam">Take a photo with webcam</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/upload">Drop a file or click to upload</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

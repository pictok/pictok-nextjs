import Image from "next/image";
import Link from "next/link";
import SecondaryButton from "@/components/design/SecondaryButton";
import TakePhotoButton from "@/components/design/TakePhotoButton";
import RegularButton from "@/components/design/RegularButton";
import Navbar from "@/components/design/Navbar";
import HomeHeader from "@/components/design/HomeHeader";
import { createServerClient } from "@supabase/ssr";
import { supabaseKey, supabaseUrl } from "@/db/supabase";
import { cookies } from "next/headers";
import RealtimeInbox from "./realtime-inbox";

export default async function Home() {
  let numberOfUnreadImages = 0;
  const cookieStore = await cookies();
  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
    },
  });
  const { data } = await supabase.auth.getSession();

  const { data: user } = await supabase
    .from("profile")
    .select("*")
    .eq("user_id", data.session?.user.id)
    .single();

  const { count } = await supabase
    .from("inbox")
    .select("*", { count: "exact" })
    .match({ to_id: user?.id, read: false });
  if (count) {
    numberOfUnreadImages = count;
  }

  return (
    <main className="mx-auto flex h-screen max-w-lg flex-col justify-between px-5">
      <div>
        <HomeHeader />
        <div className="mb-5 mt-2 grid grid-cols-2 gap-2 gap-y-5">
          <TakePhotoButton />
          <Link href="/inbox">
            <SecondaryButton className="relative flex h-[225.48px] w-full max-w-sm flex-col items-start justify-start gap-5 pb-3 pr-3 pt-10">
              <div className="flex w-full flex-col text-left text-xl md:flex-row md:items-center md:justify-between">
                <h2 className="font-semibold">Inbox</h2>

                <RealtimeInbox
                  userId={user?.id}
                  numberOfUnreadImages={numberOfUnreadImages}
                />
              </div>
              <div
                aria-hidden
                className="absolute bottom-1 right-2  z-10 ml-auto mt-auto h-[110px] w-[113px] overflow-hidden"
              >
                <Image
                  aria-hidden
                  src="/images/assets/inbox.png"
                  fill
                  alt="Inbox icon"
                  quality={100}
                />
              </div>
              <div
                aria-hidden
                className="weird-circle absolute bottom-0 right-0 h-[140px] w-[140px] overflow-hidden bg-secondary-variant"
              ></div>
            </SecondaryButton>
          </Link>
          <Link href="/tutorial">
            <RegularButton
              variant="left"
              className="relative flex h-[225.48px] w-full max-w-sm flex-col items-start justify-start gap-5 pb-3 pr-3 pt-10"
            >
              <h2 className="text-xl font-semibold">Tutorial</h2>
              <div
                aria-hidden
                className="absolute -bottom-2 -right-6  z-10 h-[140.63px] w-[144.12px] overflow-hidden"
              >
                <Image
                  aria-hidden
                  src="/images/assets/lightbulb.png"
                  fill
                  alt="Lightbulb icon"
                  className="z-10"
                  quality={100}
                />
              </div>
              <div
                aria-hidden
                className="weird-circle absolute bottom-0 right-0 h-[130px] w-[130px] overflow-hidden rounded-br-3xl bg-primary-variant"
              ></div>
            </RegularButton>
          </Link>

          <Link href="/friends">
            <RegularButton
              variant="right"
              className="relative flex h-[225.48px] w-full max-w-sm flex-col items-start justify-start gap-5 pb-3 pr-3 pt-10"
            >
              <h2 className="text-xl font-semibold">Friends</h2>
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3  z-10  h-[151.07px] w-[138.71px] overflow-hidden"
              >
                <Image
                  src="/images/assets/headphone.png"
                  fill
                  alt="Headphone icon"
                  className="z-10"
                  quality={100}
                />
              </div>
              <div
                aria-hidden
                className="weird-circle absolute bottom-0 right-0 h-[140px] w-[140px] overflow-hidden bg-secondary-variant"
              ></div>
            </RegularButton>
          </Link>
        </div>
      </div>
      <div className="pb-5">
        <Navbar />
      </div>
    </main>
  );
}

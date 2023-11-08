import FriendList from "@/components/design/FriendList";
import Searchbar from "@/components/design/Searchbar";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function FriendsPage() {
  return (
    <main className="mx-auto max-w-lg">
      <div className="relative flex items-center justify-center py-5">
        <Link href="/" className="absolute left-2">
          <ChevronLeft />
        </Link>
        <h1 className="text-3xl font-bold">Friends</h1>
      </div>

      <Searchbar />
      <FriendList />
    </main>
  );
}
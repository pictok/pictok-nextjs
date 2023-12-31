"use client";

import Image from "next/image";
import { Avatar } from "../ui/avatar";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import supabase from "@/db/supabase";

type DemoButtonProps = {
  type: "user1" | "user2";
};

const user1 = {
  email: "amy_smith@email.com",
  password: "amy123$",
};

const user2 = {
  email: "isabella@email.com",
  password: "isabella123$",
};

export default function DemoButton({ type }: DemoButtonProps) {
  const signIn = async (user: typeof user1 | typeof user2) => {
    await supabase.auth.signInWithPassword(user);
    window.location.replace("/");
  };
  if (type === "user1") {
    return (
      <PrimaryButton
        onClick={async () => await signIn(user1)}
        className="w-full space-x-2 py-16 text-xl"
      >
        <span>Demo as Amy</span>
        <Avatar className="h-20 w-20 border-4 border-secondary">
          <Image
            className="object-cover"
            src="/images/avatars/user1.png"
            alt="Amy Smith"
            width={164}
            height={164}
          />
        </Avatar>
      </PrimaryButton>
    );
  }
  return (
    <SecondaryButton
      onClick={async () => await signIn(user2)}
      className="w-full space-x-2 py-16 text-xl"
    >
      <span>Demo as Isabella</span>
      <Avatar className="h-20 w-20 border-4 border-primary">
        <Image
          className="object-cover"
          src="/images/avatars/user2.jpg"
          alt="Isabella Bennett"
          width={164}
          height={164}
        />
      </Avatar>
    </SecondaryButton>
  );
}

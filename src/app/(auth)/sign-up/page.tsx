import BackButton from "@/components/design/BackButton";
import Navbar from "@/components/design/Navbar";
import SecondaryButton from "@/components/design/SecondaryButton";
import { LockKeyholeIcon, MailIcon } from "lucide-react";

export default function SignUpPage() {
  return (
    <main className="mx-auto flex max-h-screen min-h-screen max-w-lg flex-col justify-between overflow-hidden px-2 pb-5">
      <div>
        <div className="relative flex items-center justify-center py-5">
          <BackButton />
          <h1 className="text-3xl font-bold">Sign Up</h1>
        </div>
        <form className="mt-20 flex flex-col gap-10 py-5">
          <p className="text-center">Please enter your details to sign up!</p>
          <div className="relative">
            <MailIcon
              className="absolute left-5 top-6 z-10 stroke-foreground"
              aria-hidden
            />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-full border bg-card px-16 py-5 text-lg text-foreground drop-shadow-lg placeholder:text-foreground focus:outline-none"
            />
          </div>
          <div className="relative">
            <LockKeyholeIcon
              className="absolute left-5 top-6 z-10 stroke-foreground"
              aria-hidden
            />
            <input
              type="password"
              placeholder="Your password"
              className="w-full rounded-full border bg-card px-16 py-5 text-lg text-foreground drop-shadow-lg placeholder:text-foreground focus:outline-none"
            />
          </div>
          <div className="relative">
            <LockKeyholeIcon
              className="absolute left-5 top-6 z-10 stroke-foreground"
              aria-hidden
            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-full border bg-card px-16 py-5 text-lg text-foreground drop-shadow-lg placeholder:text-foreground focus:outline-none"
            />
          </div>
          <div>
            <SecondaryButton className="w-full bg-primary py-8 text-xl hover:bg-primary dark:bg-secondary">
              Sign Up
            </SecondaryButton>
          </div>
        </form>
      </div>

      <div>
        <Navbar />
      </div>
    </main>
  );
}

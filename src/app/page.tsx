import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <Button asChild className="rounded-full" size="lg">
          <Link href="/sign-in">Login</Link>
        </Button>
      </SignedOut>
    </>
  );
}

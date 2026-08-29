import Image from "next/image";
import Link from "next/link";
import AppLink from "./AppLink";
import { IS_APP_LIVE, appRoute } from "../config/site";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="AgentVerse home">
          <Image
            alt=""
            aria-hidden="true"
            className="h-10 w-auto"
            src="/stellar-logo.png"
            width={40}
            height={40}
            priority
          />
          <span className="font-heading text-3xl font-bold tracking-tighter text-primary hidden sm:block">
            AgentVerse
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <AppLink
            href={appRoute()}
            className="font-label text-label-sm px-4 py-2 rounded-full border border-outline text-on-surface hover:text-primary transition-colors duration-300 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {IS_APP_LIVE ? "Launch App" : "Request Access"}
          </AppLink>
        </div>
      </div>
    </nav>
  );
}

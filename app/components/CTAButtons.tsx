import AppLink from "./AppLink";
import Icon from "./Icon";
import { IS_APP_LIVE, appRoute } from "../config/site";

/**
 * Primary hero CTAs.
 *
 * Labels are tied to what actually exists: while the marketplace is in private
 * beta these promise access, not a storefront the visitor cannot reach yet.
 */
export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <AppLink
        href={appRoute("/marketplace")}
        className="bg-accent text-background font-bold px-12 py-4 rounded-full transition-transform active:scale-95 flex items-center justify-center gap-2 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {IS_APP_LIVE ? "Browse Prompts" : "Request Beta Access"}
        <Icon
          name="arrow-right"
          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
        />
      </AppLink>
      <AppLink
        href={appRoute("/publish")}
        className="border border-outline text-primary font-bold px-12 py-4 rounded-full hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {IS_APP_LIVE ? "Publish a Prompt" : "Apply as a Creator"}
      </AppLink>
    </div>
  );
}

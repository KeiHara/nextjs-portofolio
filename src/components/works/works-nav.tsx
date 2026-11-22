import { Link } from "@tanstack/react-router"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const tab = cn(
  buttonVariants({ variant: "ghost", size: "sm" }),
  "text-muted-foreground data-[status=active]:bg-background data-[status=active]:text-foreground data-[status=active]:shadow-sm"
)

export function WorksNav() {
  return (
    <nav
      aria-label="Work type"
      className="inline-flex rounded-lg bg-muted p-tight"
    >
      <Link to="/works" activeOptions={{ exact: true }} className={tab}>
        Websites
      </Link>
      <Link to="/works/apps" className={tab}>
        Mobile apps
      </Link>
    </nav>
  )
}

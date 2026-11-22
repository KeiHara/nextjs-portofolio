import { Link } from "@tanstack/react-router"

const tab =
  "rounded-md px-3 py-1 text-sm font-medium text-muted-foreground data-[status=active]:bg-background data-[status=active]:text-foreground data-[status=active]:shadow-sm"
export function WorksNav() {
  return (
    <nav
      aria-label="Work type"
      className="inline-flex rounded-lg bg-muted p-[3px]"
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

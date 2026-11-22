import { Link } from "@tanstack/react-router"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"

export function NotFound() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>Page not found</EmptyTitle>
        <EmptyDescription>That page does not exist.</EmptyDescription>
      </EmptyHeader>
      <Button nativeButton={false} render={<Link to="/" />}>
        Back to About
      </Button>
    </Empty>
  )
}

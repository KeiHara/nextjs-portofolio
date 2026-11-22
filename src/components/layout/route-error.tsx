import type { ErrorComponentProps } from "@tanstack/react-router"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"

export function RouteError({ error, reset }: ErrorComponentProps) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>Something went wrong</EmptyTitle>
        <EmptyDescription>
          {error instanceof Error ? error.message : "Unable to load this page."}
        </EmptyDescription>
      </EmptyHeader>
      <Button onClick={reset}>Try again</Button>
    </Empty>
  )
}

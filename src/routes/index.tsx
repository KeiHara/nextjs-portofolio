import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  staticData: { title: "About me" },
  component: () => null,
})

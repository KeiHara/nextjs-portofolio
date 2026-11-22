import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/works")({
  staticData: { title: "My works" },
  component: Outlet,
})

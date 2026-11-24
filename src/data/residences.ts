export const cities = {
  tokyo: { name: "Tokyo", country: "Japan", lat: 35.68, lon: 139.69 },
  auckland: {
    name: "Auckland",
    country: "New Zealand",
    lat: -36.85,
    lon: 174.76,
  },
  sydney: { name: "Sydney", country: "Australia", lat: -33.87, lon: 151.21 },
  melbourne: {
    name: "Melbourne",
    country: "Australia",
    lat: -37.81,
    lon: 144.96,
  },
} as const

export type CityId = keyof typeof cities
export const cityIds = Object.keys(cities) as CityId[]

export const stays: { city: CityId; period: string; note: string }[] = [
  { city: "tokyo", period: "2003", note: "Born in Tokyo." },
  {
    city: "auckland",
    period: "High school – 2024",
    note: "Went to high school, then studied computer science at Auckland.",
  },
  {
    city: "sydney",
    period: "2024 – 2025",
    note: "Started a master’s at UNSW. Left to focus on Heidi.",
  },
  { city: "melbourne", period: "2025 – 2026", note: "Moved to Melbourne." },
  { city: "sydney", period: "2026 – now", note: "Back in Sydney." },
]

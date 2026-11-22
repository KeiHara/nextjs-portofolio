export const tech = {
  angular: { label: "Angular", icon: "angular.svg" },
  daisyui: { label: "daisyUI", icon: "daisyui.svg" },
  docker: { label: "Docker", icon: "docker.svg" },
  dotnet: { label: ".NET", icon: "dotnet.svg", mono: true },
  fastapi: { label: "FastAPI", icon: "fastApi.svg", mono: true },
  firebase: { label: "Firebase", icon: "firebase.svg" },
  gatsby: { label: "Gatsby", icon: "gatsby.svg" },
  gcp: { label: "Google Cloud", icon: "gcp.svg" },
  ionic: { label: "Ionic", icon: "ionic.svg" },
  netlify: { label: "Netlify", icon: "netlify.svg" },
  puppeteer: { label: "Puppeteer", icon: "puppeteer.svg" },
  react: { label: "React", icon: "react.svg" },
  "spring-boot": { label: "Spring Boot", icon: "spring-boot.svg" },
  svelte: { label: "Svelte", icon: "svelte.svg" },
  tailwind: { label: "Tailwind CSS", icon: "tailwind.svg" },
  tensorflow: { label: "TensorFlow", icon: "tensorflow.svg" },
} as const satisfies Record<
  string,
  { label: string; icon: string; mono?: true }
>
export type TechId = keyof typeof tech

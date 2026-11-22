import type { Profile } from "@/data/profile"
import { Page } from "@/components/shared/page"
import { ProfileHeader } from "./profile-header"
import { AboutSection } from "./about-section"
import { ExperienceSection } from "./experience-section"
import { EducationSection } from "./education-section"
import { SkillsSection } from "./skills-section"
import { SocialsSection } from "./socials-section"

export function AboutPage({ profile }: { profile: Profile }) {
  return (
    <Page>
      <ProfileHeader {...profile} />
      <AboutSection about={profile.about} />
      <ExperienceSection experience={profile.experience} />
      <EducationSection education={profile.education} />
      <SkillsSection skills={profile.skills} />
      <SocialsSection socials={profile.socials} />
    </Page>
  )
}

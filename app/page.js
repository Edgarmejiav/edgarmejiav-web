'use client'
import { ContainerPage } from "@/app/components/page/ContainerPage";
import { About } from "@/app/components/About";
import { Stack } from "@/app/components/Stack";
import { Experience } from "@/app/components/Experience";
import { Projects } from "@/app/components/Projects";

export default function Home() {
  return (
    <main>
      <ContainerPage />
      <About />
      <Stack />
      <Experience />
      <Projects />
    </main>
  );
}

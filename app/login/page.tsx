import { Login } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup | AizonLabs",
  description:
    "AizonLabs provides AI automation solutions for lead generation, chatbots, and email outreach. Built with Next.js, Tailwind CSS, TypeScript and framer motion.",
};

export default function LoginPage() {
  return (
    <main className="">
      <Login />
    </main>
  );
}

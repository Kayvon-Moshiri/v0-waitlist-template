import { Background } from "@/components/background"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <main className="p-inset h-[100dvh] w-full">
      <div className="relative h-full w-full">
        <Background
          src="https://nfaeixqn9xpifb1p.public.blob.vercel-storage.com/background%20image.mp4"
          placeholder="/alt-placeholder.png"
        />
        <Newsletter />
        <Footer />
      </div>
    </main>
  )
}

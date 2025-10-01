import { Background } from "@/components/background"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <main className="p-inset h-[100dvh] w-full">
      <div className="relative h-full w-full">
        <Background src="https://my.spline.design/retrofuturismbganimation-WOKX4Qnu4w7olgWN7S0plbWX/" />
        <Newsletter />
        <Footer />
      </div>
    </main>
  )
}

import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { ApprovalChannels } from "@/components/approval-channels"
import { CodeExample } from "@/components/code-example"
import { OpenClaw } from "@/components/openclaw"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

function App() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <ApprovalChannels />
      <CodeExample />
      <OpenClaw />
      <Footer />
    </div>
  )
}

export default App

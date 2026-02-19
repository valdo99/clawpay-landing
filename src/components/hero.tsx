import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 size-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <Badge variant="secondary" className="mb-6 gap-2 px-4 py-1.5 text-sm">
          <img src="/logo.png" alt="ClawPay" className="size-5" />
          Part of the OpenClaw ecosystem
        </Badge>

        <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-7xl">
          A payment gateway
          <br />
          <span className="text-primary">for AI agents.</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
          Self-hosted. Open source. No SaaS. No bullshit.
          <br />
          Your agent shops. ClawPay pays. You set the rules.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="gap-2" asChild>
            <a href="#quickstart">
              <Terminal className="size-4" />
              npx clawpay init
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="#how-it-works">
              See how it works
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 w-full max-w-2xl rounded-xl border border-border/50 bg-card p-6 font-mono text-sm"
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="size-3 rounded-full bg-primary/40" />
            <div className="size-3 rounded-full bg-muted-foreground/20" />
            <div className="size-3 rounded-full bg-muted-foreground/20" />
            <span className="ml-2 text-xs text-muted-foreground">terminal</span>
          </div>
          <div className="space-y-1 text-left text-muted-foreground">
            <p><span className="text-primary">$</span> Agent wants to buy "Vintage Camera" for <span className="text-foreground">$89.99</span> at tokyo-cameras.jp</p>
            <p><span className="text-primary">$</span> Policy check: amount $89.99 &gt; auto-approve threshold $25.00</p>
            <p className="text-yellow-500">? Approve payment of $89.99 to tokyo-cameras.jp? (y/n)</p>
            <p><span className="text-primary">$</span> <span className="text-green-500">Approved.</span> Card details decrypted and returned to agent.</p>
            <p><span className="text-primary">$</span> Agent filled checkout form. Order confirmed.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

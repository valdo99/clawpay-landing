import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Lock, Sliders, Globe, FileText, Plug, KeyRound } from "lucide-react"

const features = [
  {
    icon: Lock,
    title: "AES-256-GCM Vault",
    description: "Card details encrypted at rest. Encryption key stored in your system keychain. Never leaves your machine.",
  },
  {
    icon: Sliders,
    title: "YAML Policy Engine",
    description: "Amount thresholds, daily/monthly limits, merchant allow/block lists, keyword filters. All in one config file.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Any checkout form on any website. No merchant integration needed. The other 99% of the internet that isn't UCP.",
  },
  {
    icon: FileText,
    title: "Full Transaction Log",
    description: "Every request logged — approved or denied. Amount, merchant, timestamp, decision. Your audit trail.",
  },
  {
    icon: Plug,
    title: "MCP + OpenClaw",
    description: "Standalone MCP server for Claude/Cursor, or native OpenClaw plugin for Moltbot and other agents.",
  },
  {
    icon: KeyRound,
    title: "Pluggable Approval",
    description: "Terminal prompts, webhooks, Slack — choose how you get notified. Easy to add your own channels.",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Built for the real world
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Self-hosted, encrypted, policy-gated. Because your agent already has access to everything else.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 * i }}
              className="rounded-xl border border-border/50 bg-card p-6"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="size-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-pretty text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

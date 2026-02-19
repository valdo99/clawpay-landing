import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { ShoppingCart, Shield, CreditCard, CheckCircle, XCircle } from "lucide-react"

const steps = [
  {
    icon: ShoppingCart,
    title: "Agent hits checkout",
    description: "Your AI agent (Claude, Cursor, OpenClaw) browses a store, picks items, and reaches the payment form.",
  },
  {
    icon: Shield,
    title: "Policy gate evaluates",
    description: "ClawPayer checks your rules: amount thresholds, daily limits, merchant blocklists, keyword filters.",
  },
  {
    icon: CreditCard,
    title: "Card decrypted if approved",
    description: "Under $25? Auto-approved. Over $25? You get a prompt. Over $1000? Blocked. The agent never bypasses the gate.",
  },
  {
    icon: CheckCircle,
    title: "Agent fills the form",
    description: "Card details are returned to the agent, it fills in the checkout form, and the purchase is complete.",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Four steps from "I want that" to "Order confirmed." No merchant integration required.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 * i }}
              className="relative rounded-xl border border-border/50 bg-card p-6"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="size-5 text-primary" />
              </div>
              <div className="mb-1 text-xs font-medium text-muted-foreground">
                Step {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-pretty text-sm text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="mx-auto mt-16 max-w-2xl rounded-xl border border-border/50 bg-card p-6"
        >
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Policy Examples
          </h3>
          <div className="space-y-3 font-mono text-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="size-4 shrink-0 text-green-500" />
              <span className="text-muted-foreground">$12.99 at amazon.com</span>
              <span className="ml-auto text-green-500">auto-approved</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="size-4 shrink-0 text-yellow-500" />
              <span className="text-muted-foreground">$89.99 at tokyo-cameras.jp</span>
              <span className="ml-auto text-yellow-500">needs approval</span>
            </div>
            <div className="flex items-center gap-3">
              <XCircle className="size-4 shrink-0 text-red-500" />
              <span className="text-muted-foreground">$2,500 at luxury-watches.com</span>
              <span className="ml-auto text-red-500">blocked</span>
            </div>
            <div className="flex items-center gap-3">
              <XCircle className="size-4 shrink-0 text-red-500" />
              <span className="text-muted-foreground">$50.00 at sketchy-gambling.com</span>
              <span className="ml-auto text-red-500">keyword blocked</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

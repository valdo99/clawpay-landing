import { motion, useInView } from "motion/react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

const tabs = [
  {
    label: "Quick Start",
    code: `# Install and initialize
npx clawpay init

# Add your card (encrypted locally)
npx clawpay add-card

# Start the MCP server
npx clawpay serve`,
  },
  {
    label: "Config",
    code: `# ~/.clawpay/config.yaml
policies:
  autoApproveUnder: 25.00
  requireApprovalAbove: 25.00
  blockAbove: 1000.00
  dailyLimit: 200.00
  monthlyLimit: 2000.00
  blockedKeywords:
    - gambling
    - crypto

approval:
  method: terminal
  timeout: 300`,
  },
  {
    label: "MCP Config",
    code: `// Claude Desktop / Cursor MCP config
{
  "mcpServers": {
    "clawpay": {
      "command": "npx",
      "args": ["clawpay", "serve"]
    }
  }
}`,
  },
  {
    label: "As Library",
    code: `import { ClawPay } from "clawpay";

const cp = await ClawPay.load();
const result = await cp.requestCard({
  amount: 29.99,
  merchant: "cool-store.com",
  description: "A very cool hat",
});

if (result.approved) {
  // result.card has the details
}`,
  },
]

export function CodeExample() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="quickstart" className="px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Up and running in 60 seconds
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Three commands. That's it. Your agent can now pay for things.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-12 overflow-hidden rounded-xl border border-border/50 bg-card"
        >
          <div className="flex gap-1 border-b border-border/50 px-4 pt-3">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "rounded-t-lg px-4 py-2 text-sm font-medium transition-colors",
                  i === activeTab
                    ? "bg-background text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-6">
            <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-muted-foreground">
              <code>{tabs[activeTab].code}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

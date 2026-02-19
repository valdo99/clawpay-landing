import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function OpenClaw() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="openclaw" className="px-6 py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-3xl rounded-2xl border border-border/50 bg-card p-10 text-center sm:p-14"
      >
        <img src="/logo.png" alt="ClawPayer" className="mx-auto mb-6 size-16" />
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Part of the OpenClaw ecosystem
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
          ClawPayer is a native plugin for{" "}
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4"
          >
            OpenClaw
          </a>
          {" "}— the open-source AI agent with 145K+ GitHub stars. Install it as a plugin and your agent
          gets payment capabilities with a single command.
        </p>
        <div className="mt-4 text-pretty text-sm text-muted-foreground">
          Also works as a standalone MCP server with Claude Desktop, Cursor, and any MCP-compatible client.
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="https://github.com/valdo99/clawpayer" target="_blank" rel="noopener noreferrer">
              View on GitHub
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
          <div className="font-mono text-sm text-muted-foreground">
            openclaw plugins install clawpayer
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="ClawPayer" className="size-6" />
          <span>ClawPayer — MIT License</span>
        </div>
        <p className="text-pretty text-center text-xs">
          Built because the world is going agentic whether the payment infrastructure is ready or not.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/valdo99/clawpayer"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://github.com/openclaw/openclaw"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            OpenClaw
          </a>
        </div>
      </div>
    </footer>
  )
}

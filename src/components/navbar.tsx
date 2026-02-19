import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <img src="/logo.png" alt="ClawPayer" className="size-8" />
          <span>ClawPayer</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#how-it-works" className="transition-colors hover:text-foreground">How it works</a>
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#quickstart" className="transition-colors hover:text-foreground">Quickstart</a>
          <a href="#openclaw" className="transition-colors hover:text-foreground">OpenClaw</a>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href="https://github.com/valdo99/clawpayer" target="_blank" rel="noopener noreferrer">
            <Github className="size-4" />
            <span className="ml-2 hidden sm:inline">GitHub</span>
          </a>
        </Button>
      </div>
    </nav>
  )
}

import { motion, useInView, AnimatePresence } from "motion/react"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Check, X, Terminal, MessageCircle, Hash } from "lucide-react"

const channels = [
  {
    id: "terminal",
    label: "Terminal",
    icon: Terminal,
    messages: [
      { type: "system" as const, text: "ClawPay: Payment request received" },
      { type: "info" as const, text: '$89.99 → tokyo-cameras.jp\n"Vintage Nikon F3 Camera"' },
      { type: "prompt" as const, text: "Approve this payment? [y/n]" },
      { type: "user" as const, text: "y" },
      { type: "success" as const, text: "Approved. Card details sent to agent." },
    ],
  },
  {
    id: "telegram",
    label: "Telegram",
    icon: MessageCircle,
    messages: [
      { type: "bot" as const, text: "🦞 ClawPay — Approval Request" },
      { type: "bot" as const, text: "Amount: $89.99\nMerchant: tokyo-cameras.jp\nItem: Vintage Nikon F3 Camera" },
      { type: "bot" as const, text: "Reply /approve or /deny" },
      { type: "user" as const, text: "/approve" },
      { type: "bot" as const, text: "Payment approved. Your agent is completing the purchase." },
    ],
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    messages: [
      { type: "bot" as const, text: "🦞 ClawPay needs your approval" },
      { type: "bot" as const, text: "$89.99 at tokyo-cameras.jp\nVintage Nikon F3 Camera" },
      { type: "bot" as const, text: "Reply YES to approve, NO to deny" },
      { type: "user" as const, text: "YES" },
      { type: "bot" as const, text: "Done! Payment approved. Agent is checking out now." },
    ],
  },
  {
    id: "slack",
    label: "Slack",
    icon: Hash,
    messages: [
      { type: "bot" as const, text: "🦞 ClawPay — New Payment Request" },
      { type: "bot" as const, text: "*$89.99* to `tokyo-cameras.jp`\n> Vintage Nikon F3 Camera" },
      { type: "bot" as const, text: "Click to respond: [Approve] [Deny]" },
      { type: "user" as const, text: "Clicked: Approve" },
      { type: "bot" as const, text: "Payment approved by @you. Agent proceeding." },
    ],
  },
]

function ChatMessage({
  message,
  channelId,
}: {
  message: (typeof channels)[0]["messages"][0]
  channelId: string
}) {
  const isUser = message.type === "user"
  const isTerminal = channelId === "terminal"

  if (isTerminal) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="font-mono text-sm"
      >
        {message.type === "prompt" ? (
          <p className="text-yellow-500">{`? ${message.text}`}</p>
        ) : message.type === "success" ? (
          <p className="text-green-500">{`✔ ${message.text}`}</p>
        ) : message.type === "user" ? (
          <p className="text-foreground">{`> ${message.text}`}</p>
        ) : message.type === "info" ? (
          <p className="whitespace-pre-line text-muted-foreground">{`  ${message.text}`}</p>
        ) : (
          <p className="text-primary">{`$ ${message.text}`}</p>
        )}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={cn("flex", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[80%] whitespace-pre-line rounded-xl px-4 py-2.5 text-sm",
          isUser
            ? "rounded-br-sm bg-primary text-primary-foreground"
            : "rounded-bl-sm bg-secondary text-secondary-foreground"
        )}
      >
        {message.text}
      </div>
    </motion.div>
  )
}

export function ApprovalChannels() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeChannel, setActiveChannel] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const currentChannel = channels[activeChannel]

  useEffect(() => {
    if (!isInView) return
    setVisibleMessages(0)
    setIsAnimating(true)

    let count = 0
    const interval = setInterval(() => {
      count++
      setVisibleMessages(count)
      if (count >= currentChannel.messages.length) {
        clearInterval(interval)
        setIsAnimating(false)
      }
    }, 700)

    return () => clearInterval(interval)
  }, [activeChannel, isInView, currentChannel.messages.length])

  function handleChannelChange(index: number) {
    if (isAnimating) return
    setActiveChannel(index)
  }

  return (
    <section className="px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Human in the loop
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Get approval prompts wherever you are. Terminal, Telegram, WhatsApp, Slack — or build your own webhook.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-12"
        >
          <div className="flex justify-center gap-2">
            {channels.map((channel, i) => (
              <button
                key={channel.id}
                onClick={() => handleChannelChange(i)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  i === activeChannel
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                <channel.icon className="size-4" />
                <span className="hidden sm:inline">{channel.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-border/50 bg-card">
            <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
              <div className="size-3 rounded-full bg-primary/40" />
              <div className="size-3 rounded-full bg-muted-foreground/20" />
              <div className="size-3 rounded-full bg-muted-foreground/20" />
              <span className="ml-2 text-xs text-muted-foreground">{currentChannel.label}</span>
            </div>

            <div className="flex min-h-[280px] flex-col gap-3 p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChannel}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col gap-3"
                >
                  {currentChannel.messages.slice(0, visibleMessages).map((msg, i) => (
                    <ChatMessage
                      key={`${activeChannel}-${i}`}
                      message={msg}
                      channelId={currentChannel.id}

                    />
                  ))}
                  {isAnimating && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-1 px-1"
                    >
                      {[0, 1, 2].map((dot) => (
                        <motion.div
                          key={dot}
                          className="size-1.5 rounded-full bg-muted-foreground/50"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: dot * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="size-4 text-green-500" />
              <span>Approve from anywhere</span>
            </div>
            <div className="flex items-center gap-2">
              <X className="size-4 text-red-500" />
              <span>Auto-deny on timeout</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

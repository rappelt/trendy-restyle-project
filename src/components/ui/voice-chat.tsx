"use client"

import { useCallback, useState } from "react"
import { useConversation } from "@elevenlabs/react"
import { AnimatePresence, motion } from "framer-motion"
import { Loader2Icon, PhoneIcon, PhoneOffIcon, MicIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type AgentState = "disconnected" | "connecting" | "connected" | "disconnecting" | null

interface VoiceChatProps {
  agentId: string
  agentName?: string
  description?: string
  className?: string
  language?: string
}

export function VoiceChat({
  agentId,
  agentName = "Customer Support",
  description = "Tap to start voice chat",
  className,
  language = "en",
}: VoiceChatProps) {
  const [agentState, setAgentState] = useState<AgentState>("disconnected")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // Map language codes to full language names for ElevenLabs
  const getLanguageName = (lang: string): string => {
    const languageMap: { [key: string]: string } = {
      'pl': 'Polish',
      'de': 'German',
      'en': 'English'
    }
    return languageMap[lang] || 'English'
  }

  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (message) => console.log("Message:", message),
    onError: (error) => {
      console.error("Error:", error)
      setAgentState("disconnected")
    },
  })

  const startConversation = useCallback(async () => {
    try {
      setErrorMessage(null)
      await navigator.mediaDevices.getUserMedia({ audio: true })

      const languageName = getLanguageName(language)

      await conversation.startSession({
        agentId: agentId,
        connectionType: "webrtc",
        overrides: {
          agent: {
            language: languageName,
          }
        },
        onStatusChange: (status) => setAgentState(status.status),
      })
    } catch (error) {
      console.error("Error starting conversation:", error)
      setAgentState("disconnected")
      if (error instanceof DOMException && error.name === "NotAllowedError") {
        setErrorMessage("Bitte aktiviere die Mikrofon-Berechtigung in deinem Browser.")
      }
    }
  }, [conversation, agentId, language])

  const handleCall = useCallback(() => {
    if (agentState === "disconnected" || agentState === null) {
      setAgentState("connecting")
      startConversation()
    } else if (agentState === "connected") {
      conversation.endSession()
      setAgentState("disconnected")
    }
  }, [agentState, conversation, startConversation])

  const isCallActive = agentState === "connected"
  const isTransitioning = agentState === "connecting" || agentState === "disconnecting"

  return (
    <Card className={cn("flex w-full flex-col items-center justify-center overflow-hidden p-8", className)}>
      <div className="flex flex-col items-center gap-6">
        {/* Animated Microphone Icon */}
        <div className="relative">
          <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 p-1 shadow-lg">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white shadow-inner">
              <AnimatePresence mode="wait">
                {isCallActive ? (
                  <motion.div
                    key="active"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-orange-400/30"
                    />
                    <MicIcon className="relative h-16 w-16 text-orange-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="inactive"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <MicIcon className="h-16 w-16 text-orange-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Agent Info */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold">{agentName}</h2>
          <AnimatePresence mode="wait">
            {errorMessage ? (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-destructive text-center text-sm"
              >
                {errorMessage}
              </motion.p>
            ) : agentState === "disconnected" || agentState === null ? (
              <motion.p
                key="disconnected"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-muted-foreground text-sm"
              >
                {description}
              </motion.p>
            ) : (
              <motion.div
                key="status"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-2"
              >
                <div
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    agentState === "connected" && "bg-green-500",
                    isTransitioning && "bg-primary/60 animate-pulse"
                  )}
                />
                <span className="text-sm capitalize">
                  {isTransitioning ? (
                    <span className="animate-pulse">{agentState}</span>
                  ) : (
                    <span className="text-green-600">Verbunden</span>
                  )}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Call Button */}
        <Button
          onClick={handleCall}
          disabled={isTransitioning}
          size="icon"
          variant={isCallActive ? "secondary" : "default"}
          className="h-14 w-14 rounded-full shadow-lg transition-all hover:scale-105"
        >
          <AnimatePresence mode="wait">
            {isTransitioning ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                exit={{ opacity: 0 }}
                transition={{
                  rotate: { duration: 1, repeat: Infinity, ease: "linear" },
                }}
              >
                <Loader2Icon className="h-6 w-6" />
              </motion.div>
            ) : isCallActive ? (
              <motion.div
                key="end"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <PhoneOffIcon className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="start"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <PhoneIcon className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </Card>
  )
}

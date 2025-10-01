"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button, buttonVariants } from "./ui/button"
import { FormNewsletter } from "./form-newsletter"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRightIcon, Cross1Icon } from "@radix-ui/react-icons"
import { inputVariants } from "./ui/input"
import { useIsV0 } from "@/lib/context"

const DURATION = 0.3
const DELAY = DURATION
const EASE_OUT = "easeOut"
const EASE_OUT_OPACITY = [0.25, 0.46, 0.45, 0.94] as const
const SPRING = {
  type: "spring" as const,
  stiffness: 60,
  damping: 10,
  mass: 0.8,
}

export const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(false)

  const isInitialRender = useRef(true)

  useEffect(() => {
    return () => {
      isInitialRender.current = false
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="flex overflow-hidden relative flex-col gap-2 justify-center items-center pt-3 w-full h-full short:lg:pt-3 pb-footer-safe-area 2xl:pt-footer-safe-area px-sides short:lg:gap-2 lg:gap-4">
      <motion.div layout="position" transition={{ duration: DURATION, ease: EASE_OUT }}>
        <h1 className="font-serif text-5xl italic short:lg:text-8xl sm:text-8xl lg:text-9xl text-white">
          Ellie AI by Elevate
        </h1>
      </motion.div>

      <div className="flex flex-col items-center min-h-0 shrink">
        <AnimatePresenceGuard>
          {!isOpen && (
            <motion.div
              key="newsletter"
              initial={isInitialRender.current ? false : "hidden"}
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  y: -150,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                },
              }}
            >
              <div className="flex flex-col gap-4 w-full max-w-xl md:gap-6 lg:gap-8">
                <FormNewsletter
                  input={(props) => (
                    /* @ts-expect-error - Type mismatch */
                    <motion.input
                      autoCapitalize="off"
                      autoComplete="email"
                      placeholder="Enter your email"
                      className={inputVariants()}
                      initial={isInitialRender.current ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        transition: {
                          duration: DURATION,
                          ease: EASE_OUT_OPACITY,
                        },
                      }}
                      transition={{
                        duration: DURATION,
                        ease: EASE_OUT,
                        delay: DELAY,
                      }}
                      {...props}
                    />
                  )}
                  submit={(props) => (
                    /* @ts-expect-error - Type mismatch */
                    <motion.button
                      className={buttonVariants({
                        variant: "iconButton",
                        size: "icon-xl",
                      })}
                      {...props}
                      initial={isInitialRender.current ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{
                        opacity: 0,
                        transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                      }}
                      transition={{
                        duration: DURATION,
                        ease: EASE_OUT,
                        delay: DELAY,
                      }}
                    >
                      <ArrowRightIcon className="w-4 h-4 text-current" />
                    </motion.button>
                  )}
                />
                <motion.p
                  initial={isInitialRender.current ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: EASE_OUT,
                    delay: DELAY,
                  }}
                  className="text-base short:lg:text-lg sm:text-lg lg:text-xl !leading-[1.1] font-medium text-center text-pretty italic italic text-white"
                >
                  The first membership community that actually connects you to the best people.
                </motion.p>
              </div>
            </motion.div>
          )}

          <motion.div layout="position" transition={SPRING} key="button" className={isOpen ? "my-6" : "mt-6"}>
            <Button className={cn("relative px-8")} onClick={() => setIsOpen(!isOpen)} shine={!isOpen}>
              <motion.span
                animate={{ x: isOpen ? -16 : 0 }}
                transition={{ duration: DURATION, ease: EASE_OUT }}
                className="inline-block"
              >
                Manifesto
              </motion.span>

              {isOpen && (
                <motion.div
                  className={cn(
                    buttonVariants({ variant: "iconButton", size: "icon" }),
                    "absolute -top-px -right-px aspect-square",
                  )}
                  initial={{ opacity: 0, scale: 0.8, rotate: -40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: DURATION,
                    ease: EASE_OUT,
                    delay: DELAY,
                  }}
                >
                  <Cross1Icon className="size-5 text-input" />
                </motion.div>
              )}
            </Button>
          </motion.div>

          {isOpen && (
            <motion.div
              key="manifesto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: DELAY,
                    duration: DURATION,
                    ease: EASE_OUT,
                  },
                },
                hidden: {
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT },
                },
                exit: {
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: DURATION, ease: EASE_OUT_OPACITY },
                },
              }}
              className="relative flex min-h-0 flex-shrink overflow-hidden text-sm md:text-base max-h-[calc(70dvh-var(--footer-safe-area))] flex-col gap-8 text-center backdrop-blur-xl text-balance border-2 border-black/50 bg-black/20 max-w-3xl rounded-3xl ring-1 ring-offset-white/10 ring-black/10 ring-offset-2 shadow-button"
            >
              <article className="relative overflow-y-auto italic p-6 h-full [&_p]:my-4 text-white">
                <p>
                  We believe the shortest distance to possibility is a person, not a feed, not a funnel, but a
                  conversation at the right moment with the right someone. Ellie is quiet technology for human
                  connection. It favors fewer, better introductions; consent and respect over interruption; and
                  serendipity that feels accidental but is carefully designed. Ellie meets people where they already
                  are, no apps or clutter, preserving scarce attention so the important hellos get through.
                </p>
                <p>
                  We choose depth over reach, because one great intro can change a career. Our interfaces are
                  human-first, our outcomes transparent, and our follow-through accountable. We prize discretion, data
                  minimization, and measurable wins, and we judge ourselves by introductions that become relationships.
                </p>
                <p>
                  Ellie widens the circle and makes it easier to meet the person you were meant to meet, before, during,
                  and after gatherings, turning chance into momentum for members, founders, and partners. Join us.
                </p>
              </article>
            </motion.div>
          )}
        </AnimatePresenceGuard>
      </div>
    </div>
  )
}

const AnimatePresenceGuard = ({ children }: { children: React.ReactNode }) => {
  const isV0 = useIsV0()

  return isV0 ? (
    <>{children}</>
  ) : (
    <AnimatePresence mode="popLayout" propagate>
      {children}
    </AnimatePresence>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xovkrgao", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("SUCCESS")
        form.reset()
      } else {
        setStatus("ERROR")
      }
    } catch (error) {
      setStatus("ERROR")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="contact-title" className="text-2xl font-semibold text-foreground md:text-3xl">
          Get in Touch
        </h2>
        <p className="mt-3 max-w-prose text-foreground/80">
          Looking to hire or collaborate? Let's connect and discuss how I can contribute to your organization's
          analytical goals.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_.8fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-lg border bg-card p-4 transition-all duration-300 hover:shadow-md"
          >
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="transition-all duration-200 focus:scale-[1.01]"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="transition-all duration-200 focus:scale-[1.01]"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message / Description
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="How can I help?"
                rows={5}
                className="transition-all duration-200 focus:scale-[1.01]"
              />
            </div>

            <div className="flex items-center gap-3">
              <Button type="submit" disabled={loading} className="transition-transform duration-200 hover:scale-105">
                {loading ? "Sending..." : "Send Message"}
              </Button>

              <Button
                asChild
                variant="secondary"
                className="border transition-all duration-200 hover:scale-105 hover:border-primary hover:text-primary"
              >
                <a href="https://www.linkedin.com/in/manu-manu-79a503305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="Open LinkedIn" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="transition-all duration-200 hover:scale-105 hover:bg-accent/20 hover:text-primary"
              >
                <a href="mailto:manumk25273@gmail.com">Email</a>
              </Button>
            </div>

            {status === "SUCCESS" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 rounded-md bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 p-3">
                <p className="text-green-700 dark:text-green-400 text-sm">
                  Your message has been sent successfully!
                </p>
              </div>
            )}

            {status === "ERROR" && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300 rounded-md bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 p-3">
                <p className="text-red-700 dark:text-red-400 text-sm">
                  Failed to send message. Please try again or contact me directly.
                </p>
              </div>
            )}
          </form>

          <aside className="grid gap-3 rounded-lg border bg-secondary p-4 text-sm text-foreground/90 transition-all duration-300 hover:shadow-lg hover:border-primary hover:scale-[1.02]">
            <div>
              <strong>Direct Contact</strong>
            </div>
            <div>
              📞{" "}
              <a
                className="text-primary underline-offset-4 transition-all duration-200 hover:underline hover:translate-x-1 inline-block"
                href="tel:+917259052573"
              >
                +91 72590 52573
              </a>
            </div>
            <div>
              ✉️{" "}
              <a
                className="text-primary underline-offset-4 transition-all duration-200 hover:underline hover:translate-x-1 inline-block"
                href="mailto:manumk25273@gmail.com"
              >
                manumk25273@gmail.com
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

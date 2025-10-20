"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 id="contact-title" className="text-2xl font-semibold text-foreground md:text-3xl">
          Get in Touch
        </h2>
        <p className="mt-3 max-w-prose text-foreground/80">
          Looking to hire or collaborate? Let’s connect and discuss how I can contribute to your organization’s
          analytical goals.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_.8fr]">
          <form
            action="https://formspree.io/f/xwkgrapo"
            method="POST"
            onSubmit={() => {
              setLoading(true)
              setStatus(null)
              setTimeout(() => {
                setLoading(false)
                setStatus("SUCCESS")
              }, 1500)
            }}
            className="space-y-4 rounded-lg border bg-card p-4"
          >
            {/* Name Input */}
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>

            {/* Email Input */}
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" name="email" required placeholder="you@example.com" />
            </div>

            {/* Message/Description Textarea */}
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message / Description
              </label>
              <Textarea id="message" name="message" required placeholder="How can I help?" rows={5} />
            </div>

            <div className="flex items-center gap-3">
              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>

              <Button
                asChild
                variant="secondary"
                className="border transition-colors hover:border-primary hover:text-primary"
              >
                <a href="https://www.linkedin.com/" aria-label="Open LinkedIn" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </Button>

              <Button asChild variant="ghost" className="transition-colors hover:bg-accent/20 hover:text-primary">
                <a href="mailto:manumk25273@gmail.com">Email</a>
              </Button>
            </div>

            {/* ✅ Status messages */}
            {status === "SUCCESS" && (
              <p className="text-green-600 text-sm pt-2">✅ Your message has been sent successfully!</p>
            )}
          </form>

          {/* Contact Information Card */}
          <aside className="grid gap-3 rounded-lg border bg-secondary p-4 text-sm text-foreground/90 transition-all duration-300 hover:shadow-lg hover:border-primary">
            <div>
              <strong>Direct Contact</strong>
            </div>
            <div>
              📞{" "}
              <a className="text-primary underline-offset-4 hover:underline" href="tel:+917259052573">
                +91 72590 52573
              </a>
            </div>
            <div>
              ✉️{" "}
              <a className="text-primary underline-offset-4 hover:underline" href="mailto:manumk25273@gmail.com">
                manumk25273@gmail.com
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

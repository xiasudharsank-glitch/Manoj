"use client"

import type React from "react"

import { useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") || "")
    const email = String(formData.get("email") || "")
    const message = String(formData.get("message") || "")

    const subject = encodeURIComponent(`Portfolio Inquiry - ${name}`)
    const body = encodeURIComponent(`Hello Manoj,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`)
    window.location.href = `mailto:manumk25273@gmail.com?subject=${subject}&body=${body}`
  }, [])

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
          <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border bg-card p-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" name="email" required placeholder="you@example.com" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" name="message" required placeholder="How can I help?" rows={5} />
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit">Send Message</Button>
              <Button asChild variant="secondary" className="border">
                <a href="https://www.linkedin.com/" aria-label="Open LinkedIn" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href="mailto:manumk25273@gmail.com">Email</a>
              </Button>
            </div>
          </form>

          <aside className="grid gap-3 rounded-lg border bg-secondary p-4 text-sm text-foreground/90">
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

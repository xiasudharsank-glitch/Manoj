import React, { useState, useCallback } from "react"
// Added icons for loading and feedback messages
import { Send, Linkedin, Mail, Loader2, CheckCircle, XCircle } from "lucide-react"

// --- Component Mocks for Standalone Execution ---
// NOTE: These mock components are included to make the code runnable in the preview.
// In a real project using a UI library like Shadcn, you would delete these mocks
// and uncomment the imports for your actual Button, Input, and Textarea components.
const Button = ({ children, className = "", variant = "default", asChild, ...props }) => {
  let baseClasses = "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2"
  
  if (variant === "secondary") {
    baseClasses += " bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-input shadow-sm"
  } else if (variant === "ghost") {
    baseClasses += " hover:bg-accent/20 hover:text-primary"
  } else { // default (primary)
    baseClasses += " bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:ring-blue-500"
  }
  
  // Handle asChild prop to avoid React warnings when passing to native DOM element
  const Component = asChild ? 'span' : 'button';
  return (
    <Component className={`${baseClasses} ${className}`} {...props}>
      {children}
    </Component>
  )
}

const Input = ({ className = "", ...props }) => (
  <input
    className={`flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
)

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
)
// --- End Component Mocks ---

const FORMSPREE_URL = "https://formspree.io/f/xwkgrapo"

export function ContactSection() {
  // State for form submission status and message feedback
  const [status, setStatus] = useState('idle') // 'idle', 'submitting', 'success', 'error'
  const [resultMessage, setResultMessage] = useState('')

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    
    setStatus('submitting')
    setResultMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    // Payload now includes the phone field
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""), 
      message: String(formData.get("message") || ""),
    }

    try {
      // Exponential backoff for network stability
      const maxRetries = 3;
      let response;
      let lastError;

      for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
          response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
          });

          // Break if successful or we get a non-server error
          if (response.status < 500) break; 
        } catch (fetchError) {
          lastError = fetchError;
          // Wait for exponential backoff before retrying network errors
          if (attempt < maxRetries - 1) {
             await new Promise(resolve => setTimeout(resolve, 2 ** attempt * 1000)); 
          }
        }
      }

      if (!response && lastError) {
        throw lastError; // Throw network error if all retries failed
      }
      
      if (response.ok) {
        setStatus('success')
        setResultMessage('Message sent successfully! Your message has reached Manoj.')
        form.reset() // Clear the form on success
        console.log("Formspree Submission Success:", payload)
      } else {
        const errorData = await response.json()
        let errorMessage = 'Oops! There was an unexpected error submitting the form.';

        // Specific error message for 404/Form not found
        if (response.status === 404) {
             errorMessage = 'Error: Form not found (404). Please confirm the Formspree URL is correct and active.';
        } else {
             errorMessage = errorData.error || errorMessage;
        }

        setStatus('error')
        setResultMessage(errorMessage)
        console.error("Formspree Submission Failed (HTTP Error):", response.status, errorData, "Payload:", payload)
      }
    } catch (error) {
      setStatus('error')
      setResultMessage('A network error occurred. Please check your connection and try again.')
      console.error("Formspree Submission Failed (Network/Client Error):", error)
    } finally {
        // Clear status after 8 seconds
        setTimeout(() => setStatus('idle'), 8000);
    }
  }, [])

  const isSubmitting = status === 'submitting';

  // Component to display success/error feedback
  let FeedbackComponent = null;
  if (status === 'success') {
    FeedbackComponent = (
      <div className="flex items-center space-x-2 text-sm font-medium text-green-600 p-3 bg-green-50 rounded-lg border border-green-200">
        <CheckCircle className="h-5 w-5" />
        <p>{resultMessage}</p>
      </div>
    )
  } else if (status === 'error') {
    FeedbackComponent = (
      <div className="flex items-center space-x-2 text-sm font-medium text-red-600 p-3 bg-red-50 rounded-lg border border-red-200">
        <XCircle className="h-5 w-5" />
        <p>{resultMessage}</p>
      </div>
    )
  }

  return (
    // The main JSX structure and all Tailwind classes are preserved
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
            
            {/* Submission Feedback Message (New UI element) */}
            {FeedbackComponent}

            {/* Name Input */}
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" name="name" required placeholder="Your name" disabled={isSubmitting} />
            </div>

            {/* Email Input */}
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" name="email" required placeholder="you@example.com" disabled={isSubmitting} />
            </div>
            
            {/* Mobile Number Input (Now UNCOMMENTED and active) */}
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number (Optional)
              </label>
              <Input id="phone" name="phone" type="tel" placeholder="+91 12345 67890" disabled={isSubmitting} />
            </div>

            {/* Message/Description Textarea */}
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message / Description
              </label>
              <Textarea id="message" name="message" required placeholder="How can I help?" rows={5} disabled={isSubmitting} />
            </div>

            <div className="flex items-center gap-3">
              {/* Send Message Button: Updated to show loading state */}
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button> 

              {/* LinkedIn Button (unchanged) */}
              <Button 
                asChild 
                variant="secondary" 
                className="border transition-colors hover:border-primary hover:text-primary" 
              >
                <a href="https://www.linkedin.com/" aria-label="Open LinkedIn" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </Button>

              {/* Email Button (unchanged) */}
              <Button asChild variant="ghost" className="transition-colors hover:bg-accent/20 hover:text-primary">
                <a href="mailto:manumk25273@gmail.com">Email</a>
              </Button>
            </div>
          </form>

          {/* Contact Information Card (unchanged) */}
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
export default ContactSection

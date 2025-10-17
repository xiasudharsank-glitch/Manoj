import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react" 
// You might need to install 'lucide-react' (npm install lucide-react) 
// or use another icon library you already have.

export function SiteFooter() {
  const currentYear = new Date().getFullYear() // Dynamically get the current year

  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-foreground/70">
        
        {/* Copyright Text */}
        <p className="mb-2 md:mb-0">
          &copy; {currentYear} Manoj Kumar S
        </p>
        
        {/* Divider */}
        <span className="hidden md:inline-block mx-4 text-foreground/50">|</span>

        {/* Social Links (using Lucide icons as an example) */}
        <div className="flex justify-center space-x-6 mt-2 md:mt-0">
          
          <Link 
            href="YOUR_LINKEDIN_URL" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          
          <Link 
            href="YOUR_GITHUB_URL" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </Link>

          <Link 
            href="mailto:YOUR_EMAIL_ADDRESS" 
            className="hover:text-primary transition-colors"
            aria-label="Email Address"
          >
            <Mail className="h-5 w-5" />
          </Link>

        </div>
      </div>
    </footer>
  )
}
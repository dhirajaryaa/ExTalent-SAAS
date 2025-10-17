import React from 'react'

function Footer() {
  return (
   <footer className="mt-8 text-sm text-foreground/80 text-center">
        Need help?{" "}
        <a
          href={`${import.meta.env.VITE_SUPPORT_LINK}`}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4 text-primary hover:underline"
        >
          Visit our Help Center
        </a>
      </footer>
  )
}

export default Footer
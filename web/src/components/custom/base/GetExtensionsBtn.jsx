import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

function GetExtensionsBtn() {
    const extLink = import.meta.env.EXTALENT_EXTENSION_LINK || "https://chromewebstore.google.com"
  return (
    <Button asChild>
        <a href={extLink} target="_blank" rel="noopener noreferrer" aria-label='Get Extensions'>
        <ExternalLink />
        Get Extensions
        </a>
    </Button>
  )
}

export default GetExtensionsBtn
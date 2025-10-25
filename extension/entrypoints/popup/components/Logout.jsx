import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

function Logout() {
  return (
 <Button
          variant="secondary"
          size="icon-sm"
          className={"absolute top-1 right-2"}
        >
          <LogOut />
        </Button>
  )
}

export default Logout
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ExternalLinkIcon } from "lucide-react"

function ReportCard({title,description,value,action}) {
  return (
      <Card className="bg-gradient-to-b to-muted from-background w-full">
        <CardHeader>
          <CardDescription>{title}</CardDescription>
          <CardTitle className="text-2xl font-bold tabular-nums sm:text-4xl">
          {value > 9 ? value : `0${value}`}
          </CardTitle>
          <CardAction>
            {
              action && 
<Button variant={'ghost'}>
  <ExternalLinkIcon />
</Button>
            }
          </CardAction>
        </CardHeader>
        <CardFooter className="text-muted-foreground text-sm">
           {description}
        </CardFooter>
      </Card>
  )
}

export default ReportCard
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Trash2 } from "lucide-react";

function DangerZone() {
  return (
    <div className="max-w-3xl mx-auto mt-6">
      <Item variant="muted" className={"bg-destructive/10 border-destructive/60 "}>
        <ItemContent>
          <ItemTitle className={"text-destructive"}>Danger Zone</ItemTitle>
          <ItemDescription className={'text-xs'}>
           Deleting your profile is permanent. Your data will be scheduled for deletion and removed after 30 days. You won’t be able to recover it.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant={"destructive"}>
            <Trash2 /> Delete
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

export default DangerZone
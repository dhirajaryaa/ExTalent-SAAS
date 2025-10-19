import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Switch } from "@/components/ui/switch";

function ListItem({ title, description, label, enabled, action }) {
  return (
    <Item variant="muted">
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription className={"text-xs"}>{description}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Switch id={label} onCheckedChange={action} checked={enabled} />
        <label htmlFor={label} hidden>
          Airplane Mode
        </label>
      </ItemActions>
    </Item>
  );
}

export default ListItem;

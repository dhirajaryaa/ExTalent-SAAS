import { Alert, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent } from "@/components/ui/item";

function ListSkills({profile}) {
  
  return (
    <Item variant="muted" size="sm" className={"shadow-sm"}>
      <ItemContent>
        {profile.skills.length < 0 ? (
          <Alert>
            <AlertTitle>No Skills Found!</AlertTitle>
          </Alert>
        ) : (
          <div className={"flex gap-2 flex-wrap"}>
            {profile?.skills?.map((skill) => (
              <Badge key={skill?.name} className={"py-1"}>
                {skill?.name}
                <span className=" font-bold text-xs text-green-500">
                  {skill?.score}%
                </span>
              </Badge>
            ))}
          </div>
        )}
      </ItemContent>
    </Item>
  );
}

export default ListSkills;

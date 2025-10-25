import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useUser from "@/hooks/useUser";
import { removeUser } from "@/store/store";
import { useNavigate } from "react-router";

function DangerZone() {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);

  const {
    userProfileDelete: { mutateAsync, isPending },
  } = useUser();
  const navigate = useNavigate();

  const handleProfileDelete = async () => {
    if (input?.trim() !== "DELETE") {
      setInputError(true);
      return false;
    }
    if (input?.trim() === "DELETE") {
      setInputError(false);
      removeUser();
      localStorage.removeItem("token"); // remove token
      await mutateAsync();
      navigate("/login");
      return true;
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <AlertDialog>
        <Item
          variant="muted"
          className={"bg-destructive/10 border-destructive/60 "}
        >
          <ItemContent>
            <ItemTitle className={"text-destructive"}>Danger Zone</ItemTitle>
            <ItemDescription className={"text-xs"}>
              Deleting your profile is permanent. Your data will be scheduled
              for deletion and removed after 30 days. You won’t be able to
              recover it.
            </ItemDescription>
          </ItemContent>
          <ItemActions asChild>
            <AlertDialogTrigger asChild>
              <Button variant={"destructive"}>
                <Trash2 /> Delete
              </Button>
            </AlertDialogTrigger>
          </ItemActions>
        </Item>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will schedule your profile for
              deletion and remove your data from our servers after 30 days.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="w-full p-2">
            <Input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Type DELETE to confirm"
              className={"font-semibold"}
              aria-invalid={inputError}
            />
            {inputError && (
              <p className="text-destructive text-xs mt-1">
                Please type DELETE to confirm
              </p>
            )}
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleProfileDelete}>
              {isPending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default DangerZone;

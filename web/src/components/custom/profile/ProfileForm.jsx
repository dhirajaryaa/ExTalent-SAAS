import { Button } from "@/components/ui/button";
import { Field } from "..";
import { Save } from "lucide-react";
import { XCircle } from "lucide-react";

function ProfileForm({ profile, editable }) {
  return (
    <div className="w-full mx-auto max-w-3xl mt-5 sm:mt-8">
      <h2 className="font-semibold text-lg sm:text-xl my-2 text-primary">
        {" "}
        About User
      </h2>
      <form className="w-full max-w-3xl mx-auto mt-4 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-3 ">
        <Field
          value={profile?.name}
          label="Name"
          editable={editable}
          className={"md:col-span-2"}
        />
        <Field value={profile?.email} label="Email Id" editable={editable} />
        <Field
          value={profile?.githubUsername}
          label="Github Username"
          editable={editable}
        />
        <Field value={profile?.location} label="Location" editable={editable} />
        <Field value={profile?.blogLink} label="Blog" editable={editable} />
        <Field
          value={profile?.bio}
          label="Bio"
          editable={editable}
          className={"md:col-span-3"}
        />
        {editable && (
          <div className=" space-x-4 mt-2 md:col-span-2 md:col-end-4 justify-self-center md:justify-self-end-safe">
            <Button
              size={"sm"}
              variant={"outline"}
              className={"cursor-pointer"}
            >
              <XCircle />
              Cancel
            </Button>
            <Button size={"sm"} className={"cursor-pointer"}>
              <Save />
              Update
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ProfileForm;

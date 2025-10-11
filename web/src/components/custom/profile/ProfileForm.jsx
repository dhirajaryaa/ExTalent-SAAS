import { Button } from "@/components/ui/button";
import { Field } from "..";
import { Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import updateProfileSchema from "@/schema/user.schema";

function ProfileForm({ editable,profile }) {
  // react form
  const { register, handleSubmit, reset ,formState:{errors}} = useForm({
resolver : zodResolver(updateProfileSchema)
  });

  // set value when profile data arrived
useEffect(() => {
  if (profile) {
    reset({
      name: profile.name ?? "-",
      email: profile.email ?? "-",
      githubUsername: profile.githubUsername ?? "-",
      location: profile.location ?? "-",
      blogLink: profile.blogLink ?? "-",
      bio: profile.bio ?? "-",
    });
  }
}, [profile, reset]);

// handle profile update 

const handleFormSubmit = (data) => {
  console.log("data", data);
};

if(!profile)return null;

  return (
    <div className="w-full mx-auto max-w-3xl mt-5 sm:mt-8">
      <h2 className="font-semibold text-lg sm:text-xl my-2 text-primary">
        About User
      </h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="w-full max-w-3xl mx-auto mt-4 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-3 "
      >
        <Field
          label="Name"
          name="name"
          errors={errors}
          editable={editable}
          register={register}
        />
        <Field
          label="Email Id"
          name="email"
          errors={errors}
          editable={editable}
          register={register}
        />
        <Field
          label="Location"
          name="location"
          editable={editable}
          errors={errors}
          register={register}
        />
        <Field
          label="Blog"
          name="blogLink"
          editable={editable}
          register={register}
          errors={errors}
        />
        <Field
          label="Bio"
          name="bio"
          editable={editable}
          className={"md:col-span-2"}
          register={register}
          errors={errors}
        />
        {/* submit button */}
        {editable && (
          <div className=" space-x-4 mt-2 md:col-span-2 md:col-end-4 justify-self-center md:justify-self-end-safe">
            <Button size={"sm"} className={"cursor-pointer"} type="submit">
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

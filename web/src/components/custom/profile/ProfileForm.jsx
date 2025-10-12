import { Button } from "@/components/ui/button";
import { Field } from "..";
import { Save, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfileSchema } from "@/schema/user.schema";
import useUser from "@/hooks/useUser";
import { setProfile } from "@/store/store";

function ProfileForm({ profile, editable, setEditable }) {
  const {
    userProfileUpdate: { mutateAsync, isPending },
    userProfile: { refetch },
  } = useUser(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: zodResolver(updateProfileSchema),
    mode: "onChange",
  });

  // Sync form values when profile updates
  useEffect(() => {
    if (profile) {
      reset(
        {
          name: profile.name ?? "-",
          email: profile.email ?? "-",
          githubUsername: profile.githubUsername ?? "-",
          location: profile.location ?? "-",
          blogLink: profile.blogLink ?? "-",
          bio: profile.bio ?? "-",
        },
        { keepDirty: false } // ensure dirty tracking resets
      );
    }
  }, [profile, reset]);

  const handleFormSubmit = async (data) => {
    const values = getValues();

    // Extract only dirty fields
    const updatableFields = Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key] = values[key];
      return acc;
    }, {});

    // If nothing changed, skip update
    if (Object.keys(updatableFields).length === 0) {
      console.log("No fields were modified.");
      setEditable(false);
      reset(values, { keepDirty: false });
      return;
    }

    try {
      const res = await mutateAsync(updatableFields);

      if (res?.isSuccess) {
        // Fetch latest profile data
        const profileResponse = await refetch();
        const updatedProfile = profileResponse?.data?.data;
        setProfile(updatedProfile);
        reset(
          {
            name: updatedProfile.name ?? "-",
            email: updatedProfile.email ?? "-",
            githubUsername: updatedProfile.githubUsername ?? "-",
            location: updatedProfile.location ?? "-",
            blogLink: updatedProfile.blogLink ?? "-",
            bio: updatedProfile.bio ?? "-",
          },
          { keepDirty: false }
        );

        setEditable(false);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (!profile) return null;

  return (
    <div className="w-full mx-auto max-w-3xl mt-5 sm:mt-8">
      <h2 className="font-semibold text-lg sm:text-xl my-2 text-primary">
        About User
      </h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="w-full max-w-3xl mx-auto mt-4 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        <Field label="Name" value={profile?.name} name="name" errors={errors} editable={editable} register={register} />
        <Field label="Email Id" value={profile?.email} name="email" errors={errors} editable={editable} register={register} />
        <Field label="Location" value={profile?.location} name="location" errors={errors} editable={editable} register={register} />
        <Field label="Blog" value={profile?.blogLink} name="blogLink" errors={errors} editable={editable} register={register} />
        <Field label="Bio" value={profile?.bio} name="bio" errors={errors} editable={editable} className="md:col-span-2" register={register} />

        {/* Submit Button */}
        {editable && (
          <div className="space-x-4 mt-2 md:col-span-2 md:col-end-3 justify-self-center md:justify-self-end-safe">
            <Button size="sm" type="submit" className="cursor-pointer">
              {isPending ? (
                <>
                  <Loader2 className="animate-spin size-6" /> Updating
                </>
              ) : (
                <>
                  <Save /> Update
                </>
              )}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ProfileForm;

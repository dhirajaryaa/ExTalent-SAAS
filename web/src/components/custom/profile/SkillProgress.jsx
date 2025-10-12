import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSkillsSchema } from "@/schema/user.schema";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PencilRuler, SaveIcon } from "lucide-react";
import { Trash2 } from "lucide-react";
import useUser from "@/hooks/useUser";
import { setProfile } from "@/store/store";
import { PlusCircle } from "lucide-react";

function SkillProgress({ skills }) {
  const [skillsEditable, setSkillsEditable] = useState(false);
  const {
    userSkillsUpdate: { mutateAsync, isPending },
    userProfile: { refetch },
  } = useUser(false);
  // use form hook
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: zodResolver(userSkillsSchema),
    mode: "onChange",
  });
  // array field
  const { fields, append, remove, update } = useFieldArray({
    name: "skills",
    control,
  });

  // set value when profile data arrived
  useEffect(() => {
    if (skills) {
      reset({
        skills: skills,
      });
    }
  }, [skills, reset]);

  //! handle skills update
  const handleSkillsUpdate = async (data) => {
    const res = await mutateAsync(data);
    if (res?.isSuccess) {
      const profile = await refetch();
      setProfile(profile?.data?.data);
      reset(data);
      setSkillsEditable(false);
    }
  };

  return (
    <div className="w-full mx-auto max-w-3xl mt-5 sm:mt-8 space-y-4">
      <div className="flex items-center gap-2 justify-between">
        <h2 className="font-semibold text-lg sm:text-xl my-2 text-primary ">
          Skills
        </h2>
        {!skillsEditable && (
          <Button
            variant={"outline"}
            size="sm"
            onClick={() => setSkillsEditable(!skillsEditable)}
          >
            <PencilRuler />
            Edit Skills
          </Button>
        )}
      </div>
      <form
        onSubmit={handleSubmit(handleSkillsUpdate)}
        className="w-full max-w-3xl mx-auto rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4"
      >
        {fields?.map((skill, index) => (
          <div
            className="flex flex-col gap-2 items-center justify-center"
            key={skill.id}
          >
            <div className="flex gap-2 items-center justify-between w-full">
              {skillsEditable ? (
                <Input
                  type="text"
                  {...register(`skills.${index}.name`)}
                  className="my-2 bg-muted/70 border-0 font-normal text-sm sm:text-base"
                />
              ) : (
                <p className="text-sm">{skill.name}</p>
              )}
              {skillsEditable ? (
                <Button
                  size={"icon-sm"}
                  variant={"destructive"}
                  onClick={() => remove(index)}
                >
                  <Trash2 />
                </Button>
              ) : (
                <Badge size="sm" variant="secondary">
                  {skill.score ?? 0}%
                </Badge>
              )}
            </div>
            {skillsEditable ? (
              <Controller
                control={control}
                name={`skills.${index}.score`}
                render={({ field: { value, onChange } }) => (
                  <div className="flex items-center gap-1 w-full">
                    <Badge variant={"secondary"}>{value}</Badge>
                    <Slider
                      className={"w-full"}
                      value={[value || 0]}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={(val) => onChange(val[0])}
                    />
                  </div>
                )}
              />
            ) : (
              <Progress value={skill.score} />
            )}
          </div>
        ))}
        {skillsEditable && (
          <div className="flex mt-2 rounded-lg items-center justify-center">
            <Button
              type="button"
              variant={"outline"}
              onClick={() => append({ name: "new skill", score: 5 })}
              className={" w-full h-full border-2 border-dashed"}
            >
              <PlusCircle className="size-5" /> Add Skills
            </Button>
          </div>
        )}

        {/* button  */}
        <div className="flex gap-2 items-center sm:justify-end w-full md:col-span-3 sm:col-end-2 justify-center mt-4">
          {skillsEditable && (
            <Button>
              {false ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <SaveIcon />
                  Save Changes
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SkillProgress;

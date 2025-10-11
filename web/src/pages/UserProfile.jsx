import {
  DangerZone,
  Loading,
  ProfileForm,
  SkillProgress,
  UserResume,
} from "@/components/custom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import useUser from "@/hooks/useUser";
import { setProfile, useStore } from "@/store/store";
import { Edit,Github } from "lucide-react";
import { useEffect ,useState} from "react";

function UserProfile() {
  const [editable, setEditable] = useState(false);
  const [loadImg, setLoadImg] = useState(false);
  const profile = useStore((s) => s.profile);
  const {
    userProfile: { data, isLoading },
  } = useUser(true);


  useEffect(() => {
    if (data) {
      setProfile(data?.data);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="w-full h-full p-3">
      {/* user top section */}
      <div className="flex gap-4 w-full max-w-3xl mx-auto">
        <Avatar className="rounded-full size-25 sm:size-35 shadow-sm">
          {!loadImg && (
            <Skeleton
              className={`w-full h-full rounded-full  ${
                !loadImg && "animate-pulse"
              }`}
            />
          )}
          <AvatarImage
            src={profile?.avatar}
            alt={profile?.name}
            onLoad={() => setLoadImg(true)}
            loading="lazy"
            className={`w-full h-full rounded-full transition-opacity duration-300 ${
              loadImg ? "opacity-100" : "opacity-0"
            }`}
          />
        </Avatar>
        <div className="flex flex-col flex-1 justify-center">
          <h1 className="text-lg sm:text-2xl font-bold">{profile?.name}</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {profile?.bio}
          </p>
          <div className="flex gap-2 flex-wrap mt-2">
            <Button size={"sm"} onClick={() => setEditable((prev) => !prev)}>
              <Edit />
              Edit Profile
            </Button>
            <Button size={"sm"} variant={"outline"} asChild>
              <a
                href={`https://github.com/${profile?.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github /> Github
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* show and edit profile  */}
      <ProfileForm editable={editable} profile={profile} />
      {/* skills  */}
      <SkillProgress editable={editable} skills={profile?.skills} />
      {/* user resume  */}
      <UserResume resume={profile?.resume} />
      {/* profile delete  */}
      <DangerZone />
    </section>
  );
}

export default UserProfile;

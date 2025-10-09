import { Loading } from "@/components/custom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import useUser from "@/hooks/useUser";
import userStore from "@/store/userStore";
import { Edit } from "lucide-react";
import { Github } from "lucide-react";

function UserProfile() {
  const {
    userProfile: { data, isLoading },
  } = useUser(true);

  // const setProfile = userStore((state) => state.setProfile);
  const profile = data?.data;
  console.log(profile);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="w-full h-full p-3">
      {/* user top section */}
      <div className="flex gap-4 w-full max-w-3xl mx-auto">
        <Avatar className="rounded-full size-25 sm:size-35">
          <AvatarImage
            src={profile?.avatar}
            loading="lazy"
            alt={profile?.name}
          />
        </Avatar>
        <div className="flex flex-col flex-1 justify-center">
          <h1 className="text-lg sm:text-2xl font-bold">{profile?.name}</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {profile?.bio}
          </p>
          <div className="flex gap-2 flex-wrap mt-2">
            <Button size={"sm"}>
              <Edit />
              Edit Profile</Button>
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
      {/* skills  */}
      {/* <Skills skills={profile?.skills}/> */}
    </section>
  );
}

export default UserProfile;

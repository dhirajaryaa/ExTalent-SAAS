import Logo from "@/components/custom/Logo";
import { ArrowDown } from "lucide-react";

function Success({ user = { name: "Dhiraj Arya" } }) {
  return (
    <>
      {/* hero content  */}
      <div className="flex flex-col items-center px-2 gap-4 justify-center w-full h-screen relative">
        {/* logo  */}
        <Logo />
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-center">
          Welcome, <span className="text-primary">{user?.name}</span>
        </h1>
        <strong className="text-center text-2xl sm:text-4xl md:text-5xl my-4">
          Almost Done ✅
        </strong>
        <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl text-center">
          Yup, Github Connect Successful. Now you Ready to scan job posts and
          view match score instantly💯.
        </p>
      </div>
      {/* arrow scroll */}
      <a href="#watch" className="absolute bottom-16 mx-auto cursor-pointer opacity-35 hover:opacity-100 duration-200 transition-opacity">
        <ArrowDown className="size-8 animate-bounce  text-muted-foreground" />
      </a>
      {/* watch how to use  */}
      <div
        id="watch"
        className="w-full h-screen mx-auto max-w-4xl text-sm flex items-center justify-center flex-col px-2"
      >
        <h2 className="text-2xl sm:text-3xl text-center font-bold">
          How to use
        </h2>
        <p className="text-sm sm:text-lg text-muted-foreground max-w-xl text-center">
          watch how to use to match job post instantly.
        </p>
        <video
          src=""
          className="watch bg-muted rounded-2xl mt-5 sm:mt-9 w-full h-[35em] shadow-sm mask-radial-to-blue-300"
        ></video>
      </div>
    </>
  );
}

export default Success;

import Logo from "@/components/custom/Logo";

function Error({
  reason = "github connection failed",
  message = `something went wrong!, Github Connect Error ochred. Now you try again to connect to sign with github and ready to use.`,
}) {
  return (
    <>
      {/* error content  */}
      <div className="flex flex-col items-center px-2 gap-4 justify-center w-full h-screen relative">
        {/* logo  */}
        <Logo />
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-center">
          Oops, Error accrued ⚠️
        </h1>
        <strong className="text-center text-xl sm:text-4xl md:text-5xl my-4 capitalize">
          {reason}
        </strong>
        <p className="text-sm sm:text-xl text-muted-foreground max-w-3xl text-center">
          {message}
        </p>
      </div>
    </>
  );
}

export default Error;

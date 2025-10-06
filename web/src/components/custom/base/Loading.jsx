import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <main className="w-full h-screen flex items-center justify-center relative">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin w-10 h-10 sm:w-12 sm:h-12 text-primary" />
        <h1 className="w-full text-base sm:text-xl font-semibold animate-pulse text-muted-foreground text-center">
          Loading...
        </h1>
      </div>
    </main>
  );
}

export default Loading;

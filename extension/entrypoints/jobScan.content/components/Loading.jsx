import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="space-y-2 rounded-xl p-2 mt-4 shadow-lg h-50 flex items-center justify-center w-full flex-col">
      <Loader2 className="animate-spin size-8 text-primary" />
      <p className="text-sm text-muted-foreground">Analyzing job match</p>
    </div>
  );
}

export default Loading;

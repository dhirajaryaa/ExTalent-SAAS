import { Loader2 } from "lucide-react";

function Status({ loading, error }) {
  return (
    <div
      className={`space-y-2 rounded-xl p-2 mt-4 shadow-lg h-30 flex items-center justify-center w-full flex-col ${
        error ? "bg-destructive/10" : "bg-background"
      }`}
    >
      {loading && (
        <>
          <Loader2 className="animate-spin size-8 text-primary" />
          <p className="text-sm text-muted-foreground">Analyzing job match</p>
        </>
      )}
      {error && (
        <p className="text-base text-center font-semibold text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export default Status;

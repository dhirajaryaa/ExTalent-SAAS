import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Field({ label, name, editable, className, register,errors }) {
  // Extract error for this field if any
  const error = errors?.[name];

  return (
    <Label className={`font-semibold w-full block ${className}`} htmlFor={name}>
      {label}
      <Input
        disabled={!editable}
        id={name}
        {...register(name)}
          aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`my-2 bg-muted/70 focus:border-2 border-0 font-normal text-sm sm:text-base`}
      />
     {error && (
        <p
          id={`${name}-error`}
          role="alert"
          className="text-destructive ml-3 text-xs mt-1"
        >
          {error.message || "This field is invalid"}
        </p>
      )}
    </Label>
  );
}

export default Field;

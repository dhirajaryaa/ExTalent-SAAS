import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Field({ label, name, editable, className, register, errors, value }) {
  // Extract error for this field if any
  const error = errors?.[name];

  return (
    <div>
      <Label className={`font-semibold w-full block ml-2 ${className}`} htmlFor={name}>
        {label}
      </Label>

      {editable ? (
        <Input
          id={name}
          {...register(name)}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          className="my-2 bg-muted/70"
        />
      ) : (
        <p className="my-2 px-3 py-2 text-base md:text-sm bg-muted/70 rounded-md ">{value || "-"}</p>
      )}

      {error && editable && (
        <p
          id={`${name}-error`}
          role="alert"
          className="text-destructive ml-3 text-xs mt-1"
        >
          {error.message || "This field is invalid"}
        </p>
      )}
    </div>
  );
}

export default Field;

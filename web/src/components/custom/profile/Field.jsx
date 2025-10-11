import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Field({ label, value, editable, className, register }) {
  return (
    <Label
      className={`font-semibold w-full block ${className}`}
      htmlFor={label}
    >
      {label}
      <Input
        disabled={!editable}
        id={label}
        {...register(label)}
        value={value || "-"}
        className={`my-2 bg-muted/70 border-0 font-normal text-sm sm:text-base`}
      />
    </Label>
  );
}

export default Field;

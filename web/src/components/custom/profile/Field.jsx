import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function Field({ label, value, editable, className }) {
  return (
    <Label
      className={`font-semibold w-full block ${className}`}
      htmlFor={label}
    >
      {label}
      <Input
        disabled={!editable}
        id={label}
        value={value || "-"}
        label={label}
        className={`my-2 bg-muted/70 border-0 font-normal text-sm sm:text-base`}
      />
    </Label>
  );
}

export default Field;

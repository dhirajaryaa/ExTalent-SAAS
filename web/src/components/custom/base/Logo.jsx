import React from "react";
import LogoImg from "@/assets/logo.svg";

function Logo({ variant = "default" }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <img
        src={LogoImg}
        alt="logo"
        className="h-8 w-8"
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        loading="lazy"
      />
      {variant === "default" && (
        <span className="font-bold text-xl sm:text-2xl">ExTalent</span>
      )}
    </div>
  );
}

export default Logo
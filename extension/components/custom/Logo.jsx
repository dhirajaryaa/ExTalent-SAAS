import logoImg from "@/assets/logo.png";

function Logo({ variant = "default" || "sm" }) {
  return (
    <div className="flex items-center space-x-2 justify-center">
      <img
        src={logoImg}
        alt="ExTalent Logo"
        className={`sm:size-12 rounded-full ${
          variant === "sm" ? "size-8" : "size-10"
        }`}
      />
      <span
        className={`sm:text-3xl cursor-pointer capitalize ${
          variant === "sm" ? "text-2xl font-bold" : "text-xl font-semibold "
        }`}
      >
        ExTalent
      </span>
    </div>
  );
}

export default Logo;

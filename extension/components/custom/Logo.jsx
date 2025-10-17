import logoImg from "@/assets/logo.png";

function Logo() {
  return (
        <div className="flex items-center space-x-2 mb-5 justify-center">
          <img
            src={logoImg}
            alt="ExTalent Logo"
            className="size-10 sm:size-12 rounded-full"
          />
          <span className="text-xl sm:text-3xl cursor-pointer font-semibold capitalize">
            ExTalent
          </span>
        </div>
  )
}

export default Logo
import { FormEventHandler, MouseEventHandler } from "react";

function Button({
  text,
  textClass,
  type,
  onClick,
  onSubmit,
  isLoading = false,
  color = "primary",
  icon = undefined,
  iconPosition = "right",
  shape = "normal",
  fitContent = false,
  disable = false,
}: {
  text?: string;
  textClass?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  onSubmit?: FormEventHandler<HTMLButtonElement> | undefined;
  isLoading?: boolean;
  color?: "primary" | "secondary" | "red" | "green" | "hollow";
  icon?: React.ReactNode | undefined;
  iconPosition?: "right" | "left";
  shape?: "normal" | "rounded-medium" | "rounded-small";
  disable?: boolean;
  fitContent?: boolean;
}) {
  return (
    <button
      disabled={disable || isLoading}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      className={`${
        shape == "normal"
          ? `${color == "hollow" || "secondary" ? "px-[10px] md:px-[22px] lg:px-[30px] py-[10px]" : "px-3 md:px-6 lg:px-8 py-3"} rounded-[12px] font-medium font-redHatDisplay text-[12px] md:text-[16px] lg:text-[20px]`
          : shape == "rounded-medium"
            ? "px-3 md:px-6 lg:px-8 py-3 rounded-full font-medium text-[14px] md:text-[18px] lg:text-[22px]"
            : "px-3 md:px-4 lg:px-6 py-[6px] rounded-full font-medium text-[12px] md:text-[14px] lg:text-[16px]"
      } ${
        disable
          ? `cursor-not-allowed border-gray-subtext border-2`
          : color == "primary"
            ? "bg-black active:bg-black hover:bg-[#232323] border-black active:border-black hover:border-[#232323] border-2"
            : color == "secondary"
              ? "bg-[#FDD001] active:bg-[#FDD001] hover:bg-[#FFD823] border-[#FDD001] active:border-[#FDD001] hover:border-[#FFD823] border-2"
              : color == "green"
                ? "bg-green-secondary active:bg-green-secondary hover:bg-green-accent border-green-secondary active:border-green-secondary hover:border-green-accent border-2"
                : color == "red"
                  ? "bg-red-secondary active:bg-red-secondary hover:bg-red-accent border-red-secondary active:border-red-secondary hover:border-red-accent border-2"
                  : "bg-transparent border-[#FFCA00] hover:bg-[#142B6F] active:bg-[#0F2464] hover:text-white text-[#142B6F] border-4"
      } ${fitContent ? "w-fit shrink-0" : "w-full"} h-fit group`}
    >
      {isLoading ? (
        <div
          className={`${
            disable ? "text-gray-500" : color == "hollow" ? "hover:text-white" : textClass ? textClass : "text-white"
          }  flex items-center justify-center`}
        >
          <svg
            className="mr-3 h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </div>
      ) : (
        <div
          className={`${
            disable ? "text-gray-500" : color == "hollow" ? "hover:text-white" : textClass ? textClass : "text-white"
          } ${
            iconPosition == "right" ? "" : "flex-row-reverse"
          } ${icon == undefined ? "" : "flex items-center justify-center gap-3"}`}
        >
          {text}
          <div
            className={`${
              shape == "normal"
                ? "text-[22px] md:text-[26px] lg:text-[30px]"
                : shape == "rounded-medium"
                  ? "text-[24px] md:text-[28px] lg:text-[32px]"
                  : "text-[20px] md:text-[22px] lg:text-[24px]"
            }`}
          >
            {icon}
          </div>
        </div>
      )}
    </button>
  );
}

export default Button;

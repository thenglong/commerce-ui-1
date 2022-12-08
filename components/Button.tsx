import { useThemeState } from "../context/theme";
import { makeClassName } from "../lib/utils";

const buttonStyle = (theme: any) => {
  switch (theme) {
    case "kitchen-sink-journal-chopchop-shop":
      return "bg-clementine text-black";
    case "walnut-cooks-tools-chopchop-shop":
      return "bg-tumbleweed text-black";
    case "essential-knife-set-chopchop-shop":
      return "bg-hawkes-blue text-black";
    case "private-cooking-class-chopchop-shop":
      return "bg-asparagus text-black";
    case "ceramic-dutch-oven-chopchop-shop":
      return "bg-goldenrod text-black";
    default:
      return "bg-white-rock";
  }
};

function Button({ className, ...props }: any) {
  const theme = useThemeState();

  const buttonClass = makeClassName([
    "appearance-none border-none py-0.5 px-1.5 md:px-2 text-lg md:text-xl rounded transition focus:outline-none",
    buttonStyle(theme),
    className,
  ]);

  if (props.href) return <a {...props} className={buttonClass} />;

  return <button {...props} className={buttonClass} />;
}

export default Button;

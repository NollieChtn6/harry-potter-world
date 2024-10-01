import { SquareChevronRight } from "lucide-react";

type ButtonProps = {
  text: string;
  actionType: "nav" | "cta";
};

export default function Button({ text, actionType }: ButtonProps) {
  const buttonClass = actionType === "nav" ? "nav-btn" : "cta-btn";
  return (
    <button className={buttonClass} type="button">
      {text}
      {actionType === "cta" && <SquareChevronRight />}
    </button>
  );
}

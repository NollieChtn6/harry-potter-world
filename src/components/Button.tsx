import { SquareChevronRight } from "lucide-react";

type ButtonProps = {
  text: string;
  actionType: "nav" | "cta" | "formSubmit";
};

export default function Button({ text, actionType }: ButtonProps) {
  const buttonClass = actionType === "nav" ? "nav-btn" : "cta-btn";
  const buttonType = actionType === "formSubmit" ? "submit" : "button";
  return (
    <button className={buttonClass} type={buttonType}>
      {text}
      {actionType === "cta" && <SquareChevronRight />}
    </button>
  );
}

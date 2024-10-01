import { SquareChevronRight } from "lucide-react";

type ButtonProps = {
  label: string;
  actionType: "nav" | "cta";
};

export default function Button({ label, actionType }: ButtonProps) {
  const buttonClass = actionType === "nav" ? "nav-btn" : "cta-btn";
  return (
    <button className={buttonClass} type="button">
      {label}
      {actionType === "cta" && <SquareChevronRight />}
    </button>
  );
}

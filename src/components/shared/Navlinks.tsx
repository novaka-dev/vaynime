import { Link } from "react-router-dom";

interface NavlinksProps {
  href: string;
  label: string;
}

export const Navlinks = ({ href, label }: NavlinksProps) => {
  return (
    <li className="duration-300 font-medium ease-linear hover:text-primary">
      <Link to={href}>{label}</Link>
    </li>
  );
};

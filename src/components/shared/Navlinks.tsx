interface NavlinksProps {
  href: string;
  label: string;
}

export const Navlinks = ({ href, label }: NavlinksProps) => {
  return (
    <li className="duration-300 font-medium ease-linear hover:text-primary py-3">
      <a href={href}>{label}</a>
    </li>
  );
};

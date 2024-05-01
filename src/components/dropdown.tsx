import { useState } from "react";
import Link from "next/link";

interface DropdownProps {
  placeholder: string;
  options: any;
  link: string;
}

const Dropdown = ({ placeholder, options, link }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Link href="" className="flex flex-col lg:flex-row gap-1 lg:gap-2 lg:items-center">
        {placeholder}
      </Link>
    </div>
  );
};

export default Dropdown;

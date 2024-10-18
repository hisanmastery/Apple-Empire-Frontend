import { icons } from "@/constants/icons";
import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-1 text-gray-500">/</span>}
            {index === 0 ? (
              <Link
                href={item.href}
                className="hover:underline hover:text-_primary flex items-center"
              >
                <icons.HomeIcon className="text-xl" />
              </Link>
            ) : (
              <Link
                href={item.href}
                className="hover:text-_primary hover:underline font-semibold"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

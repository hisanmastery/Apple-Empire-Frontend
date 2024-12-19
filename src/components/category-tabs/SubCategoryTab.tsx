"use client";
import { useGetCategoryWithProductQuery } from "@/store/features/category/categoryApi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface CategoryProps {
  category: string;
}

const SubCategoryTabs: React.FC<CategoryProps> = ({ category }) => {
  const searchParams = useSearchParams();
  const initialSelectedCategory = searchParams.get("category");
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    initialSelectedCategory || null
  );

  // Fetch categories data
  const { data: categories, isLoading } = useGetCategoryWithProductQuery<any>({
    slug: category,
  });
  console.log(categories);
  const categoryData = categories?.data;

  const handleCategoryClick = (categoryName: string) => {
    const newParams = new URLSearchParams(window.location.search);
    newParams.set("category", categoryName);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${newParams}`
    );
    setSelectedSubCategory(categoryName);
  };

  useEffect(() => {
    setSelectedSubCategory(initialSelectedCategory);
  }, [initialSelectedCategory]);

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  return (
    <div>
      <p className="text-md mb-2 font-semibold">{categoryData?.categoryName}</p>
      <ul className="flex flex-wrap gap-4 p-1">
        {/* "All" Tab */}
        <li
          className={`flex items-center justify-center px-5 py-[2px] border border-gray-300 rounded-md transition-all duration-200 
            cursor-pointer hover:bg-_blue hover:text-white 
            ${
              !selectedSubCategory
                ? "font-bold bg-_blue text-white"
                : "text-gray-700"
            }`}
          role="tab"
          tabIndex={0}
        >
          <Link href={`/category/${category}`}>All</Link>
        </li>

        {/* Subcategory Tabs */}
        {categoryData?.map(
          (item: { slug: string; categoryName: string }, index: number) => {
            const isSelected = selectedSubCategory === `${item.slug}`;
            const tabClassNames = `flex items-center justify-center px-3 text-sm py-[2px] border border-gray-300 rounded-md transition-all duration-200
            cursor-pointer hover:bg-_blue hover:text-white ${
              isSelected ? "font-bold bg-_blue text-white" : "text-gray-700"
            }`;

            return (
              <li
                key={index}
                className={tabClassNames}
                role="tab"
                tabIndex={0}
                onClick={() => handleCategoryClick(item?.slug)}
              >
                {item.categoryName}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default SubCategoryTabs;

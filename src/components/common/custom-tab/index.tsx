import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomTabs = ({ defaultValue, className, tabs, setSelectedTab }: any) => {
  const handleTabChange = (value: any) => {
    setSelectedTab(value);
  };

  return (
    <Tabs
      defaultValue={defaultValue}
      className={className}
      onValueChange={handleTabChange}
    >
      <TabsList className="flex justify-start max-w-screen-xsm">
        {tabs?.map((tab: any, index: number) => (
          <TabsTrigger
            key={index}
            value={tab.value}
            className={`px-4 py-2 text-_black transition-colors duration-200`}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs?.map((tab: any, index: number) =>
        tab.content ? (
          <TabsContent key={index} value={tab.value}>
            {tab.content}
          </TabsContent>
        ) : null
      )}
    </Tabs>
  );
};

export default CustomTabs;

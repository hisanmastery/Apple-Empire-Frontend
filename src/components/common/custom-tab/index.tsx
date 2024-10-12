import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const CustomTabs = ({ defaultValue, className, tabs }: any) => {
  return (
    <Tabs defaultValue={defaultValue} className={className}>
      <TabsList className="flex justify-start max-w-screen-xsm">
        {tabs.map((tab: any, index: number) => (
          <TabsTrigger key={index} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab: any, index: number) => (
        <TabsContent key={index} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CustomTabs;

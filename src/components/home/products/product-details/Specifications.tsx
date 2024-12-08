import React from "react";

const SpecificationsTable = ({ specifications }: any) => {
  return (
    <div className="p-6 max-w-4xl bg-white rounded-md">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="text-left px-4 py-2 bg-gray-100 border border-gray-300">
              Feature
            </th>
            <th className="text-left px-4 py-2 bg-gray-100 border border-gray-300">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {specifications?.groups?.map((section: any, sectionIndex: number) => (
            <React.Fragment key={sectionIndex}>
              {/* Group Header */}
              <tr className="bg-gray-200">
                <td className="text-left px-4 py-2 font-semibold text-gray-700 border border-gray-300">
                  {section.group}
                </td>
              </tr>
              {/* Group Details */}
              {section?.details?.map((item: any, itemIndex: number) => (
                <tr
                  key={itemIndex}
                  className={itemIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-2 border border-gray-300 text-gray-600">
                    {item.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 text-gray-800">
                    {item.value}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationsTable;

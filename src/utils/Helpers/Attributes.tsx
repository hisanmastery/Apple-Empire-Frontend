/**
 * Extracts unique RAM attributes from the first variant list in the provided data.
 * @param {Array} variantList - The list of variants.
 * @param {string} attributeLabel - The label of the attribute to extract (e.g., "RAM").
 * @returns {Array<string>} - An array of unique values for the specified attribute.
 */
export function useExtractUniqueAttributes(variantList: Variant[], attributeLabel: string): string[] {
    // Validate the input parameters
    if (!Array.isArray(variantList) || typeof attributeLabel !== 'string') {
      return [];
    }
  
    // Use a Set to collect unique attribute values
    const uniqueAttributes = variantList.reduce((accumulator: Set<string>, variant: Variant) => {
      const attribute = variant.attributeValues.find(attr => attr.label === attributeLabel);
      if (attribute) {
        accumulator.add(attribute.value);
      }
      return accumulator;
    }, new Set<string>());
  
    // Convert the Set to an Array and return it
    return Array.from(uniqueAttributes);
  }
  
  // Define the types for the function parameters
  interface AttributeValue {
    label: string;
    value: string;
  }
  
  interface Variant {
    attributeValues: AttributeValue[];
  }
  
/**
 * Extracts unique RAM attributes from the first variant list in the provided data.
 * @param {Array} variantList
 * @param {string} attributeLabel 
 * @returns {Array<string>} 
 */
export function useExtractUniqueAttributes(variantList: Variant[], attributeLabel: string): string[] {
  if (!Array.isArray(variantList) || typeof attributeLabel !== 'string') {
    return [];
  }
  const uniqueAttributes = variantList.reduce((accumulator: Map<string, string>, variant: Variant) => {
    const attribute = variant.attributeValues.find(attr => attr.label.toLowerCase() === attributeLabel.toLowerCase());
    if (attribute) {
      const normalizedValue = attribute.value.toLowerCase();
      accumulator.set(normalizedValue, attribute.value);
    }
    return accumulator;
  }, new Map<string, string>());
  return Array.from(uniqueAttributes.values());
}
interface AttributeValue {
  label: string;
  value: string;
}

interface Variant {
  attributeValues: AttributeValue[];
}

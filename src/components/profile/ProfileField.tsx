const ProfileField = ({ label, value }: { label: string; value?: string }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input
      type="text"
      className="mt-1 p-2 w-full border rounded-md"
      value={value || ""}
      readOnly
    />
  </div>
);

export default ProfileField;

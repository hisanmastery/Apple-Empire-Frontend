import Image from "next/image";
import { useRouter } from "next/navigation";

const ProfileCard = ({ customerInfo }: { customerInfo: any }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    router.push("/");
  };

  return (
    <div className="bg-white mx-5 md:mx-0 md:w-64 p-6 shadow-md">
      <div className="flex flex-col items-center">
        <Image
          className="w-24 h-24 rounded-full object-cover"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="Profile Picture"
          width={96}
          height={96}
        />
        <h1 className="text-xl font-semibold mt-4">{customerInfo?.name}</h1>
        <p className="text-gray-600">{customerInfo?.email}</p>
      </div>
      <nav className="mt-10">
        <ul className="space-y-4">
          <li>
            <a
              href="#profile"
              className="block py-2 px-4 bg-_orange text-white rounded-md text-center"
            >
              Profile Information
            </a>
          </li>
          <li>
            <a
              href="#orders"
              className="block py-2 px-4 bg-_orange text-white rounded-md text-center"
            >
              My Order Information
            </a>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="block w-full py-2 px-4 bg-_orange text-white rounded-md text-center"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileCard;

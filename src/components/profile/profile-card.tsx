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
    <div className="bg-white w-full md:w-64 p-4 md:p-6 shadow-md rounded-lg mx-auto md:mx-0">
      <div className="flex flex-col items-center text-center">
        <Image
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt="Profile Picture"
          width={96}
          height={96}
        />
        <h1 className="text-lg md:text-xl font-semibold mt-3 md:mt-4">
          {customerInfo?.name}
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          {customerInfo?.email}
        </p>
      </div>
      <nav className="mt-6 md:mt-10">
        <ul className="space-y-3 md:space-y-4">
          <li>
            <a
              href="#profile"
              className="block py-2 px-3 bg-_orange text-white rounded-md text-center text-sm md:text-base"
            >
              Profile Information
            </a>
          </li>
          <li>
            <a
              href="#orders"
              className="block py-2 px-3 bg-_orange text-white rounded-md text-center text-sm md:text-base"
            >
              My Order Information
            </a>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="block w-full py-2 px-3 bg-_orange text-white rounded-md text-center text-sm md:text-base"
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

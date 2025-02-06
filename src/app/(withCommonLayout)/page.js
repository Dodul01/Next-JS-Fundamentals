"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  
  const handleNavigate = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center flex-col h-[90vh] gap-8">
      <h1 className="text-3xl text-center">Welcome to my project home page.</h1>
      <button
        onClick={handleNavigate}
        className="bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-opacity-75"
      >
        Dashboard
      </button>
    </div>
  );
};

export default Home;

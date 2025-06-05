"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <div className="relative z-10 mb-10">
      <div className="flex justify-center md:justify-start">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm text-white/80 hover:text-white px-6 py-2 border border-white/20 rounded-full backdrop-blur-md hover:bg-white/10 transition duration-300 shadow-md">
          <ArrowLeft size={18} />
          Go back
        </button>
      </div>
    </div>
  );
};

export default GoBackButton;

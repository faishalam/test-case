"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DefaultPage: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/todo");
  }, [router]);

  return (
    <div className="w-full h-full">
      <p>Redirecting....</p>
    </div>
  );
};

export default DefaultPage;

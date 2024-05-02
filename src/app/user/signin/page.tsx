"use client";

import { signInWithGoogle } from "../../../utils/auth";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;
  // If the user is already signed in, redirect to the home page or dashboard
  if (user) {
    router.push("/user");
  }
  // Sign in with Google

  const handleSignUpWithGoogle = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("User signed up with Google:", user);
      // Redirect to the home page or dashboard after successful sign-up
      router.push("/user/profile");
    } catch (error) {
      console.error("Error signing up with Google:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome!</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSignUpWithGoogle}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

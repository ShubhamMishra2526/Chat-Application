import Image from "next/image";
import Authform from "./components/Authform";

export default function Home() {
  return (
    <div
      className="
     flex
     min-h-full
     flex-col
     justify-center
     py-12
     sm:px-6
     lg:px-8
     bg-gray-100
    "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height="80"
          width="80"
          className="mx-auto w-auto"
          src="/image/logo.png"
        />
        <h2
          className="
          mt-6
          text-center
          text-3xl
          font-bold
          tracking-tight
          text-gray-900
          "
        >
          Sign in to your happy space!
        </h2>
      </div>
      <Authform />
    </div>
  );
}

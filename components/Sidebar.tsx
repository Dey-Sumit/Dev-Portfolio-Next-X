import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      {/* <img
        src="https://sumitdey.netlify.app/static/media/max.9d3a6d3e.jpg"
        alt="avatar"
        className="w-32 h-32 mx-auto border rounded-full "
      /> */}
      <Image
        width="128"
        height="128"
        src="https://sumitdey.netlify.app/static/media/max.9d3a6d3e.jpg"
        alt="avatar"
        className="mx-auto border rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Sumit</span> Dey
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-200">
        Web Developer
      </p>
      {/* Resume */}
      <a
        href="/assets/Sumit Dey Resume.pdf"
        download="Sumit Dey Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-200"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        {/* //? THIS 👇 aria label */}
        <a
          href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A"
          aria-label="YouTube"
        >
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/sumit-dey-4a04431a9/"
          aria-label="Linkedin"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/_sumax__/" aria-label="GitHub">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-black-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Kolkata,India </span>
        </div>
        <p className="my-2 "> code.sumax@gmail.com </p>
        <p className="my-2"> 8514961665 / 8640960375 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:code.sumax@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeMode}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
    </>
  );
};

export default Sidebar;

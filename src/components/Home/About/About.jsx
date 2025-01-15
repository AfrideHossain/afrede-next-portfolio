import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="relative min-h-screen bg-slate-900 p-4">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-900 to-transparent z-0"></div> */}
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="mt-10 text-3xl md:text-5xl leading-tight font-bold text-center text-white">
            About me
          </h1>
          <p className="font-semibold text-lg text-gray-400">My Intro</p>
        </div>
        <div className="container flex items-center justify-between absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-auto border-0 border-red-500">
          <div className="relative flex justify-center p-4 rounded-lg bg-slate-700">
            <Image
              src={"/images/Afride-image1.png"}
              width={600}
              height={200}
              alt="Afride Hossain"
              className=""
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-gray-900/70 to-transparent"></div>
          </div>
          <div className="p-10 max-w-2xl border-2 border-indigo-400 rounded-tr-3xl rounded-bl-3xl">
            <p className="text-white text-lg">
              Dynamic and ambitious full stack web developer with a strong
              passion for growth and learning. Looking for a challenging role to
              leverage my quick learning abilities and powerfully contribute to
              a rising organization's success.
            </p>
            <div className="flex gap-10">
              <div className="p-5">
                <h3 className="text-xl font-bold leading-tight">Bangla</h3>
                <p>Fluent</p>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold leading-tight">English</h3>
                <p>Professional</p>
              </div>
            </div>
          </div>
          {/* <div>
            <Image />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;

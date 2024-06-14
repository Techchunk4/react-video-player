import Image from "next/image";

const Hero = ({ imageSrc, title }) => {
  return (
    <div className="relative w-full h-64 bg-gray-800">
      <img
        src={imageSrc}
        alt="Hero Image"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;

export const ServiceCard = ({ title, description, bgColor, img }) => {
  console.log(bgColor);
  return (
    <div
      className={`relative px-3 bg-creamBg hover:bg-[#f1efe1] bg-opacity-30 rounded-3xl py-2 flex flex-col justify-center hover:cursor-pointer shadow hover:shadow-black transition-all duration-300  gap-4 h-[100%] sm:w-[70%] min-h-56 border border- items-center text-black  mx-auto  `}
      //   style={{ backgroundColor: `${bgColor}` }}
    >
      <h1 className=' font-bold text-xl'>{title}</h1>
      <p className='text-justify'>{description}</p>
    </div>
  );
};

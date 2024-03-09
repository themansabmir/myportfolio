export const ServiceCard = ({ title, description, bgColor }) => {
    console.log(bgColor)
  return (
    <div
      className={`bg-[${bgColor}] px-3 rounded-3xl py-2 flex flex-col gap-4 h-[100%] w-[70%] items-center text-black  mx-auto`}
    >
      <h1 className=" font-bold text-xl">{title}</h1>
      <p className="text-justify">{description}</p>
    </div>
  );
};

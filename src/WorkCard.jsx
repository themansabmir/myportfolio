

export const WorkCard = ({title, description}) => {
  return (
    <div className='relative min-h-40 h-[100%]  px-6 py-10 bg-[#f6f4ee] border rounded-lg  border-black hover:cursor-pointer hover:shadow-[#0e0e0e] hover:scale-105 transition-all duration-500 hover:bg-creamBg hover:shadow-md'>
      <h1 className='text-black text-start text-2xl font-semibold'>{title}</h1>
      <p className='text-base text-black font-medium text-justify mt-5'>{description}</p>
    </div>
  );
};

interface awardProp {
  img: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  desc1: string;
  desc2: string;
}

const Awards = ({
  img,
  title,
  subtitle1,
  subtitle2,
  desc1,
  desc2,
}: awardProp) => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white">
      <img src={img} className="w-1/2 h-fit"></img>
      <div className="w-1/2 bg-gradient-to-b from-[#FBE291] via-[#FAD431] to-[#FCCF37] h-auto px-12 pt-16 pb-32 text-[#1F3576]">
        <h1 className="text-6xl font-bold font-poppins text-center">{title}</h1>
        <h2 className="text-3xl font-bold font-poppins mt-14">{subtitle1}</h2>
        <h2 className="text-3xl font-regular font-poppins">{subtitle2}</h2>
        <p className="text-2xl font-poppins mt-8 text-justify">{desc1}</p>
        <p className="text-2xl font-poppins mt-4 text-justify">{desc2}</p>
      </div>
    </div>
  );
};

export default Awards;

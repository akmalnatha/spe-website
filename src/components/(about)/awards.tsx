interface awardProp {
  img: string;
  title: string;
  subtitle: string;
  desc: string;
}

const Awards = ({ img, title, subtitle, desc }: awardProp) => {
  return (
    <div className="flex flex-row bg-white">
      <img src={img} className="w-1/2"></img>
      <div className="w-1/2 ">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Awards;

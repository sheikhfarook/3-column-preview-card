import car1 from "../assets/images/icon-sedans.svg";
import car2 from "../assets/images/icon-suvs.svg";
import car3 from "../assets/images/icon-luxury.svg";

const ColCard = () => {
  const cards = [
    {
      id: 1,
      carPic: car1,
      heading: "SEDANS",
      matter:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    },
    {
      id: 1,
      carPic: car2,
      heading: "SUVS",
      matter:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    },
    {
      id: 1,
      carPic: car3,
      heading: "LUXURY",
      matter:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    },
  ];
  return (
    <div className="flex flex-row max-sm:flex-col w-[25rem] max-sm:m-auto max-sm:items-center m-auto mt-[15%]  justify-center">
      {cards?.map((preview, index) => (
        <div
          key={preview?.id}
          className={`w-[22rem] ${
            index === 0
              ? "bg-[#E38826] 2xl:rounded-s-lg max-sm:rounded-t-lg  text-[#E38826]"
              : index === 1
              ? "bg-[#006970] text-[#006970]"
              : index === 2
              ? "bg-[#004241] rounded-e-lg max-sm:rounded-e-none max-sm:rounded-bl-lg max-sm:rounded-br-lg  text-[#004241]"
              : 0
          }`}>
          <div className="ml-10 mr-14">
            <div>
              <img className="mt-10" src={preview?.carPic} alt="" />
            </div>
            <div>
              <h1 className="mt-10 font-[700] font-testFont text-[#F2F2F2] text-3xl">
                {preview?.heading}
              </h1>
            </div>
            <div className="mt-7 font-[400] text-[15px]   ">
              <p className="w-[13rem] text-[#FFFFFF]">{preview?.matter}</p>
              <div className="mt-14 w-[9rem] mb-14 text-center rounded-full  bg-[#F2F2F2] ">
                <button className=" h-12 font-lexenddeca  ">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColCard;

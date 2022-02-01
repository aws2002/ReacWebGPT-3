export default function About() {
  const item_about = [
    {
      id:1,
      titel: "Chatbots",
      contant:
        "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    },
    {   id:2,
        titel: "Knowledgebase",
        contant:
          "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
      },
      { id:3,
        titel: "Education",
        contant:
          "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
      },
  ];
  return (
    <>
      <div className="container px-4 sm:px-6 lg:px-8 my-16 bg-color_2 gradient__bg--2">
        <div className=" grid grid-cols-12 py-14 gap-5">
          <div className="md:col-span-4 col-span-12">
            <div className="item-about">
              <div className="line"></div>
              <h4 className=" text-white text-2xl font-bold">What is GPT-3</h4>
            </div>
          </div>
          <div className="md:col-span-7 col-span-12">
            <div className="item-about">
              <p className=" text-color_3 font-semibold">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
          </div>
          <div className="md:col-span-10 col-span-12 mt-20">
            <div className="item-about">
              <h2 className=" text-4xl font-extrabold gradient__text">
                The possibilities are beyond <br /> your imagination
              </h2>
            </div>
          </div>
          <div className="md:col-span-2 col-span-12 mt-20">
            <div className="item-about">
              <p className="text-color_8 font-semibold">Explore The Library</p>
            </div>
          </div>
          {item_about.map((item)=>(
            <div className="md:col-span-4 col-span-12 mt-20" key={item.id}>
            <div className="item-about">
              <div className="line"></div>
              <h4 className=" text-white text-2xl font-bold mt-5">{item.titel}</h4>
              <p className=" text-color_3 text-base mt-9">
                {item.contant}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

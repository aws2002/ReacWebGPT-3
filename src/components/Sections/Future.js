export default function Future() {
  const item_future = [
    {
      id: 1,
      superText: "Improving end distrusts instantly ",
      supText:
        "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      id: 2,
      superText: "Become the tended active",
      supText:
        "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      id: 3,
      superText: "Message or am nothing ",
      supText:
        "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      id: 4,
      superText: "Really boy law county ",
      supText:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];
  
  return (
    <>
      <div className=" container px-4 sm:px-6 lg:px-8 my-24">
        <div className=" grid grid-cols-12">
          <div className="md:col-span-5 col-span-12 mb-12">
            <div className="content--future">
              <h2 className=" text-4xl font-bold gradient__text mb-16">
                The Future is Now and <br /> You Just Need To Realize <br /> It.
                Step into Future Today <br /> & Make it Happen.
              </h2>
              <span className=" text-color_8 ">
                Request Early Access to Get Started
              </span>
            </div>
          </div>
          <div className="md:col-span-7 col-span-12">
            <div className=" grid-cols-12 grid">
              {item_future.map((item) => (
                <>
                  <div className="md:col-span-6 col-span-6 mb-16">
                    <div className="item-future">
                      <div className="line"></div>
                      <h4 className=" text-white text-2xl font-semibold">
                        {item.superText}
                      </h4>
                    </div>
                  </div>
                  <div className="md:col-span-6 col-span-6">
                    <div className="item-future">
                      <p className=" text-color_3 font-light">{item.supText}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

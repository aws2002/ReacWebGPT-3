export default function Blog() {
  const box_item_blog = [
    {
      id:1,
      date: "Sep 26, 2021",
      titel: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      readMore: "Read Full Article",
      img: "./images/Rectangle21.png",
    },
    {
      id:2,
      date: "Sep 26, 2021",
      titel: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      readMore: "Read Full Article",
      img: "./images/Rectangle2.png",
    },
    {
      id:3,
      date: "Sep 26, 2021",
      titel: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      readMore: "Read Full Article",
      img: "./images/Rectangle23.png",
    },
    {
      id:4,
      date: "Sep 26, 2021",
      titel: "GPT-3 and Open AI is the future. Let us exlore how it is?",
      readMore: "Read Full Article",
      img: "./images/Rectangle24.png",
    },
  ];

  return (
    <>
      <div className="container sm:px-6  my-16 py-7 px-4">
        <div className="grid grid-cols-12 mb-10">
          <div className=" col-span-12">
            <div className="titel">
              <h2 className="gradient__text font-extrabold text-5xl pb-9">
                A lot is happening, <br /> We are blogging about it.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <div className="md:col-span-4 col-span-12">
            <div className=" blog h-[580px]">
              <div className="blog-img">
                <img src="./images/blog_1.png" alt="" />
              </div>
              <div className="bg-blog h-[460px] p-7 relative ">
                <span className=" text-white font-medium">Sep 26, 2021</span>
                <p className=" text-white font-bold mt-4 text-2xl">
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </p>
                <span className="absolute bottom-7 left-7 text-white">
                  Read Full Article
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 col-span-12 md:ml-11 md:mt-0 mt-56">
            <div className=" grid-cols-12 grid gap-8">
              {box_item_blog.map((item) => (
                <div className="md:col-span-6 col-span-12" key={item.id}>
                  <div className="box--item--img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="box--item--text bg-blog h-52 p-5 relative">
                    <span className=" text-white font-medium">{item.date}</span>
                    <p className=" text-white font-bold mt-4 text-xl">
                      {item.titel}
                    </p>
                    <span className="absolute bottom-7 left-7 text-white">
                      {item.readMore}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

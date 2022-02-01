export default function Brand() {
  const brand_item = [
    { img: "./images/google.png",id:1 },
    { img: "./images/dropbox.png" ,id:2},
    { img: "./images/atlassian.png" ,id:3},
    { img: "./images/slack.png",id:4 },
    { img: "./images/shopify.png",id:5 },
  ];
  return (
    <>
      <div className=" container sm:px-6  my-16 py-7 px-4">
        <div className="brand grid-cols-12 grid">
          <div className="col-span-12 text-center md:pl-0 pl-20">
          <ul>
            {brand_item.map((item) => (
              <li key={item.id}>
                <img src={item.img} alt="" />
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}

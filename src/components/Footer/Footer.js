export default function Footer() {
  const footerLinks = [
    {
      id: 1,
      category: "Links",
      links: [
        { nameLink: "Overons", href: "#", id:1 },
        { nameLink: "Social Media", href: "#", id:2},
        { nameLink: "Counters", href: "#", id:3 },
        { nameLink: "Contact", href: "#" , id:4},
      ],
    },
    {
      id: 2,
      category: "Company",
      links: [
        { nameLink: "Overons", href: "#", id:1 },
        { nameLink: "Social Media", href: "#", id:2},
        { nameLink: "Counters", href: "#", id:3 },
        { nameLink: "Contact", href: "#" , id:4},
      ],
    },
    {
      id: 3,
      category: "Get in touch",
      links: [
        { nameLink: "Overons", href: "#", id:1 },
        { nameLink: "Social Media", href: "#", id:2},
        { nameLink: "Counters", href: "#", id:3 },
        { nameLink: "Contact", href: "#" , id:4},
      ],
    },
  ];
  return (
    <footer className=" pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className=" grid md:grid-cols-12">
          <div className=" md:col-span-12 text-center px-20">
            <div className="sec-1--footer">
              <h2 className=" text-[44px] font-bold gradient__text">
                Do you want to step in to the
                <br />
                future before others
              </h2>
              <button className=" mt-7 text-white border-2 px-6 py-4 font-bold hover:bg-white ease-in duration-300 hover:text-black">
                Request Early Access
              </button>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-12 mt-24 gap-4">
          <div className="md:col-span-3">
            <ul>
              <li className=" text-white text-5xl font-bold">GPT-3</li>
              <li className=" text-white mt-7">
                Crechterwoord K12 182 DK Alknjkcb,
                <br /> All Rights Reserved
              </li>
            </ul>
          </div>
          {footerLinks.map((item) => (
            
              <div className="md:col-span-3" key={item.id}>
                <ul>
                  <li
                    className=" font-bold text-white text-xl mb-3"
                  >
                    {item.category}
                  </li>

                  {item.links.map((link) => (
                    <li className=" text-[14px] text-white mb-4" key={link.id} >
                      <a href={link.href}>{link.nameLink}</a>
                    </li>
                  ))}
                </ul>
              </div>
            
          ))}
        </div>
      </div>
    </footer>
  );
}

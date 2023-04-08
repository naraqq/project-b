import Layout from "../components/Layouts/Layout";

function OurHistory() {
  const specialists = [
    {
      id: 1,
      title: "Зөвлөх инженер",
      name: "С.Содтуяа",
      experience: "БУА-н чиглэлээр 20 жил ажилласан.",
    },
    {
      id: 2,
      title: "Барилгын инженер",
      name: "П.Миеэгомбо",
      experience: "БУА-н чиглэлээр 4 жил ажилласан.",
    },
    {
      id: 3,
      title: "",
      name: "Т.Чимэдцэрэн",
      experience: "БУА-н чиглэлээр 4 жил ажилласан.",
    },
    {
      id: 4,
      title: "",
      name: "Э.Алзахгүй",
      experience: "БУА-н чиглэлээр 7 жил ажилласан.",
    },
    {
      id: 5,
      title: "",
      name: "Э.Нармандах",
      experience: "БУА-н чиглэлээр 1 жил ажилласан.",
    },
    {
      id: 6,
      title: "ХЭМАБ-н инженер",
      name: "Д.Баярмаа",
      experience: "БУА-н чиглэлээр 8 жил ажилласан.",
    },
    {
      id: 7,
      title: "ХЭМАБ-н инженер",
      name: "Б.Мижиддорж ",
      experience: "БУА-н чиглэлээр 20 жил ажилласан.",
    },
    {
      id: 8,
      title: "Хэв хашмал угсрах бригадын ахлагч",
      name: "Б.Ариунболд",
      experience: "Ажиллах хүч - 30 мужаан",
    },
    {
      id: 9,
      title: "Хэв хашмал угсрах бригадын ахлагч",
      name: "Б.Ууганбаяр",
      experience: "Ажиллах хүч - 20 мужаан",
    },
    {
      id: 10,
      title: "Арматурын бригадын ахлагч",
      name: "А.Даваадалай",
      experience: "Ажиллах хүч - 30 мужаан",
    },
    {
      id: 11,
      title: "Бетон арматурын бригадын ахлагч",
      name: "П.Энхбаяр",
      experience: "Ажиллах хүч - 30 хүн",
    },
    {
      id: 12,
      title: "Бетон арматурын бригадын ахлагч",
      name: "Э.Төрмөнх ",
      experience: "Ажиллах хүч - 30 хүн",
    },
  ];
  function randomIntFrom1To4() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = Math.random();

    // Scale the random number to be between 1 (inclusive) and 5 (exclusive)
    const scaledNumber = randomNumber * 4 + 1;

    // Floor the scaled number to get an integer between 1 and 4 (inclusive)
    const randomInt = Math.floor(scaledNumber);

    // Return the randomly generated integer
    return randomInt;
  }
  return (
    <Layout>
      <div className="body">
        <div className="main">
          <div className="w-full flex justify-center about">
            <ul>
              <li>
                Манай компани нь анх 2009 онд байгуулагдаж өнөөг хүртэл МУын
                барилгын салбарт үйл ажилгаагаа амжилттай явуулж байна.
              </li>
              <li>
                Бид 2014 онд компаниа өргөжүүлж “Инсталл наран констракшн” ХХК
                болгон БУА-ын 2.1.1~5, 2.2.1~4 болон БА-6.2 тус тус заалттай
                тусгай зөвшөөрөлтэйгээр үйл ажиллагаагаа явуулж байна.
              </li>
              <li>
                БУА-н чиглэлийн ИТА болон бусад ажиллах хүчний бүрэлдэхүүний
                танилцуулга:
              </li>
            </ul>
          </div>

          <div className="specialists">
            <div className="l-container">
              {specialists.map((item, index) => {
                return (
                  <div key={index} className="b-game-card">
                    <div
                      className="b-game-card__cover"
                      style={{
                        backgroundImage: `url(https://c8.alamy.com/comp/2F44ABG/asian-engineer-or-foreman-wearing-safety-vest-hard-hat-2F44ABG.jpg)`,
                      }}
                    >
                      <div className="w-full h-full relative z-1">
                        <div className="absolute leading-[13px] md:leading-[20px] w-full h-20 pure-glass !bg-gray-500 bottom-0 flex flex-col text-[12px] text-center text-white p-2">
                          <h6>
                            {item.title !== "" ? (
                              item.title
                            ) : (
                              <div className="mt-auto">?</div>
                            )}
                          </h6>
                          <p>{item.name}</p>
                          <p>{item.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OurHistory;

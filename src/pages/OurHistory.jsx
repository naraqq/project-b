import Layout from "../components/Layouts/Layout";
import { useState } from "react";
import Button from "react-bootstrap/Button";
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
  const [selected, setSelected] = useState(0);
  return (
    <Layout>
      <div className="body">
        <div className="main about-us ">
          <section className="contact" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="content">
                    <div
                      onClick={() => {
                        setSelected(0);
                      }}
                      className={`border-b border-t ${
                        selected === 0 && "!bg-gray-100"
                      } p-3 nunito-400 text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                    >
                      Компанийн танилцуулга
                    </div>
                    <div
                      onClick={() => {
                        setSelected(1);
                      }}
                      className={`border-b ${
                        selected === 1 && "!bg-gray-100"
                      } p-3 nunito-400 text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                    >
                      Бидний эрхэм зорилго
                    </div>
                    <div
                      onClick={() => {
                        setSelected(2);
                      }}
                      className={`border-b ${
                        selected === 2 && "!bg-gray-100"
                      } p-3 nunito-400 text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                    >
                      Ойрын зорилт
                    </div>
                    <div
                      onClick={() => {
                        setSelected(3);
                      }}
                      className={`border-b ${
                        selected === 3 && "!bg-gray-100"
                      } p-3 nunito-400 text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                    >
                      Захирлын мэндчилгээ
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  {selected === 0 && (
                    <div>
                      Манай компани нь анх 2009 онд байгуулагдаж өнөөг хүртэл
                      МУ-ын барилгын салбарт үйл ажилгаагаа амжилттай явуулж
                      байна. Санхүү болон нягтлан, нярав, хүний нөөцийн
                      мэргэжилтэн, талбайн менежер гэсэн албан тушаал бүхий 100
                      гаруй ажилчдаас бүрдсэн баг хамт олон ахисан түвшний
                      менежмент, зохион байгуулалттайгаар үйл ажиллагаагаа
                      явуулж байна.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default OurHistory;

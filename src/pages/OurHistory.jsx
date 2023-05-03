import Layout from "../components/Layouts/Layout";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player";

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
                        selected === 0 && "!bg-gray-100 text-red-500"
                      } p-3 nunito-400 text-[14px] text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                    >
                      Захирлын мэндчилгээ
                    </div>
                    <div
                      onClick={() => {
                        setSelected(1);
                      }}
                      className={`border-b  ${
                        selected === 1 && "!bg-gray-100 text-red-500"
                      } p-3 nunito-400 text-[14px] text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                    >
                      Компанийн танилцуулга
                    </div>
                    <div
                      onClick={() => {
                        setSelected(2);
                      }}
                      className={`border-b ${
                        selected === 2 && "!bg-gray-100 text-red-500"
                      } p-3 nunito-400 text-[14px] text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                    >
                      Бидний эрхэм зорилго
                    </div>
                    <div
                      onClick={() => {
                        setSelected(3);
                      }}
                      className={`border-b ${
                        selected === 3 && "!bg-gray-100 text-red-500"
                      } p-3 nunito-400 text-[14px] text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                    >
                      Ойрын зорилт
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  {selected === 0 && (
                    <div className="nunito-300 text-[14px] flex flex-col md:flex-row gap-4">
                      <LazyLoadImage
                        src={
                          "https://www.rappler.com/tachyon/2021/08/Jocot_DeDios.jpg"
                        }
                        width={370}
                        height={400}
                        alt="Image Alt"
                      />
                      Инсталл наран констракшн ХХК нь барилга бүтээн
                      байгуулалтын болон үл хөдлөх хөрөнгийн салбарт 2009 оноос
                      эхлэн өнөөдрийг хүртэл амжилттай ажиллаж ирсэн.
                      Байгуулагдсан цагаасаа эхлэн манай байгууллагын үйл
                      ажиллагааны цар хүрээ өргөжин тэлж өнөөдөр 3 салбар
                      компани бүхий Группийн нэгдлийг үүсгэн барилга бүтээн
                      байгуулалтын салбарт болон 2022 онд Инсталл Наран Конкрит
                      ХХК-ийг үүсгэн байгуулж, Бетон зуурмагийн үйлдвэрлэлийн
                      салбарт төрөлжсөн бүх төрлийн үйлчилгээг эрхэлж, салбартаа
                      тэргүүлэгч байгууллага болохоор зорилго тавин ажиллаж
                      байна. Мөн байгууллагынхаа өрсөлдөхүйц чанарыг бэхжүүлэх
                      үүднээс олон улсын орчин үеийн компанийн засаглал болон
                      удирдлагын тогтолцоог өөрийн соёл, онцлогт тохируулан
                      нэвтрүүлж харилцагчдынхаа 100%-ийн сэтгэл ханамж болон
                      давтан бизнесийн төлөө сэтгэл зүрх нэгдсэн хамт олон
                      хөдөлмөрлөж байна. Их бүтээн байгуулалтын зүг харилцагч та
                      бүхэнтэйгээ хамтдаа тэмүүлцгээе. <br />
                      Н.ЧУЛУУНБАЯР ЕРӨНХИЙ ЗАХИРАЛ
                    </div>
                  )}{" "}
                  {selected === 1 && (
                    <div className="nunito-300 text-[14px] my-3 min-h-[400px]">
                      <ReactPlayer
                        width={"100%"}
                        url="https://fb.watch/khvhdcoiHZ/"
                      />
                      <div className="nunito-300 text-[14px] my-3 min-h-[400px] pt-8 !mt-[-180px] md:!mt-[20px]">
                        • Манай компани нь анх 2009 онд байгуулагдаж өнөөг
                        хүртэл МУын барилгын салбарт үйл ажилгаагаа амжилттай
                        явуулж байна. <br />• Бид 2014 онд компаниа өргөжүүлж
                        “Инсталл наран констракшн” ХХК болгон БУА-ын 2.1.1~5,
                        2.2.1~4 болон БА-6.2 тус тус заалттай тусгай
                        зөвшөөрөлтэйгээр үйл ажиллагаагаа явуулж байна
                      </div>
                    </div>
                  )}
                  {selected === 2 && (
                    <div className="nunito-300 text-[14px] min-h-[400px]">
                      <h6 className="nunito-400 mb-3 mt-3">
                        Бидний эрхэм зорилго
                      </h6>
                      Бид үйл ажиллагаандаа МУ-д хүчин төгөлдөр мөрдөгдөж буй
                      БНбД болон бусад стандарт, журмуудыг баримтлан барилга
                      угсралтын салбарт шинэ дэвшилтэт технологийг нэвтрүүлэн
                      үйл ажиллагаагаа улам өргөжүүлж улс орныхоо эдийн засаг,
                      нийгмийн хөгжил бүтээн байгуулалтад үнэтэй хувь нэмэр
                      оруулах нь бидний эрхэм зорилго.
                    </div>
                  )}
                  {selected === 3 && (
                    <div className="nunito-300 text-[14px] min-h-[400px]">
                      <h6 className="nunito-400 mb-3 mt-3">Ойрын зорилт</h6>
                      Нийт ажилчдын ажиллах таатай орчинг бүрдүүлэн, ХЭМАБ болон
                      бусад мэргэжлийн ур чадвар дээшлүүлэх сургалт, дамжаанд
                      идэвхтэй хамруулж, суралцах нөхцлөөр хангаж ажиллах.
                      Цаашид үйл ажиллагаагаа улам өргөжүүлж ИТА болон бусад
                      ажлын байрны орон тоог нэмэгдүүлэх, тэдгээрийн ажиллаж
                      амьдрах таатай нөхцлийг бүрдүүлж санхүүгийн баталгаа олгох
                      гэсэн зорилтуудыг тавин ажиллаж байна.
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

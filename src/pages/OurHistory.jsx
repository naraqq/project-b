import Layout from "../components/Layouts/Layout";
import { useState } from "react";
import ReactPlayer from "react-player";

function OurHistory() {
  const [selected, setSelected] = useState(1);
  return (
    <Layout>
      <div className="body">
        <div className="main about-us">
          <section className="contact  " id="contact">
            <div className="container min-h-[calc(100vh-400px)]">
              <div className="row">
                <div className="col-md-3">
                  <div className="content">
                    <div
                      onClick={() => {
                        setSelected(1);
                      }}
                      className={`border-b  border-t  ${
                        selected === 1 && "!bg-gray-100 text-red-500"
                      } p-3 nunito-400 text-[14px] text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                    >
                      Танилцуулга
                    </div>
                    <div
                      onClick={() => {
                        setSelected(2);
                      }}
                      className={`border-b ${
                        selected === 2 && "!bg-gray-100 text-red-500"
                      } p-3 nunito-400 text-[14px] text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                    >
                      Эрхэм зорилго
                    </div>
                    <div
                      onClick={() => {
                        setSelected(0);
                      }}
                      className={`border-b ${
                        selected === 0 && "!bg-gray-100 text-red-500"
                      } p-3 nunito-400 text-[14px] text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                    >
                      Захирлын мэндчилгээ
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  {selected === 0 && (
                    <div className="nunito-300 text-[14px] flex flex-col md:flex-row gap-4">
                      <img
                        src="ceo.jpg"
                        alt=""
                        className="md:h-[500px] shadow"
                      />
                      <div>
                        <div className="nunito-300 text-[14px] mb-2 text-justify">
                          Эрхэм танд “Инсталл наран констаркшн” ХХК-ийн хамт
                          олны өмнөөс мэндчилж байна. <br />
                        </div>
                        <div className="nunito-300 text-[14px] mb-2 text-justify">
                          Бид барилга бүтээн байгуулалтын болон үл хөдлөх
                          хөрөнгийн салбарт 2009 оноос эхлэн өнөөдрийг хүртэл
                          амжилттай үйл ажиллагаагаа явуулан Монгол улсынхаа
                          хөгжил дэвшилд хувь нэмрээ оруулан ажиллаж байна.{" "}
                          <br />
                        </div>
                        <div className="nunito-300 text-[14px] mb-2 text-justify">
                          Манай байгууллагын үйл ажиллагааны цар хүрээ өргөжин
                          тэлж өнөөдөр 3 салбар компани бүхий Группийн нэгдлийг
                          үүсгэн барилга бүтээн байгуулалтын салбарт мэргэжлийн
                          ёс зүйтэй, чадварлаг инженерийн багийг бүрдүүлж чадсан
                          бөгөөд салбарын зах зээлийн өрсөлдөөнд хамтын хүчээр
                          байр сууриа улам бэхжүүлж, төлөвлөсөн зорилтуудаа
                          амжилттай хэрэгжүүлж байна.
                          <br />
                        </div>
                        <div className="nunito-300 text-[14px] mb-2 text-justify">
                          2022 онд бид үйл ажиллагаа өргөжүүлж “Инсталл Наран
                          Конкрит” ХХК-ийг үүсгэн байгуулж, Бетон зуурмаг
                          үйлдвэрлэлийн салбарт төрөлжсөн бүх төрлийн үйлчилгээг
                          эрхлэн, салбартаа тэргүүлэгч байгууллага болохоор
                          зорилго тавин ажиллаж байна.
                          <br />
                        </div>
                        <div className="nunito-300 text-[14px] mb-2 text-justify">
                          Мөн бид компанийнхаа зах зээлд өрсөлдөх чадварыг
                          бэхжүүлэх, үйл ажиллагаагаа өргөжүүлэхээр Олон улсын
                          болон Монголын топ компаниудын туршлагыг өөрийн соёл,
                          онцлогт тохируулан судалж тогтвортой хөгжлийн төлөө
                          сэтгэл зүрхээрээ нэгдэн хөдөлмөрлөж байна.
                          <br />
                        </div>
                        <div className="nunito-300 text-[14px] mb-2 text-justify">
                          Биднийг үргэлж дэмжин ажилладаг ажилтнууд,
                          харилцагчид, хамтран ажиллагч байгууллагууддаа
                          баярлалаа. Та бүхэнд ажлын өндөр амжилт, эрүүл энх
                          сайн сайхан бүхнийг хүсэн ерөөе.
                          <br />
                        </div>
                        <div className="nunito-300 text-[14px] mb-2 text-justify">
                          ХҮНДЭТГЭСЭН:
                          <br />
                        </div>
                        <div className="nunito-300 text-[14px] mb-2 text-justify">
                          “ИНСТАЛЛ НАРАН КОНСТРАКШ” ХХК-ИЙН
                          <br />
                        </div>
                        <div className="nunito-300 text-[14px] mb-2 text-justify">
                          ЕРӨНХИЙ ЗАХИРАЛ Н.ЧУЛУУНБАЯР
                          <br />
                        </div>
                      </div>
                    </div>
                  )}{" "}
                  {selected === 1 && (
                    <div className="nunito-300 text-[14px]  min-h-[400px]">
                      <img src="/new/staffs.png" alt="" />

                      <div className="nunito-300 text-[14px] mt-2 md:mt-5 mb-2 ">
                        Манай компани нь анх 2009 онд байгуулагдаж өнөөг хүртэл
                        МУын барилгын салбарт үйл ажилгаагаа амжилттай явуулж
                        байна. <br />
                      </div>
                      <div className="nunito-300 text-[14px] mt-2 md:mt-5">
                        Бид 2014 онд компаниа өргөжүүлж “Инсталл наран
                        констракшн” ХХК болгон БУА-ын 2.1.1~5, 2.2.1~4 болон
                        БА-6.2 тус тус заалттай тусгай зөвшөөрөлтэйгээр үйл
                        ажиллагаагаа явуулж байна <br />
                      </div>
                      {/* <img src="/new/staffs.png" alt="" className="my-3" /> */}
                      <img src="/new/cover.jpg" alt="" className="my-3" />

                      <div className="nunito-300 text-[14px] mb-2">
                        Мөн 2022 онд “Инсталл наран конкрит” ХХК МҮ-4.2.3 тусгай
                        зөвшөөрөлтэй бетон зуурмагийн үйлдвэрээ байгуулж чанарын
                        өндөр түвшинд, үйлчлүүлэгчийн хэрэгцээ шаардлагад
                        нийцсэн бетон зуурмагийг нийлүүлэн ажиллаж байна. <br />
                      </div>
                      <ReactPlayer
                        width={"100%"}
                        url="https://fb.watch/khvhdcoiHZ/"
                      />
                    </div>
                  )}
                  {selected === 2 && (
                    <div className="nunito-300 text-[14px] min-h-[400px]">
                      <h6 className="nunito-400 mb-3 mt-3">
                        Бидний эрхэм зорилго
                      </h6>
                      <p className="nunito-300 text-justify">
                        Бид үйл ажиллагаандаа МУ-д хүчин төгөлдөр мөрдөгдөж буй
                        БНбД болон бусад стандарт, журмуудыг баримтлан барилга
                        угсралтын салбарт шинэ дэвшилтэт технологийг нэвтрүүлэн
                        үйл ажиллагаагаа улам өргөжүүлж улс орныхоо эдийн засаг,
                        нийгмийн хөгжил бүтээн байгуулалтад үнэтэй хувь нэмэр
                        оруулах нь бидний эрхэм зорилго.
                      </p>
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

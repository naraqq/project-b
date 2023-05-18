import { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
function WhyourCompany() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <Layout>
      {loading ? (
        <div className="body">
          <div className="main min-h-[calc(100vh-60px)] pt-3 flex justify-center items-center ">
            <Spinner animation="border" role="status" variant="danger">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : (
        <div className="h-full relative bg-white">
          <div className="body-cus wrapper">
            <section id="home" className="sec-main2">
              <h1 className="main-heading nunito-500 text-[30px] md:text-[30px]">
                ТА МАНАЙД АЖИЛД ОРСНООР
                <br />
                <button
                  onClick={() => {
                    navigate("/jobs");
                  }}
                >
                  <i className="bi bi-arrow-right hover:text-[35px] transition-all"></i>
                </button>
              </h1>
            </section>
          </div>
          <div className="body">
            <div className="main">
              <ul className="cards border-b mt-5">
                <li className="cards_item !text-[14px] text-gray-500 nunito-400">
                  • Мэргэшсэн баг болон багийн ажиллагааг төлөвшүүлэх,
                  өрсөлдөхүйц цалин хөлс, хангамжуудыг цогцоор нь шийдсэн
                  хүлээлтээс давсан ханамжийг өгөх болно.
                </li>
                <li className="cards_item !text-[14px] text-gray-500 nunito-400">
                  • Нэгдмэл зорилготой эрч хүчээр дүүрэн, эвсэг залуу хамт
                  олонтой мөр зэрэгцэн ажиллана.
                </li>
                <li className="cards_item !text-[14px] text-gray-500 nunito-400">
                  • Зах зээлд өрсөлдөхүйц цалин хөлс, үр дүнд тулгуурласан
                  шагнал урамшуулал авна.
                </li>
                <li className="cards_item !text-[14px] text-gray-500 nunito-400">
                  • Ёс зүйтэй, шинэчлэгч, манлайлагч байх урам зориг, хүсэл
                  тэмүүллийг мэдэрнэ.
                </li>
                <li className="cards_item !text-[14px] text-gray-500 nunito-400">
                  • Эрч хүчтэй, бүтээлч үйл ажиллагааг хүний нөөцийн
                  бодлоготойгоо уялдуулан, ховор соёл бүхий, ажил олгогч загвар
                  байгууллага болохоор зорьж ажиллана. Манай давуу тал
                </li>
                <li className="cards_item !text-[14px] text-gray-500 nunito-400">
                  • Бид ажилтнууддаа тогтвор суурьшилтай ажиллах, хийж буй
                  ажилдаа сэтгэл хангалуун байх нөхцлийг нь бүрдүүлж өгөх
                  үүднээс таатай ажлын байр, зах зээлд өрсөлдөхүйц цалин, ажлын
                  гүйцэтгэлтэй уялдсан урамшуулал, өсөж дэвжих, өөрийгөө
                  хөгжүүлэх боломж, шаардлагатай нийгмийн халамж, дэмжлэгийг
                  үзүүлэн ажилладаг.
                </li>
              </ul>

              <div className="w-full p-3">
                <div className="w-full bg-[#F9F9F9] rounded p-3 nunito-400 text-gray-600 text-sm ">
                  <div className="nunito-400 text-gray-600 text-sm">
                    Та нээлттэй ажлын байранд тавигдах шаардлагыг хангаж байна
                    гэж үзвэл онлайн анкетаа илгээнэ үү.
                  </div>
                  <div
                    onClick={() => {
                      navigate("/jobs");
                    }}
                    className="mt-2 rounded bg-white hover:shadow text-gray-600 w-fit nunito-400 text-sm p-2 select-none cursor-pointer"
                  >
                    НЭЭЛТТЭЙ АЖЛЫН БАЙР
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default WhyourCompany;

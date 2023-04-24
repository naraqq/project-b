import Layout from "../components/Layouts/Layout";
import { useNavigate } from "react-router-dom";
function WhyourCompany() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="h-full relative bg-white">
        <div className="body-cus wrapper">
          <section id="home" className="sec-main2">
            <h1 className="main-heading nunito-500 text-[30px] md:text-[30px]">
              Нээлттэй ажлын байр
            </h1>
          </section>
        </div>
        <div className="body">
          <div className="main">
            <h1
              className=" w-full pb-2 ml-4 md:ml-4 mt-5 md:mt-10 border-gray-600 text-[20px] text-start uppercase
       nunito-400
        "
            >
              ТА МАНАЙД АЖИЛД ОРСНООР{" "}
            </h1>
            <ul className="cards">
              <li className="cards_item !text-[14px] text-gray-600 nunito-400">
                • Мэргэшсэн баг болон багийн ажиллагааг төлөвшүүлэх, өрсөлдөхүйц
                цалин хөлс, хангамжуудыг цогцоор нь шийдсэн хүлээлтээс давсан
                ханамжийг өгөх болно.
              </li>
              <li className="cards_item !text-[14px] text-gray-600 nunito-400">
                • Нэгдмэл зорилготой эрч хүчээр дүүрэн, эвсэг залуу хамт олонтой
                мөр зэрэгцэн ажиллана.
              </li>
              <li className="cards_item !text-[14px] text-gray-600 nunito-400">
                • Зах зээлд өрсөлдөхүйц цалин хөлс, үр дүнд тулгуурласан шагнал
                урамшуулал авна.
              </li>
              <li className="cards_item !text-[14px] text-gray-600 nunito-400">
                • Ёс зүйтэй, шинэчлэгч, манлайлагч байх урам зориг, хүсэл
                тэмүүллийг мэдэрнэ.
              </li>
              <li className="cards_item !text-[14px] text-gray-600 nunito-400">
                • Эрч хүчтэй, бүтээлч үйл ажиллагааг хүний нөөцийн бодлоготойгоо
                уялдуулан, ховор соёл бүхий, ажил олгогч загвар байгууллага
                болохоор зорьж ажиллана. Манай давуу тал
              </li>
              <li className="cards_item !text-[14px] text-gray-600 nunito-400">
                • Бид ажилтнууддаа тогтвор суурьшилтай ажиллах, хийж буй ажилдаа
                сэтгэл хангалуун байх нөхцлийг нь бүрдүүлж өгөх үүднээс таатай
                ажлын байр, зах зээлд өрсөлдөхүйц цалин, ажлын гүйцэтгэлтэй
                уялдсан урамшуулал, өсөж дэвжих, өөрийгөө хөгжүүлэх боломж,
                шаардлагатай нийгмийн халамж, дэмжлэгийг үзүүлэн ажилладаг.
              </li>
            </ul>
            <h6
              className=" w-full pb-2 ml-4 md:ml-4 mt-2 md:mt-10  text-[14px] text-start uppercase
        font-[400] nunito-400
        "
            >
              {" "}
              ТА ТОМООХОН ТӨСӨЛД ОРОЛЦОЖ ТУРШЛАГА ХУРИМТЛУУЛАН, ЖИНХЭНЭ ӨВ
              БҮТЭЭХИЙГ ЧИН СЭТГЭЛЭЭСЭЭ ХҮСЧ байгаа бол бидэнтэй нэгдэхийг урьж
              байна.
            </h6>
            <div className="bg-gray-100 px-3 py-4 rounded mt-5 mb-4">
              <p className="nunito-400 text-[15px] text-gray-600">
                Та нээлттэй ажлын байранд тавигдах шаардлагыг хангаж байна гэж
                үзвэл онлайн анкетаа илгээнэ үү.
              </p>
              <button
                onClick={() => {
                  navigate("/CV");
                }}
                className="px-3 py-2 text-[14px] text-gray-600 nunito-400 hover:!bg-gray-50 rounded mt-2 active:bg-gray-100 bg-white"
              >
                Анкет илгээх
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WhyourCompany;

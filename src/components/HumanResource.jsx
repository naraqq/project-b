import { useNavigate } from "react-router-dom";

function HumanResource() {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="cards border-b">
        <li className="cards_item !text-[14px] text-gray-500 text-justify nunito-400">
          • Мэргэшсэн баг болон багийн ажиллагааг төлөвшүүлэх, өрсөлдөхүйц цалин
          хөлс, хангамжуудыг цогцоор нь шийдсэн хүлээлтээс давсан ханамжийг өгөх
          болно.
        </li>
        <li className="cards_item !text-[14px] text-gray-500 text-justify nunito-400">
          • Нэгдмэл зорилготой эрч хүчээр дүүрэн, эвсэг залуу хамт олонтой мөр
          зэрэгцэн ажиллана.
        </li>
        <li className="cards_item !text-[14px] text-gray-500 text-justify nunito-400">
          • Зах зээлд өрсөлдөхүйц цалин хөлс, үр дүнд тулгуурласан шагнал
          урамшуулал авна.
        </li>
        <li className="cards_item !text-[14px] text-gray-500 text-justify nunito-400">
          • Ёс зүйтэй, шинэчлэгч, манлайлагч байх урам зориг, хүсэл тэмүүллийг
          мэдэрнэ.
        </li>
        <li className="cards_item !text-[14px] text-gray-500 text-justify nunito-400">
          • Эрч хүчтэй, бүтээлч үйл ажиллагааг хүний нөөцийн бодлоготойгоо
          уялдуулан, ховор соёл бүхий, ажил олгогч загвар байгууллага болохоор
          зорьж ажиллана. Манай давуу тал
        </li>
        <li className="cards_item !text-[14px] text-gray-500 text-justify nunito-400">
          • Бид ажилтнууддаа тогтвор суурьшилтай ажиллах, хийж буй ажилдаа
          сэтгэл хангалуун байх нөхцлийг нь бүрдүүлж өгөх үүднээс таатай ажлын
          байр, зах зээлд өрсөлдөхүйц цалин, ажлын гүйцэтгэлтэй уялдсан
          урамшуулал, өсөж дэвжих, өөрийгөө хөгжүүлэх боломж, шаардлагатай
          нийгмийн халамж, дэмжлэгийг үзүүлэн ажилладаг.
        </li>
      </ul>

      <div className="w-full p-3">
        <div className="w-full bg-[#F9F9F9] rounded p-3 nunito-400 text-gray-600 text-sm ">
          <div className="nunito-400 text-gray-600 text-sm"></div>
          <div
            onClick={() => {
              navigate("/jobs");
            }}
            className="mt-2 rounded bg-white uppercase hover:shadow text-gray-600 w-fit nunito-400 text-sm p-2 select-none cursor-pointer"
          >
            нээлттэй ажлын байр
          </div>
        </div>
      </div>
      <div className="w-full p-3">
        <div className="w-full bg-[#F9F9F9] rounded p-3 nunito-400 text-gray-600 text-sm ">
          <div className="nunito-400 text-gray-600 text-sm">
            Та нээлттэй ажлын байранд тавигдах шаардлагыг хангаж байна гэж үзвэл
            онлайн анкетаа илгээнэ үү.
          </div>
          <div
            onClick={() => {
              navigate("/cv-detail");
            }}
            className="mt-2 rounded bg-white uppercase hover:shadow text-gray-600 w-fit nunito-400 text-sm p-2 select-none cursor-pointer"
          >
            Анкет бөглөх
          </div>
        </div>
      </div>
    </div>
  );
}

export default HumanResource;

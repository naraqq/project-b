import Layout from "../components/Layouts/Layout";

function CEOWords() {
  return (
    <Layout>
      <div className="body">
        <div className="main">
          <div className="w-full min-h-[calc(100vh-388px)] flex flex-col md:flex-row px-2 md:!px-20 mt-5">
            <div className="w-full md:w-1/4">
              <img
                className="shadow border"
                src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                alt=""
              />
              <p className="nunito-600 text-[13px] mt-4">
                Н.ЧУЛУУНБАЯР ЕРӨНХИЙ ЗАХИРАЛ
              </p>
            </div>
            <div className="w-full md:w-5/6 px-0 md:!px-10">
              {" "}
              <p className="nunito-400 text-[13px] mt-4">Сайн байцгаана уу?</p>
              <p className="nunito-400 text-[13px] mt-4">
                ИНСТАЛЛ НАРАН КОНСТРАКШН ХХК ийн албан ёсны цахим хуудсанд та
                бүхэн тавтай морилно уу.
              </p>
              <p className="nunito-400 text-[13px] mt-4">
                Инсталл наран констракшн ХХК нь барилга бүтээн байгуулалтын
                болон үл хөдлөх хөрөнгийн салбарт 2009 оноос эхлэн өнөөдрийг
                хүртэл амжилттай ажиллаж ирсэн.{" "}
              </p>
              <p className="nunito-400 text-[13px] mt-4">
                Байгуулагдсан цагаасаа эхлэн манай байгууллагын үйл ажиллагааны
                цар хүрээ өргөжин тэлж өнөөдөр 3 салбар компани бүхий Группийн
                нэгдлийг үүсгэн барилга бүтээн байгуулалтын салбарт болон 2022
                онд Инсталл Наран Конкрит ХХК-ийг үүсгэн байгуулж, Бетон
                зуурмагийн үйлдвэрлэлийн салбарт төрөлжсөн бүх төрлийн
                үйлчилгээг эрхэлж, салбартаа тэргүүлэгч байгууллага болохоор
                зорилго тавин ажиллаж байна.{" "}
              </p>
              <p className="nunito-400 text-[13px] mt-4">
                Мөн байгууллагынхаа өрсөлдөхүйц чанарыг бэхжүүлэх үүднээс олон
                улсын орчин үеийн компанийн засаглал болон удирдлагын тогтолцоог
                өөрийн соёл, онцлогт тохируулан нэвтрүүлж харилцагчдынхаа
                100%-ийн сэтгэл ханамж болон давтан бизнесийн төлөө сэтгэл зүрх
                нэгдсэн хамт олон хөдөлмөрлөж байна.
              </p>
              <p className="nunito-400 text-[13px] mt-4">
                Их бүтээн байгуулалтын зүг харилцагч та бүхэнтэйгээ хамтдаа
                тэмүүлцгээе.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CEOWords;

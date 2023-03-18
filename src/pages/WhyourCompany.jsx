import Layout from "../components/Layouts/Layout";

function WhyourCompany() {
  return (
    <Layout>
      <div className="h-full relative bg-white">
        <div className="body">
          <div className="main">
            <div className="w-full flex justify-center mb-10">
              <img
                src="https://cdn-res.keymedia.com/cms/images/ca/126/0399_637873576761775202.jpg"
                alt="Ажил"
                className=" h-[500px]"
              />
            </div>
            <h1
              className=" w-full pb-2 ml-0 md:ml-4 border-b-[2px] mt-2 md:mt-10 border-gray-600 text-[20px] text-start uppercase
        font-[400]
        "
            >
              {" "}
              Манай компанийн ажилтанд санал болгох үнэ цэн:
            </h1>
            <ul className="cards">
              <li className="cards_item !text-[13px]">
                • Байгууллагын эрүүл зөв соёл, ажлын таатай орчин нөхцөл
              </li>
              <li className="cards_item !text-[13px]">
                • Эрч хүчтэй, чадварлаг хамт олонтой нэг баг болон хамтран
                ажиллах боломж
              </li>
              <li className="cards_item !text-[13px]">
                • Тасралтгүй суралцах, ихийг хийж бүтээх хүсэл тэмүүллийг ямагт
                дэмждэг орчин
              </li>
              <li className="cards_item !text-[13px]">
                • Үр дүнд тулгуурласан өрсөлдөхүйц цалин, урамшуулал, ахиж
                дэвших ижил тэгш боломж
              </li>
              <li className="cards_item !text-[13px]">
                • Бизнесийн олон чиглэлд хөрвөн өөрийн мэдлэг чадвараа хөгжүүлэх
                боломж
              </li>
            </ul>

            <button className="px-3 py-2 border">CV илгээх</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WhyourCompany;

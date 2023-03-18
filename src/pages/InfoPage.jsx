import Layout from "../components/Layouts/Layout";

function InfoPage() {
  return (
    <Layout>
      <div className="body">
        <div className="main">
          <h1
            className=" w-[200px] pb-2 ml-4 md:ml-4 border-b-[2px] mt-2 md:mt-10 border-gray-600 text-[20px] text-start uppercase
        font-[400]
        "
          >
            {" "}
            Мэдээ мэдээлэл
          </h1>
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img
                    alt="img"
                    src="https://picsum.photos/500/300/?image=10"
                  />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Мэдээ мэдээлэл</h2>
                  <p className="card_text">
                    Барилгын салбар дахь 2023 оны дижитал шилжилт · BIM бол
                    ирээдүй гэдгийг ойлгосон учраас 100 хувь нэвтрүүлсэн.
                  </p>
                  <button className="btn card_btn">Илүү унших</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img alt="img" src="https://picsum.photos/500/300/?image=5" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Мэдээ мэдээлэл</h2>
                  <p className="card_text">
                    Барилгын салбар дахь 2023 оны дижитал шилжилт · BIM бол
                    ирээдүй гэдгийг ойлгосон учраас 100 хувь нэвтрүүлсэн.
                  </p>
                  <button className="btn card_btn">Илүү унших</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img
                    alt="img"
                    src="https://picsum.photos/500/300/?image=11"
                  />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Мэдээ мэдээлэл</h2>
                  <p className="card_text">
                    Барилгын салбар дахь 2023 оны дижитал шилжилт · BIM бол
                    ирээдүй гэдгийг ойлгосон учраас 100 хувь нэвтрүүлсэн.
                  </p>
                  <button className="btn card_btn">Илүү унших</button>
                </div>
              </div>
            </li>
            <li className=" cards_item">
              <div className="card">
                <div className="card_image">
                  <img
                    alt="img"
                    src="https://picsum.photos/500/300/?image=14"
                  />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Мэдээ мэдээлэл</h2>
                  <p className="card_text">
                    Барилгын салбар дахь 2023 оны дижитал шилжилт · BIM бол
                    ирээдүй гэдгийг ойлгосон учраас 100 хувь нэвтрүүлсэн.
                  </p>
                  <button className="btn card_btn">Илүү унших</button>
                </div>
              </div>
            </li>
            <li className=" cards_item">
              <div className="card">
                <div className="card_image">
                  <img
                    alt="img"
                    src="https://picsum.photos/500/300/?image=17"
                  />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Мэдээ мэдээлэл</h2>
                  <p className="card_text">
                    Барилгын салбар дахь 2023 оны дижитал шилжилт · BIM бол
                    ирээдүй гэдгийг ойлгосон учраас 100 хувь нэвтрүүлсэн.
                  </p>
                  <button className="btn card_btn">Илүү унших</button>
                </div>
              </div>
            </li>
            <li className=" cards_item">
              <div className="card">
                <div className="card_image">
                  <img alt="img" src="https://picsum.photos/500/300/?image=2" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Мэдээ мэдээлэл</h2>
                  <p className="card_text">
                    Барилгын салбар дахь 2023 оны дижитал шилжилт · BIM бол
                    ирээдүй гэдгийг ойлгосон учраас 100 хувь нэвтрүүлсэн.
                  </p>
                  <button className="btn card_btn">Илүү унших</button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* <h3 className="made_by">Made with ♡</h3> */}
      </div>
    </Layout>
  );
}

export default InfoPage;

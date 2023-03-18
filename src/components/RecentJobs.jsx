function RecentJobs() {
  return (
    <div className="body">
      <div className="main">
        <h1
          className=" w-[340px] pb-2 ml-0 md:ml-4 border-b-[2px] mt-2 md:mt-10 border-gray-600 text-[20px] text-start uppercase
      font-[400]
      "
        >
          {" "}
          Бидний гүйцэтгэсэн ажилуудаас
        </h1>
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src="job1.jpg" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Хийсэн ажил</h2>
                <p className="card_text">
                  Барилгын салбар дахь 2023 оны дижитал шилжилт · BIM бол
                  ирээдүй гэдгийг ойлгосон учраас 100 хувь нэвтрүүлсэн.
                </p>
                <button className="btn card_btn">Дэлгэнгүй</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src="job1.jpg" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Хийсэн ажил</h2>
                <p className="card_text">
                  Барилгын салбар дахь 2023 оны дижитал шилжилт · BIM бол
                  ирээдүй гэдгийг ойлгосон учраас 100 хувь нэвтрүүлсэн.
                </p>
                <button className="btn card_btn">Дэлгэнгүй</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src="job1.jpg" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Хийсэн ажил</h2>
                <p className="card_text">
                  Барилгын салбар дахь 2023 оны дижитал шилжилт · BIM бол
                  ирээдүй гэдгийг ойлгосон учраас 100 хувь нэвтрүүлсэн.
                </p>
                <button className="btn card_btn">Дэлгэнгүй</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* <h3 className="made_by">Made with ♡</h3> */}
    </div>
  );
}

export default RecentJobs;

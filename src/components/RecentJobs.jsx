import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function RecentJobs() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="body">
      <div className="main">
        <h1
          className=" w-[340px] pb-2 ml-4 md:ml-4 border-b-[2px] mt-2 md:mt-10 border-gray-600 text-[20px] text-start uppercase
      font-[400]
      "
        >
          {" "}
          Бидний гүйцэтгэсэн ажлуудаас
        </h1>
        <RecentDetail show={modalShow} onHide={() => setModalShow(false)} />
        <ul className="cards">
          <li
            onClick={() => {
              setModalShow(true);
            }}
            className="cards_item"
          >
            <div className="card">
              <div className="card_image">
                <img src="job1.jpg" alt="img" />
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
          <li
            onClick={() => {
              setModalShow(true);
            }}
            className="cards_item"
          >
            <div className="card">
              <div className="card_image">
                <img src="job1.jpg" alt="img" />
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

function RecentDetail(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props?.item?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="w-full flex justify-center">
          <img className="max-h-[300px]" src="job1.jpg" alt="img" />
        </div>
        <p className="mt-2 text-[13px] text-center">
          {" "}
          Барилгын салбар дахь 2023 оны дижитал шилжилт · BIM бол ирээдүй
          гэдгийг ойлгосон учраас 100 хувь нэвтрүүлсэн.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={props.onHide}
          className="rounded border px-3 py-2 hover:bg-gray-100 active:bg-gray-200"
        >
          Хаах
        </button>
      </Modal.Footer>
    </Modal>
  );
}

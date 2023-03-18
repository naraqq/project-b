import Modal from "react-bootstrap/Modal";
import { useState } from "react";
function Info() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="body">
      <div className="main">
        <h1
          className=" w-[200px] pb-2 ml-0 md:ml-4 border-b-[2px] mt-2 md:mt-10 border-gray-600 text-[20px] text-start uppercase
        font-[400]
        "
        >
          {" "}
          Онцлох мэдээ
        </h1>
        <InfoDetail show={modalShow} onHide={() => setModalShow(false)} />
        <ul className="cards">
          <li
            onClick={() => {
              setModalShow(true);
            }}
            className="cards_item"
          >
            <div className="card">
              <div className="card_image">
                <img src="https://picsum.photos/500/300/?image=10" alt="img" />
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
          <li
            onClick={() => {
              setModalShow(true);
            }}
            className="cards_item"
          >
            <div className="card">
              <div className="card_image">
                <img src="https://picsum.photos/500/300/?image=5" alt="img" />
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
          <li
            onClick={() => {
              setModalShow(true);
            }}
            className="!hidden cards_item"
          >
            <div className="card">
              <div className="card_image">
                <img src="https://picsum.photos/500/300/?image=11" alt="img" />
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
          <li className="!hidden cards_item">
            <div className="card">
              <div className="card_image">
                <img src="https://picsum.photos/500/300/?image=14" alt="img" />
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
          <li className="!hidden cards_item">
            <div className="card">
              <div className="card_image">
                <img src="https://picsum.photos/500/300/?image=17" alt="img" />
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
          <li className="!hidden cards_item">
            <div className="card">
              <div className="card_image">
                <img src="https://picsum.photos/500/300/?image=2" alt="img" />
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
  );
}

export default Info;

function InfoDetail(props) {
  // console.log(props);

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
          <img
            className="max-h-[300px]"
            src="https://picsum.photos/500/300/?image=1"
            alt="img"
          />
        </div>
        <p className="mt-2 text-[13px] text-center">
          {" "}
          Барилгын салбарын технологийн нэг гол дэвшил нь "BIM" буюу салбарын
          мэдээллийн нэгдсэн сантай болох явдал билээ. Тодруулбал зураг төсөл
          боловсруулагчид, барилга угсралтынхан, барилгын материал
          үйлдвэрлэгчид, ханган нийлүүлэгчид, төсөвчид, гүйцэтгэгч нар, тусгай
          зөвшөөрөл олгогч ТББ-ууд гээд салбарын бүх талын оролцогчдыг нэгтгэсэн
          цахим бааз буюу дотоод сүлжээ байгуулж, бүгд дундаа ашиглахыг ВIM
          систем гэнэ. “BIM” нэвтрүүлснээр барилгын салбар бүрэн цахимжиж,
          төсөвт өртөг, байгаль орчин, эрчим хүчний үр ашиг зэргийг харгалзан
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

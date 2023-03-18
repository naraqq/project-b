import Layout from "../components/Layouts/Layout";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function OpenJobs() {
  const jobs = [
    {
      title: "Маркетингийн хэлтсийн менежер",
      img_url:
        "https://d3o1wlpkmt4nt9.cloudfront.net/wp-content/uploads/2018/02/01150023/startup-hiring-1-min.jpg",
    },
    {
      title: "ХАБЭА-н ажилтан",
      img_url:
        "https://d3o1wlpkmt4nt9.cloudfront.net/wp-content/uploads/2018/02/01150023/startup-hiring-1-min.jpg",
    },
    {
      title: "Засварийн зөвлөх",
      img_url:
        "https://d3o1wlpkmt4nt9.cloudfront.net/wp-content/uploads/2018/02/01150023/startup-hiring-1-min.jpg",
    },
    {
      title: "Маркетингийн хэлтсийн менежер",
      img_url:
        "https://d3o1wlpkmt4nt9.cloudfront.net/wp-content/uploads/2018/02/01150023/startup-hiring-1-min.jpg",
    },
    {
      title: "ХАБЭА-н ажилтан",
      img_url:
        "https://d3o1wlpkmt4nt9.cloudfront.net/wp-content/uploads/2018/02/01150023/startup-hiring-1-min.jpg",
    },
    {
      title: "Засварийн зөвлөх",
      img_url:
        "https://d3o1wlpkmt4nt9.cloudfront.net/wp-content/uploads/2018/02/01150023/startup-hiring-1-min.jpg",
    },
  ];
  const [modalShow, setModalShow] = useState(false);
  const [chosen, setChosen] = useState();
  return (
    <Layout>
      <div className="body">
        <div className="main">
          <h1
            className=" w-[250px] pb-2 ml-4 md:ml-4 border-b-[2px] mt-2 md:mt-10 border-gray-600 text-[20px] text-start uppercase
        font-[400]
        "
          >
            {" "}
            Нээлттэй ажлын байр
          </h1>
          <div className="w-full min-h-[calc(100vh-400px)] p-2 flex flex-col justify-center items-center md:grid grid-cols-3">
            {jobs.map((item, index) => {
              return (
                <Card
                  key={index}
                  style={{
                    width: "18rem",
                    marginBottom: "20px",
                    border: "none",
                  }}
                >
                  <Card.Img variant="top" src={`${item.img_url}`} alt="img" />
                  <Card.Body className="h-[200px]">
                    <div className="flex flex-col w-full justify-between items-end h-full">
                      <div>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text style={{ fontSize: "12px" }}>
                          Борлуулалт, үйлчлүүлэгчийн харилцааны чиглэлээр 2-оос
                          доошгүй жил ажилласан туршлагатай
                        </Card.Text>
                      </div>
                      <button
                        onClick={() => {
                          setModalShow(true);
                          setChosen(item);
                        }}
                        className="rounded border px-3 py-2 hover:bg-gray-100 active:bg-gray-200"
                      >
                        Дэлгэнгүй
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
            <JobDetail
              item={chosen}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OpenJobs;

function JobDetail(props) {
  // console.log(props);
  const navigate = useNavigate();
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
            src={`${props?.item?.img_url}`}
            alt="img"
          />
        </div>
        <p className="mt-2 text-[13px] text-center">
          {" "}
          Борлуулалт, үйлчлүүлэгчийн харилцааны чиглэлээр 2-оос доошгүй жил
          ажилласан туршлагатай борлуулалт, үйлчлүүлэгчийн харилцааны чиглэлээр
          2-оос доошгүй жил ажилласан туршлагатай
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={() => {
            navigate("/CV");
          }}
          className="rounded border px-3 py-2 hover:bg-gray-100 active:bg-gray-200"
        >
          CV илгээх
        </button>
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

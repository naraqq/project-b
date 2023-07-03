import Layout from "../components/Layouts/Layout";
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CV() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(0);
  const meta_data = {
    lastname: lastname,
    firstname: firstname,
    email: email,
    selectedCompany: selectedCompany,
    requestJobId: location.state.jobId,
  };
  const checkValidation = () => {
    if (
      lastname == "" ||
      firstname == "" ||
      email == "" ||
      selectedCompany == 0
    ) {
      return false;
    } else return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (checkValidation() == false) {
      toast.error("Талбарын мэдээлэлийг бүрэн бөглөнө үү.", {
        position: "top-right",
      });
    } else {
      navigate("/cv-detail", {
        state: meta_data,
      });
    }
  };
  return (
    <Layout>
      <ToastContainer />
      <div className="body bg-white">
        <div className="main about-us ">
          {" "}
          <section className="contact" id="contact">
            <div className="container">
              <div className="heading text-center">
                <p>
                  Юуны өмнө манай компанийг сонгож ажил горилогчоор өөрийн
                  анкетаа илгээж байгаад талархлаа илэрхийлье.
                  <br />
                  Анкетаа илгээхээс өмнө та доорхи зүйлсийг анхаарч уншина уу:
                </p>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="content">
                    <div className="info  !mt-[-20px]">
                      <h4 className="d-inline-block">
                        <br />
                        <span>
                          • Ажилд горилогчийн анкетыг үнэн зөв, үг үсэг
                          товчлохгүйгээр бүрэн гүйцэт бөглөнө үү.
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div className="content">
                    <div className="info">
                      <h4 className="d-inline-block">
                        <br />
                        <span>
                          • Хэрвээ та нээлттэй ажлын байранд тавигдах аль нэг
                          шаардлагыг хангаагүй тохиолдолд эргэж холбогдохгүй
                          байх өндөр магадлалтай. Тиймээс тавигдах шаардлагыг
                          сайтар уншиж өөрийн тохирох ажлын байранд хүсэлтээ
                          илгээнэ үү.
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div className="content">
                    <div className="info">
                      <h4 className="d-inline-block">
                        <br />
                        <span>
                          • Зөвхөн шаардлага хангасан ажил горилогчидтой эргэж
                          холбогдохыг анхаарна уу.
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div className="content">
                    <div className="info">
                      <h4 className="d-inline-block">
                        <br />
                        <span>
                          • Байгууллага таны танилцуулгыг хүлээн авсанаар ажилд
                          авах ямар нэгэн хариуцлага хүлээхгүй болохыг анхаарна
                          уу.
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-md-7">
                  <form className="mt-4 md:!mt-0">
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          onChange={(e) => {
                            setLastname(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          placeholder="Овог"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          onChange={(e) => {
                            setFirstname(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          placeholder="Нэр"
                        />
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            type="email"
                            className="form-control"
                            placeholder="Цахим шуудан"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <select
                          onChange={(e) => {
                            setSelectedCompany(e.target.value);
                          }}
                          value={selectedCompany}
                          className="form-control"
                          placeholder="Гарчиг"
                        >
                          <option className="!p-2" value="">
                            СОНГОХ
                          </option>
                          <option className="!p-2" value="1">
                            ИНСТАЛЛ НАРАН КОНСТРАКШН ХХК
                          </option>
                          <option className="!p-2" value="2">
                            ИНСТАЛЛ НАРАН КОНКРИТ ХХК
                          </option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                      className="btn btn-block nunito-500"
                      type="submit"
                    >
                      Үргэлжлүүлэх
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default CV;

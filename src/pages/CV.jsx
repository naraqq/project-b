import Layout from "../components/Layouts/Layout";
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CV() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const response = await fetch("/submit-cv", {
          method: "POST",
          body: new FormData(form),
        });
        const data = await response.json();
        if (data.success) {
          // Success message
        } else {
          setError(data.error);
        }
      } catch (error) {
        setError("An error occurred");
      }
    }
    setValidated(true);
  };
  return (
    <Layout>
      <div className="body bg-white">
        <div className="main about-us ">
          {" "}
          <section className="contact" id="contact">
            <div className="container">
              <div className="heading text-center">
                {/* <h2>
                  Ажил горилогчдын
                  <span> анхаарах зүйлс </span>
                </h2> */}
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
                          type="text"
                          className="form-control"
                          placeholder="Овог"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Нэр"
                        />
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="И-мейл хаяг"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <select className="form-control" placeholder="Гарчиг">
                          <option className="!p-2" value="">
                            СОНГОХ
                          </option>
                          <option className="!p-2" value="">
                            ИНСТАЛЛ НАРАН КОНСТРАКШН ХХК
                          </option>
                          <option className="!p-2" value="">
                            ИНСТАЛЛ НАРАН КОНКРИТ ХХК
                          </option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        navigate("/cv-detail");
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

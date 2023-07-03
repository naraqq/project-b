import Layout from "../components/Layouts/Layout";

function KeepInTouch() {
  return (
    <Layout>
      <div className="body">
        <div className="main about-us ">
          <section className="contact" id="contact">
            <div className="container">
              <div className="heading text-center">
                {/* <h2>
                  Холбоо
                  <span> барих </span>
                </h2> */}
                <p>
                  Бидэнтэй холбоотой санал хүсэлт илгээх болон компанийн тухай
                  дэлгэрэнгүй мэдээлэл авах бол
                  <br />
                  доорх сувгуудыг санал болгож байна.
                </p>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="content">
                    <div className="info">
                      <i className="bi bi-phone"></i>
                      <h4 className="d-inline-block">
                        УТАС :
                        <br />
                        <span>+976 77779292</span>
                      </h4>
                    </div>
                    <div className="info">
                      <i className="bi bi-envelope"></i>
                      <h4 className="d-inline-block">
                        EMAIL :
                        <br />
                        <span>install.naran@gmail.com </span>
                      </h4>
                    </div>
                    <div className="info flex">
                      <i className="bi bi-map"></i>
                      <h4 className="d-inline-block ml-2">
                        ХАЯГ :<br />
                        <span>
                          ХУ дүүрэг 4 дүгээр хороо Наадамчдын гудамж Сумо тауэр
                          7 давхар
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
                          placeholder="Нэр"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="И-мейл хаяг"
                        />
                      </div>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Гарчиг"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="comment"
                        placeholder="Сэтгэгдэл"
                      ></textarea>
                    </div>
                    <button className="btn btn-block" type="submit">
                      Илгээх
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

export default KeepInTouch;

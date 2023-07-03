function Footer() {
  return (
    <div className="footer ">
      <footer className="site-footer !bg-[#F4271C]">
        <div className="container w-11/12 md:w-9/12 flex justify-center">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6 className="nunito-300">Бидний тухай</h6>
              <p className="text-justify nunito-300 text-white">
                Манай компани нь анх 2009 онд байгуулагдаж өнөөг хүртэл МУын
                барилгын салбарт үйл ажилгаагаа амжилттай явуулж байгаа билээ.
                Бид иргэний барилга байгууламж болон дэд бүтцийн төслийн
                хэрэгцээ, шаардлагад нийцсэн бетон зуурмагийн үйлдвэрлэл,
                нийлүүлэлтийн цогц үйлчилгээг санал болгон ажиллаж байна
              </p>
            </div>

            <div className="col-xs-6 col-md-3 ">
              <h6 className="nunito-300">Хаяг</h6>
              <ul className="footer-links">
                <li>
                  <span className="nunito-300 text-white">
                    Улаанбаатар, Монгол
                  </span>
                </li>
                <li>
                  <span className="nunito-300 text-white">
                    Хан-Уул дүүрэг 4 дүгээр хороо
                  </span>
                </li>
                <li>
                  <span className="nunito-300 text-white">
                    Наадамчдын гудамж
                  </span>
                </li>
                <li>
                  <span className="nunito-300 text-white">
                    {" "}
                    Сумо тауэр 7 давхар
                  </span>
                </li>
                <li>
                  <a
                    className="text-white hover:!text-gray-100 nunito-300"
                    href="https://www.google.com/maps/dir/?api=1&destination=47.89096%2C106.86967&fbclid=IwAR16HoebO8RJKEURvtCpnglCLic33WQ1PupfKtPVb2jpQikGw9Vl2GZTXD4"
                  >
                    <i className="bi bi-map-fill text-md mr-2"></i>Газрын зураг
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3 ">
              <h6 className="nunito-300">Холбоо барих</h6>
              <ul className="footer-links">
                <li>
                  <a className="hover:!text-white nunito-300 text-white">
                    Утас: 7779292
                  </a>
                </li>
                <li>
                  <a className="hover:!text-white nunito-300 text-white">
                    Факс: 77779292
                  </a>
                </li>
                <li>
                  <a className="hover:!text-white nunito-300 text-white">
                    Цахим шуудан : install.naran@gmail.com,
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container w-11/12 md:w-9/12">
          <div className="row pt-3 ">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text nunito-300 text-white">
                © 2023 ИНСТАЛЛ НАРАН КОНСТРАКШН ХХК
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/INC.2022.LLC"
                    target="blank"
                    className="facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

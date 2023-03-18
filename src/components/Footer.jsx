function Footer() {
  return (
    <div className="footer">
      {" "}
      <footer className="site-footer">
        <div className="container w-11/12 md:w-9/12 flex justify-center">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>Бидний тухай</h6>
              <p className="text-justify">
                Эрчим хүчний зөвлөгөө өгөх чиглэлээр 1993 онд үүсгэн
                байгуулагдсан X_X_X компани шилжилтийн он жилүүдэд олон салбарт
                бизнесийн үйл ажиллагаа эрхлэн, улсын нийгэм, эдийн засгийн
                хөгжилд хувь нэмрээ оруулсаар ирсэн бөгөөд өдгөө татвар шимтгэл,
                хөрөнгө оруулалт, ажлын байр зэрэг үзүүлэлтээр тэргүүлэгч
                үндэсний томоохон Групп болоод байна.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Хаяг</h6>
              <ul className="footer-links">
                <li>
                  <span className="">Улаанбаатар, Монгол</span>
                </li>
                <li>
                  <span className="">Сүхбаатар дүүрэг, 1-р хороо</span>
                </li>
                <li>
                  <span className="">Central Park оффис, 4 давхар</span>
                </li>
                <li>
                  <a
                    className="!text-gray-400 hover:!text-white"
                    href="https://www.google.com/maps/place/Central+Park+Tower/@47.913548,106.9132874,17z/data=!3m1!4b1!4m5!3m4!1s0x5d9693e1351db867:0x5156d46e7ec45634!8m2!3d47.9135444!4d106.9154761?shorturl=1"
                  >
                    <i className="bi bi-map-fill text-md mr-2"></i>Газрын зураг
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3 ">
              <h6>Холбоо барих</h6>
              <ul className="footer-links">
                <li>
                  <button className="hover:!text-white">
                    info@example.com
                  </button>
                </li>
                <li>
                  <button className="hover:!text-white">+976 9911 XXXX</button>
                </li>
                <li>
                  <button className="hover:!text-white">+976 7011 XXXX</button>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container w-11/12 md:w-9/12">
          <div className="row pt-3 ">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">© 2023 X-X-X Холдинг ХХК</p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <button className="facebook">
                    <i className="bi bi-facebook"></i>
                  </button>
                </li>
                <li>
                  <button className="twitter">
                    <i className="bi bi-twitter"></i>
                  </button>
                </li>
                <li>
                  <button className="dribbble">
                    <i className="bi bi-instagram"></i>
                  </button>
                </li>
                <li>
                  <button className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </button>
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

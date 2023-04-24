import OurPartners from "./OurPartners";

function WelcomeContent() {
  return (
    <div>
      <div className="body-cus wrapper">
        <section id="home" className="sec-main">
          <h1 className="main-heading  nunito-500 text-[20px] md:text-[30px]">
            ИНСТАЛЛ НАРАН КОНСТРАКШН ХХК
          </h1>
        </section>

        <section
          id="about"
          className="sec-about px-1 !py-[70px] md:!py-[90px] md:p-5"
        >
          <div className="container">
            {/* <h1 className="mb-5 nunito-500 uppercase ">
              ИНСТАЛЛ НАРАН КОНСТРАКШН ХХК
            </h1> */}
            <div className="row flex items-center justify-center">
              <div className=" w-full md:w-2/3">
                {/* <h6 className="nunito-300">Бидний эрхэм зорилго</h6> */}
                <p className="text-justify nunito-300 text-center">
                  Монгол улсад хүчин төгөлдөр мөрдөгдөж буй БНБД болон бусад
                  стандарт, журмуудыг баримтлан барилга угсралтын салбарт шинэ
                  дэвшилтэт технологийг нэвтрүүлэн үйл ажиллагаагаа улам
                  өргөжүүлж улс орныхоо эдийн засаг, нийгмийн хөгжил бүтээн
                  байгуулалтад үнэтэй хувь нэмэр оруулах нь бидний эрхэм
                  зорилго.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="sec-services px-1 !py-[70px] md:!py-[60px] md:p-5"
        >
          <div className="container">
            {/* <h1 className=" nunito-600 uppercase ">
              ИНСТАЛЛ НАРАН КОНКРИТ ХХК
            </h1> */}
            <div className="w-full flex justify-center">
              <div className="w-full md:w-10/12">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full flex flex-col justify-start items-center">
                    <img
                      className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] mr-1"
                      src="logo.svg"
                    />

                    <h2 className="h3 nunito-200">
                      {" "}
                      ИНСТАЛЛ НАРАН КОНСТРАКШН ХХК
                    </h2>

                    <p className="text-[16px] text-center nunito-400">
                      Манай компани нь анх 2009 онд байгуулагдаж өнөөг хүртэл
                      МУын барилгын салбарт үйл ажилгаагаа амжилттай явуулж
                      байгаа билээ.
                    </p>
                    <p className="text-[16px] text-center nunito-400 ">
                      Бид 2014 онд компаниа өргөжүүлж “Инсталл наран констракшн”
                      ХХК болгон БУА-ын 2.1.1~5, 2.2.1~4 болон БА-6.2 тус тус
                      заалттай тусгай зөвшөөрөлтэйгээр үйл ажиллагаагаа явуулж
                      байна
                    </p>
                  </div>

                  <div className="w-full flex flex-col justify-start items-center mt-5 md:!mt-0">
                    <img
                      className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] mr-1"
                      src="logo.svg"
                    />

                    <h2 className="h3 nunito-200">
                      {" "}
                      ИНСТАЛЛ НАРАН КОНКРИТ ХХК
                    </h2>

                    <div className="text-[16px] text-center nunito-300">
                      Бид иргэний барилга байгууламж болон дэд бүтцийн төслийн
                      хэрэгцээ, шаардлагад нийцсэн бетон зуурмагийн үйлдвэрлэл,
                      нийлүүлэлтийн цогц үйлчилгээг санал болгон ажиллаж байна:
                      <div className="text-[16px] text-start nunito-300 ml-10">
                        <br />
                        • M100-500 маркийн бетон зуурмаг
                        <br /> • Хүйтний бетон зуурмаг
                        <br />
                        • Ус тусгаарлагч нэмэлттэй бетон зуурмаг <br />• Зам
                        талбайн бетон зуурмаг өөрийн лабораторийн чанар хяналт
                        Мөн тасралтгүй ажиллах 24/7 үйлчилгээ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full flex justify-center">
          <div className="w-full md:w-10/12">
            <section
              id="folio"
              className="sec-folio px-1 !py-[70px] md:!py-[60px] md:p-5 "
            >
              <div className="container">
                <h1 className=" nunito-600 uppercase mb-5">
                  БИДНИЙ ГҮЙЦЭТГЭСЭН АЖЛУУДААС
                </h1>
                <div className="row">
                  <div className="col-md-4">
                    <img
                      className="center-block"
                      src="https://source.unsplash.com/Oog0wehKxYs/450x450"
                      alt="By Håkon Sataøen"
                    />
                  </div>

                  <div className="col-md-4">
                    <img
                      className="center-block"
                      src="https://source.unsplash.com/EfpOiZvPbT4/450x450"
                      alt="By Samuel Zeller"
                    />
                  </div>

                  <div className="col-md-4">
                    <img
                      className="center-block"
                      src="https://source.unsplash.com/2aoVQXwLf3g/450x450"
                      alt="By Scott Webb"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <img
                      className="center-block"
                      src="https://source.unsplash.com/o2KD7JtqTlk/450x450"
                      alt="By Has Bonk"
                    />
                  </div>

                  <div className="col-md-4">
                    <img
                      className="center-block"
                      src="https://source.unsplash.com/TV2ET43jK0w/450x450"
                      alt="By Scott Webb"
                    />
                  </div>

                  <div className="col-md-4">
                    <img
                      className="center-block"
                      src="https://source.unsplash.com/lZ2LB1s_z7s/450x450"
                      alt="By Daniel Lozano Valdés"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <img
                      className="center-block"
                      src="https://source.unsplash.com/o4qL4FuwN6I/450x450"
                      alt="By Anthony DELANOIX"
                    />
                  </div>

                  <div className="col-md-4">
                    <img
                      className="center-block"
                      src="https://source.unsplash.com/ej7RYC0ED_c/450x450"
                      alt="By Patrick Pilz"
                    />
                  </div>

                  <div className="col-md-4">
                    <img
                      className="center-block"
                      src="https://source.unsplash.com/0G1r-Cg0zS8/450x450"
                      alt="By Vita Vilcina"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section
          id="services"
          className="sec-services px-1 !py-[70px] md:!py-[60px] md:p-5"
        >
          <div className="container">
            {/* <h1 className=" nunito-600 uppercase ">БИДНИЙ давуу тал</h1> */}
            <div className="w-full flex justify-center">
              <div className="w-full md:w-10/12">
                <div className="row">
                  <div className="col-sm-4 mt-5">
                    <i className="bi bi-droplet-half text-4xl"></i>

                    <h2 className="h3 nunito-200">Чанар</h2>

                    <p className="text-[16px] text-center nunito-400">
                      Бид иргэний барилга байгууламж болон дэд бүтцийн төслийн
                      хэрэгцээ, шаардлагад нийцсэн бетон зуурмагийн үйлдвэрлэл,
                      нийлүүлэлтийн цогц үйлчилгээг санал болгон ажиллаж байна
                    </p>
                  </div>

                  <div className="col-sm-4 mt-5">
                    <i className="bi bi-clock-history text-4xl"></i>

                    <h2 className="h3 nunito-200">24/7</h2>

                    <p className="text-[16px] text-center nunito-400">
                      Манай компани нь тасралтгүй ажиллах 24/7 үйлчилгээг санал
                      болгон ажиллаж байна
                    </p>
                  </div>
                  <div className="col-sm-4 mt-5">
                    <i className="bi bi-lightning-charge-fill text-4xl"></i>

                    <h2 className="h3 nunito-200">Хурд</h2>

                    <p className="text-[16px] text-center nunito-400">
                      Манай компани нь анх 2009 онд байгуулагдаж өнөөг хүртэл
                      МУын барилгын салбарт үйл ажилгаагаа амжилттай явуулж
                      байгаа билээ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex justify-center">
          <div className="w-full md:w-10/12">
            <section id="folio" className="sec-folio px-1 !py-[50px]  md:p-5 ">
              <div className="container">
                <h1 className="mb-5 nunito-600 uppercase">
                  түнш && харилцагчид
                </h1>
                <OurPartners />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeContent;

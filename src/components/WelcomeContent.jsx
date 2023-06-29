import OurPartners from "./OurPartners";

function WelcomeContent() {
  const collection = [
    [
      {
        img: "done/1.jpg",
      },
      {
        img: "done/2.jpg",
      },
      {
        img: "done/3.jpg",
      },
    ],
    [
      {
        img: "done/4.jpg",
      },
      {
        img: "done/5.jpg",
      },
      {
        img: "done/6.jpg",
      },
    ],
    [
      {
        img: "done/7.jpg",
      },
      {
        img: "done/8.jpg",
      },
      {
        img: "done/9.jpg",
      },
    ],
  ];
  return (
    <div>
      <div className="body-cus wrapper">
        <section id="home" className="sec-main">
          <h1 className="main-heading  nunito-500 text-[20px] md:text-[30px] flex flex-col  items-center justify-center">
            <div className="spinner mb-4">
              <img
                className=" rounded-full px-2 w-[60px] md:w-[100px]"
                src="logo.svg"
              />
            </div>
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
              <div className=" w-full md:w-5/6">
                {/* <div className=" flex justify-center mb-5">
                  <h6 className="nunito-600 text-[#DF2F29] text-xl text-center">
                    ИХ БҮТЭЭН БАЙГУУЛАЛТЫН ЗҮГ ХАМТДАА ТЭМҮҮЛЦГЭЭЕ.
                  </h6>
                </div> */}
                <div className="text-effect nunito-500">
                  <div>ИХ БҮТЭЭН БАЙГУУЛАЛТЫН ЗҮГ</div>
                  <div>
                    <span>ХАМТДАА ТЭМҮҮЛЦГЭЭЕ.</span>
                  </div>
                </div>

                <p className="text-justify nunito-300 ">
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
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-full flex flex-col justify-start items-center">
                    <img
                      className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] mr-1"
                      src="logo.svg"
                    />

                    <h2 className="h3 nunito-200">
                      {" "}
                      ИНСТАЛЛ НАРАН КОНСТРАКШН ХХК
                    </h2>

                    <p className="text-[16px] !text-justify nunito-400">
                      Манай компани нь анх 2009 онд байгуулагдаж өнөөг хүртэл
                      МУын барилгын салбарт үйл ажилгаагаа амжилттай явуулж
                      байгаа билээ.
                    </p>
                    <p className="text-[16px] !text-justify nunito-400 ">
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

                    <div className="text-[16px] text-justify nunito-300">
                      Бид иргэний барилга байгууламж болон дэд бүтцийн төслийн
                      хэрэгцээ, шаардлагад нийцсэн бетон зуурмагийн үйлдвэрлэл,
                      нийлүүлэлтийн цогц үйлчилгээг санал болгон ажиллаж байна:
                      <div className="text-[16px] text-justify nunito-300 ml-10">
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
                  Бүтээн байгуулалт
                </h1>
                {collection.map((container, index) => {
                  return (
                    <div key={index} className="row">
                      {container.map((item, ind) => {
                        return (
                          <div key={ind} className="col-md-4">
                            <img
                              className="center-block h-[320px] w-full shadow"
                              src={`${item.img}`}
                              alt="By Håkon Sataøen"
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
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

                    <p className="text-[16px] !text-justify nunito-400">
                      Бид иргэний барилга байгууламж болон дэд бүтцийн төслийн
                      хэрэгцээ, шаардлагад нийцсэн бетон зуурмагийн үйлдвэрлэл,
                      нийлүүлэлтийн цогц үйлчилгээг санал болгон ажиллаж байна
                    </p>
                  </div>

                  <div className="col-sm-4 mt-5">
                    <i className="bi bi-clock-history text-4xl"></i>

                    <h2 className="h3 nunito-200">24/7</h2>

                    <p className="text-[16px] !text-justify nunito-400">
                      Манай компани нь тасралтгүй ажиллах 24/7 үйлчилгээг санал
                      болгон ажиллаж байна
                    </p>
                  </div>
                  <div className="col-sm-4 mt-5">
                    <i className="bi bi-lightning-charge-fill text-4xl"></i>

                    <h2 className="h3 nunito-200">Хурд</h2>

                    <p className="text-[16px] !text-justify nunito-400">
                      Барилга угсралтын ажил болон Бетон зуурмагийг захиалсан
                      цаг хугацаанд цаг алдалгүй, төлөвлөгөөний дагуу хийж
                      гүйцэтгэнэ.
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

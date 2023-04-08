function WelcomeContent() {
  return (
    <div>
      <div className="body-cus wrapper">
        <section id="home" className="sec-main">
          <h1 className="main-heading nunito-500 text-[30px] md:text-[30px]">
            Таны итгэлт түнш.
          </h1>
        </section>

        <section
          id="about"
          className="sec-about px-1 !py-[70px] md:!py-[90px] md:p-5"
        >
          <div className="container">
            <h1 className="mb-5 nunito-500 uppercase ">
              ИНСТАЛЛ НАРАН КОНСТРАКШН ХХК
            </h1>
            <div className="row flex items-center justify-center">
              <div className=" w-full md:w-2/3">
                <p className="text-[15px] text-center nunito-400">
                  Манай компани нь анх 2009 онд байгуулагдаж өнөөг хүртэл МУын
                  барилгын салбарт үйл ажилгаагаа амжилттай явуулж байгаа билээ.
                </p>
                <p className="text-[15px] text-center nunito-400">
                  Бид 2014 онд компаниа өргөжүүлж “Инсталл наран констракшн” ХХК
                  болгон БУА-ын 2.1.1~5, 2.2.1~4 болон БА-6.2 тус тус заалттай
                  тусгай зөвшөөрөлтэйгээр үйл ажиллагаагаа явуулж байна
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="sec-services px-1 !py-[70px] md:!py-[110px] md:p-5"
        >
          <div className="container">
            <h1 className="mb-5 nunito-600 uppercase ">
              ИНСТАЛЛ НАРАН КОНКРИТ ХХК
            </h1>
            <div className="row">
              <div className="col-sm-4">
                <i className="bi bi-droplet-half text-4xl"></i>

                <h2 className="h3 nunito-200">Чанар</h2>

                <p className="text-[15px] text-center nunito-400">
                  Бид иргэний барилга байгууламж болон дэд бүтцийн төслийн
                  хэрэгцээ, шаардлагад нийцсэн бетон зуурмагийн үйлдвэрлэл,
                  нийлүүлэлтийн цогц үйлчилгээг санал болгон ажиллаж байна
                </p>
              </div>

              <div className="col-sm-4">
                <i className="bi bi-clock-history text-4xl"></i>

                <h2 className="h3 nunito-200">24/7</h2>

                <p className="text-[15px] text-center nunito-400">
                  Манай компани нь тасралтгүй ажиллах 24/7 үйлчилгээг санал
                  болгон ажиллаж байна
                </p>
              </div>
              <div className="col-sm-4">
                <i className="bi bi-lightning-charge-fill text-4xl"></i>

                <h2 className="h3 nunito-200">Хурд</h2>

                <p className="text-[15px] text-center nunito-400">
                  Манай компани нь анх 2009 онд байгуулагдаж өнөөг хүртэл МУын
                  барилгын салбарт үйл ажилгаагаа амжилттай явуулж байгаа билээ.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="folio" className="sec-folio">
          <div className="container">
            <h1>Previous Work</h1>

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

        <section id="folio" className="sec-folio">
          <div className="container">
            <h1 className="mb-5 nunito-600 uppercase ">түнш && харилцагчид</h1>
            <div className="w-full flex justify-center pb-10">
              <img className="w-[600px]" src="collaberates.png" alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WelcomeContent;

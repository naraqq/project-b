function WelcomeContent() {
  return (
    <div>
      <div className="body-cus wrapper">
        <section id="home" className="sec-main">
          <h1 className="main-heading">Where creativity happens.</h1>
        </section>

        <section id="about" className="sec-about px-1 py-5 md:p-5">
          <div className="container">
            <h1 className="mb-5">Бидний тухай</h1>
            <div className="row">
              <div className="">
                <p className="text-[14px] text-center">
                  Манай компани нь анх 2009 онд байгуулагдаж өнөөг хүртэл МУын
                  барилгын салбарт үйл ажилгаагаа амжилттай явуулж байна. • Бид
                  2014 онд компаниа өргөжүүлж “Инсталл наран констракшн” ХХК
                  болгон БУА-ын 2.1.1~5, 2.2.1~4 болон БА-6.2 тус тус заалттай
                  тусгай зөвшөөрөлтэйгээр үйл ажиллагаагаа явуулж байна
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="sec-services">
          <div className="container">
            <h1>Services</h1>

            <div className="row">
              <div className="col-sm-4">
                <i className="fa fa-4x fa-paint-brush"></i>

                <h2 className="h3">Beautiful Design</h2>

                <p>
                  Every website is beautiful, unique and tailored to suit your
                  needs and requirements.
                </p>
              </div>

              <div className="col-sm-4">
                <i className="fa fa-4x fa-code"></i>

                <h2 className="h3">Clean Code</h2>

                <p>
                  All websites are written in valid and clean HTML5 / CSS3 &amp;
                  JavaScript (jQuery).
                </p>
              </div>

              <div className="col-sm-4">
                <i className="fa fa-4x fa-tablet"></i>

                <h2 className="h3">Always Responsive</h2>

                <p>
                  All websites are responsive. They will look great on desktop,
                  tablets and mobile phones too.
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

        <section id="testimonials" className="sec-testimonials">
          <div className="container">
            <h1>Clients said</h1>

            <div className="row">
              <div className="col-sm-4">
                <p className="text-center">
                  "Alex did great job when designing our website. It was
                  pleasure to work with him and I'm sure we will hire him
                  again."
                </p>

                <p className="text-right">&mdash; Marc Andressen</p>
              </div>

              <div className="col-sm-4">
                <p className="text-center">
                  "Alex proved to be truly creative designer who is able to
                  create just stunning design I immediately fell in love with!"
                </p>

                <p className="text-right">&mdash; Emily Cooper</p>
              </div>

              <div className="col-sm-4">
                <p className="text-center">
                  "I have worked with several different people and it always
                  seemed like a pain—luckily I found Alex Devero. Thank you
                  Alex!"
                </p>

                <p className="text-right">&mdash; Scott Grubber</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WelcomeContent;

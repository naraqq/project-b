import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  // console.log(path);
  const [scrolled, setScrolled] = useState(false);

  // handle scroll event
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  // attach scroll event listener to window
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="custom-navigation">
      <header className="">
        <nav
          className={`!flex ${
            path !== "/" && " !text-black"
          } h-full justify-between px-4 md:justify-around transition-all w-full glass`}
        >
          <div
            onClick={() => {
              navigate("/");
              scrollToTop();
            }}
            className="header-top h-full flex items-center "
          >
            <h1
              className={`logo flex items-center cursor-pointer hover:!text-black select-none`}
            >
              <img
                className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] mr-1"
                src="logo.svg"
              />
              <img className="w-[130px] h-[40px] mr-1" src="logowords.png" />
            </h1>
          </div>
          <div className="block md:hidden">
            <Mobilebar />
          </div>
          <ul className="!hidden md:!flex">
            <li className="parent-red">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className={`hover:text-black parent nunito-400 nunito-600 child-red ${
                  path == "/" && "text-red-500 "
                } button-cus `}
              >
                НҮҮР
              </button>
            </li>
            <li className="parent-red">
              <button
                onClick={() => {
                  navigate("/news");
                }}
                className={`hover:text-black transition-all nunito-600 child-red ${
                  path == "/news" && "text-red-500"
                } button-cus`}
              >
                МЭДЭЭ
              </button>
            </li>
            <li className="parent-red">
              <button
                onClick={() => {
                  navigate("/about-us");
                }}
                className={`nunito-400 nunito-600 ${
                  path == "/about-us" && "!text-red-500"
                }  child-red`}
              >
                БИДНИЙ ТУХАЙ
              </button>
            </li>

            <li className="parent-red">
              <button
                onClick={() => {
                  navigate("/human-resource");
                }}
                className={` ${
                  path == "/human-resource" && "!text-red-500"
                } parent nunito-400 nunito-600 child-red`}
              >
                ХҮНИЙ НӨӨЦ{" "}
              </button>
            </li>
            <li className="parent-red">
              <button
                onClick={() => {
                  navigate("/contact-us");
                }}
                className={` ${
                  path == "/contact-us" && "!text-red-500"
                } parent nunito-400 nunito-600 child-red`}
              >
                ХОЛБОО БАРИХ{" "}
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;

function OffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="">
        <i className="bi bi-list text-2xl"></i>
      </button>
      <Offcanvas
        style={{ width: "290px" }}
        className={"block md:hidden"}
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            <div
              onClick={handleClose}
              className="!w-full flex justify-center rounded-full items-center"
            >
              <i className="bi bi-x-lg text-xl text-gray-300"></i>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="w-full relative">
            <div
              onClick={() => {
                navigate("/");
                handleClose();
              }}
              className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-3 text-gray-500 border-b"
            >
              Нүүр
            </div>
            <div
              onClick={() => {
                navigate("/news");
                handleClose();
              }}
              className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-3 text-gray-500 border-b"
            >
              Мэдээ мэдээлэл
            </div>
            <div
              onClick={() => {
                navigate("/about-us");
                handleClose();
              }}
              className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-3 text-gray-500 border-b"
            >
              Бидний тухай
            </div>
            <div
              onClick={() => {
                navigate("/human-resource");
                handleClose();
              }}
              className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-3 text-gray-500 border-b"
            >
              Ажлын байр
            </div>
            {/* <Accordion style={{ border: "none" }}>
              <Accordion.Item eventKey="0" style={{ border: "none" }}>
                <Accordion.Header>
                  <div className="max-w-[300px] pt-3 pb-3 text-[13px] px-3 text-gray-500">
                    Бидний тухай
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div
                    onClick={() => {
                      navigate("/Танилцуулга");
                      handleClose();
                    }}
                    className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-0 text-gray-500 border-b"
                  >
                    <i className="bi bi-caret-right mr-2"></i>Танилцуулга
                  </div>
                  <div
                    onClick={() => {
                      navigate("/Бидний-гүйцэтсэн-ажил");
                      handleClose();
                    }}
                    className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-0 text-gray-500 border-b"
                  >
                    <i className="bi bi-caret-right mr-2"></i>Бидний гүйцэтгэсэн
                    ажил
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> */}

            <div
              onClick={() => {
                navigate("/contact-us");
                handleClose();
              }}
              className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-3 text-gray-500 border-b"
            >
              Холбоо барих
            </div>
            <div className="min-w-[260px] pt-3 pb-3 bottom-0 text-[13px] px-3 text-gray-500 text-center fixed">
              © 2023 X-X-X Холдинг ХХК
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Mobilebar() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvas key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

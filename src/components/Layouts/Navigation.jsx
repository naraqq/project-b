import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
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
  return (
    <div className="custom-navigation">
      <header className="">
        <nav
          className={`!flex h-full justify-between px-4 md:justify-around transition-all w-full ${
            scrolled && path === "/" ? "glass " : "text-white pure-glass"
          }`}
        >
          <div className="header-top h-full flex items-center">
            <h1 className="logo flex items-center cursor-pointer hover:!text-black">
              {/* <img className="w-[50px] h-[50px] mr-2" src="logo2.png" /> */}
              <i className="bi bi-buildings-fill text-2xl mr-2 mb-1"></i>
              <button className="mt-[-3px] uppercase font-bold hover:text-black">
                Жишээ ХХК
              </button>
            </h1>
          </div>
          <div className="block md:hidden">
            <Mobilebar />
          </div>
          <ul className="!hidden md:!flex">
            {/* <li>
              <a href="#">Нүүр</a>
            </li> */}
            <li>
              <button className="hover:text-black transition-all">
                Бидний тухай
              </button>
            </li>
            <li>
              <button className="hover:text-black transition-all">
                Мэдээ мэдээлэл
              </button>
            </li>
            <li>
              <button className="hover:text-black parent">
                Ажлын байр
                <div className="dropdown absolute top-[60px] left-0  h-12">
                  <div
                    className={`max-w-[300px] transition-all ${
                      scrolled && path === "/"
                        ? "bg-gray-100 "
                        : "text-white pure-glass "
                    }  pt-3 pb-3 h-[50px] 
                   hover:bg-gray-300  text-[13px] px-3 `}
                  >
                    Яагаад ХХХ ХХК гэж ?
                  </div>
                  <div
                    className={`max-w-[300px] transition-all ${
                      scrolled && path === "/"
                        ? "bg-gray-100 "
                        : "text-white pure-glass "
                    } pt-3 pb-3 h-[50px] 
                   hover:bg-gray-300  text-[13px] px-3  border-t`}
                  >
                    Нээлттэй ажлын байр
                  </div>
                </div>
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
            <div className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-3 text-gray-500 border-b">
              Нүүр
            </div>
            <div className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-3 text-gray-500 border-b">
              Бидний тухай
            </div>
            <div className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-3 text-gray-500 border-b">
              Мэдээ мэдээлэл
            </div>
            <div className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-3 text-gray-500 border-b">
              Ажлийн байр
            </div>
            <div className="max-w-[300px] pt-3 pb-3 active:bg-gray-200 text-[13px] px-3 text-gray-500 border-b">
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

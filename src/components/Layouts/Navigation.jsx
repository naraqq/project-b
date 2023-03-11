import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navigation() {
  return (
    <div className="custom-navigation">
      <header className="">
        <nav className="!flex h-full justify-between px-4 md:justify-around w-full">
          <div className="header-top h-full flex items-center">
            <h1 className="logo flex items-center cursor-pointer">
              <img className="w-[80px] h-[30px]" src="logo.png" />
              <a className="mt-[-3px]" href="#">
                Компани нэр
              </a>
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
              <a href="#">Бидний тухай</a>
            </li>
            <li>
              <a href="#">Мэдээ мэдээлэл</a>
            </li>
            <li>
              <a href="#">Ажлийн байр</a>
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
        <i className="bi bi-list text-2xl text-white"></i>
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
          <div className="w-full h-full ">
            <div className="max-w-[300px] py-3 text-[13px] px-3 text-gray-500 border-b">
              Нүүр
            </div>
            <div className="max-w-[300px] py-3 text-[13px] px-3 text-gray-500 border-b">
              Бидний тухай
            </div>
            <div className="max-w-[300px] py-3 text-[13px] px-3 text-gray-500 border-b">
              Мэдээ мэдээлэл
            </div>
            <div className="max-w-[300px] py-3 text-[13px] px-3 text-gray-500 border-b">
              Ажлийн байр
            </div>
            <div className="max-w-[300px] py-3 text-[13px] px-3 text-gray-500 border-b">
              Холбоо барих
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

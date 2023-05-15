import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ComputerSkills() {
  const [children, setChildren] = useState([
    {
      instituteName: "",
      educationStartDate: "",
      educationEndDate: "",
      studiedFieldName: "",
      educationType: "",
      educationBadge: "",
      educationScore: "",
    },
  ]);

  const addChild = () => {
    setChildren([
      ...children,
      {
        instituteName: "",
        educationStartDate: "",
        educationEndDate: "",
        studiedFieldName: "",
        educationType: "",
        educationBadge: "",
        educationScore: "",
      },
    ]);
  };

  const removeChild = (index) => {
    const newChildren = [...children];
    newChildren.splice(index, 1);
    setChildren(newChildren);
  };

  const handleInputChange = (index, event) => {
    const newChildren = [...children];
    newChildren[index].value = event.target.value;
    setChildren(newChildren);
  };

  const renderChildren = () => {
    return children.map((child, index) => (
      <Form.Group
        key={index}
        style={{
          position: "relative",
        }}
      >
        <div className="form-control w-full flex gap-2 flex-wrap justify-between">
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Microsoft word</span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Бүрэн эзэмшсэн
              </option>
              <option className="!p-2" value="2">
                Хэрэглээний түвшинд
              </option>
              <option className="!p-2" value="2">
                Анхан шатны
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Microsoft excel</span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Бүрэн эзэмшсэн
              </option>
              <option className="!p-2" value="2">
                Хэрэглээний түвшинд
              </option>
              <option className="!p-2" value="2">
                Анхан шатны
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Microsoft Access</span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Бүрэн эзэмшсэн
              </option>
              <option className="!p-2" value="2">
                Хэрэглээний түвшинд
              </option>
              <option className="!p-2" value="2">
                Анхан шатны
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Microsoft Project</span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Бүрэн эзэмшсэн
              </option>
              <option className="!p-2" value="2">
                Хэрэглээний түвшинд
              </option>
              <option className="!p-2" value="2">
                Анхан шатны
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Microsoft Powerpoint
            </span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Бүрэн эзэмшсэн
              </option>
              <option className="!p-2" value="2">
                Хэрэглээний түвшинд
              </option>
              <option className="!p-2" value="2">
                Анхан шатны
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Auto cad</span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Бүрэн эзэмшсэн
              </option>
              <option className="!p-2" value="2">
                Хэрэглээний түвшинд
              </option>
              <option className="!p-2" value="2">
                Анхан шатны
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Photo Shop</span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Бүрэн эзэмшсэн
              </option>
              <option className="!p-2" value="2">
                Хэрэглээний түвшинд
              </option>
              <option className="!p-2" value="2">
                Анхан шатны
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Coral Draw</span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Бүрэн эзэмшсэн
              </option>
              <option className="!p-2" value="2">
                Хэрэглээний түвшинд
              </option>
              <option className="!p-2" value="2">
                Анхан шатны
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Нэмэлт</span>
            <input type="text" className="outline-none p-2 rounded " />
          </div>
        </div>
      </Form.Group>
    ));
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <form className="mt-4 md:!mt-0">
          <Form>{renderChildren()}</Form>
        </form>
      </div>
    </div>
  );
}

export default ComputerSkills;

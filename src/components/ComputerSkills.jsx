import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ComputerSkills({ computerSkills, setComputerSkills }) {
  const handleInputChange = (index, event) => {
    const newChildren = [...computerSkills];
    newChildren[index].skillScore = event.target.value;
    setComputerSkills(newChildren);
  };
  const handleLastElement = (event) => {
    const newChildren = [...computerSkills];
    newChildren[8].skillScore = event.target.value;
    setComputerSkills(newChildren);
  };

  const renderChildren = () => {
    return computerSkills.map((child, index) => (
      <div
        key={index}
        className={`flex flex-col w-full ${
          child.skillName == "Нэмэлт" && "hidden"
        } md:w-[calc(30%)]`}
      >
        <span className="text-gray-500 nunito-400">{child.skillName}</span>
        <select
          onChange={(e) => {
            handleInputChange(index, e);
          }}
          className="p-2 rounded "
          placeholder="Гарчиг"
        >
          <option className="!p-2" value="unknown">
            СОНГОХ
          </option>
          <option className="!p-2" value="Бүрэн эзэмшсэн">
            Бүрэн эзэмшсэн
          </option>
          <option className="!p-2" value="Хэрэглээний түвшинд">
            Хэрэглээний түвшинд
          </option>
          <option className="!p-2" value="Анхан шатны">
            Анхан шатны
          </option>
        </select>
      </div>
    ));
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <form className="mt-4 md:!mt-0">
          <Form>
            <Form.Group
              style={{
                position: "relative",
              }}
            >
              <div className="form-control w-full flex gap-2 flex-wrap justify-between">
                {renderChildren()}
                <div
                  onChange={(e) => {
                    handleLastElement(e);
                  }}
                  className="flex flex-col w-full  md:w-[calc(30%)]"
                >
                  <span className="text-gray-500 nunito-400">Нэмэлт</span>
                  <input type="text" className="outline-none p-2 rounded " />
                </div>{" "}
              </div>
            </Form.Group>
          </Form>
        </form>
      </div>
    </div>
  );
}

export default ComputerSkills;

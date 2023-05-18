import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function PersonalSkillSummaries({
  personalSkillSummaries,
  setPersonalSkillSummaries,
}) {
  const handleInputChange = (index, event) => {
    const newChildren = [...personalSkillSummaries];
    newChildren[index].skillScore = event.target.value;
    setPersonalSkillSummaries(newChildren);
  };

  const renderChildren = () => {
    return personalSkillSummaries.map((child, index) => (
      <div key={index} className="flex flex-col w-full  md:w-[calc(30%)]">
        <span className="text-gray-500 nunito-400">{child.skillName}</span>
        <select
          onChange={(e) => {
            handleInputChange(index, e);
          }}
          className="p-2 rounded "
        >
          <option className="!p-2" value="">
            СОНГОХ
          </option>
          <option className="!p-2" value="Маш сайн">
            Маш сайн
          </option>
          <option className="!p-2" value="Боломжийн">
            Боломжийн
          </option>
          <option className="!p-2" value="Дунд зэрэг">
            Дунд зэрэг
          </option>
          <option className="!p-2" value="Хангалтгүй">
            Хангалтгүй
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
            {" "}
            <Form.Group
              style={{
                position: "relative",
              }}
            >
              <div className="form-control w-full flex gap-2 flex-wrap justify-between">
                {renderChildren()}
                {/* <div className="flex flex-col w-full  md:w-[calc(30%)]">
                  <span className="text-gray-500 nunito-400">Нэмэлт</span>
                  <input type="text" className="outline-none p-2 rounded " />
                </div> */}
              </div>
            </Form.Group>
          </Form>
        </form>
      </div>
    </div>
  );
}

export default PersonalSkillSummaries;

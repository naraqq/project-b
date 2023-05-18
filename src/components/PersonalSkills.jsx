import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function PersonalSkills({ personalSkills, setPersonalSkills }) {
  const handleInputChangeAdvantage = (event) => {
    const newChildren = [...personalSkills];
    newChildren[0].prosCons = event.target.value;
    setPersonalSkills(newChildren);
  };
  const handleInputChangeDisadvantage = (event) => {
    const newChildren = [...personalSkills];
    newChildren[1].prosCons = event.target.value;
    setPersonalSkills(newChildren);
  };

  const renderChildren = () => {
    return personalSkills.map((child, index) => (
      <Form.Group
        key={index}
        style={{
          position: "relative",
        }}
      >
        <div
          className={`flex flex-col md:flex-row gap-2 w-full ${
            index == 0 && "hidden"
          }`}
        >
          <div className="form-control w-full ">
            <div className="flex flex-col w-full  ">
              <span className="text-gray-500 nunito-400">Таны давуу тал:</span>
              <textarea
                onChange={(e) => {
                  handleInputChangeAdvantage(e);
                }}
                rows={5}
                type="text"
                className="outline-none p-2 rounded w-full "
              />
            </div>
          </div>
          <div className="form-control w-full ">
            <div className="flex flex-col w-full  ">
              <span className="text-gray-500 nunito-400">Таны сул тал:</span>
              <textarea
                onChange={(e) => {
                  handleInputChangeDisadvantage(e);
                }}
                rows={5}
                type="text"
                className="outline-none p-2 rounded w-full "
              />
            </div>
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

export default PersonalSkills;

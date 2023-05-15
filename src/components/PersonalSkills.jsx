import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function PersonalSkills() {
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
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <div className="form-control w-full ">
            <div className="flex flex-col w-full  ">
              <span className="text-gray-500 nunito-400">Таны давуу тал:</span>
              <textarea
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
                rows={5}
                type="text"
                className="outline-none p-2 rounded w-full "
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="heading text-start">
            <p className="mx-0 mt-0 mb-0">Таны ойрын 5н жилийн зорилго:</p>
          </div>
          <input type="text" className="form-control" />
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

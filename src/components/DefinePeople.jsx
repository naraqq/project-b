import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function DefinePeople({ definePeople, setDefinePeople }) {
  const addChild = () => {
    setDefinePeople([
      ...definePeople,
      {
        personName: "",
        personCompanyName: "",
        personOccupation: "",
        personPhoneNo: "",
        personKnownYearCount: "",
      },
    ]);
  };

  const removeChild = (index) => {
    const newdefinePeople = [...definePeople];
    newdefinePeople.splice(index, 1);
    setDefinePeople(newdefinePeople);
  };

  const handlePersonName = (index, event) => {
    const newdefinePeople = [...definePeople];
    newdefinePeople[index].personName = event.target.value;
    setDefinePeople(newdefinePeople);
  };
  const handlePersonCompanyName = (index, event) => {
    const newdefinePeople = [...definePeople];
    newdefinePeople[index].personCompanyName = event.target.value;
    setDefinePeople(newdefinePeople);
  };
  const handlePersonOccupation = (index, event) => {
    const newdefinePeople = [...definePeople];
    newdefinePeople[index].personOccupation = event.target.value;
    setDefinePeople(newdefinePeople);
  };
  const handlePersonPhoneNo = (index, event) => {
    const newdefinePeople = [...definePeople];
    newdefinePeople[index].personPhoneNo = event.target.value;
    setDefinePeople(newdefinePeople);
  };
  const handlePersonKnownYearCount = (index, event) => {
    const newdefinePeople = [...definePeople];
    newdefinePeople[index].personKnownYearCount = event.target.value;
    setDefinePeople(newdefinePeople);
  };

  const renderChildren = () => {
    return definePeople.map((child, index) => (
      <Form.Group
        key={index}
        style={{
          position: "relative",
        }}
      >
        <div className="form-control w-full flex flex-col md:grid grid-cols-3 gap-4 justify-between">
          <div className="flex flex-col w-full  ">
            <span className="text-gray-500 nunito-400">
              Тодорхойлолт гаргах хүний нэр:
            </span>
            <input
              onChange={(e) => {
                handlePersonName(index, e);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full  ">
            <span className="text-gray-500 nunito-400">
              Ажиллаж буй байгууллагын нэр
            </span>
            <input
              onChange={(e) => {
                handlePersonCompanyName(index, e);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full  ">
            <span className="text-gray-500 nunito-400">Албан тушаал</span>
            <input
              onChange={(e) => {
                handlePersonOccupation(index, e);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full  ">
            <span className="text-gray-500 nunito-400">Утасны дугаар</span>
            <input
              onChange={(e) => {
                handlePersonPhoneNo(index, e);
              }}
              type="number"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full  ">
            <span className="text-gray-500 nunito-400">
              Таныг хэдэн жилийн өмнөөс мэдэх
            </span>
            <input
              onChange={(e) => {
                handlePersonKnownYearCount(index, e);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
        </div>
        <button
          className="absolute right-[5px] bottom-[5px] text-red-500 text-[18px]"
          onClick={() => removeChild(index)}
        >
          <i className="bi bi-trash active:scale-105"></i>
        </button>
      </Form.Group>
    ));
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <form className="mt-4 md:!mt-0">
          <Form>
            {renderChildren()}
            <button
              className="active:scale-105"
              onClick={(e) => {
                e.preventDefault();
                addChild();
              }}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACV0lEQVR4nO2Zy2oUURCGG28Ll15WXl4iGMxqdhKokqpeNErc+wpKNrNL3McwCb7BSFfBRN248BmU+ABqVuayTrtRqmccMCTM6T59OS39w4GBYab/71z/Ux1FvXr18lYyTi6j8AooraNSCsJfUfgElX7lTfgEhPfz75TWH6fxw+FweClqW6R0D4VfofABKv8u1ugHKG2upvHdxo2vjpPbqLwLSllx4/82UMpAaYQTvNWIeVRaQ6VjX+PngBxBGj+tzfjS7vOrIPymauN4FkR4x55VqXmc4HVQ+lC3efzbhN/bM6vr+SbN6xziYzJOrnkDNDFt8OJ1MfIzn8bP2jKP80ZPSpln4ZsgfBgAwHGpLdb2+bIPvUilp5LwdiHzdjr6HFKVAyhlOMH77r1v8cBj2KsGwCnEppN5C1mWU0IDQOEDC40uvb/i9aC6ADRfC8sLAaaROEwAFH7pMgISMMDbxSOQXzzKmywrdAP4sngEHKNyGwAgfOiyBrJQAVD49P8HwM5PIen6Ipaub6Ma7kEGSi8WAljRKVQATOMHTmEOhL+HBgDC35yreRZdQwNApY2oqxcaFD6FPbjjDDAbhVEwAEpbUVE9Gic3QrjUg9JR6bqp1SpbB5A4KWV+DiG802Lvv458ZfdQENbmAejd4NPgSlSFrNCaF1yb6/m9yoq7Z4q8oyamzaCqnj9PVqusZ3ein94LtmDddNsOGG/jYv9BW7ZtR03LTkeLHWWy0/Q3tFH4hK1DswC4bHUby+x28bCb3ewFXpZ/Fv5s31kktlQZxGvWXr2i7usPseDsn8oBAbAAAAAASUVORK5CYII="></img>
            </button>
          </Form>
        </form>
      </div>
    </div>
  );
}

export default DefinePeople;

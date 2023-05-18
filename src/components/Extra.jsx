import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
function Extra({
  setPersonalDescription,
  setOtherJobField,
  setSalaryMinAmount,
  setSalaryMaxAmount,
  setPossibleJobStartDate,
  setJobInformationSource,
  setTdbAccount,
  setTimeManagement,
  setPersonalGoal,
}) {
  const [value, setValue] = useState(new Date());
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  var datestring =
    value.getFullYear() +
    "" +
    addZero(value.getMonth() + 1) +
    addZero(value.getDate()) +
    addZero(value.getHours()) +
    addZero(value.getMinutes()) +
    addZero(value.getSeconds());
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
        <div className="form-control flex flex-col ">
          <div className="flex flex-col w-full">
            <span className="text-gray-500 nunito-400">Нэмэлт танилцуулга</span>
            <textarea
              rows={5}
              onChange={(e) => {
                setPersonalDescription(e.target.value);
              }}
              type="text"
              className="outline-none p-2 rounded w-full"
            />
          </div>
          <div className="flex flex-col w-full mt-2">
            <span className="text-gray-500 nunito-400">
              Таны ойрын 5н жилийн зорилго
            </span>
            <textarea
              rows={5}
              onChange={(e) => {
                setPersonalGoal(e.target.value);
              }}
              type="text"
              className="outline-none p-2 rounded w-full"
            />
          </div>
        </div>
        <div className="form-control flex flex-col  md:grid grid-cols-2 gap-4">
          <div className="flex flex-col w-full ">
            <span className="text-gray-500 nunito-400">
              Үндсэн мэргэжлээсээ гадна өөр ямар чиглэлийн ажил хийх сонирхолтой
              вэ ?{" "}
            </span>
            <input
              onChange={(e) => {
                setOtherJobField(e.target.value);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full ">
            <span className="text-gray-500 nunito-400">
              Таны ажилд орох боломжит хугацаа
            </span>
            <input
              onChange={(e) => {
                setPossibleJobStartDate(e.target.value);
              }}
              type="date"
              className="outline-none p-2 rounded "
            />
          </div>

          <div className="flex flex-col w-full ">
            <span className="text-gray-500 nunito-400">
              Таны хүсч буй цалингын хэмжээ /Дээд/
            </span>
            <input
              onChange={(e) => {
                setSalaryMaxAmount(e.target.value);
              }}
              type="number"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full ">
            <span className="text-gray-500 nunito-400">
              Таны хүсч буй цалингын хэмжээ /Доод/
            </span>
            <input
              onChange={(e) => {
                setSalaryMinAmount(e.target.value);
              }}
              type="number"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full ">
            <span className="text-gray-500 nunito-400">
              Ажлын байрны талаарх мэдээллийг ямар эх сурвалжаас авсан бэ ?{" "}
            </span>
            <input
              onChange={(e) => {
                setJobInformationSource(e.target.value);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full ">
            <span className="text-gray-500 nunito-400">
              Худалдаа хөгжлийн банкны өөрийн эзэмшдэг дансны дугаар
            </span>
            <input
              onChange={(e) => {
                setTdbAccount(e.target.value);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
            <i className="nunito-300 text-[13px] text-gray-500">
              /Цалин хаан банкны дансаар олгогдоно/
            </i>
          </div>
          <div className="flex flex-col w-full ">
            <span className="text-gray-500 nunito-400">
              Цаг хэр баримталдаг вэ ? Цаг баримтлах талаарх таны бодол{" "}
            </span>
            <textarea
              onChange={(e) => {
                setTimeManagement(e.target.value);
              }}
              rows={3}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full ">
            <span className="text-gray-500 nunito-400">
              Анкет бөглөсөн огноо{" "}
            </span>
            <DatePicker
              selected={value}
              value={value}
              onChange={(date) => setValue(date)}
              className="form-control form-control-sm py-2 mt-2 ml-0 bg-white"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="yyyy-MM-dd h:mm aa"
            />
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

export default Extra;

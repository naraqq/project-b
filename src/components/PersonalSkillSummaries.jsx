import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function PersonalSkillSummaries() {
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
            <span className="text-gray-500 nunito-400">
              Мэргэжлийн ур чадвар
            </span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Бичиг баримт боловсруулах
            </span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Санал бодлоо чөлөөтэй илгэрхийлэх
            </span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Харилцааны соёл</span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Оновчтой шийдвэр гаргах
            </span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Удирдан зохион байгуулах
            </span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Шинэ санаа дэвшүүлэн хэрэгжүүлэх
            </span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Бие дааж ажиллах</span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Багаар ажиллах</span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Хариуцлага хүлээх</span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Компьютерийн хэрэглээ
            </span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Гадаад хэлний мэдлэг
            </span>
            <select className="p-2 rounded " placeholder="Гарчиг">
              <option className="!p-2" value="">
                СОНГОХ
              </option>
              <option className="!p-2" value="1">
                Маш сайн
              </option>
              <option className="!p-2" value="2">
                Боломжийн
              </option>
              <option className="!p-2" value="2">
                Дунд зэрэг
              </option>
              <option className="!p-2" value="2">
                Хангалтгүй
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

export default PersonalSkillSummaries;

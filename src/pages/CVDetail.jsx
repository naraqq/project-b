import { useLocation } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import Education from "../components/Education";
import Trainings from "../components/Trainings";
import Languages from "../components/Languages";
import ComputerSkills from "../components/ComputerSkills";
import WorkExperiences from "../components/WorkExperiences";
import DefinePeople from "../components/DefinePeople";
import PersonalSkills from "../components/PersonalSkills";
import PersonalSkillSummaries from "../components/PersonalSkillSummaries";
import Talents from "../components/Talents";
import Extra from "../components/Extra";
function CVDetail() {
  const location = useLocation();
  const meta_data = location.state;
  const [birthday, setBirthday] = useState("");
  const [children, setChildren] = useState([
    {
      memberType: "",
      memberName: "",
      memberBirthYear: "",
      memberOccupation: "",
      memberCompanyName: "",
      memberJobName: "",
      memberPhoneNo: "",
    },
  ]);

  const addChild = () => {
    setChildren([
      ...children,
      {
        memberType: "",
        memberName: "",
        memberBirthYear: "",
        memberOccupation: "",
        memberCompanyName: "",
        memberJobName: "",
        memberPhoneNo: "",
      },
    ]);
  };
  console.log(children);

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
            <span className="text-gray-500 nunito-400">Таны юу болох:</span>
            <input type="text" className="outline-none p-2 rounded " />
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Овог нэр:</span>
            <input type="text" className="outline-none p-2 rounded " />
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Төрсөн он:</span>
            <input type="date" className="outline-none p-2 rounded " />
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Мэргэжил:</span>
            <input type="text" className="outline-none p-2 rounded " />
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Одоо ажиллаж буй байгууллагын нэр:
            </span>
            <input type="text" className="outline-none p-2 rounded " />
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Одоо эрхэлж буй ажил, Албан тушаал:
            </span>
            <input type="text" className="outline-none p-2 rounded " />
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Утас</span>
            <input type="number" className="outline-none p-2 rounded " />
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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(children);
  };
  return (
    <Layout>
      <div className="body">
        <div className="main about-us ">
          <section className="contact" id="contact">
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-2">1. Товч танилцуулга.</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <form className="mt-4 md:!mt-0">
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Яс үндэс"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Нас"
                        />
                      </div>
                      <div className="col-sm-6">
                        <select className="form-control" placeholder="Гарчиг">
                          <option className="!p-2" value="">
                            Хүйс
                          </option>
                          <option className="!p-2" value="1">
                            Эрэгтэй
                          </option>
                          <option className="!p-2" value="2">
                            Эмэгтэй
                          </option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <select className="form-control" placeholder="Гарчиг">
                          <option className="!p-2" value="">
                            Цусны бүлэг
                          </option>
                          <option className="!p-2" value="1">
                            &#8544;
                          </option>
                          <option className="!p-2" value="2">
                            &#8545;
                          </option>
                          <option className="!p-2" value="2">
                            &#8546;
                          </option>
                          <option className="!p-2" value="2">
                            &#8547;
                          </option>
                        </select>
                      </div>
                      <div className="col-sm-12 ">
                        <div
                          className="form-control flex items-center justify-between"
                          action=""
                        >
                          <label
                            htmlFor=""
                            className="text-gray-500 nunito-400"
                          >
                            Төрсөн өдөр :
                          </label>
                          <input
                            className=" mt-2 bg-transparent text-gray-500 select-none text-[13px]"
                            type="date"
                            onChange={(e) => {
                              setBirthday(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-2">
                      <textarea
                        className="form-control"
                        rows="4"
                        id="comment"
                        placeholder="Төрсөн аймаг, хот:"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="comment"
                        placeholder="Оршин суугаа хаяг:"
                      ></textarea>
                    </div>
                    <div className="col-sm-12">
                      <select name="" className="form-control" id="">
                        <option value="">СОНГОХ</option>
                        <option value="">Өөрийн</option>
                        <option value="">Түрээсийн</option>
                        <option value="">Эцэг/Эх хамаатан садангийн</option>
                      </select>
                    </div>
                  </form>
                </div>

                <div className="col-md-6">
                  <form className="mt-4 md:!mt-0">
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Регистрийн дугаар"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Утасны дугаар /гар/"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Утасны дугаар /гэр/"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <select className="form-control" placeholder="Гарчиг">
                          <option className="!p-2" value="">
                            Эмийн харшилтай эсэх
                          </option>
                          <option className="!p-2" value="1">
                            Тийм
                          </option>
                          <option className="!p-2" value="2">
                            Үгүй
                          </option>
                        </select>
                      </div>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Тийм бол ямар эм"
                        />
                      </div>
                      <div className="col-sm-6">
                        <select className="form-control" placeholder="Гарчиг">
                          <option className="!p-2" value="">
                            Ял шийтгэлтэй эсэх
                          </option>
                          <option className="!p-2" value="1">
                            Тийм
                          </option>
                          <option className="!p-2" value="2">
                            Үгүй
                          </option>
                        </select>
                      </div>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Тийм бол яагаад"
                        />
                      </div>
                      <div className="col-sm-6">
                        <select className="form-control" placeholder="Гарчиг">
                          <option className="!p-2" value="">
                            Жолооны үнэмлэхтэй эсэх
                          </option>
                          <option className="!p-2" value="1">
                            Тийм
                          </option>
                          <option className="!p-2" value="2">
                            Үгүй
                          </option>
                        </select>
                      </div>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Жолооны ангилал"
                        />
                      </div>
                    </div>
                    <div className="form-group"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-2">
                  2. Гэр бүлийн байдал /Зөвхөн ам бүлд байгаа хүмүүсийг бичнэ/
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <form className="mt-4 md:!mt-0">
                    <div className="row">
                      <div className="col-sm-6">
                        <select className="form-control" placeholder="Гарчиг">
                          <option className="!p-2" value="">
                            Гэрлэсэн эсэх
                          </option>
                          <option className="!p-2" value="1">
                            Тийм
                          </option>
                          <option className="!p-2" value="2">
                            Үгүй
                          </option>
                          <option className="!p-2" value="2">
                            Гэрлэлтээ цуцлуулсан
                          </option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
                <Form onSubmit={handleSubmit}>
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
              </div>
            </div>
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-2">
                  3. Боловсрол /Ерөнхий боловсролын сургуулийг оруулан бичнэ/
                </p>
              </div>
              <Education />
            </div>
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-2">
                  4. Сургалтанд хамрагдсан байдал
                </p>
              </div>
              <Trainings />
            </div>
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-2">
                  5. Гадаад хэлний мэдлэгийн түвшин
                </p>
              </div>
              <Languages />
            </div>
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-2">6. Таны Компьютерийн мэдлэг</p>
              </div>
              <ComputerSkills />
            </div>
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-2">7. Таны ажлын туршлага</p>
              </div>
              <WorkExperiences />
            </div>
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-0">
                  8. Таны ажил мэргэжил, туршлага, ур чадварын тодорхойлолт
                </p>
                <p className="m-0 ">
                  <i className="nunito-400 text-[13px]">
                    /Таны ажил мэргэжил, туршлага, ур чадвар, хувь хүний талаар
                    дэлгэрэнгүй мэдээлэл өгч чадах 3 хүний талаарх мэдээллийг
                    өгнө үү/
                  </i>
                </p>
              </div>
              <DefinePeople />
            </div>
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-2">9. Таны хувь хүний онцлогууд</p>
              </div>
              <PersonalSkills />
            </div>
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-2">
                  10. Таны эзэмшсэн ур чадварууд:
                </p>
              </div>
              <PersonalSkillSummaries />
            </div>
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-2">11. Таны урлаг спортын авьяас:</p>
              </div>
              <Talents />
            </div>
            <div className="container">
              <div className="heading text-start">
                <p className="mx-0 mt-0 mb-2">
                  12. Өөрийн талаар нэмэлт танилцуулгая:
                </p>
              </div>
              <Extra />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default CVDetail;

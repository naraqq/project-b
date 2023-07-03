import { useLocation } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
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
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
function CVDetail() {
  const location = useLocation();
  const meta_data = location.state;
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [originName, setOriginName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [bloodTypes, setBloodTypes] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [birthday, setBirthday] = useState("");
  const [registerNo, setRegisterNo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [homePhoneNumber, setHomePhoneNumber] = useState("");
  const [livingAddress, setLivingAddress] = useState("");
  const [realEstateStatus, setRealEstateStatus] = useState("");
  const [hasPillSideEffect, setHasPillSideEffect] = useState("");
  const [pillSideEffectDescription, setPillSideEffectDescription] =
    useState("");
  const [hasPunishmentHistory, setHasPunishmentHistory] = useState("");
  const [punishmentWhy, setPunishmentWhy] = useState("");
  const [familyStatus, setFamilyStatus] = useState("");
  const [hasDriverLicence, setHasDriverLicence] = useState("");
  const [driverLicenseClasses, setDriverLicenseClasses] = useState("");
  const [personalDescription, setPersonalDescription] = useState("");
  const [otherJobField, setOtherJobField] = useState("");
  const [salaryMinAmount, setSalaryMinAmount] = useState("");
  const [salaryMaxAmount, setSalaryMaxAmount] = useState("");
  const [possibleJobStartDate, setPossibleJobStartDate] = useState("");
  const [jobInformationSource, setJobInformationSource] = useState("");
  const [tdbAccount, setTdbAccount] = useState("");
  const [timeManagement, setTimeManagement] = useState("");
  const [personalGoal, setpersonalGoal] = useState("");
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
  const [educations, setEducations] = useState([
    {
      instituteName: "",
      educationStartDate: "",
      educationEndDate: "",
      studiedFieldName: "",
      educationType: "",
      educationBadge: "",
    },
  ]);
  const [trainings, setTrainings] = useState([
    {
      trainingFieldName: "",
      trainingInstituteName: "",
      trainingYear: "",
      trainingDuration: "",
      trainingCertificateNo: "",
      trainingScore: "",
    },
  ]);
  const [languages, setLanguages] = useState([
    {
      languageName: "",
      listeningSkillScore: "",
      speakingSkillScore: "",
      readingSkillScore: "",
      writingSkillScore: "",
      toeflScore: "",
      ieltsScore: "",
    },
  ]);
  const [computerSkills, setComputerSkills] = useState([
    {
      skillName: "Microsoft word",
      skillScore: "",
    },
    {
      skillName: "Microsoft excel",
      skillScore: "",
    },
    {
      skillName: "Microsoft Access",
      skillScore: "",
    },
    {
      skillName: "Microsoft Project",
      skillScore: "",
    },
    {
      skillName: "Microsoft powerpoint",
      skillScore: "",
    },
    {
      skillName: "Auto cad",
      skillScore: "",
    },
    {
      skillName: "Photo Shop",
      skillScore: "",
    },
    {
      skillName: "Coral Draw",
      skillScore: "",
    },
    {
      skillName: "Нэмэлт",
      skillScore: "",
    },
  ]);
  const [workExpierences, setWorkExpierences] = useState([
    {
      companyName: "",
      workOccupation: "",
      workDescription: "",
      workStartDate: "",
      workEndDate: "",
      salary: "",
      jobQuitReason: "",
    },
  ]);
  const [definePeople, setDefinePeople] = useState([
    {
      personName: "",
      personCompanyName: "",
      personOccupation: "",
      personPhoneNo: "",
      personKnownYearCount: "",
    },
  ]);
  const [personalSkills, setPersonalSkills] = useState([
    {
      prosConsType: 0,
      prosCons: "",
    },
    {
      prosConsType: 1,
      prosCons: "",
    },
  ]);
  const [personalSkillSummaries, setPersonalSkillSummaries] = useState([
    {
      skillName: "Мэргэжилийн ур чадвар",
      skillScore: "",
    },
    {
      skillName: "Бичиг баримт боловсруулах",
      skillScore: "",
    },
    {
      skillName: "Санал бодлоо чөлөөтэй илэрхийлэх",
      skillScore: "",
    },
    {
      skillName: "Харилцааны соёл",
      skillScore: "",
    },
    {
      skillName: "Оновчтой шийдвэр гаргах",
      skillScore: "",
    },
    {
      skillName: "Удирдан зохион байгуулах",
      skillScore: "",
    },
    {
      skillName: "Шинэ санаа дэвшүүлэх хэрэгжүүлэх",
      skillScore: "",
    },
    {
      skillName: "Бие дааж ажиллах",
      skillScore: "",
    },
    {
      skillName: "Багаар ажиллах",
      skillScore: "",
    },
    {
      skillName: "Хариуцлага хүлээх",
      skillScore: "",
    },
    {
      skillName: "Компьютерийн хэрэглээ",
      skillScore: "",
    },
    {
      skillName: "Гадаад хэлний мэдлэг",
      skillScore: "",
    },
  ]);
  const [talents, setTalents] = useState([
    {
      talentName: "",
      talentDuration: "",
      talentBadge: "",
      talentPrize: "",
      talentPrizeYear: "",
    },
  ]);
  const final = {
    requestCompanyId: selectedCompany,
    requestJobId: meta_data?.requestJobId ? meta_data?.requestJobId : "",
    lastName: lastname,
    firstName: firstname,
    originName: originName,
    age: age,
    sex: sex,
    birthDate: birthday,
    birthPlace: birthPlace,
    registerNo: registerNo,
    email: email,
    phoneNo: phoneNumber,
    homePhoneNo: homePhoneNumber,
    hasDriverLicense: hasDriverLicence,
    driverLicenseClasses: driverLicenseClasses,
    bloodTypes: bloodTypes,
    hasPillSideEffect: hasPillSideEffect,
    pillSideEffectDescription: pillSideEffectDescription,
    hasPunishmentHistory: hasPunishmentHistory,
    punishmentWhy: punishmentWhy,
    livingAddress: livingAddress,
    familyStatus: familyStatus,
    familyMembers: children,
    educations: educations,
    trainings: trainings,
    languages: languages,
    computerSkills: computerSkills,
    workExpierences: workExpierences,
    definePeople: definePeople,
    personalGoal: personalGoal,
    personalSkills: personalSkills,
    personalSkillSummaries: personalSkillSummaries,
    talents: talents,
    personalDescription: personalDescription,
    otherJobField: otherJobField,
    salaryMinAmount: salaryMinAmount,
    salaryMaxAmount: salaryMaxAmount,
    possibleJobStartDate: possibleJobStartDate,
    jobInformationSource: jobInformationSource,
    tdbAccount: tdbAccount,
    timeManagement: timeManagement,
  };

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
  // console.log(children);

  const removeChild = (index) => {
    const newChildren = [...children];
    newChildren.splice(index, 1);
    setChildren(newChildren);
  };

  const handleMemberTypeChange = (index, event) => {
    const newChildren = [...children];
    newChildren[index].memberType = event.target.value;
    setChildren(newChildren);
  };
  const handleMemberNameChange = (index, event) => {
    const newChildren = [...children];
    newChildren[index].memberName = event.target.value;
    setChildren(newChildren);
  };
  const handleBirthYearChange = (index, event) => {
    const newChildren = [...children];
    newChildren[index].memberBirthYear = event.target.value;
    setChildren(newChildren);
  };
  const handleMemberOccupationChange = (index, event) => {
    const newChildren = [...children];
    newChildren[index].memberOccupation = event.target.value;
    setChildren(newChildren);
  };
  const memberCompanyNameChange = (index, event) => {
    const newChildren = [...children];
    newChildren[index].memberCompanyName = event.target.value;
    setChildren(newChildren);
  };
  const memberJobNameChange = (index, event) => {
    const newChildren = [...children];
    newChildren[index].memberJobName = event.target.value;
    setChildren(newChildren);
  };
  const memberPhoneNoChange = (index, event) => {
    const newChildren = [...children];
    newChildren[index].memberPhoneNo = event.target.value;
    setChildren(newChildren);
  };

  const renderChildren = () => {
    return children.map((child, index) => {
      return (
        <Form.Group
          key={index}
          style={{
            position: "relative",
          }}
        >
          <div className="form-control w-full flex gap-2 flex-wrap justify-between">
            <div className="flex flex-col w-full  md:w-[calc(30%)]">
              <span className="text-gray-500 nunito-400">Таны юу болох:</span>
              <input
                onChange={(e) => {
                  handleMemberTypeChange(index, e);
                }}
                type="text"
                className="outline-none p-2 rounded "
              />
            </div>
            <div className="flex flex-col w-full  md:w-[calc(30%)]">
              <span className="text-gray-500 nunito-400">Овог нэр:</span>
              <input
                onChange={(e) => {
                  handleMemberNameChange(index, e);
                }}
                type="text"
                className="outline-none p-2 rounded "
              />
            </div>
            <div className="flex flex-col w-full  md:w-[calc(30%)]">
              <span className="text-gray-500 nunito-400">Төрсөн он:</span>
              <input
                onChange={(e) => {
                  handleBirthYearChange(index, e);
                }}
                type="date"
                className="outline-none p-2 rounded "
              />
            </div>
            <div className="flex flex-col w-full  md:w-[calc(30%)]">
              <span className="text-gray-500 nunito-400">Мэргэжил:</span>
              <input
                onChange={(e) => {
                  handleMemberOccupationChange(index, e);
                }}
                type="text"
                className="outline-none p-2 rounded "
              />
            </div>
            <div className="flex flex-col w-full  md:w-[calc(30%)]">
              <span className="text-gray-500 nunito-400">
                Одоо ажиллаж буй байгууллагын нэр:
              </span>
              <input
                onChange={(e) => {
                  memberCompanyNameChange(index, e);
                }}
                type="text"
                className="outline-none p-2 rounded "
              />
            </div>
            <div className="flex flex-col w-full  md:w-[calc(30%)]">
              <span className="text-gray-500 nunito-400">
                Одоо эрхэлж буй ажил, Албан тушаал:
              </span>
              <input
                onChange={(e) => {
                  memberJobNameChange(index, e);
                }}
                type="text"
                className="outline-none p-2 rounded "
              />
            </div>
            <div className="flex flex-col w-full  md:w-[calc(30%)]">
              <span className="text-gray-500 nunito-400">Утас</span>
              <input
                onChange={(e) => {
                  memberPhoneNoChange(index, e);
                }}
                type="number"
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
      );
    });
  };
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/v1/Anket/addAnket`, final, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.isSuccess == true) {
          setLoading(false);
          toast.success("Бид таны анкетыг хүлээж авлаа, Баярлалаа");
        } else {
          setLoading(false);
          // toast.error(res.data.resultMessage);
          toast.error("Алдаа гарлаа, Та мэдээллээ бүрэн бөглөнө үү");
        }
      })
      .catch((err) => {
        toast.error("Алдаа гарлаа, Та мэдээллээ бүрэн бөглөнө үү");
        setLoading(false);
      });
  };
  return (
    <Layout>
      <ToastContainer />
      {loading ? (
        <div className="body">
          <div className="main min-h-[calc(100vh-60px)] pt-3 flex justify-center items-center ">
            <Spinner animation="border" role="status" variant="danger">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : (
        <div className="body">
          <div className="main about-us ">
            <section className="contact" id="contact">
              <div className="container">
                <div className="heading text-start">
                  <p className="mx-0 mt-0 mb-2">1. Товч танилцуулга.</p>
                </div>
                <div className="col-md-12">
                  <form className="mt-4 md:!mt-0">
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          onChange={(e) => {
                            setLastname(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          placeholder="Овог"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          onChange={(e) => {
                            setFirstname(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          placeholder="Нэр"
                        />
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            type="email"
                            className="form-control"
                            placeholder="И-мейл хаяг"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <select
                          onChange={(e) => {
                            setSelectedCompany(e.target.value);
                          }}
                          value={selectedCompany}
                          className="form-control"
                          placeholder="Гарчиг"
                        >
                          <option className="!p-2" value="">
                            СОНГОХ
                          </option>
                          <option className="!p-2" value="1">
                            ИНСТАЛЛ НАРАН КОНСТРАКШН ХХК
                          </option>
                          <option className="!p-2" value="2">
                            ИНСТАЛЛ НАРАН КОНКРИТ ХХК
                          </option>
                        </select>
                      </div>
                    </div>
                  </form>
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
                            onChange={(e) => {
                              setOriginName(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Нас"
                            onChange={(e) => {
                              setAge(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-sm-6">
                          <select
                            onChange={(e) => {
                              setSex(e.target.value);
                            }}
                            className="form-control"
                            placeholder="Гарчиг"
                          >
                            <option className="!p-2" value="unknown">
                              Хүйс
                            </option>
                            <option className="!p-2" value="male">
                              Эрэгтэй
                            </option>
                            <option className="!p-2" value="female">
                              Эмэгтэй
                            </option>
                          </select>
                        </div>
                        <div className="col-sm-6">
                          <select
                            onChange={(e) => {
                              setBloodTypes(e.target.value);
                            }}
                            className="form-control"
                            placeholder="Гарчиг"
                          >
                            <option className="!p-2" value="unknown">
                              Цусны бүлэг
                            </option>
                            <option className="!p-2" value="1">
                              &#8544;
                            </option>
                            <option className="!p-2" value="2">
                              &#8545;
                            </option>
                            <option className="!p-2" value="3">
                              &#8546;
                            </option>
                            <option className="!p-2" value="4">
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
                          onChange={(e) => {
                            setBirthPlace(e.target.value);
                          }}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows="5"
                          id="comment"
                          placeholder="Оршин суугаа хаяг:"
                          onChange={(e) => {
                            setLivingAddress(e.target.value);
                          }}
                        ></textarea>
                      </div>
                      <div className="col-sm-12">
                        <select
                          onChange={(e) => {
                            setRealEstateStatus(e.target.value);
                          }}
                          name=""
                          className="form-control"
                          id=""
                        >
                          <option value="unknown">СОНГОХ</option>
                          <option value="Өөрийн">Өөрийн</option>
                          <option value="Түрээсийн">Түрээсийн</option>
                          <option value="Эцэг/Эх хамаатан садангийн">
                            Эцэг/Эх хамаатан садангийн
                          </option>
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
                            onChange={(e) => {
                              setRegisterNo(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Утасны дугаар /гар/"
                            onChange={(e) => {
                              setPhoneNumber(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Утасны дугаар /гэр/"
                            onChange={(e) => {
                              setHomePhoneNumber(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <select
                            onChange={(e) => {
                              setHasPillSideEffect(e.target.value);
                            }}
                            className="form-control"
                            placeholder="Гарчиг"
                          >
                            <option className="!p-2" value="unknown">
                              Эмийн харшилтай эсэх
                            </option>
                            <option className="!p-2" value="Тийм">
                              Тийм
                            </option>
                            <option className="!p-2" value="Үгүй">
                              Үгүй
                            </option>
                          </select>
                        </div>
                        <div className="col-sm-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Тийм бол ямар эм"
                            onChange={(e) => {
                              setPillSideEffectDescription(e.target.value);
                            }}
                          />
                        </div>
                        <div className="col-sm-6">
                          <select
                            onChange={(e) => {
                              setHasPunishmentHistory(e.target.value);
                            }}
                            className="form-control"
                            placeholder="Гарчиг"
                          >
                            <option className="!p-2" value="unknown">
                              Ял шийтгэлтэй эсэх
                            </option>
                            <option className="!p-2" value="Байгаа">
                              Тийм
                            </option>
                            <option className="!p-2" value="Байхгүй">
                              Үгүй
                            </option>
                          </select>
                        </div>
                        <div className="col-sm-12">
                          <input
                            onChange={(e) => {
                              setPunishmentWhy(e.target.value);
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Тийм бол яагаад"
                          />
                        </div>
                        <div className="col-sm-6">
                          <select
                            onChange={(e) => {
                              setHasDriverLicence(e.target.value);
                            }}
                            className="form-control"
                            placeholder="Гарчиг"
                          >
                            <option className="!p-2" value="unknown">
                              Жолооны үнэмлэхтэй эсэх
                            </option>
                            <option className="!p-2" value="Тийм">
                              Тийм
                            </option>
                            <option className="!p-2" value="Үгүй">
                              Үгүй
                            </option>
                          </select>
                        </div>
                        <div className="col-sm-12">
                          <input
                            onChange={(e) => {
                              setDriverLicenseClasses(e.target.value);
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Жолооны ангилал"
                          />
                        </div>
                      </div>
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
                          <select
                            onChange={(e) => {
                              setFamilyStatus(e.target.value);
                            }}
                            className="form-control"
                            placeholder="Гарчиг"
                          >
                            <option className="!p-2" value="">
                              Гэрлэсэн эсэх
                            </option>
                            <option className="!p-2" value="Гэрлэсэн">
                              Тийм
                            </option>
                            <option className="!p-2" value="Гэрлээгүй">
                              Үгүй
                            </option>
                            <option
                              className="!p-2"
                              value="Гэрлэлтээ цуцлуулсан"
                            >
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
                <Education
                  educations={educations}
                  setEducations={setEducations}
                />
              </div>
              <div className="container">
                <div className="heading text-start">
                  <p className="mx-0 mt-0 mb-2">
                    4. Сургалтанд хамрагдсан байдал
                  </p>
                </div>
                <Trainings trainings={trainings} setTrainings={setTrainings} />
              </div>
              <div className="container">
                <div className="heading text-start">
                  <p className="mx-0 mt-0 mb-2">
                    5. Гадаад хэлний мэдлэгийн түвшин
                  </p>
                </div>
                <Languages languages={languages} setLanguages={setLanguages} />
              </div>
              <div className="container">
                <div className="heading text-start">
                  <p className="mx-0 mt-0 mb-2">6. Таны Компьютерийн мэдлэг</p>
                </div>
                <ComputerSkills
                  computerSkills={computerSkills}
                  setComputerSkills={setComputerSkills}
                />
              </div>
              <div className="container">
                <div className="heading text-start">
                  <p className="mx-0 mt-0 mb-2">7. Таны ажлын туршлага</p>
                </div>
                <WorkExperiences
                  workExperiences={workExpierences}
                  setWorkExperiences={setWorkExpierences}
                />
              </div>
              <div className="container">
                <div className="heading text-start">
                  <p className="mx-0 mt-0 mb-0">
                    8. Таны ажил мэргэжил, туршлага, ур чадварын тодорхойлолт
                  </p>
                  <p className="m-0 ">
                    <i className="nunito-400 text-[13px]">
                      /Таны ажил мэргэжил, туршлага, ур чадвар, хувь хүний
                      талаар дэлгэрэнгүй мэдээлэл өгч чадах 3 хүний талаарх
                      мэдээллийг өгнө үү/
                    </i>
                  </p>
                </div>
                <DefinePeople
                  setDefinePeople={setDefinePeople}
                  definePeople={definePeople}
                />
              </div>
              <div className="container">
                <div className="heading text-start">
                  <p className="mx-0 mt-0 mb-2">9. Таны хувь хүний онцлогууд</p>
                </div>
                <PersonalSkills
                  personalSkills={personalSkills}
                  setPersonalSkills={setPersonalSkills}
                />
              </div>
              <div className="container">
                <div className="heading text-start">
                  <p className="mx-0 mt-0 mb-2">
                    10. Таны эзэмшсэн ур чадварууд:
                  </p>
                </div>
                <PersonalSkillSummaries
                  personalSkillSummaries={personalSkillSummaries}
                  setPersonalSkillSummaries={setPersonalSkillSummaries}
                />
              </div>
              <div className="container">
                <div className="heading text-start">
                  <p className="mx-0 mt-0 mb-2">
                    11. Таны урлаг спортын авьяас:
                  </p>
                </div>
                <Talents talents={talents} setTalents={setTalents} />
              </div>
              <div className="container">
                <div className="heading text-start">
                  <p className="mx-0 mt-0 mb-2">
                    12. Өөрийн талаар нэмэлт танилцуулга:
                  </p>
                </div>
                <Extra
                  setPersonalDescription={setPersonalDescription}
                  setOtherJobField={setOtherJobField}
                  setSalaryMaxAmount={setSalaryMaxAmount}
                  setSalaryMinAmount={setSalaryMinAmount}
                  setPossibleJobStartDate={setPossibleJobStartDate}
                  setJobInformationSource={setJobInformationSource}
                  setTdbAccount={setTdbAccount}
                  setTimeManagement={setTimeManagement}
                  setPersonalGoal={setpersonalGoal}
                />
              </div>
              <Button onClick={handleSubmit}>Илгээх</Button>
            </section>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default CVDetail;

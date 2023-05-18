import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Languages({ languages, setLanguages }) {
  const addChild = () => {
    setLanguages([
      ...languages,
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
  };

  const removeChild = (index) => {
    const newChildren = [...languages];
    newChildren.splice(index, 1);
    setLanguages(newChildren);
  };

  const handleLanguageName = (index, event) => {
    const newChildren = [...languages];
    newChildren[index].languageName = event.target.value;
    setLanguages(newChildren);
  };
  const handleListeningSkillScore = (index, event) => {
    const newChildren = [...languages];
    newChildren[index].listeningSkillScore = event.target.value;
    setLanguages(newChildren);
  };
  const handleSpeakingSkillScore = (index, event) => {
    const newChildren = [...languages];
    newChildren[index].speakingSkillScore = event.target.value;
    setLanguages(newChildren);
  };
  const handleReadingSkillScore = (index, event) => {
    const newChildren = [...languages];
    newChildren[index].readingSkillScore = event.target.value;
    setLanguages(newChildren);
  };
  const handleWritingSkillScore = (index, event) => {
    const newChildren = [...languages];
    newChildren[index].writingSkillScore = event.target.value;
    setLanguages(newChildren);
  };
  const handleToeflScore = (index, event) => {
    const newChildren = [...languages];
    newChildren[index].toeflScore = event.target.value;
    setLanguages(newChildren);
  };
  const handleIeltsScore = (index, event) => {
    const newChildren = [...languages];
    newChildren[index].ieltsScore = event.target.value;
    setLanguages(newChildren);
  };

  const renderChildren = () => {
    return languages.map((child, index) => (
      <Form.Group
        key={index}
        style={{
          position: "relative",
        }}
      >
        <div className="form-control w-full flex gap-2 flex-wrap justify-between">
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Гадаад хэлний нэр:</span>
            <input
              onChange={(e) => {
                handleLanguageName(index, e);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          {index == 0 && (
            <div className="flex flex-col w-full  md:w-[calc(30%)]">
              <span className="text-gray-500 nunito-400">TOEFL</span>
              <input
                onChange={(e) => {
                  handleToeflScore(index, e);
                }}
                type="text"
                className="outline-none p-2 rounded "
              />
            </div>
          )}
          {index == 0 && (
            <div className="flex flex-col w-full  md:w-[calc(30%)]">
              <span className="text-gray-500 nunito-400">IELTS</span>
              <input
                onChange={(e) => {
                  handleIeltsScore(index, e);
                }}
                type="text"
                className="outline-none p-2 rounded "
              />
            </div>
          )}

          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Ярьсныг ойлгох</span>
            <select
              onChange={(e) => {
                handleListeningSkillScore(index, e);
              }}
              className="p-2 rounded "
              placeholder="Гарчиг"
            >
              <option className="!p-2" value="unknown">
                СОНГОХ
              </option>
              <option className="!p-2" value="Сайн">
                Сайн
              </option>
              <option className="!p-2" value="Дунд">
                Дунд
              </option>
              <option className="!p-2" value="Муу">
                Муу
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Өөрөө ярих</span>
            <select
              onChange={(e) => {
                handleSpeakingSkillScore(index, e);
              }}
              className="p-2 rounded "
              placeholder="Гарчиг"
            >
              <option className="!p-2" value="unknown">
                СОНГОХ
              </option>
              <option className="!p-2" value="Сайн">
                Сайн
              </option>
              <option className="!p-2" value="Дунд">
                Дунд
              </option>
              <option className="!p-2" value="Муу">
                Муу
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Уншиж ойлгох</span>
            <select
              onChange={(e) => {
                handleReadingSkillScore(index, e);
              }}
              className="p-2 rounded "
              placeholder="Гарчиг"
            >
              <option className="!p-2" value="unknown">
                СОНГОХ
              </option>
              <option className="!p-2" value="Сайн">
                Сайн
              </option>
              <option className="!p-2" value="Дунд">
                Дунд
              </option>
              <option className="!p-2" value="Муу">
                Муу
              </option>
            </select>
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Бичиж орчуулах</span>
            <select
              onChange={(e) => {
                handleWritingSkillScore(index, e);
              }}
              className="p-2 rounded "
              placeholder="Гарчиг"
            >
              <option className="!p-2" value="unknown">
                СОНГОХ
              </option>
              <option className="!p-2" value="Сайн">
                Сайн
              </option>
              <option className="!p-2" value="Дунд">
                Дунд
              </option>
              <option className="!p-2" value="Муу">
                Муу
              </option>
            </select>
          </div>
        </div>
        {languages.length > 1 && (
          <button
            className="absolute right-[5px] bottom-[5px] text-red-500 text-[18px]"
            onClick={() => removeChild(index)}
          >
            <i className="bi bi-trash active:scale-105"></i>
          </button>
        )}
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

export default Languages;

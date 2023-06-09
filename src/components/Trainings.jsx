import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Trainings({ trainings, setTrainings }) {
  const addChild = () => {
    setTrainings([
      ...trainings,
      {
        trainingFieldName: "string",
        trainingInstituteName: "string",
        trainingYear: "string",
        trainingDuration: "string",
        trainingCertificateNo: "string",
        trainingScore: "string",
      },
    ]);
  };

  const removeChild = (index) => {
    const trainings = [...trainings];
    trainings.splice(index, 1);
    setTrainings(trainings);
  };

  const handleTrainingFieldName = (index, event) => {
    const newtrainings = [...trainings];
    newtrainings[index].trainingFieldName = event.target.value;
    setTrainings(newtrainings);
  };
  const handleTrainingInstituteName = (index, event) => {
    const newtrainings = [...trainings];
    newtrainings[index].trainingInstituteName = event.target.value;
    setTrainings(newtrainings);
  };
  const handleTrainingYear = (index, event) => {
    const newtrainings = [...trainings];
    newtrainings[index].trainingYear = event.target.value;
    setTrainings(newtrainings);
  };
  const handleTrainingDuration = (index, event) => {
    const newtrainings = [...trainings];
    newtrainings[index].trainingDuration = event.target.value;
    setTrainings(newtrainings);
  };
  const handleTrainingCertificateNo = (index, event) => {
    const newtrainings = [...trainings];
    newtrainings[index].trainingCertificateNo = event.target.value;
    setTrainings(newtrainings);
  };
  const handleTrainingScore = (index, event) => {
    const newtrainings = [...trainings];
    newtrainings[index].trainingScore = event.target.value;
    setTrainings(newtrainings);
  };

  const renderChildren = () => {
    return trainings.map((child, index) => (
      <Form.Group
        key={index}
        style={{
          position: "relative",
        }}
      >
        <div className="form-control w-full flex gap-2 flex-wrap justify-between">
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Ямар чиглэл, Сэдвээр:
            </span>
            <input
              onChange={(e) => {
                handleTrainingFieldName(index, e);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Хаана ямар байгууллагад
            </span>
            <input
              onChange={(e) => {
                handleTrainingInstituteName(index, e);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Хэзээ</span>
            <input
              onChange={(e) => {
                handleTrainingYear(index, e);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Ямар хугацаагаар</span>
            <input
              onChange={(e) => {
                handleTrainingDuration(index, e);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">
              Сертифкат, гэрчилгээний №
            </span>
            <input
              onChange={(e) => {
                handleTrainingCertificateNo(index, e);
              }}
              type="text"
              className="outline-none p-2 rounded "
            />
          </div>
          <div className="flex flex-col w-full  md:w-[calc(30%)]">
            <span className="text-gray-500 nunito-400">Үнэлгээ</span>
            <input
              onChange={(e) => {
                handleTrainingScore(index, e);
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

export default Trainings;

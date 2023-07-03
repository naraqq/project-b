import { useState, useEffect } from "react";
import Layout from "../components/Layouts/Layout";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Jobs() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/v1/Anket/getJobToApply`, {
        headers: {
          "Content-Type": "applicaiton/json",
        },
      })
      .then((res) => {
        setLoading(false);
        setData(res.data.datas);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      {loading ? (
        <div className="body">
          <div className="main min-h-[calc(100vh-60px)] pt-3 flex justify-center items-center ">
            <Spinner animation="border" role="status" variant="danger">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : (
        <div className="h-full relative bg-white">
          <div className="body-cus wrapper"></div>

          <div className="body ">
            <div className="main about-us min-h-[calc(100vh-200px)] ">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-3 pb-10 border-b mt-5">
                {data?.length > 0 ? (
                  data?.map((job, index) => {
                    return (
                      <div
                        key={index}
                        className="nunito-400 shadow-sm text-gray-600 w-full md:w-full text-sm p-3 rounded bg-[#F9F9F9]"
                      >
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/010/815/682/original/hiring-recruitment-open-vacancy-design-we-are-hiring-join-to-team-announcement-creative-3d-illustration-free-vector.jpg"
                          alt="we are hiring"
                          className="w-full rounded"
                        />
                        <div className="px-2 nunito-400 mt-2">
                          {job.jobTitle}
                        </div>
                        <div className="px-2 nunito-400">{job.jobDuty}</div>
                        <div className="mt-2">
                          {job.jobRequirement.map((item, ind) => {
                            return (
                              <p
                                className="p-2 bg-sky-100 text-sky-700 rounded nunito-400"
                                key={ind}
                              >
                                {item}
                              </p>
                            );
                          })}
                        </div>
                        <div className="w-full flex items-center mt-3 justify-between">
                          <div className="px-2 flex items-center nunito-400 text-sm">
                            Зарлагдсан:
                            <img
                              className="w-5 ml-1 mb-1"
                              src="data:image/png;base64,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"
                            ></img>
                            {job.applicableStartDate.split(" ")[0]}
                          </div>
                          <div className="px-2 flex items-center nunito-400 text-sm">
                            Дуусах:
                            <img
                              className="w-5 ml-1 mb-1"
                              src="data:image/png;base64,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"
                            ></img>
                            {job.applicableEndDate.split(" ")[0]}
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            navigate("/CV", {
                              state: {
                                jobId: job.jobid,
                              },
                            });
                          }}
                          className="border border-gray-500 mt-2 rounded p-2 w-full hover:shadow"
                        >
                          Анкет илгээх
                        </button>
                      </div>
                    );
                  })
                ) : (
                  <p className="p-2 bg-sky-100 text-sky-700 rounded nunito-400">
                    Ажлын байр зарлагдаагүй байна.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Jobs;

import { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import HumanResource from "../components/HumanResource";
import Jobs from "./Jobs";
import JobsSmall from "./job/JobsSmall";
function WhyourCompany() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(0);
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
          <div className="body">
            <div className="main min-h-[calc(100vh-380px)]">
              <div className="container ">
                <div className="row mt-14">
                  <div className="col-md-3">
                    <div className="content">
                      <div
                        onClick={() => {
                          setSelected(0);
                        }}
                        className={`border-b  border-t  ${
                          selected === 0 && "!bg-gray-100 text-red-500"
                        } p-3 nunito-400 text-[14px] text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                      >
                        Хүний нөөцийн бодлого
                      </div>
                      <div
                        onClick={() => {
                          setSelected(1);
                        }}
                        className={`border-b ${
                          selected === 1 && "!bg-gray-100 text-red-500"
                        } p-3 nunito-400 text-[14px] text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                      >
                        Нээлттэй ажлын байр
                      </div>
                      <div
                        onClick={() => {
                          navigate("/cv-detail", {
                            state: {
                              requestJobId: "1112233",
                            },
                          });
                        }}
                        className={`border-b ${
                          selected === 2 && "!bg-gray-100 text-red-500"
                        } p-3 nunito-400 text-[14px] text-gray-500 hover:bg-gray-50 select-none cursor-pointer rounded`}
                      >
                        Анкет бөглөх
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    {selected == 0 && <HumanResource />}
                    {selected == 1 && <JobsSmall />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default WhyourCompany;

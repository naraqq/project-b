import { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
function InfoPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/v1/News/getNews`, {
        headers: {
          "Content-Type": "applicaiton/json",
        },
      })
      .then((res) => {
        setNews(res.data.news);
        setLoading(false);
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
        <div className="body ">
          <div className="main about-us min-h-[calc(100vh-60px)]  ">
            <section className="contact" id="contact">
              <div className="container">
                <div className="row">
                  <div className="col-md-2">
                    <div className="title mt-10">
                      <div className="w-full border-b-[3px] border-red-500 mb-2">
                        <h3 className="!text-[40px]">Мэдээ мэдээлэл</h3>
                      </div>
                      <p>
                        Бид компанийн үйл ажиллагаатай холбоотой мэдээ
                        мэдээллийг танд хүргэж байна.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-10 flex flex-wrap gap-4 justify-center md:justify-start ">
                    {news.map((info, index) => {
                      // console.log(info);
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            navigate("/news-detail", {
                              state: info,
                            });
                          }}
                          className={`w-[300px] ${
                            info.newsType == 2 && "hidden"
                          } p-2 rounded hover:!shadow-lg shadow h-[400px] overflow-hidden !text-[#999999] cursor-pointer`}
                        >
                          <img
                            src={info.imgPath}
                            alt=""
                            className="rounded h-[200px] w-full"
                          />
                          <div className="h-[150px] w-full">
                            <p className="nunito-500 text-sm mt-2 truncate">
                              • {info.title}
                            </p>
                            <div className="nunito-500 text-sm mt-2">
                              {info.description}
                            </div>
                          </div>
                          <div className="nunito-500 text-sm mt-auto w-full flex justify-end">
                            {info.createdDate}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default InfoPage;

import { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
function InfoPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 555 });
  const isTablet = useMediaQuery({ minWidth: 556, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  let gridColumns = "grid-cols-1";
  if (isTablet) {
    gridColumns = "grid-cols-2";
  } else if (isDesktop) {
    gridColumns = "grid-cols-3";
  }
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
      ) : news.length > 0 ? (
        <div className="body ">
          <div className="main about-us min-h-[calc(100vh-60px)]  ">
            <section className="contact " id="contact">
              <div className="container">
                <div className="row">
                  {/* <div className="col-md-10 flex flex-wrap gap-4 justify-center md:justify-start "> */}
                  <div className={`grid ${gridColumns} gap-4`}>
                    {news.map((info, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            navigate("/news-detail", {
                              state: info,
                            });
                          }}
                          className={` ${
                            info.newsType == 2 && "hidden"
                          } p-2 rounded h-[400px] hover:scale-105 transition-all font-bold overflow-hidden !text-[#323232] cursor-pointer`}
                        >
                          <img
                            src={info.imgPath}
                            alt=""
                            className="rounded-cus shadow-sm h-[300px] w-full"
                          />
                          <div className="h-[50px] w-full">
                            <p className="nunito-500 text-sm mt-2 truncate !font-[900]">
                              {info.title}
                            </p>
                            <div className="nunito-500 !font-[300] text-sm mt-2 truncate text-gray-500">
                              {info.description}
                            </div>
                          </div>
                          <div className="nunito-500 !font-[300] text-sm text-gray-500 w-full flex justify-start">
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
      ) : (
        <div>Шинэ мэдээ байхгүй байна.</div>
      )}
    </Layout>
  );
}

export default InfoPage;

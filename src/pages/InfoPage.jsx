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
        <div
          style={{
            background:
              "url(https://www.hsimagazine.com/wp-content/uploads/2020/01/iStock-1028568006.jpg)",
          }}
          className="body"
        >
          <div className="main min-h-[calc(100vh-60px)] pure-glass pt-3 flex justify-center items-center ">
            <Spinner animation="border" role="status" variant="danger">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : (
        <div
          style={{
            background:
              "url(https://www.hsimagazine.com/wp-content/uploads/2020/01/iStock-1028568006.jpg)",
          }}
          className="body"
        >
          <div className="main min-h-[calc(100vh-60px)] pure-glass py-3">
            <ul className="cards gap-4 justify-center flex-wrap md:justify-start flex-wrap px-5 ">
              {news?.map((news, index) => {
                return (
                  <li
                    key={index}
                    className={`h-[390px] shadow hover:shadow w-full md:w-[calc(30%)] rounded bg-white ${
                      news.newsType !== "1" && "!hidden"
                    } `}
                  >
                    <img
                      alt="img"
                      className="rounded-t h-[220px]"
                      src={`${news.imgPath}`}
                    />
                    <div className="p-2 h-[120px]">
                      <h2 className="card_title nunito-500 truncate">
                        {news.title}
                      </h2>
                      <div className="card_text nunito-400 h-[60px] overflow-hidden text-ellipsis">
                        {news.description}
                      </div>
                      <div
                        onClick={() => {
                          navigate("/news-detail", {
                            state: news,
                          });
                        }}
                        className="btn card_btn mt-auto nunito-400"
                      >
                        Дэлгэрэнгүй
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default InfoPage;

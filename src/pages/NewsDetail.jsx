import Layout from "../components/Layouts/Layout";
import { useLocation } from "react-router-dom";
function NewsDetail() {
  const location = useLocation();
  const certainNews = location.state;
  return (
    <Layout>
      <div
        style={{
          background:
            "url(https://www.hsimagazine.com/wp-content/uploads/2020/01/iStock-1028568006.jpg)",
        }}
        className="body"
      >
        <div className="main min-h-[calc(100vh-60px)] glass">
          <div className="w-full  h-full p-4">
            <img
              className="w-full min-h-[calc(30vh)] rounded"
              src={`${certainNews?.imgPath}`}
              alt=""
            />
            <div className="w-full h-full p-3 bg-[#F9F9F9] my-2 rounded">
              <p className="nunito-300 p-2">{certainNews?.description}</p>
            </div>
            <div className="w-full flex justify-end">
              {" "}
              <div className="w-fit h-full p-3 bg-[#F9F9F9] my-2 rounded">
                <p className="nunito-400 text-sm text-end  p-2">
                  {certainNews?.createdDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NewsDetail;

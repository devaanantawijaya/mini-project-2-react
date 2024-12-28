import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import { ExtraData } from "../../ExtraData";

const DetailPage = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const { extraDataUsers } = ExtraData();

  const rating = extraDataUsers[id - 1].rating;
  const star = Math.floor(rating / 2);
  const noStar = 5 - star;

  const getDetailUser = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      setDetail(res.data.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getDetailUser();
  }, []);

  return (
    <section>
      <Navbar />
      <div className="flex justify-center pt-28">
        <div className="grid md:grid-cols-[auto_1fr] p-10 gap-10">
          <div>
            <img src={detail.avatar} alt="" className="w-96 rounded-xl" />
          </div>
          <div>
            <div className="pb-10">
              <h1 className="pb-2 text-4xl font-semibold md:text-5xl">{`${detail.first_name} ${detail.last_name}`}</h1>
              <p className="pb-2 text-2xl font-semibold text-blue-500">
                {extraDataUsers[id - 1].skill}
              </p>
              <div className="flex items-center gap-2 text-gray-500">
                <FaLocationDot />
                <p>{extraDataUsers[id - 1].location}</p>
              </div>
            </div>
            <div className="pb-10">
              <p className="font-medium text-gray-500">RATING</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-medium">{rating}</p>
                <p className="flex gap-1 text-xl">
                  {[...Array(star)].map((_, idx) => (
                    <FaStar key={idx} className="text-blue-500" />
                  ))}
                  {[...Array(noStar)].map((_, idx) => (
                    <FaStar key={idx} className="text-gray-300" />
                  ))}
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xl font-medium">
                <FaUser />
                <h1>About</h1>
              </div>
              <div>
                <h1 className="py-5 font-medium text-gray-500">
                  CONTACT INFORMATION
                </h1>
                <div className="grid grid-cols-[auto_1fr] gap-6">
                  <h1>Phone</h1>
                  <p>: {extraDataUsers[id - 1].phone}</p>
                  <h1>Email</h1>
                  <p>
                    : <span className="text-blue-500">{detail.email}</span>
                  </p>
                  <h1>Site</h1>
                  <p>
                    :{" "}
                    <span className="text-blue-500">
                      www.
                      {`${String(detail.first_name).toLowerCase()}${String(
                        detail.last_name
                      ).toLowerCase()}`}
                      .com
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <h1 className="py-5 font-medium text-gray-500">
                  BASIC INFORMATION
                </h1>
                <div className="grid grid-cols-[auto_1fr] gap-6">
                  <h1>Birthday</h1>
                  <p>: {extraDataUsers[id - 1].birthday}</p>
                  <h1>Gender</h1>
                  <p>: {extraDataUsers[id - 1].gender}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;

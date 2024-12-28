import foto from "../../assets/user.jpg";
import Button from "../Button";
import { FaRegUserCircle } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CiHashtag } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ExtraData } from "../../ExtraData";

export const CardDetailUser = (Props) => {
  const { selectedUser } = Props;

  const { extraDataUsers } = ExtraData();

  return (
    <div className="flex flex-col items-center md:py-5 shadow-xl bg-slate-100 rounded-xl md:w-[500px] md:h-[410px] w-72 py-3">
      <div className="items-center gap-5 md:flex">
        <div className="flex justify-center pb-2 md:justify-start md:pb-2">
          <img
            src={selectedUser ? selectedUser.avatar : foto}
            alt=""
            className="border-2 border-blue-500 rounded-full h-28 w-28"
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold">
            {selectedUser
              ? `${selectedUser.first_name} ${selectedUser.last_name}`
              : "Member Name"}
          </h1>
          <p className="text-xl font-semibold text-blue-500">
            {selectedUser
              ? extraDataUsers[selectedUser.id - 1].skill
              : "Skill Name"}
          </p>
        </div>
      </div>
      <div className="grid w-full gap-3 p-5 my-2 bg-white md:my-5 md:gap-10 md:grid-cols-2 border-y-2">
        {[
          {
            icon: <MdOutlineEmail />,
            title: "Email",
            content: selectedUser
              ? `${selectedUser.email}`
              : "member@email.com",
          },
          {
            icon: <LuPhone />,
            title: "Phone",
            content: selectedUser
              ? extraDataUsers[selectedUser.id - 1].phone
              : "+ 0 (000) 000-0000",
          },
          {
            icon: <GrLocation />,
            title: "Location",
            content: selectedUser
              ? extraDataUsers[selectedUser.id - 1].location
              : "City, Country",
          },
          {
            icon: <LiaBirthdayCakeSolid />,
            title: "Birtday",
            content: selectedUser
              ? extraDataUsers[selectedUser.id - 1].birthday
              : "00-00-0000",
          },
        ].map((val, idx) => (
          <div className="flex flex-col items-start" key={idx}>
            <div className="flex items-center gap-2">
              <div className="text-2xl">{val.icon}</div>
              <div>
                <div className="font-bold">{val.title}</div>
                <div>{val.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between w-full md:px-5 md:flex-row">
        <h1 className="flex items-center gap-1 pb-2 md:pb-0">
          <CiHashtag /> Employee ID: {selectedUser ? `${selectedUser.id}` : "0"}
        </h1>
        <Link to={`/detail-profile/${selectedUser && selectedUser.id}`}>
          <Button
            logo={<FaRegUserCircle />}
            title={`View Profile`}
            disable={!selectedUser}
            p="px-4"
            bg="bg-blue-500"
          />
        </Link>
      </div>
    </div>
  );
};

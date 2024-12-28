import { ApiUsers } from "../../Api";
import { useEffect, useState } from "react";
import { CardDetailUser } from "../../components/Card";
import Button from "../../components/Button";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Navbar from "../../components/Navbar";
import { IoCaretBackSharp } from "react-icons/io5";

const Member = () => {
  const { users, getUsers, skip, setSkip, totalPages } = ApiUsers();

  const handleNext = () => {
    setSkip(skip + 1);
  };
  const handleBack = () => {
    setSkip(skip - 1);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [skip]);

  const [selectedUser, setSelectedUser] = useState();

  const handleClickUser = (user) => {
    setSelectedUser(user);
  };

  const [isList, setIsList] = useState(false);

  const handleIsList = () => {
    setIsList(!isList);
  };

  console.log("open", isList);
  return (
    <section>
      <Navbar />
      <div className="relative md:grid md:grid-cols-[auto_1fr] md:pt-0 pt-28">
        <div className="p-3 md:hidden">
          <Button
            logo={<IoIosArrowDropright />}
            onClick={handleIsList}
            p="px-1"
            hiddenT="hidden"
            bg="bg-blue-500"
          />
        </div>
        <div
          className={`absolute md:relative top-28 md:top-0 left-0 md:px-10 p-3 min-h-screen w-80 shadow-xl bg-gray-50 transition-transform duration-300 md:rounded-none rounded-tr-3xl ${
            isList ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 z-20`}
        >
          <div className="pb-3 md:hidden">
            <Button
              logo={<IoIosArrowDropleft />}
              onClick={handleIsList}
              p="px-1"
              hiddenT="hidden"
              bg="bg-blue-500"
            />
          </div>
          <div className="">
            <div className="pb-5">
              <h1 className="text-3xl font-bold text-blue-500">Team Members</h1>
              <p className="text-gray-500">View and manage your team</p>
            </div>
            <div className="flex justify-center gap-3 pb-3">
              <Button
                logo={<IoCaretBackSharp />}
                hiddenT="hidden"
                p="px-1"
                onClick={handleBack}
                disable={skip === 1 && "disable"}
              />
              <p>{skip}</p>
              <Button
                logo={<IoCaretBackSharp />}
                hiddenT="hidden"
                p="px-1 transform scale-x-[-1]"
                onClick={handleNext}
                disable={skip === totalPages.total_pages && "disable"}
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1">
              {users.map((item) => {
                const isSelected = selectedUser && selectedUser.id === item.id;
                return (
                  <div
                    key={item.id}
                    className={`p-3 rounded-lg cursor-pointer hover:bg-blue-100 ${
                      isSelected && "bg-blue-100"
                    }`}
                  >
                    <div
                      className="flex-col items-center gap-2 md:flex md:flex-row"
                      onClick={() => handleClickUser(item)}
                    >
                      <div className="flex justify-center md:justify-start">
                        <img
                          src={item.avatar}
                          alt=""
                          className="w-16 h-16 border-2 border-blue-500 rounded-full "
                        />
                      </div>
                      <div className="text-center md:text-start">
                        <h3 className="font-semibold">{`${item.first_name} ${item.last_name}`}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="z-10 flex items-center justify-center">
          <CardDetailUser selectedUser={selectedUser} />
        </div>
      </div>
    </section>
  );
};

export default Member;

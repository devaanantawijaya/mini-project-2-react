import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import picture from "../../assets/members.png";
import together from "../../assets/together.png";
import { FaApple } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* CTA 1*/}
      <section className="grid gap-10 px-10 md:gap-20 pt-36 md:grid-cols-2 pb-28 md:px-28 md:pt-44">
        <img src={picture} alt="" />
        <div className="flex flex-col justify-between">
          <div className="">
            <h1 className="pb-8 text-5xl font-semibold text-center text-blue-500 md:text-start">
              Meet Our Members
            </h1>
            <p className="pb-8 text-lg text-center text-gray-500 md:text-start md:pb-0">
              Discover the stories, skills, and passions of our incredible
              members. Each one brings unique experiences and insights that
              inspire and drive our community forward. Connect with them and see
              how we’re making a difference together!
            </p>
          </div>
          <Link to={"/member"}>
            <div className="flex justify-center md:justify-start">
              <Button
                title={`Let's Talk!`}
                bg="bg-blue-500"
                hiddenL="hidden"
                p="px-5 text-2xl"
                w="fit"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* CTA 2 */}
      <section className="grid items-center md:grid-cols-[6fr_4fr] md:gap-20 md:px-28 pb-28 gap-10">
        <img src={together} alt="" className="block px-10 md:hidden md:px-0" />
        <div>
          <div>
            <h1 className="px-10 pb-8 text-5xl font-semibold text-center text-blue-500 md:px-0 md:text-start">
              Work Together
            </h1>
            <p className="px-10 pb-10 text-lg text-center text-gray-500 md:px-0 md:text-start">
              Collaboration is at the heart of everything we do. By working
              together, we create innovative solutions, share knowledge, and
              achieve common goals. Join us and become part of a team that
              values teamwork, creativity, and impact.
            </p>
          </div>
          <Link to={"/member"}>
            <div className="flex justify-center md:justify-start">
              <Button
                title={`Try it now`}
                bg="bg-blue-500"
                hiddenL="hidden"
                p="px-5 text-2xl"
                w="fit"
              />
            </div>
          </Link>
        </div>
        <img src={together} alt="" className="hidden md:block" />
      </section>

      {/* everywhere */}
      <section className="flex mx-10 bg-blue-500 md:mx-28 mb-28 rounded-3xl">
        <div className="px-12 py-12 text-center md:px-28">
          <h1 className="pb-5 text-4xl font-bold text-white">
            Your expertise, making an impact everywhere
          </h1>
          <p className="text-lg text-white">
            Our members bring diverse skills and expertise to the table, ready
            to make a difference wherever opportunities arise. Whether it’s
            creating, problem-solving, or innovating, their contributions help
            build impactful solutions across industries and communities. Join us
            and see how your talents can shine anywhere
          </p>
        </div>
      </section>

      {/* sponsors */}
      <section className="px-10 pb-28 md:px-0">
        <h1 className="pb-10 text-4xl font-bold text-center text-gray-500">
          Our Sponsors
        </h1>
        <div className="grid justify-center grid-cols-2 gap-5 md:flex md:gap-52 text-7xl justify-items-center">
          <FaApple className="text-gray-500"/>
          <FaGoogle className="text-red-500"/>
          <FaMicrosoft className="text-blue-500"/>
          <IoLogoAndroid className="text-green-500"/>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

import React from "react";

import ImageCard from "../utils/ImageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faBaseball,
  faBirthdayCake,
  faBlog,
  faBurger,
  faBusinessTime,
  faCamera,
  faCar,
  faCode,
  faDollarSign,
  faEnvelope,
  faFingerprint,
  faGamepad,
  faGlassCheers,
  faHeart,
  faHeartPulse,
  faIndustry,
  faLightbulb,
  faMagic,
  faMoneyBill,
  faNewspaper,
  faPaintBrush,
  faScaleBalanced,
  faTelevision,
  faTractor,
  faUserGroup,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import Marquee from "react-fast-marquee";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <Navigation />
      <div>
        {/* hero  */}
        <div className="xxl:w-8/12 md:w-9/12 w-11/12 mx-auto p-5 text-sm font-medium text-gray-500 ">
          {/* section -1 hero  */}
          <div className="">
            <div className="my-10">
              <p className="uppercase">WELCOME TO BLOGSTER APP</p>
              <div className="md:flex gap-5">
                <div className=" md:w-2/3 w-full">
                  <h1 className="text-5xl font-bold  text-gray-800 mt-3 flex-1">
                    Easy platform for{" "}
                    <span className="text-blue-ribbon-600">
                      reading and writing
                    </span>{" "}
                    blogs and newsletters
                  </h1>
                  <p className="flex-1 text-gray-500 mt-5 w-4/5 ">
                    Enjoy your blogs and newsletters in a space made for mindful
                    reading while making room for your inbox keep track of all
                    the things out there.
                  </p>
                </div>
                <div className="flex-1 md:block hidden hero rounded-full"></div>
              </div>
            </div>
            {/* image grid  */}
            <div className=" justify-between flex flex-col gap-5 items-center mx-auto my-16 relative overflow-hidden w-full">
              <Marquee pauseOnHover={true} >
                <div className="flex gap-5  ">
                  <div className="ml-5">
                    <ImageCard
                      className="ml-11"
                      image={
                        "https://images.pexels.com/photos/270220/pexels-photo-270220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt={"Crime"}
                    />
                  </div>
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Tourism"}
                  />
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/3059654/pexels-photo-3059654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Education"}
                  />{" "}
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Industry"}
                  />
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/1464210/pexels-photo-1464210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Politics"}
                  />
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/2204179/pexels-photo-2204179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Sports"}
                  />
                  <ImageCard  
                    className=""
                    image={
                      "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Space"}
                  />
                </div>
              </Marquee>
              <Marquee pauseOnHover={true}  direction="right">
                <div className="flex gap-5">
                  <div className="ml-5">
                    <ImageCard
                      image={
                        "https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt={"Mars"}
                    />
                  </div>
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Finance"}
                  />
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/5279346/pexels-photo-5279346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Engine"}
                  />{" "}
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/256229/pexels-photo-256229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Bomb"}
                  />
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"SpaceX"}
                  />
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/3800517/pexels-photo-3800517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Cricket"}
                  />
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/144200/pexels-photo-144200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Insects"}
                  />
                </div>
              </Marquee>
              <Marquee pauseOnHover={true}  direction="left">
                <div className="flex gap-5  ">
                  <div className="ml-5">
                    <ImageCard
                      image={
                        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt={"Cars"}
                    />
                  </div>
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/5803142/pexels-photo-5803142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Bikes"}
                  />
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Video games"}
                  />{" "}
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Cats"}
                  />
                  <ImageCard
                    className=""
                    image={
"https://images.pexels.com/photos/70080/elephant-africa-african-elephant-kenya-70080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1  "                    }
                    alt={"Wildlife"}
                  />
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/7256547/pexels-photo-7256547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Flamingo"}
                  />
                  <ImageCard
                    className=""
                    image={
                      "https://images.pexels.com/photos/2397653/pexels-photo-2397653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt={"Ocean"}
                  />
                </div>
              </Marquee>
            </div>
            {/* topics  */}
            <div className="flex flex-col gap-3 mt-14">
              <Marquee
                pauseOnHover={true}
                
                direction="right"
                className="rounded-full"
              >
                <div className="flex gap-11">
                  <div className="slider-container ml-11">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Cryptocurrency</span>
                  </div>
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faScaleBalanced}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Politics</span>
                  </div>
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faIndustry}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Industry</span>
                  </div>
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faLightbulb}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Creativity</span>
                  </div>
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faCode}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Coding</span>
                  </div>{" "}
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faGamepad}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Gaming</span>
                  </div>{" "}
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faBaseball}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Sports</span>
                  </div>{" "}
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faCar}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Travel</span>
                  </div>{" "}
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faPaintBrush}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Painting</span>
                  </div>
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faTelevision}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Movies</span>
                  </div>
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faCamera}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Photography</span>
                  </div>
                </div>
              </Marquee>{" "}
              <Marquee pauseOnHover={true}  className="rounded-full">
                <div className="flex gap-11">
                  <div className="slider-container ml-11">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faBusinessTime}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Buisness</span>
                  </div>{" "}
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faMoneyBill}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Marketing</span>
                  </div>
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faNewspaper}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Newspaper</span>
                  </div>
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faTractor}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Agriculture</span>
                  </div>
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faBurger}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Food</span>
                  </div>{" "}
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faHeartPulse}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Health and Fitness</span>
                  </div>{" "}
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faUserGroup}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Team work</span>
                  </div>{" "}
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faBirthdayCake}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Bakery</span>
                  </div>{" "}
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faGlassCheers}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Bar</span>
                  </div>
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faMagic}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Magic</span>
                  </div>
                  <div className="slider-container">
                    <div className=" slider-icons">
                      <FontAwesomeIcon
                        icon={faVideo}
                        size="sm"
                        className="text-blue-ribbon-600"
                      />
                    </div>
                    <span>Vlog</span>
                  </div>
                </div>
              </Marquee>{" "}
            </div>
          </div>

          {/* section-2  features */}
          <div className="my-28" id="features">
            <div className="text-center">
              <p className="uppercase">Features of Blogster</p>{" "}
              <h1 className="text-5xl font-bold text-gray-800 mt-3 flex-1 lg:w-3/5 mx-auto">
                Blogster
                <span className="text-blue-ribbon-600"> always provides </span>
                what the user needs
              </h1>
            </div>
            <div className="flex gap-5 flex-col mt-16">
              <div className="features-container">
                <div className="features-icon flex">
                  <FontAwesomeIcon icon={faEnvelope} size="xl" />
                </div>
                <div className="flex-1">
                  <h5 className="text-xl font-bold text-gray-800 ">
                    Keep your email address no other.
                  </h5>
                  <p className="text-gray-500">
                    Blogster does not require the creation of a new email
                    address. Just sign in with your Gmail and we'll do the heavy
                    lifting. Enjoy your newspaper and enjoy your daily
                    activities.
                  </p>
                </div>
                <div className="features-icon ml-auto  md:flex hidden ">
                  <FontAwesomeIcon icon={faArrowUp} size="xl" />
                </div>
              </div>{" "}
              <div className="features-container">
                <div className="features-icon flex">
                  <FontAwesomeIcon icon={faHeart} size="xl" />
                </div>
                <div className="flex-1">
                  <h5 className="text-xl font-bold text-gray-800 ">
                    Designed for mindful and enjoy reading.
                  </h5>
                  <p className="text-gray-500">
                    Everything in Blogster was built with one goal in the mind
                    to create more enjoyable and mindful newsletter reading
                    experience. No distraction, no stress, no guilt.
                  </p>
                </div>
                <div className="features-icon ml-auto  md:flex hidden">
                  <FontAwesomeIcon icon={faArrowRight} size="xl" />
                </div>
              </div>
              <div className="features-container">
                <div className="features-icon flex">
                  <FontAwesomeIcon icon={faBlog} size="xl" />
                </div>
                <div className="flex-1">
                  <h5 className="text-xl font-bold text-gray-800 ">
                    Blogs and Newsletters in a flash!
                  </h5>
                  <p className="text-gray-500">
                    Blogster to navigate with Blogflash you can close through
                    your News letter in an easy to read feed notifications from
                    contributors to you in less than 3 seconds.
                  </p>
                </div>
                <div className="features-icon ml-auto  md:flex hidden">
                  <FontAwesomeIcon icon={faArrowDown} size="xl" />
                </div>
              </div>
              <div className="features-container">
                <div className="features-icon flex">
                  <FontAwesomeIcon icon={faFingerprint} size="xl" />
                </div>
                <div className="flex-1">
                  <h5 className="text-xl font-bold text-gray-800 ">
                    You are in safe and reliable hands
                  </h5>
                  <p className="text-gray-500">
                    Your emails are your business not hours. We organise your
                    emails. Nothing else. Your data is 100% private and Secure
                    we just sent newspapers and blocks to your mail in one time.
                  </p>
                </div>
                <div className="md:flex hidden features-icon ml-auto ">
                  <FontAwesomeIcon icon={faArrowLeft} size="xl" />
                </div>
              </div>
            </div>
          </div>
          {/* section-3 how it works  */}
          <div className="my-28 " id="works">
            <p className="uppercase">#how it works</p>
            <div className="flex flex-col md:flex-row gap-5">
              <h1 className="text-5xl font-bold  text-gray-800 mt-3  md:w-2/5">
                <span className="text-blue-ribbon-600">3 steps </span> for easy
                blogs and newsletter
              </h1>
              <p className="md:w-3/5 text-gray-500">
                User convenience is our top priority, and we constantly enhance
                our services to meet your needs. We value your suggestions and
                will diligently incorporate them into our improvements.{" "}
              </p>
            </div>
            <div className="flex lg:flex-row flex-col gap-5 mt-16">
              <div className="flex gap-5">
                <div>
                  <div className="features-icon flex">
                    <h5 className="text-xl font-bold text-blue-ribbon-600">
                      01
                    </h5>
                  </div>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-gray-800 ">
                    Log in with Gmail account
                  </h5>
                  <p className="text-gray-500 my-2">
                    Blogster integrates directly with your Gmail account.
                  </p>
                  <span className="text-blue-ribbon-600 cursor-pointer">
                    Learn more
                  </span>
                </div>
              </div>{" "}
              <div className="flex gap-5">
                <div>
                  <div className="features-icon flex ">
                    <h5 className="text-xl font-bold text-blue-ribbon-600 ">
                      02
                    </h5>
                  </div>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-gray-800 ">
                    Pick your blog and newsletter
                  </h5>
                  <p className="text-gray-500 my-2">
                    Just select which you'd like to read and receive in Blogster
                  </p>
                  <span className="text-blue-ribbon-600 cursor-pointer">
                    Learn more
                  </span>
                </div>
              </div>{" "}
              <div className="flex gap-5">
                <div>
                  <div className="features-icon flex ">
                    <h5 className="text-xl font-bold text-blue-ribbon-600">
                      03
                    </h5>
                  </div>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-gray-800 ">
                    Customize your experience
                  </h5>
                  <p className="text-gray-500 my-2">
                    Blogster allows you to group your newsletters and blogs by
                    topic importance
                  </p>
                  <span className="text-blue-ribbon-600 cursor-pointer">
                    Learn more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;

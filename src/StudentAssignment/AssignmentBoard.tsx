import React, { useState } from "react";
import { FaPenFancy } from "react-icons/fa6";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GoLink } from "react-icons/go";
import { MdOutlineCalendarViewWeek } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { IoIosCalendar } from "react-icons/io";
import { LuLoader } from "react-icons/lu";
import { GiTimeBomb } from "react-icons/gi";
import { RiEdit2Line } from "react-icons/ri";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoArrowDown } from "react-icons/io5";
import { IoMdArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggled } from "../global/globalState";

const AssignmentBoard = () => {
  const [showtab, setTab] = useState(false);
  const handleTab = () => {
    setTab(!showtab);
  };

  const [select, setSelect] = useState<boolean>(false);
  const onSelect = () => {
    setSelect(!select);
  };

  const toggle: any = useSelector((state: any) => state.toggle);

  const dispatch = useDispatch();

  return (
    <div className=" w-full  min-h-screen md:min-h-[100vh] lg:min-h-[70vh] ">
      <div className="ml-[80px]">
        <FaPenFancy className="text-[50px]" />
      </div>
      <div className=" font-bold text-[40px] ml-[80px]">Assignment Board</div>

      <div className=" w-[100%] min-h-[400px]  flex items-center justify-center flex-wrap  ">
        <div className="border h-[300px] w-[300px] bg-green-500 ">
          <div className="flex items-center gap-2">
            <div className="">
              <GoLink className="text-[20px]" />
            </div>
            <div className=" font-semibold">QUICK LINKS</div>
          </div>

          <div className=" w-[300px] h-[80px]">
            Add a web bookomark
            <div
              onClick={handleTab}
              className="hidden md:block animate-pulse pr-4"
            >
              {!showtab ? <IoMdArrowUp size={40} /> : <IoArrowDown size={40} />}
            </div>
            <div>
              {!showtab ? (
                <div className="hidden" />
              ) : (
                <div className="  h-[150px] w-[100%] border rounded-lg relative">
                  <div className="flex items-center">
                    <input
                      placeholder="Add a bookmark"
                      className="w-[97%] h-[30px]"
                      type="email"
                      required
                      //  value={email}
                    />
                  </div>

                  <div className=" flex items-center justify-center mt-2">
                    <div
                      className=" bg-blue-400 text-white h-[20%]
           w-[50%] rounded-lg flex items-center justify-center"
                    >
                      Create a bookmark
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" w-[70%] flex flex-col items-center min-h-[300px] lg:ml-[80px]">
          <div className="flex lg:w-full items-center border-b gap-3 mt-5">
            <div>
              <MdOutlineSpaceDashboard className="text-[25px]" />
            </div>
            <div className=" text-[22px]">Assignment Progress</div>
          </div>

          <div className="flex justify-center lg:items-center lg:justify-between gap-3 flex-wrap lg:flex-nowrap">
            {/* //not started */}
            <div className=" mt-4 ">
              <div className="flex items-center bg-slate-300 w-[130px] h-[30px] justify-center rounded-2xl ">
                <div>
                  <GoDotFill className="text-[25px]" />
                </div>
                <div className="text-[18px]">Not started</div>
              </div>

              <div
                className="group w-[300px] border h-[90px] mt-3 shadow-xl rounded-md  
            transition-all duration-300 flex flex-row justify-between p-3 hover:bg-slate-50"
              >
                <div>
                  <p>Mathematics</p>
                  <div className="">Apirl 13, 2024</div>
                </div>
                <div className="w-[40px]  h-[100%] relative flex">
                  <div className="w-[40px] h-[100%]  pl-6  absolute top-0 hidden group-hover:block">
                    <RiEdit2Line />
                  </div>
                </div>
              </div>
            </div>

            {/* //in progress// */}
            <div className=" mt-4 ">
              <div className="flex items-center bg-slate-400 w-[130px] h-[30px] justify-center rounded-2xl ">
                <div>
                  <GoDotFill className="text-[25px]" />
                </div>
                <div className="text-[18px]">
                  {!toggle ? " Not Started" : <div>rtyuio</div>}
                </div>
              </div>

              <div
                className="group w-[300px] border h-[90px] mt-3 shadow-xl rounded-md  
            transition-all duration-300 flex flex-row justify-between p-3 hover:bg-slate-50"
              >
                <div>
                  <p>Mathematics</p>
                  <div className="">Apirl 13, 2024</div>
                </div>
                <div className="w-[40px]  h-[100%] relative flex">
                  <div className="w-[40px] h-[100%]  pl-6  absolute top-0 hidden group-hover:block">
                    <RiEdit2Line />
                  </div>
                </div>
              </div>
            </div>

            {/* //Done */}
            <div className=" mt-4 ">
              <div className="flex items-center bg-green-200 w-[100px] h-[30px] justify-center rounded-2xl ">
                <div>
                  <GoDotFill className="text-[25px]" />
                </div>
                <div className="text-[18px]">Done</div>
              </div>

              <div
                className="group w-[300px] border h-[90px] mt-3 shadow-xl rounded-md  
            transition-all duration-300 flex flex-row justify-between p-3 hover:bg-slate-50"
              >
                <div>
                  <p>Mathematics</p>
                  <div className="">Apirl 13, 2024</div>
                </div>
                <div className="w-[40px]  h-[100%] relative flex">
                  <div className="w-[40px] h-[100%]  pl-6  absolute top-0 hidden group-hover:block">
                    <RiEdit2Line />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[70%] min-h-[200px] mt-5 lg:ml-[80px] ">
          <div className="flex items-center gap-2 border-b">
            <div>
              <MdOutlineCalendarViewWeek />
            </div>
            <div className="text-[18px]">All</div>
          </div>

          <div className="flex justify-center lg:justify-between  mt-2  flex-wrap lg:flex-nowrap">
            <div className="w-[300px] lg:w-[400px] h-[200px]">
              <div className="flex items-center gap-2 border-b ">
                <div className="text-[20px]">
                  <IoBookOutline />
                </div>
                <div className="text-[18px]">Subject</div>
              </div>
              <div className=" text-[19px]">
                <div>Mathematics</div>
                <div>Mathematics</div>
                <div>Mathematics</div>
                <div>Mathematics</div>
              </div>
            </div>

            <div className="w-[300px] lg:w-[400px] h-[200px]">
              <div className="flex items-center border-b gap-2">
                <div className="text-[20px]">
                  <IoIosCalendar />
                </div>
                <div className="text-[18px]">Due to</div>
              </div>
              <div className=" text-[19px]">
                <div>April 13, 2023</div>
                <div>April 13, 2023</div>
                <div>April 13, 2023</div>
                <div>April 13, 2023</div>
              </div>
            </div>

            <div className=" w-[300px] lg:w-[400px] h-[200px]">
              <div className="flex items-center border-b gap-2">
                <div className="text-[20px]">
                  <GiTimeBomb />
                </div>
                <div className="text-[18px]">Due time</div>
              </div>

              <div className=" text-[19px]">
                <div>10:30PM</div>
                <div>10:30PM</div>
                <div>10:30PM</div>
                <div>10:30PM</div>
              </div>
            </div>

            <div className=" w-[300px] lg:w-[400px] h-[200px]">
              <div className="flex items-center border-b gap-2">
                <div className="text-[20px]">
                  <LuLoader />
                </div>
                <div className="text-[18px]">Status</div>
              </div>

              <div
                className="flex relative items-center bg-slate-400 w-[130px] hover:cursor-pointer h-[30px] justify-center rounded-2xl"
                onClick={() => {
                  onSelect();
                }}
              >
                <div>
                  <GoDotFill className="text-[25px]" />
                </div>
                <div className="text-[18px]">In progress</div>
                {select ? (
                  <div className="absolute top py-3 rounded-md bg-black text-white px-4 -right-10">
                    <div className="w-auto flex flex-col items-center">
                      <span
                        className="my-2"
                        onClick={() => {
                          dispatch(toggled());
                        }}
                      >
                        Not started
                      </span>
                      <span className="my-2">In Progress</span>
                      <span className="my-2">Done</span>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex items-center bg-slate-400 w-[130px] h-[30px] justify-center rounded-2xl mt-1">
                <div>
                  <GoDotFill className="text-[25px]" />
                </div>
                <div className="text-[18px]">not started</div>
              </div>

              <div className="flex items-center bg-slate-400 w-[130px] h-[30px] justify-center rounded-2xl mt-1">
                <div>
                  <GoDotFill className="text-[25px]" />
                </div>
                <div className="text-[18px]">In progress</div>
              </div>

              <div className="flex items-center bg-slate-400 w-[90px] h-[30px] justify-center rounded-2xl mt-1">
                <div>
                  <GoDotFill className="text-[25px]" />
                </div>
                <div className="text-[18px]">Done</div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default AssignmentBoard;

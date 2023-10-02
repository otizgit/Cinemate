import React, { useState } from "react";
import searchLinks from "../../assets/data/searchLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function ResultsFilter(props) {
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  function toggleCategoryView() {
    setCategoryOpen((prevCategory) => !prevCategory);
  }

  function handleFilterClick(link) {
    setCategoryOpen(false);
    props.setCategory(link);
  }

  return (
    <div className="padding lg:flex justify-between items-center">
      <p className="font-sans mb-5 text-[1.75rem] text-center text-white tracking-wide">
        Search Results
      </p>
      <div className="relative mb-10 lg:w-[20rem]">
        <button
          onClick={toggleCategoryView}
          className="border-2 w-full  bg-black rounded-xl border-primary py-3 px-4"
        >
          <div className="flex justify-between items-center">
            <p className="tracking-wider text-[.85rem]">Select Category</p>
            <FontAwesomeIcon
              icon={faCaretDown}
              className={`text-primary font ${
                isCategoryOpen ? "rotate-180" : ""
              } transition-all`}
            />
          </div>
        </button>
        <div
          className={`absolute z-[2] ${
            isCategoryOpen ? "block" : "hidden"
          } rounded-xl border-primary overflow-hidden block bg-black border-2 top-[110%] w-full left-0`}
        >
          {isCategoryOpen &&
            searchLinks.map((links) => {
              return (
                <div key={links.id}>
                  <div>
                    <button
                      onClick={() => handleFilterClick(links.keyword)}
                      className={`${
                        props.category === links.keyword
                          ? "bg-primary text-white"
                          : ""
                      } tracking-wider w-[100%] hover:bg-primary font-semibold hover:text-white text-[.8rem] text-priText-300 py-5 pl-4 text-left`}
                    >
                      {links.link}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
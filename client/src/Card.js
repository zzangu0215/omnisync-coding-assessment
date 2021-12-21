import React, { useState } from "react";
import Heart from "react-heart";

export default function Card({ data, favoriteItems }) {
  const [active, setActive] = useState(false);

  const addFavourite = (data) => {
    if (active) {
      try {
        favoriteItems.splice(favoriteItems.indexOf(data), 1);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        favoriteItems.push(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <div className="w-11/12 mx-auto rounded border">
        <div className="bg-white p-10 shadow-sm">
          <h3 className="text-lg font-medium text-gray-800">
            {data.solicitation_title}
          </h3>
          <p className="text-sm font-light text-gray-600 my-3">{data.agency}</p>

          <div className="h-1 w-full mx-auto border-b my-5"></div>

          <Heart
            isActive={active}
            onClick={() => {
              setActive(!active);
              addFavourite(data);
            }}
            animationScale={1.25}
            style={{ width: "3rem" }}
          />

          <div className="transition hover:bg-indigo-50">
            <div className="cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <h3>
                <span className="font-black">Branch: </span> {data.branch}
              </h3>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <h3>
                <span className="font-black">Program / Phase / Year: </span>{" "}
                {data.program} / {data.phase} / {data.solicitation_year}
              </h3>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <h3>
                <span className="font-black">Solicitation Number: </span>{" "}
                {data.solicitation_number}
              </h3>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <h3>
                <span className="font-black">Release Date: </span>{" "}
                {data.release_date}
              </h3>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <h3>
                <span className="font-black">Open Date: </span> {data.open_date}
              </h3>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <h3>
                <span className="font-black">Application Due Date: </span>{" "}
                {data.application_due_date.join(" | ")}
              </h3>
            </div>
          </div>

          <div className="transition hover:bg-indigo-50">
            <div className="cursor-pointer transition flex space-x-5 px-5 items-center h-16">
              <h3>
                <span className="font-black">Close Date: </span>{" "}
                {data.close_date}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

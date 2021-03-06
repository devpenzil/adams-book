import React, { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
function Notelist() {
  const note = "";

  return (
    <>
      <div className="p-4">
        <div>
          {note
            ? note.map((obj, index) => {
                return (
                  <div
                    key={index}
                    className="border-2 border-green-appgreendark p-2 my-4 "
                  >
                    <div className="title">
                      <div className="text-xl font-semibold">{obj.title}</div>
                      <div className="text-sm text-right">
                        created on {obj.date}
                      </div>
                    </div>
                    <div className="note mt-8">{obj.content}</div>
                    <div className="note mt-8 flex justify-between">
                      <div className="cursor-pointer text text-base-blue">
                        Edit note
                      </div>
                      <div className="cursor-pointer text-base-red">
                        Delete note
                      </div>
                    </div>
                  </div>
                );
              })
            : "Loading..."}
          {note.length === 0 ? <Loader /> : ""}
        </div>
      </div>
    </>
  );
}

export default Notelist;

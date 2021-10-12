import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import image from "../../../assets/image.png";
import docu from "../../../assets/document.png";
import video from "../../../assets/video.png";
import audio from "../../../assets/audio.png";
import PrimaryInput from "../../../components/PrimaryInput";
import PrimaryButton from "../../../components/PrimaryButton";
import PrimaryTextArea from "../../../components/PrimaryTextArea";
import ThumbImg from "../../../components/ThumbImg";
import { addingNotes } from "../../../Redux/slices/addNoteSlice";
function Createnote() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [nowdate, setNowdate] = useState();
  const [button, setButton] = useState("Create Note")

  useEffect(() => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let fullDate = `${day}.${month}.${year}.`;
    setNowdate(fullDate);
  }, []);

  const payload = {
    title: title,
    content: content,
    date: nowdate,
  };
  const addnote = (payload) => {
    setButton("Loading")
    if (payload.title === undefined || payload.content === undefined) {
      toast("Add title and content");
    } else {
      dispatch(addingNotes(payload));
    }
    setTimeout(() => {
      setButton("Create Note")
    }, 3000);
  };
  return (
    <>
      <div className="p-4 create-note">
        <div className="text-3xl font-semibold">Create new page</div>
        <div>
          <PrimaryInput
            triggerchange={(e) => setTitle(e.target.value)}
            type={"text"}
            label={"Note title"}
            bg={"white"}
          />
          <PrimaryTextArea
            triggerchange={(e) => setContent(e.target.value)}
            label={"Note Content"}
          />

          <div className="mt-6">
            <div className="font-semibold">Attachments</div>
            <div className="flex">
              <ThumbImg path={image} />
              <ThumbImg path={docu} />
              <ThumbImg path={audio} />
              <ThumbImg path={video} />
            </div>
          </div>

          <PrimaryButton
            triggerclick={() => addnote(payload)}
            label={button}
          />
        </div>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #0B8E8A",
            padding: "10px",
            color: "#0B8E8A",
          },
        }}
      />
    </>
  );
}

export default Createnote;

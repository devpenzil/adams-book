import React from "react";
import image from "../../../assets/image.png";
import docu from "../../../assets/document.png";
import video from "../../../assets/video.png";
import audio from "../../../assets/audio.png";
import PrimaryInput from "../../../components/PrimaryInput";
import PrimaryButton from "../../../components/PrimaryButton";
import PrimaryTextArea from "../../../components/PrimaryTextArea";
import ThumbImg from "../../../components/ThumbImg";
function Createnote() {
  return (
    <>
      <div className="p-4">
        <div className="text-3xl font-semibold">Create new page</div>
        <div>
          <PrimaryInput type={"text"} label={"Note title"} bg={"white"} />
          <PrimaryTextArea label={"Note Content"} />

          <div className="mt-6">
            <div className="font-semibold">Attachments</div>
            <div className="flex">
              <ThumbImg path={image} />
              <ThumbImg path={docu} />
              <ThumbImg path={audio} />
              <ThumbImg path={video} />
            </div>
          </div>

          <PrimaryButton label={"Create note"} />
        </div>
      </div>
    </>
  );
}

export default Createnote;

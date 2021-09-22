import React from "react";
import image from '../assets/image.png'
import docu from '../assets/document.png'
import video from '../assets/video.png'
import audio from '../assets/audio.png'
function Createnote() {
  return (
    <div className="p-4">
      <div className="text-3xl font-semibold">Create new page</div>
        <div>
            <div className="mt-6">
                <div className="font-semibold">Note Title</div>
                    <input
                    autoFocus
                    className="p-2 w-full font-semibold bg-base-white border-2 border-green-appgreendark rounded-xl outline-none"
                    type="text"
                    name="username"
                    id="username"
                />
            </div>

            <div className="mt-6">
                <div className="font-semibold">Content</div>
                <textarea className="p-2 w-full font-semibold bg-base-white border-2 border-green-appgreendark rounded-xl outline-none" name="content" id="content" cols="30" rows="10"></textarea>
            </div>

            <div className="mt-6">
                <div className="font-semibold">Attachments</div>
                <div className="flex">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <img src={docu} alt="" />
                    </div>
                    <div>
                        <img src={audio} alt="" />
                    </div>
                    <div>
                        <img src={video} alt="" />
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <button className="p-2 w-full font-semibold text-base-white bg-green-appgreendark border-2 hover:opacity-60 border-green-appgreendark rounded-xl outline-none" >Create note</button>
            </div>
    
      </div>
    </div>
  );
}

export default Createnote;

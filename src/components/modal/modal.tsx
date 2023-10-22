import React, { useEffect, useState } from "react";
import { useInfoStore } from "@/store";
import { FaPause, FaPlay, FaTimes } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import { Element } from "@/interfaces/app.interface";
import ReactPlayer from "react-player";
import { BiPlus } from "react-icons/bi";
import { BsVolumeDown, BsVolumeMute } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

const ModalPage = () => {
  const [trailer, setTrailer] = useState<string>("");
  const [muted, setMuted] = useState<boolean>(true);
  const [playing, setPlaying] = useState<boolean>(false);

  const { modal, setModal, currentMovie } = useInfoStore();

  const base_url = process.env.NEXT_PUBLIC_API_DOMAIN as string;

  const api_key = process.env.NEXT_PUBLIC_API_KEY as string;

  const api = `${base_url}/${
    currentMovie?.media_type === "tv" ? "tv" : "movie"
  }/${currentMovie.id}/videos?api_key=${api_key}&languuage=en-US`;

  useEffect(() => {
    const fetchVideoData = async () => {
      const data = await fetch(api).then((res) => res.json());
      if (data?.results) {
        const index = data.results.findIndex(
          (el: Element) => el.type === "Trailer"
        );
        setTrailer(data?.results[index]?.key);
      }
    };
    fetchVideoData();
    // eslint-disable-next-line
  }, [currentMovie]);

  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <Modal
        open={modal}
        onClose={handleClose}
        className="!top-7 z-50 fixed right-0 left-0 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll scrollbar-hide"
      >
        <>
          <button
            onClick={handleClose}
            className="modalButton absolute top-5 right-5 !z-40 bg-[#181818] h-9 w-9"
          >
            <FaTimes />
          </button>

          <div className="relative pt-[55%]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer}`}
              playing={playing}
              width={"100%"}
              height={"100%"}
              style={{ position: "absolute", top: 0, left: 0 }}
              muted={muted}
            />

            <div className="absolute bottom-10 left-10 flex items-center justify-between px-18 w-full">
              <div className="flex space-x-2 items-center">
                <button
                  onClick={() => setPlaying((prev) => !prev)}
                  className="flex items-center gap-x-2 rounded bg-white px-8 py-2 text-xl font-bold text-black transition hover:bg-[#e6e6e6]"
                >
                  {playing ? (
                    <>
                      <FaPause className="h-7 w-7 text-black" />
                      Pause
                    </>
                  ) : (
                    <>
                      <FaPlay className="h-7 w-7 text-black" />
                      Play
                    </>
                  )}
                </button>

                <button className="modalButton h-9 w-9 font-bold text-xl ">
                  <BiPlus />
                </button>
                <button className="modalButton  h-9 w-9 font-bold text-xl">
                  <AiOutlineLike />
                </button>
                <button
                  className="modalButton h-9 w-9 font-bold text-xl "
                  onClick={() => setMuted((prev) => !prev)}
                >
                  {muted ? <BsVolumeMute /> : <BsVolumeDown />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
            <div className="space-y-6 text-lg">
              <div className="flex items-center space-x-2 text-sm">
                <p className="font-semibold text-green-400">
                  {Math.floor(currentMovie!.vote_average * 10)}% Match
                </p>
                <p className="font-light">{currentMovie?.release_date}</p>
                <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                  HD
                </div>
              </div>

              <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                <p className="w-5/6">{currentMovie?.overview}</p>
                <div className="flex flex-col space-y-3 text-sm">
                  <div>
                    <span className="text-[gray]">Original language:</span>{" "}
                    {currentMovie?.original_language}
                  </div>

                  <div>
                    <span className="text-[gray]">Total votes:</span>{" "}
                    {currentMovie?.vote_count}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  );
};

export default ModalPage;

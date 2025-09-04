import Link from "next/link";
import Image from "next/image";

import { AiFillInfoCircle } from "react-icons/ai";
import { ShowDiscover } from "@/types";
import { getData } from "@/api";

const getShow = async (): Promise<ShowDiscover | undefined> => {
  const show = getData("/trending/movie/day?language=en-US", {
    next: { revalidate: 86400 },
  }).then((res) => {
    return res.results[0];
  });
  return show;
};

const Billboard = async () => {
  const show = await getShow();

  return (
    <div className="relative group h-[40vw] md:h-[25vw] flex w-full rounded-2xl overflow-hidden z-0">
      <div className="absolute inset-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/original${show?.backdrop_path}`}
          fill
          alt="Poster"
        ></Image>
      </div>
      <div className="flex justify-between items-center mr-[4%] mb-[2%] self-end w-full text-sm font-normal text-[#e8e8e8]">
        <div className="relative">
          <div className="flex items-center max-h-[50px] w-[30vw] pl-3 bg-[#e8e8e819] backdrop-filter backdrop-blur-[10px] rounded-tr-lg rounded-br-lg text-[#3DD2CC] text-xs md:text-lg font-bold text-ellipsis overflow-hidden">
            <h2>{show?.title || show?.name}</h2>
          </div>
        </div>

        <div className="flex gap-5">
          <Link href={`/${show?.title ? "movie" : "tv"}/${show?.id}`}>
            <div className="flex justify-center items-center gap-2 h-8 w-28 bg-[#e8e8e819] backdrop-filter backdrop-blur-[2.5px] rounded-lg transition-all hover:opacity-60">
              <AiFillInfoCircle />
              More info
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Billboard;

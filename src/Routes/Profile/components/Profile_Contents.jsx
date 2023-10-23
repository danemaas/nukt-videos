import { useFetchChannelVideos } from "../../../hooks/customHooks";
import { useParams } from "react-router-dom";
import { VideosGrid } from "../../../components/VideosGrid";
import { useAuthContext } from "../../../context/AuthContext";

export const Profile_Contents = () => {
  const { id } = useParams();
  const videos = useFetchChannelVideos(id);
  const { user } = useAuthContext();

  return (
    <div className="w-full h-full bg-black text-white pb-[2rem] -translate-y-[4rem]">
      {id === user.uid ? (
        <p className="text-center text-[1.2rem] mt-[2rem]">
          no contents available for this profile
        </p>
      ) : (
        <VideosGrid videos={videos} />
      )}
    </div>
  );
};

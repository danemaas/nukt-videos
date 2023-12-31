import { useFetchChannelDetails } from "../../hooks/customHooks";
import { Outlet } from "react-router-dom";
import { CoverPhoto } from "./components/CoverPhoto";
import { ProfileDetails } from "./components/ProfileDetails";
import { ProfilePic } from "./components/ProfilePic";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";

export const User = () => {
  const { id } = useParams();
  const { channelDetail } = useFetchChannelDetails(id);
  const { user } = useAuthContext();

  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    if (channelDetail) {
      setDetail(channelDetail);
      setLoading(false);
    } else {
      setDetail(user);
      setLoading(false);
    }
  }, [id, channelDetail, user]);

  return (
    <section className="w-full min-h-[100vh] bg-black text-white">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <CoverPhoto />
          <ProfilePic
            image={
              channelDetail?.snippet?.thumbnails?.high?.url || user.photoURL
            }
          />
          <ProfileDetails channelDetail={detail} />
          <Outlet />
        </>
      )}
    </section>
  );
};

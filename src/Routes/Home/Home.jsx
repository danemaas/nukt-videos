import { Hero } from "./components/Hero";
import { VideoFeed } from "./components/VideoFeed";

export const Home = () => {
  return (
    <div className="w-full min-h-[100vh] bg-black">
      <Hero />
      <VideoFeed />
    </div>
  );
};

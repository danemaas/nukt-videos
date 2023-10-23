import { LoginForm } from "../../components/Forms";
import { Footer } from "../../components/Footer/Footer";

export const Login = () => {
  return (
    <section className="w-full min-h-[100vh] relative bg-hero-pattern bg-no-repeat bg-cover">
      <div
        className="text-white bg-black/60 backdrop-blur-sm w-full min-h-[100vh] pt-[10rem]
        flex flex-col justify-between items-center gap-[15rem]"
      >
        <LoginForm />
        <Footer />
      </div>
    </section>
  );
};

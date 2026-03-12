import { ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-14"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-fade-in-up">
        Hello, I'm Jihan Lee.
        <br />
        <span className="rainbow-text">Frontend</span> developer.
      </h1>

      <p className="mt-6 max-w-xl text-muted-foreground text-lg animate-fade-in-up [animation-delay:200ms] opacity-0">
        끊임없이 학습하고 성장하는 프론트엔드 개발자입니다.
        <br />
        사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 지향합니다.
      </p>
      <a
        href="#about"
        className="mt-12 animate-bounce-slow text-muted-foreground"
      >
        <ChevronDown className="size-8" />
      </a>
    </section>
  );
}

export default Hero;

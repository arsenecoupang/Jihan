import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import TimelineSection from "@/components/sections/Timeline";
import ProjectCard from "@/components/shared/ProjectCard";
import TimelineCard from "@/components/shared/TimelineCard";

function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="about" className="max-w-3xl mx-auto px-4 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
        About My Journey 🎓
      </h2>

      <div ref={timelineRef} className="relative">
        <div className="absolute left-8 md:left-12 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-white/10 rounded-full" />
        <div className="absolute left-8 md:left-12 top-2 bottom-2 w-0.5 -translate-x-1/2 overflow-hidden rounded-full">
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="h-full w-full bg-linear-to-b from-green-400 to-emerald-600"
          />
        </div>

        <TimelineSection year="2026">
          <TimelineCard
            company="포트폴리오 사이트 제작"
            role="Frontend Developer"
            period="2026.03"
            description="지금 보고 계신 이 사이트입니다. 직접 디자인하고 개발해서 Vercel에 배포했습니다."
            bullets={[
              "Framer Motion으로 스크롤 기반 타임라인 인터랙션 구현",
              "Shadcn/ui + Tailwind CSS로 UI 구성",
              "MCP(Context7)로 최신 라이브러리 문서 참고하며 개발",
            ]}
            tags={[
              "React",
              "TypeScript",
              "Shadcn",
              "Biome",
              "Vite",
              "Vercel",
              "MCP(Context7)",
            ]}
          />
        </TimelineSection>

        <TimelineSection year="2025 - 2026">
          <TimelineCard
            company="프론트엔드 공부"
            role="Self-Study"
            period="2025.12 ~ 2026.02"
            description="입시가 끝나고 제대로 된 프론트엔드 개발자가 되고 싶어서 공부했습니다. 예전에 AI한테 맡겼던 API 연동도 이번엔 직접 해봤고, GitHub Issue/PR 협업 방식도 익혔습니다."
            bullets={[
              "React + TypeScript 기반 컴포넌트 직접 설계",
              "Shadcn/ui로 모달, 토스트 등 UI 구현",
              "Axios + Typicode로 REST API 직접 구현 (GET/POST/DELETE)",
            ]}
            tags={[
              "React",
              "TypeScript",
              "Shadcn",
              "Axios",
              "Vite",
              "Pnpm",
              "Biome",
              "Typicode",
            ]}
          />
        </TimelineSection>

        <TimelineSection year="2025">
          <TimelineCard
            company="디미고 특전 입시"
            role="입시 준비생"
            period="2025.05 ~ 2025.12"
            description="디미고 특전 입시를 준비하면서 실습용 프로젝트를 만들었습니다. 시간이 촉박해서 AI를 많이 활용했는데, 이때 MCP(Context7)를 처음 써봤습니다. Nomad Coders 강의도 병행하며 기초를 다졌습니다."
            bullets={[
              "Nomad Coders 강의로 React 기초 학습",
              "Git flow 전략으로 브랜치 관리",
              "MCP(Context7)로 AI 환각 문제 줄이며 개발",
            ]}
            tags={["React", "TypeScript", "MCP(Context7)", "Vite"]}
          />
          <ProjectCard
            title="실시간 채팅 앱"
            description="Supabase Realtime을 활용한 실시간 채팅 앱. ChatGPT API로 대화 주제를 추천해주는 기능도 넣었고, GitHub Actions로 Netlify 자동 배포까지 연결했습니다."
            tags={[
              "React",
              "TypeScript",
              "Styled Component",
              "Supabase",
              "ChatGPT API",
              "Github Actions",
              "Netlify",
            ]}
          />
        </TimelineSection>

        <TimelineSection year="2024 - 2025">
          <TimelineCard
            company="코딩 동아리 활동"
            role="부원"
            period="2024.04 ~ 2025.05"
            description="학교 코딩 동아리에서 1년간 활동했습니다. Flask 백엔드와 HTML/CSS로 팀 프로젝트를 진행하며 처음으로 Git 협업을 경험했습니다."
            bullets={[
              "Git + GitHub로 팀 협업 첫 경험",
              "Flask 기반 팀 프로젝트 참여",
            ]}
            tags={["HTML", "Pico CSS", "Flask"]}
          />
          <ProjectCard
            title="개인 포트폴리오 v1"
            description="처음 만든 포트폴리오 사이트입니다. React와 Tailwind CSS로 반응형 레이아웃을 구성했습니다."
            tags={["React", "Tailwind CSS", "Vite"]}
          />
        </TimelineSection>

        <TimelineSection year="2023">
          <TimelineCard
            company="중학교 정보 수업"
            role="코딩 입문자"
            period="2023.03 ~ 2023.12"
            description="학교에 정보 수업이 생기면서 Python을 제대로 배웠습니다. 이때부터 CSS에도 관심이 생겼습니다."
            bullets={[
              "Python 기초 문법 학습",
              "디자인 기반 웹 코딩 강좌 수강 및 정적 사이트 제작",
            ]}
            tags={["Python", "HTML", "CSS"]}
          />
        </TimelineSection>

        <TimelineSection year="2021 ~">
          <TimelineCard
            company="코딩 입문"
            role="코딩 새내기"
            period="2021.03 ~ 2022.08"
            description="엔트리로 시작해서 Python을 독학하다가, HTML/CSS로 첫 웹 페이지를 만들었습니다. 뭔가를 직접 만든다는 게 재밌어서 웹 개발에 관심을 갖게 됐습니다."
            bullets={[
              "엔트리 → Python 독학으로 코딩 입문",
              "HTML/CSS로 첫 웹 페이지 제작",
            ]}
            tags={["Python", "HTML", "CSS", "Entry"]}
          />
        </TimelineSection>
      </div>
    </section>
  );
}

export default Journey;

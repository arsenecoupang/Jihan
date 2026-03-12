import ProjectCard from "@/components/shared/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-4 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Projects 🚀
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="포트폴리오 사이트"
          description="지금 보고 계신 이 사이트입니다. 애니메이션이 많아서 reflow를 최소화하기 위해 GPU 기반의 transform 속성 위주로 구현했습니다."
          tags={[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Shadcn",
            "Biome",
            "Vercel",
            "MCP(Context7)",
          ]}
        />
        <ProjectCard
          title="실시간 채팅 앱 (Amico)"
          description="Supabase Realtime 기반의 그룹 채팅 앱입니다. OpenAI API로 대화 주제를 추천해주는 기능도 넣었습니다."
          tags={[
            "React",
            "TypeScript",
            "Styled Component",
            "Vite",
            "eslint",
            "OpenAI API",
            "Biome",
            "Netlify",
            "Github Actions",
            "Supabase",
            "MCP(Context7)",
          ]}
          link="https://github.com/arsenecoupang/AmicoFinal"
        />
        <ProjectCard
          title="학습용 프로젝트"
          description="Typicode(JSONPlaceholder)로 REST API를 직접 구현해본 프로젝트입니다. GET / POST / DELETE를 다뤘습니다."
          tags={[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Shadcn",
            "Biome",
            "Axios",
            "MCP(Context7)",
          ]}
          link="https://github.com/arsenecoupang/react_edu"
        />
      </div>
    </section>
  );
}

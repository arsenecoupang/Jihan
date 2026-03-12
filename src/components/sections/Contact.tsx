import { Github, Instagram, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Contact Me ✉️
      </h2>
      <div className="glass-card rounded-2xl p-8 flex justify-center gap-6">
        <a
          href="https://github.com/arsenecoupang"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-green-accent transition-colors text-sm"
        >
          <Github className="size-5" />
          GitHub
        </a>
        <a
          href="mailto:arsenecoupang@gmail.com"
          className="flex items-center gap-2 text-muted-foreground hover:text-green-accent transition-colors text-sm"
        >
          <Mail className="size-5" />
          Email
        </a>
        <a
          href="https://www.instagram.com/jih_an7891/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-green-accent transition-colors text-sm"
        >
          <Instagram className="size-5" />
          Instagram
        </a>
      </div>
    </section>
  );
}

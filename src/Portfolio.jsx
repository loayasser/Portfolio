import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Sun, Moon } from "lucide-react";

// Default export React component for a one-file portfolio preview
// Stack: React + Tailwind + Framer Motion (assumes Tailwind is installed)

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-gray-100 antialiased">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-lg">
            LB
          </div>
          <div>
            <div className="text-sm text-gray-300">Loay Berzan</div>
            <div className="text-xs text-gray-500">
              Frontend & Future AI Engineer
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <button className="group flex items-center gap-2 bg-white/6 hover:bg-white/10 px-3 py-2 rounded-lg text-sm">
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </button>

          <a
            href="#contact"
            className="bg-indigo-500 hover:bg-indigo-600 px-3 py-2 rounded-lg text-sm font-medium"
          >
            Contact
          </a>
          <button
            aria-label="toggle theme"
            className="p-2 rounded-lg bg-white/4 hover:bg-white/6"
          >
            <Moon className="w-4 h-4" />
          </button>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          <div>
            <motion.h1
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                Loay Berzan
              </span>
              .
              <br />
              Frontend developer learning and building AI systems.
            </motion.h1>

            <p className="mt-4 text-gray-300 max-w-xl">
              I build modern web apps and I am transitioning into AI engineering
              — combining full-stack skills with machine learning and embedded
              systems. This portfolio highlights current work and upcoming AI
              projects.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/10 px-4 py-2 rounded-lg"
              >
                See projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/6 px-4 py-2 rounded-lg"
              >
                Hire me
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Stat title="Experience" value="Full-Stack" note="React • Node" />
              <Stat title="AI" value="Learning" note="PyTorch • RAG" />
              <Stat title="Embedded" value="MCU" note="AURIX • TinyML" />
              <Stat
                title="Location"
                value="Deggendorf, DE"
                note="Open to remote"
              />
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-2xl bg-white/3 p-6"
          >
            <div className="h-64 md:h-80 rounded-lg border-2 border-white/6 flex items-center justify-center">
              <div className="text-center text-gray-300">
                <div className="text-sm">Project Preview</div>
                <div className="text-xs mt-2">
                  Add screenshots from your projects here
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <MiniCard title="React App" subtitle="Full-stack upload site" />
              <MiniCard title="AURIX" subtitle="Embedded gateway" />
              <MiniCard title="Upcoming" subtitle="Image Classification" />
              <MiniCard title="Upcoming" subtitle="RAG Chatbot" />
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-14 bg-white/2 p-6 rounded-2xl">
          <div className="md:flex md:gap-8">
            <div className="md:flex-1">
              <h2 className="text-2xl font-semibold">About me</h2>
              <p className="mt-3 text-gray-300">
                I graduated in Electrical & Electronics Engineering and I’m
                pursuing Applied Computer Science. I have hands-on experience in
                frontend & backend systems and embedded engineering. Now I’m
                focusing on AI: machine learning, NLP and integrating models
                into real apps.
              </p>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                <li>React, TypeScript (in progress)</li>
                <li>Node.js, Express, FastAPI</li>
                <li>PyTorch, HuggingFace</li>
                <li>Embedded: AURIX, ESP32, TinyML</li>
              </ul>
            </div>

            <div className="md:w-64 mt-6 md:mt-0">
              <div className="rounded-xl p-4 bg-gradient-to-r from-neutral-800 to-neutral-900 border border-white/6">
                <div className="text-xs text-gray-400">Contact</div>
                <div className="mt-3 text-sm">Loay Berzan</div>
                <div className="text-xs text-gray-400">Deggendorf, Germany</div>
                <div className="mt-3 flex gap-3 text-gray-300">
                  <a href="#contact" aria-label="email">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="https://github.com/" aria-label="github">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/" aria-label="linkedin">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-10">
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <SkillCard title="Frontend" items={["React", "Tailwind", "Vite"]} />
            <SkillCard
              title="Backend"
              items={["Node.js", "Express", "FastAPI"]}
            />
            <SkillCard title="AI" items={["PyTorch", "HuggingFace", "RAG"]} />
            <SkillCard title="Embedded" items={["C", "AURIX", "TinyML"]} />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <h3 className="text-xl font-semibold">Projects</h3>
          <p className="text-gray-400 mt-2">
            A mix of full-stack, embedded and upcoming AI projects.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Document Upload Platform"
              description="Full-stack app where clients can upload and remove documents. Built with React + Node."
              tags={["React", "Node", "AWS"]}
            />

            <ProjectCard
              title="CAN → Ethernet Gateway"
              description="Embedded gateway project using Infineon AURIX TC297. Demonstrates CAN handling and Ethernet stack."
              tags={["AURIX", "C", "Embedded"]}
            />

            <ProjectCard
              title="(Upcoming) Image Classification"
              description="My first AI project: training a CNN on CIFAR-10 and serving predictions through a web UI."
              tags={["PyTorch", "CNN", "CIFAR-10"]}
              upcoming
            />

            <ProjectCard
              title="(Upcoming) RAG Chatbot"
              description="Document-based question answering using embeddings and a vector store, with a React frontend."
              tags={["NLP", "Embeddings", "FAISS"]}
              upcoming
            />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 bg-white/3 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="text-gray-300 mt-2">
            Interested in collaborating or hiring? Send me a message.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-300">Email</div>
              <div className="mt-2 text-gray-100">loay@example.com</div>

              <div className="mt-4 text-sm text-gray-300">LinkedIn</div>
              <a
                href="https://www.linkedin.com/"
                className="block mt-2 text-indigo-300"
              >
                linkedin.com/in/loay
              </a>

              <div className="mt-4 text-sm text-gray-300">Github</div>
              <a
                href="https://github.com/"
                className="block mt-2 text-indigo-300"
              >
                github.com/loay
              </a>
            </div>

            <form className="p-4 bg-neutral-900/40 rounded-lg">
              <label className="text-sm text-gray-300">Your email</label>
              <input
                className="w-full mt-2 p-2 rounded bg-black/40 border border-white/6 text-white text-sm"
                placeholder="you@example.com"
              />

              <label className="text-sm text-gray-300 mt-3 block">
                Message
              </label>
              <textarea
                className="w-full mt-2 p-2 rounded bg-black/40 border border-white/6 text-white text-sm"
                rows={5}
                placeholder="Hello Loay, I'm interested in ..."
              />

              <button
                type="submit"
                className="mt-3 inline-flex items-center gap-2 bg-indigo-500 px-4 py-2 rounded"
              >
                Send message
              </button>
            </form>
          </div>
        </section>

        <footer className="mt-12 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Loay Berzan — Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
}

/* --- Small helper components below --- */

function Stat({ title, value, note }) {
  return (
    <div className="p-3 rounded-lg bg-white/4">
      <div className="text-xs text-gray-400">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs text-gray-400">{note}</div>
    </div>
  );
}

function MiniCard({ title, subtitle }) {
  return (
    <div className="p-2 rounded-md bg-white/4 text-sm">
      <div className="font-medium">{title}</div>
      <div className="text-xs text-gray-300">{subtitle}</div>
    </div>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="p-4 rounded-xl bg-white/4">
      <div className="text-sm text-gray-300">{title}</div>
      <ul className="mt-3 text-sm space-y-1">
        {items.map((it) => (
          <li key={it} className="text-gray-100">
            • {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tags = [], upcoming = false }) {
  return (
    <div
      className={`p-4 rounded-xl border border-white/6 ${
        upcoming ? "opacity-80" : "bg-white/3"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-300 mt-2">{description}</div>
        </div>
        {upcoming && (
          <div className="text-xs text-amber-300 font-medium">Upcoming</div>
        )}
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        {tags.map((t) => (
          <div
            key={t}
            className="text-xs px-2 py-1 border border-white/6 rounded"
          >
            {t}
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <a className="text-sm text-indigo-300">View repo</a>
        <a className="text-sm text-gray-300">Live demo</a>
      </div>
    </div>
  );
}

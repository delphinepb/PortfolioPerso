"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Palette,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const [activeSection, setActiveSection] = useState("accueil")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experienceproj", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="text-xl font-bold text-gray-900" whileHover={{ scale: 1.05 }}>
              Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "experiencesproj", label: "Projects and Experiences" },
                { id: "skills", label: "Skills" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Gradient animé en arrière-plan */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
          animate={{
            background: [
              "linear-gradient(45deg, #dbeafe, #f3e8ff, #fce7f3)",
              "linear-gradient(45deg, #f3e8ff, #fce7f3, #dbeafe)",
              "linear-gradient(45deg, #fce7f3, #dbeafe, #f3e8ff)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ y }}
        />

        {/* Particules flottantes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Formes géométriques flottantes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-lg blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-lg"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Contenu principal */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Effet de typing pour le titre */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Hey, I&apos;m Delphine
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                A full stack developer
              </motion.span>
            </motion.h1>

            {/* Sous-titre avec effet de brillance */}
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.span
                className="relative"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
                  backgroundSize: "200% 100%",
                }}
              >
                Passionate and rigorous, I am looking for a permanent contract to contribute to your team on a long-term basis.
              </motion.span>
            </motion.p>

            {/* Boutons avec effets avancés */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="relative">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("experiencesproj")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.span
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    See my projects and experiences
                  </motion.span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
                {/* Effet de brillance sur le bouton */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-md"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact me
                </Button>
              </motion.div>
            </motion.div>

            {/* Indicateur de scroll animé */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Effet de lumière en bas */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-blue-400/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </section>

      {/* À propos */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About me</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-6xl">👩🏻‍🦰</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-600 leading-relaxed">
                With over 3 years of work-study experience in web development, I&apos;m looking for a company
                to grow and contribute to exciting projects.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I enjoy taking on new challenges and continually learning to stay at the forefront of innovation.              </p>
                <a href="/CV_Delphine-BOITELLE_Dev.pdf" download>
                  <Button variant="outline" className="mt-4">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="experiencesproj" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My projects and experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover my professional experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Apprenticeship at Dailybiz",
                description: "As a full stack developer in 2022/2023.",
                image: "/dailybiz.jfif",
                tech: [".Net", "Javascript", "SQL", "Gitlab"],
              },
              {
                title: "Apprenticeship at Sopra Steria",
                description: "As a backend developer in 2023/2025.",
                image: "/spst.png",
                tech: ["Java", "JUnit - Mockito", "GitLab", "Agile Scrum"],
              },
              {
                title: "Badken",
                description: "Website for photographer",
                image: "/bk.jpeg",
                tech: ["Next.js", "Framer Motion", "TypeScript"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies and tools that I master to create high-performance digital solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code, title: "Frontend", skills: ["NextJs", "ReactJs", "TypeScript", "Tailwind CSS"] },
              { icon: Globe, title: "Backend", skills: ["Node.js", "Java",".Net", "PostgreSQL"] },
              { icon: Palette, title: "Tools", skills: ["Intellij IDEA", "Eclipse", "Git", "Docker", "Jira/Trello"] },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon className="h-8 w-8 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className=" text-center text-4xl font-bold text-gray-900 mb-4">Contact me</h2>
            <p className="text-center mb-16 text-gray-600 max-w-2xl mx-auto">
              If you have any questions, please contact me.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div whileHover={{ scale: 1.05 }} className="space-y-3">
                <a
                  href="mailto:delphine@boitelleparsy.com"
                  className="block"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/delphine-boitelle-2656a1217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Linkedin className="h-6 w-6 text-blue-600" />
                  </div>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="space-y-3">
                <a
                  href="https://github.com/delphinepb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Github className="h-6 w-6 text-blue-600" />
                  </div>
                </a>
              </motion.div>

            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600">© 2025 Portfolio. Create with passion.</p>
        </div>
      </footer>
    </div>
  )
}

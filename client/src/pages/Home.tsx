import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: '#1a1a1a',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: '#2980b9',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: '#e74c3c',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:seu@email.com',
      color: '#f1c40f',
    },
  ];

  const colors = {
    red: '#e74c3c',
    blue: '#2980b9',
    green: '#27ae60',
    yellow: '#f1c40f',
    orange: '#e67e22',
    skin: '#f4a460',
    dark: '#1a1a1a',
    light: '#ecf0f1',
    sky: '#87ceeb',
    grass: '#52b788',
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ color: colors.dark }}>
      {/* Floating Clouds */}
      <div
        className="fixed top-12 left-10 opacity-80 pointer-events-none"
        style={{
          transform: `translateX(${scrollY * 0.1}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div
          className="w-24 h-12 rounded-full relative"
          style={{
            backgroundColor: 'white',
          }}
        >
          <div
            className="absolute -top-4 left-2 w-8 h-8 rounded-full"
            style={{ backgroundColor: 'white' }}
          ></div>
          <div
            className="absolute -top-6 right-4 w-10 h-10 rounded-full"
            style={{ backgroundColor: 'white' }}
          ></div>
        </div>
      </div>

      <div
        className="fixed top-32 right-20 opacity-70 pointer-events-none"
        style={{
          transform: `translateX(${scrollY * -0.15}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div
          className="w-32 h-14 rounded-full relative"
          style={{
            backgroundColor: 'white',
          }}
        >
          <div
            className="absolute -top-5 left-4 w-10 h-10 rounded-full"
            style={{ backgroundColor: 'white' }}
          ></div>
          <div
            className="absolute -top-8 right-6 w-12 h-12 rounded-full"
            style={{ backgroundColor: 'white' }}
          ></div>
        </div>
      </div>

      {/* Decorative Pipes */}
      <div className="fixed top-40 right-10 opacity-30 pointer-events-none">
        <div
          className="w-12 h-20 border-4 rounded-lg relative"
          style={{
            backgroundColor: colors.green,
            borderColor: colors.dark,
          }}
        >
          <div
            className="absolute top-2 left-2 w-8 h-6 border-2"
            style={{
              backgroundColor: '#1e7e34',
              borderColor: colors.dark,
            }}
          ></div>
        </div>
      </div>

      {/* Mario Blocks Background */}
      <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none opacity-20">
        <div className="flex gap-1 flex-wrap">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="mario-block"
              style={{
                animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container relative z-10 py-12 md:py-20">
        {/* Header Section */}
        <header className="text-center mb-16 slide-in-left">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 glow-pulse"
            style={{
              color: colors.red,
              textShadow: `0 0 10px rgba(231, 76, 60, 0.5)`,
            }}
          >
            MARIO PORTFOLIO
          </h1>
          <p className="text-sm md:text-base mb-2" style={{ color: colors.dark }}>
            Welcome to the Mushroom Kingdom of Web Development
          </p>
          <div
            className="h-1 w-32 mx-auto mb-8 pixel-border"
            style={{
              backgroundColor: colors.yellow,
            }}
          ></div>
        </header>

        {/* Hero Section with Pixel Art Character */}
        <section className="mb-20 slide-in-right">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Pixel Art Character */}
            <div className="flex-shrink-0 bounce-pixel">
              <div className="w-32 h-40 md:w-40 md:h-48 relative">
                {/* Head */}
                <div
                  className="absolute top-0 left-4 w-24 h-20 border-4"
                  style={{
                    backgroundColor: colors.skin,
                    borderColor: colors.dark,
                  }}
                >
                  {/* Eyes */}
                  <div
                    className="absolute top-4 left-2 w-4 h-4"
                    style={{ backgroundColor: colors.dark }}
                  ></div>
                  <div
                    className="absolute top-4 right-2 w-4 h-4"
                    style={{ backgroundColor: colors.dark }}
                  ></div>
                  {/* Mouth */}
                  <div
                    className="absolute bottom-2 left-6 w-12 h-2"
                    style={{ backgroundColor: colors.dark }}
                  ></div>
                </div>

                {/* Body */}
                <div
                  className="absolute top-20 left-2 w-28 h-12 border-4"
                  style={{
                    backgroundColor: colors.red,
                    borderColor: colors.dark,
                  }}
                >
                  {/* Buttons */}
                  <div
                    className="absolute top-2 left-4 w-3 h-3 border"
                    style={{
                      backgroundColor: colors.yellow,
                      borderColor: colors.dark,
                    }}
                  ></div>
                </div>

                {/* Pants */}
                <div
                  className="absolute top-32 left-4 w-24 h-8 border-4"
                  style={{
                    backgroundColor: colors.blue,
                    borderColor: colors.dark,
                  }}
                ></div>

                {/* Shoes */}
                <div
                  className="absolute bottom-0 left-2 w-4 h-4"
                  style={{ backgroundColor: colors.dark }}
                ></div>
                <div
                  className="absolute bottom-0 right-2 w-4 h-4"
                  style={{ backgroundColor: colors.dark }}
                ></div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="flex-1 max-w-md">
              <h2
                className="text-2xl md:text-4xl font-bold mb-4"
                style={{ color: colors.blue }}
              >
                Level Up Your Skills!
              </h2>
              <p className="text-xs md:text-sm mb-4 leading-relaxed" style={{ color: colors.dark }}>
                Bem-vindo ao meu portfólio! Sou um desenvolvedor web apaixonado por criar
                experiências digitais incríveis. Com expertise em React, TypeScript e design
                responsivo, estou pronto para transformar suas ideias em realidade.
              </p>
              <p className="text-xs md:text-sm mb-6 leading-relaxed" style={{ color: colors.dark }}>
                Assim como Mario em suas aventuras, eu enfrento desafios com criatividade e
                determinação, sempre buscando atingir o próximo nível!
              </p>

              <button
                className="px-6 py-3 font-bold pixel-border text-white text-xs md:text-sm hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: colors.red,
                }}
              >
                COLLECT COINS
              </button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20 fade-in">
          <h2
            className="text-2xl md:text-4xl font-bold text-center mb-12"
            style={{ color: colors.green }}
          >
            POWER-UPS & SKILLS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Frontend', skills: 'React, TypeScript, Tailwind CSS' },
              { title: 'Backend', skills: 'Node.js, Express, API REST' },
              { title: 'Design', skills: 'UI/UX, Pixel Art, Animations' },
              { title: 'Tools', skills: 'Git, Docker, VS Code' },
              { title: 'Database', skills: 'PostgreSQL, MongoDB' },
              { title: 'Deployment', skills: 'Vercel, Netlify, Cloudflare' },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="p-6 pixel-border hover:shadow-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: colors.yellow,
                  animation: `slideInLeft 0.8s ease-out ${idx * 0.1}s backwards`,
                }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: colors.red }}
                >
                  {skill.title}
                </h3>
                <p className="text-xs" style={{ color: colors.dark }}>
                  {skill.skills}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2
            className="text-2xl md:text-4xl font-bold text-center mb-12"
            style={{ color: colors.blue }}
          >
            COMPLETED QUESTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Plataforma de vendas com React e Node.js',
                tech: 'React, Node.js, PostgreSQL',
              },
              {
                title: 'Task Manager App',
                description: 'Aplicativo de gerenciamento de tarefas em tempo real',
                tech: 'React, Firebase, Tailwind',
              },
              {
                title: 'Portfolio Website',
                description: 'Site portfólio com animações e design responsivo',
                tech: 'React, Tailwind, Framer Motion',
              },
              {
                title: 'Chat Application',
                description: 'Aplicativo de chat com WebSocket',
                tech: 'Node.js, Socket.io, React',
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="p-6 pixel-border hover:transition-colors"
                style={{
                  backgroundColor: colors.light,
                  animation: `slideInRight 0.8s ease-out ${idx * 0.1}s backwards`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.yellow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.light;
                }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: colors.red }}
                >
                  {project.title}
                </h3>
                <p className="text-xs mb-3" style={{ color: colors.dark }}>
                  {project.description}
                </p>
                <p className="text-xs font-bold" style={{ color: colors.blue }}>
                  {project.tech}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20 text-center">
          <h2
            className="text-2xl md:text-4xl font-bold mb-12"
            style={{ color: colors.red }}
          >
            FIND ME IN THE KINGDOM
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 pixel-border hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: colors.yellow,
                    animation: `bouncePixel 0.6s ease-in-out ${idx * 0.1}s infinite`,
                  }}
                  title={link.name}
                >
                  <Icon size={24} color={link.color} />
                </a>
              );
            })}
          </div>

          <p className="text-xs md:text-sm mb-6" style={{ color: colors.dark }}>
            Quer conversar? Clique no botão flutuante do WhatsApp!
          </p>
        </section>

        {/* Footer */}
        <footer
          className="text-center py-8 border-t-4"
          style={{ borderColor: colors.dark }}
        >
          <p className="text-xs mb-2" style={{ color: colors.dark }}>
            © 2024 Mario Portfolio. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: colors.dark }}>
            Made with ❤️ in the Mushroom Kingdom
          </p>
        </footer>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full hover:opacity-90 transition-all hover:scale-110 shadow-lg pixel-border"
        style={{
          backgroundColor: colors.green,
        }}
        title="WhatsApp"
      >
        <MessageCircle size={32} color="white" />
      </a>

      {/* Game Over Easter Egg */}
      <div
        className="fixed bottom-4 left-4 text-xs opacity-50 pointer-events-none"
        style={{ color: colors.dark }}
      >
        <p>Press F to pay respects</p>
      </div>
    </div>
  );
}


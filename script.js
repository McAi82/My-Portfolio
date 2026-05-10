const gamesData = [
        {
          name: "MINESWEEPER",
          emoji: "💣",
          file: "games/minesweeper.html",
          color: "#0ff",
        },
        {
          name: "PACMAN",
          emoji: "👻",
          file: "games/pacman.html",
          color: "#ffea00",
        },
        {
          name: "PONG",
          emoji: "🏓",
          file: "games/pong.html",
          color: "#0ff",
        },
        {
          name: "SNAKE",
          emoji: "🐍",
          file: "games/snake.html",
          color: "#0f0",
        },
        {
          name: "SPACE SHOOTER",
          emoji: "🚀",
          file: "games/space-shooter.html",
          color: "#f0f",
        },
        {
          name: "TETRIS",
          emoji: "🧩",
          file: "games/tetris.html",
          color: "#0ff",
        },
      ];

      const skillsData = [
        {
          name: "TypeScript",
          percent: 88,
          icon: "🟦",
          tags: ["Type Safety", "React", "Node"],
        },
        {
          name: "React / Next.js",
          percent: 85,
          icon: "⚛️",
          tags: ["Hooks", "SSR", "App Router"],
        },
        {
          name: "Three.js",
          percent: 72,
          icon: "🎮",
          tags: ["WebGL", "3D Scenes", "Shaders"],
        },
        {
          name: "CSS Architecture",
          percent: 90,
          icon: "🎨",
          tags: ["Tailwind", "Design Systems", "Animations"],
        },
        {
          name: "Python",
          percent: 78,
          icon: "🐍",
          tags: ["FastAPI", "Data Processing", "AI"],
        },
        {
          name: "GraphQL",
          percent: 65,
          icon: "🔮",
          tags: ["Apollo", "Federation"],
        },
        {
          name: "Node.js",
          percent: 80,
          icon: "🟢",
          tags: ["REST", "WebSockets", "Microservices"],
        },
        {
          name: "UI/UX",
          percent: 82,
          icon: "✨",
          tags: ["Figma", "Prototyping", "Accessibility"],
        },
      ];
      const projectsData = [
        {
          title: "Neon Galaxy",
          desc: "3D interactive space explorer with Three.js",
          emoji: "🌌",
          stack: ["Three.js", "WebGL", "GSAP"],
        },
        {
          title: "CyberDash",
          desc: "Real-time analytics dashboard with live data",
          emoji: "📊",
          stack: ["React", "Socket.io", "D3"],
        },
        {
          title: "Arcade Vault",
          desc: "6 retro games with modern 3D neon twist",
          emoji: "🎰",
          stack: ["Canvas API", "CSS Grid", "Neon FX"],
        },
        {
          title: "AI Canvas",
          desc: "Generative art using stable diffusion API",
          emoji: "🤖",
          stack: ["Python", "React", "TensorFlow"],
        },
        {
          title: "Portfolio 3D",
          desc: "Immersive portfolio with WebGL shaders",
          emoji: "🌀",
          stack: ["Three.js", "Blender", "GLSL"],
        },
        {
          title: "Motion UI",
          desc: "High-performance animation library",
          emoji: "⚡",
          stack: ["TypeScript", "Web Animations API"],
        },
      ];
      const achievementsData = [
        {
          title: "Dean's List · 3 consecutive years",
          desc: "Top 5% of academic cohort in IT program",
          badge: "b-gold",
          year: "2024–2026",
          icon: "🏅",
        },
        {
          title: "National Hackathon Champion",
          desc: "1st place among 120+ teams | AI-powered accessibility tool",
          badge: "b-cyan",
          year: "2025",
          icon: "🥇",
        },
        {
          title: "Google Developer Student Lead",
          desc: "Led workshops & open-source initiatives",
          badge: "b-violet",
          year: "2024",
          icon: "🌐",
        },
        {
          title: "Open Source Top Contributor",
          desc: "React ecosystem · 500+ stars",
          badge: "b-emerald",
          year: "2025",
          icon: "⭐",
        },
        {
          title: "Webby Awards · Honoree",
          desc: "Experimental web design category",
          badge: "b-pink",
          year: "2026",
          icon: "🏆",
        },
      ];

      function renderSkills() {
        document.getElementById("skillsGrid").innerHTML = skillsData
          .map(
            (s) =>
              `<div class="skill-card reveal"><div class="sk-head"><div class="sk-icon">${s.icon}</div><div><div class="sk-name">${s.name}</div><div class="sk-pct">${s.percent}%</div></div></div><div class="sk-track"><div class="sk-fill" data-width="${s.percent}%"></div></div><div class="sk-tags">${s.tags.map((t) => `<span class="sk-tag">${t}</span>`).join("")}</div></div>`,
          )
          .join("");
      }
      function renderProjects() {
        document.getElementById("projectsGrid").innerHTML = projectsData
          .map(
            (p) =>
              `<div class="proj-card reveal"><div class="proj-thumb"><span style="font-size:3rem">${p.emoji}</span></div><div class="proj-title">${p.title}</div><p class="proj-desc">${p.desc}</p><div class="proj-stack">${p.stack.map((s) => `<span class="st-tag">${s}</span>`).join("")}</div><a href="#" class="proj-link" onclick="alert('🔮 Live demo for ${p.title} (coming soon)'); return false;">Live Demo →</a></div>`,
          )
          .join("");
      }
      function renderGames() {
        document.getElementById("gamesGrid").innerHTML = gamesData
          .map(
            (g) =>
              `<a href="${g.file}" class="game-card reveal" target="_blank"><div class="game-emoji">${g.emoji}</div><div class="game-title">${g.name}</div><span style="font-size:0.7rem; color:var(--t3);">▶ PLAY NOW</span></a>`,
          )
          .join("");
      }
      function renderAchievements() {
        document.getElementById("achList").innerHTML = achievementsData
          .map(
            (a) =>
              `<div class="ach-item reveal"><div class="ach-icon" style="font-size:1.9rem">${a.icon}</div><div class="ach-body"><h3>${a.title}</h3><p>${a.desc}</p></div><span class="badge ${a.badge}">${a.year}</span></div>`,
          )
          .join("");
      }

      function startCounters() {
        let projectsCount = 0,
          techCount = 0;
        const projEl = document.getElementById("stat1"),
          techEl = document.getElementById("stat2");
        const targetProj = 12,
          targetTech = 15;
        const update = () => {
          if (projectsCount < targetProj) {
            projectsCount++;
            projEl.innerText = projectsCount + "+";
            setTimeout(update, 35);
          }
          if (techCount < targetTech) {
            techCount++;
            techEl.innerText = techCount + "+";
            setTimeout(update, 35);
          }
        };
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              projectsCount = 0;
              techCount = 0;
              projEl.innerText = "0+";
              techEl.innerText = "0+";
              update();
              observer.disconnect();
            }
          },
          { threshold: 0.3 },
        );
        observer.observe(projEl);
      }

      function observeSkillBars() {
        const bars = document.querySelectorAll(".sk-fill");
        const barObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.style.width = entry.target.dataset.width || "0%";
                entry.target.dataset.animated = "true";
                barObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.4 },
        );
        bars.forEach((bar) => barObserver.observe(bar));
      }

      function initReveal() {
        const reveals = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) entry.target.classList.add("visible");
            });
          },
          { threshold: 0.12 },
        );
        reveals.forEach((r) => observer.observe(r));
      }

      const sections = [
        "about",
        "skills",
        "projects",
        "games",
        "achievements",
        "contact",
      ];
      function setActiveNav() {
        let current = "";
        for (let s of sections) {
          const sec = document.getElementById(s);
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 100) {
            current = s;
            break;
          }
        }
        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.classList.remove("active");
          if (link.dataset.section === current) link.classList.add("active");
        });
      }
      function scrollToSection(id) {
        document
          .getElementById(id)
          .scrollIntoView({ behavior: "smooth", block: "start" });
        closeMenu();
      }
      function closeMenu() {
        document.getElementById("navLinks")?.classList.remove("open");
      }
      const hbtn = document.getElementById("hamburgerBtn");
      const navUL = document.getElementById("navLinks");
      hbtn?.addEventListener("click", () => navUL.classList.toggle("open"));
      document.querySelectorAll(".nav-links a").forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          const sec = a.dataset.section;
          if (sec) scrollToSection(sec);
        });
      });
      window.addEventListener("scroll", () => {
        setActiveNav();
        closeMenu();
      });
      function handleFormSubmit(e) {
        e.preventDefault();
        alert("✨ Message launched! I'll reply within 24h.");
        e.target.reset();
      }

      (function addParticles() {
        const pCont = document.getElementById("particles");
        for (let i = 0; i < 35; i++) {
          let p = document.createElement("div");
          p.className = "pt";
          p.style.left = Math.random() * 100 + "%";
          p.style.setProperty("--d", 6 + Math.random() * 12 + "s");
          p.style.setProperty("--dl", Math.random() * 8 + "s");
          pCont.appendChild(p);
        }
      })();

      renderSkills();
      renderProjects();
      renderGames();
      renderAchievements();
      initReveal();
      startCounters();
      observeSkillBars();
      setActiveNav();
      window.addEventListener("load", () => {
        setActiveNav();
        observeSkillBars();
      });
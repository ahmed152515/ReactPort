import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { ChatAssistant } from "./components/ChatAssistant";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Scalable Architecture",
  "Motion-Driven UX",
  "Performance Engineering",
  "Security First",
  "SaaS Product Thinking",
  "AI-ready Integrations"
];

const serviceTracks = [
  {
    title: "Product Engineering",
    detail:
      "End-to-end architecture, frontend/backend implementation, QA strategy, and post-launch optimization."
  },
  {
    title: "WordPress + Performance",
    detail:
      "High-conversion custom WordPress websites with speed tuning, SEO foundations, and clean editorial workflows."
  },
  {
    title: "SaaS & Platform Development",
    detail:
      "Scalable SaaS applications with modern UI systems, role-based access, analytics, and secure integrations."
  },
  {
    title: "CRM and BPO Workflows",
    detail:
      "Process-focused CRM modules for lead pipelines, support operations, task assignment, and performance reporting."
  }
];

const media = {
  bgVideos: [
    "https://cdn.coverr.co/videos/coverr-coding-on-laptop-1579/1080p.mp4",
    "https://cdn.coverr.co/videos/coverr-working-remotely-5176/1080p.mp4",
    "https://cdn.coverr.co/videos/coverr-programmer-at-work-1576/1080p.mp4"
  ],
  officeImage:
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=80",
  teamImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
};

const showcaseSlides = [
  {
    title: "Multi Cars Rental",
    result: "Modernized digital booking journey and improved trust-led conversion flow",
    summary:
      "Vehicle rental website experience revamp with polished layout hierarchy and performance-focused implementation."
  },
  {
    title: "Ark Wave Solution",
    result: "Clear B2B positioning with stronger service discoverability",
    summary:
      "Corporate services website enhancement with refined content structure and responsive interaction design."
  },
  {
    title: "PAYR Platform",
    result: "Improved product storytelling and more professional SaaS presentation",
    summary:
      "Product-focused web experience with section-level conversion cues, usability improvements, and polished visual direction."
  }
];

const testimonialSlides = [
  "ReactPort completely upgraded our product velocity and polish.",
  "Their quality is world-class and communication is outstanding.",
  "We improved conversion and performance in the first sprint."
];

const projectPortfolio = [
  {
    name: "Empathena Global Solution",
    url: "#",
    domain: "Enterprise Services",
    contribution:
      "Professional web presence enhancement with structured messaging, service architecture, and trust-first design system."
  },
  {
    name: "Multi Cars Rental",
    url: "https://www.multicarsrental.com",
    domain: "Mobility / Rental",
    contribution:
      "UX refinement, responsive implementation, trust-focused page structure, and conversion-oriented CTA placement."
  },
  {
    name: "Ark Wave Solution",
    url: "https://www.arkwavesolution.com",
    domain: "Corporate Services",
    contribution:
      "Professional brand layout system, service clarity uplift, and modern enterprise design enhancements."
  },
  {
    name: "PAYR",
    url: "https://www.payr.org",
    domain: "Digital Platform",
    contribution:
      "Platform narrative architecture, visual identity alignment, and performance-conscious UI implementation."
  },
  {
    name: "BPO CRM Project",
    url: "#",
    domain: "CRM / Operations",
    contribution:
      "Built and improved CRM workflow modules for lead handling, operational tracking, and support productivity."
  },
  {
    name: "Pen Info Tech",
    url: "#",
    domain: "IT / Technology",
    contribution:
      "Technology-focused website and content strategy improvements for a stronger digital identity and client acquisition flow."
  }
];

const metricSlides = [
  { label: "Projects Delivered", value: "150+" },
  { label: "Avg. Lighthouse Score", value: "96" },
  { label: "Enterprise Clients", value: "40+" },
  { label: "Avg. Delivery Cycle", value: "3.5 weeks" }
];

const colorCardThemes = [
  "from-sky-100 to-blue-100 border-sky-200",
  "from-cyan-100 to-sky-100 border-cyan-200",
  "from-indigo-100 to-blue-100 border-indigo-200",
  "from-violet-100 to-sky-100 border-violet-200"
];

const whatWeDoItems = [
  { title: "Websites", tag: "UI + SEO", detail: "High-conversion websites with premium UX." },
  { title: "CRM Systems", tag: "Ops", detail: "Lead pipelines, support dashboards, role workflows." },
  { title: "Web Applications", tag: "SaaS", detail: "Scalable product platforms with secure architecture." },
  { title: "Automation", tag: "No-code + API", detail: "Business process automation and integration flows." },
  { title: "Dashboards", tag: "BI", detail: "Real-time analytics interfaces for teams and leaders." },
  { title: "Performance", tag: "Core Vitals", detail: "Speed optimization for better engagement and ranking." },
  { title: "Integrations", tag: "Payments + Tools", detail: "Smooth third-party integrations and API orchestration." },
  { title: "Maintenance", tag: "Support", detail: "Continuous monitoring, updates, and reliability care." }
];

export default function App() {
  const cursorRef = useRef(null);
  const heroGlowRef = useRef(null);
  const [activeWork, setActiveWork] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeMetric, setActiveMetric] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeTheme, setActiveTheme] = useState(0);
  const [showWhatWeDoDialog, setShowWhatWeDoDialog] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const sections = gsap.utils.toArray(".reveal");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 82%"
          }
        }
      );
    });

    gsap.to(".parallax-card", {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: "#what-we-do",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback("");
    setIsSending(true);

    try {
      const payload = {
        ...formState,
        _subject: "New ReactPort Website Inquiry",
        _captcha: "false"
      };

      const response = await fetch("https://formsubmit.co/ajax/sayyedwp@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Email request failed");
      }

      const whatsappText = `New inquiry from ${formState.name}%0AEmail: ${formState.email}%0AMessage: ${formState.message}`;
      window.open(`https://wa.me/918530070721?text=${whatsappText}`, "_blank", "noopener,noreferrer");

      setFeedback("Message sent to email and WhatsApp draft opened.");
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setFeedback("Could not send right now. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    const workInterval = setInterval(() => {
      setActiveWork((prev) => (prev + 1) % showcaseSlides.length);
    }, 4500);
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialSlides.length);
    }, 5000);
    const metricInterval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metricSlides.length);
    }, 3200);
    const videoInterval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % media.bgVideos.length);
    }, 9000);
    const themeInterval = setInterval(() => {
      setActiveTheme((prev) => (prev + 1) % colorCardThemes.length);
    }, 2200);
    return () => {
      clearInterval(workInterval);
      clearInterval(testimonialInterval);
      clearInterval(metricInterval);
      clearInterval(videoInterval);
      clearInterval(themeInterval);
    };
  }, []);

  useEffect(() => {
    const onMove = (event) => {
      if (!cursorRef.current || !heroGlowRef.current) return;
      const { clientX, clientY } = event;
      gsap.to(cursorRef.current, { x: clientX, y: clientY, duration: 0.16, ease: "power2.out" });

      const moveX = (clientX / window.innerWidth - 0.5) * 22;
      const moveY = (clientY / window.innerHeight - 0.5) * 20;
      gsap.to(heroGlowRef.current, { x: moveX, y: moveY, duration: 0.8, ease: "power3.out" });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <video
          key={media.bgVideos[activeVideo]}
          className="h-full w-full object-cover opacity-30 transition-opacity duration-700"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={media.bgVideos[activeVideo]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f6f1]/84 via-[#f7f4ee]/90 to-[#f5f1ea]/96" />
      </div>
      <div className="noise" />
      <div ref={cursorRef} className="cursor-dot" />

      <SiteHeader />

      <main>
        <section className="relative mx-auto mt-20 grid min-h-[92vh] w-full max-w-7xl place-items-center px-5 py-24 md:mt-24 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Futuristic Software Studio
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Building next-gen digital products for ambitious companies.
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              ReactPort combines speed, precision, and design intelligence to launch premium web and
              SaaS experiences.
            </p>
            <motion.a
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex rounded-full bg-gradient-to-r from-sky-500 to-blue-400 px-6 py-3 font-semibold text-white"
            >
              Start a Project
            </motion.a>
          </motion.div>
          <motion.div
            ref={heroGlowRef}
            aria-hidden
            className="glass mt-14 h-[340px] w-full overflow-hidden rounded-3xl md:mt-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <img
              src={media.officeImage}
              alt="Modern software workspace"
              className="absolute inset-0 h-full w-full object-cover opacity-35"
              loading="lazy"
            />
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-sky-200/75 via-blue-100/70 to-cyan-100/75 p-7">
              <div className="grid h-full grid-cols-2 gap-4">
                {["120+ launches", "97% retention", "2.3x faster", "A+ Core Vitals"].map((item) => (
                  <div key={item} className="glass grid place-items-center rounded-2xl text-center text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="reveal mx-auto w-full max-w-7xl px-5 py-8">
          <div className="glass relative overflow-hidden rounded-3xl">
            <img
              src={media.teamImage}
              alt="Professional software team collaboration"
              className="h-[260px] w-full object-cover md:h-[360px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/65 via-slate-900/35 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Inside ReactPort</p>
              <h3 className="mt-2 max-w-xl text-2xl font-bold text-white md:text-3xl">
                Product strategists, designers, and engineers working as one delivery team.
              </h3>
            </div>
          </div>
        </section>

        <section id="features" className="reveal mx-auto w-full max-w-7xl px-5 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">Features engineered for modern growth</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature}
                whileHover={{ y: -8, rotateX: 6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="glass rounded-2xl p-6"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-sky-500">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{feature}</h3>
                <p className="mt-3 text-slate-600">
                  Built with scalable foundations and polished user interactions to maximize impact.
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="reveal mx-auto w-full max-w-7xl px-5 py-8">
          <h2 className="text-3xl font-bold md:text-4xl">Live performance highlights</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div className="glass min-h-[120px] rounded-2xl p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={metricSlides[activeMetric].label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                    Metric Snapshot
                  </p>
                  <p className="mt-2 text-4xl font-black text-sky-700">{metricSlides[activeMetric].value}</p>
                  <p className="mt-1 text-slate-600">{metricSlides[activeMetric].label}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex gap-2">
              {metricSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveMetric(index)}
                  className={`h-2.5 w-8 rounded-full transition ${
                    activeMetric === index ? "bg-sky-500" : "bg-sky-200"
                  }`}
                  aria-label={`Go to metric ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="reveal mx-auto w-full max-w-7xl px-5 py-10">
          <h2 className="text-3xl font-bold md:text-4xl">How we deliver professional outcomes</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            We do not just design pages. We build full digital experiences grounded in business
            goals, user psychology, and scalable engineering. Every project follows a structured
            delivery model: Discovery → UX Strategy → Build → QA → Launch → Optimization.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {serviceTracks.map((item) => (
              <article
                key={item.title}
                className={`rounded-2xl border bg-gradient-to-br p-6 transition-all duration-700 ${colorCardThemes[activeTheme]}`}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reveal mx-auto w-full max-w-7xl px-5 py-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            Trusted by teams
          </p>
          <div className="glass overflow-hidden rounded-2xl py-4">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 14 }}
              className="flex w-[200%] gap-8 px-6 text-sm font-semibold text-slate-600"
            >
              {[
                "Astra Labs",
                "Finverse",
                "CloudAnchor",
                "Empathena Global Solution",
                "Ark Wave Solution",
                "PAYR",
                "Multi Cars Rental",
                "Pen Info Tech"
              ]
                .concat([
                  "Astra Labs",
                  "Finverse",
                  "CloudAnchor",
                  "Empathena Global Solution",
                  "Ark Wave Solution",
                  "PAYR",
                  "Multi Cars Rental",
                  "Pen Info Tech"
                ])
                .map((name, i) => (
                  <span key={`${name}-${i}`}>{name}</span>
                ))}
            </motion.div>
          </div>
        </section>

        <section id="about" className="reveal mx-auto grid w-full max-w-7xl gap-7 px-5 py-16 md:grid-cols-2">
          <div className="glass rounded-3xl p-8">
            <h2 className="text-3xl font-bold">About ReactPort</h2>
            <p className="mt-4 text-slate-600">
              We are a product-focused software team crafting elegant digital systems for companies
              that demand speed and quality at the same time.
            </p>
          </div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 25 }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold">Mission</h3>
            <p className="mt-4 text-slate-600">
              To help visionary teams launch resilient software experiences with premium UX and
              measurable outcomes.
            </p>
          </motion.div>
        </section>

        <section id="what-we-do" className="reveal mx-auto w-full max-w-7xl px-5 py-16">
          <div
            className="relative"
            onMouseEnter={() => setShowWhatWeDoDialog(true)}
            onMouseLeave={() => setShowWhatWeDoDialog(false)}
          >
            <h2 className="text-3xl font-bold md:text-4xl">What We Do</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Hover here to explore our core capabilities. We combine design, engineering, and
              automation to ship meaningful business outcomes.
            </p>
            <AnimatePresence>
              {showWhatWeDoDialog ? (
                <motion.div
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="glass absolute left-0 right-0 z-20 mt-5 rounded-3xl p-5 shadow-2xl md:p-6"
                >
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {whatWeDoItems.map((item, index) => (
                      <motion.article
                        key={item.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.04 }}
                        whileHover={{ y: -6, scale: 1.02 }}
                        className="rounded-2xl border border-sky-200/80 bg-gradient-to-br from-white to-sky-50 p-4"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-500">
                          {item.tag}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div className="mt-7 grid gap-6 md:grid-cols-3">
            {["Strategy Workshops", "Rapid Prototyping", "Long-term Support"].map((item) => (
              <div key={item} className="parallax-card glass rounded-2xl p-7">
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="mt-3 text-slate-600">
                  Structured planning, fast execution cycles, and measurable optimization.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal mx-auto w-full max-w-7xl px-5 py-8">
          <h2 className="text-3xl font-bold md:text-4xl">Process timeline slider</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {["Discovery", "Design", "Build", "Scale"].map((step, index) => (
              <motion.div
                key={step}
                animate={{
                  scale: activeMetric === index ? 1.04 : 1,
                  borderColor: activeMetric === index ? "rgb(14 165 233)" : "rgb(186 230 253)"
                }}
                transition={{ duration: 0.35 }}
                className="glass rounded-2xl border p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-sky-500">Step 0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Structured execution with checkpoints for quality, speed, and measurable outcomes.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="showcase" className="reveal mx-auto w-full max-w-7xl px-5 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">Featured work slider</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="glass min-h-[220px] rounded-2xl p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={showcaseSlides[activeWork].title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Case Study</p>
                  <h3 className="mt-3 text-2xl font-bold">{showcaseSlides[activeWork].title}</h3>
                  <p className="mt-3 text-slate-600">{showcaseSlides[activeWork].summary}</p>
                  <p className="mt-4 font-semibold text-sky-700">{showcaseSlides[activeWork].result}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex gap-2">
              {showcaseSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWork(index)}
                  className={`h-2.5 w-8 rounded-full transition ${
                    activeWork === index ? "bg-sky-500" : "bg-sky-200"
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="reveal mx-auto w-full max-w-7xl px-5 py-10">
          <h2 className="text-3xl font-bold md:text-4xl">Work done by us</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            We have worked across SaaS, corporate services, CRM/BPO systems, retail and ecommerce
            experiences. Below are selected engagements and outcomes.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectPortfolio.map((project) => (
              <article
                key={project.name}
                className="glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                  {project.domain}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-slate-600">{project.contribution}</p>
                {project.url !== "#" ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-800"
                  >
                    Visit project →
                  </a>
                ) : (
                  <span className="mt-4 inline-flex text-sm font-semibold text-slate-500">
                    Internal enterprise delivery
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="reveal mx-auto w-full max-w-7xl px-5 py-8">
          <h2 className="text-3xl font-bold md:text-4xl">Client testimonials slider</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div className="glass min-h-[130px] rounded-2xl p-6">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={testimonialSlides[activeTestimonial]}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                  className="text-lg text-slate-700"
                >
                  “{testimonialSlides[activeTestimonial]}”
                </motion.blockquote>
              </AnimatePresence>
            </div>
            <div className="flex gap-2">
              {testimonialSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 w-8 rounded-full transition ${
                    activeTestimonial === index ? "bg-sky-500" : "bg-sky-200"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Let&apos;s build your next software platform</h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Share your project goals and timeline. We will send a tailored roadmap with scope,
              delivery phases, and recommendations.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-3">
            <input
              name="name"
              value={formState.name}
              onChange={handleInput}
              placeholder="Your Name"
              required
              className="rounded-xl border border-sky-200/80 bg-white/80 px-4 py-3 text-slate-700 outline-none ring-sky-200 transition focus:ring-4"
            />
            <input
              name="email"
              type="email"
              value={formState.email}
              onChange={handleInput}
              placeholder="Your Email"
              required
              className="rounded-xl border border-sky-200/80 bg-white/80 px-4 py-3 text-slate-700 outline-none ring-sky-200 transition focus:ring-4"
            />
            <textarea
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleInput}
              placeholder="Tell us about your project"
              required
              className="rounded-xl border border-sky-200/80 bg-white/80 px-4 py-3 text-slate-700 outline-none ring-sky-200 transition focus:ring-4"
            />
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {feedback ? <p className="text-sm text-slate-600">{feedback}</p> : null}
          </form>
        </div>
      </SiteFooter>
      <ChatAssistant />
    </div>
  );
}

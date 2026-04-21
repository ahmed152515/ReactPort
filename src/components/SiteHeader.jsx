import { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  Bot,
  Boxes,
  BriefcaseBusiness,
  LayoutTemplate,
  MessageSquareMore,
  MonitorCog,
  Menu,
  X
} from "lucide-react";
import { serviceCards } from "../data/serviceCards";
import { BrandLogo } from "./BrandLogo";

const iconMap = {
  websites: LayoutTemplate,
  crm: BriefcaseBusiness,
  applications: Boxes,
  softwares: MonitorCog,
  agents: Bot,
  chatbots: MessageSquareMore
};

export function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.2 });

  const cards = useMemo(
    () =>
      serviceCards.map((item) => ({
        ...item,
        Icon: iconMap[item.slug] ?? Boxes
      })),
    []
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-200/80 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-4">
          <BrandLogo />
        </Link>

        <div className="hidden items-center justify-center gap-7 text-sm text-slate-600 md:flex">
          <NavLink to="/" className="hover:text-sky-700">
            Home
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="hover:text-sky-700">What We Do</button>
            <AnimatePresence>
              {megaOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="glass absolute left-1/2 top-full mt-4 w-[760px] -translate-x-1/2 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl"
                >
                  <div className="grid grid-cols-3 gap-3">
                    {cards.map(({ slug, title, description, Icon }, index) => (
                      <motion.div
                        key={slug}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <Link
                          to={`/services/${slug}`}
                          className="block rounded-2xl border border-sky-100 bg-white/90 p-4 transition hover:scale-[1.02] hover:border-sky-300 hover:bg-sky-50"
                        >
                          <Icon className="mb-2 h-5 w-5 text-sky-600" />
                          <p className="font-semibold text-slate-900">{title}</p>
                          <p className="mt-1 text-xs text-slate-600">{description}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <a href="/#showcase" className="hover:text-sky-700">
            Showcase
          </a>
          <a href="/#contact" className="hover:text-sky-700">
            Contact
          </a>
        </div>

        <div className="flex justify-end">
          <a
            href="/#contact"
            className="hidden rounded-full border border-sky-400/60 px-4 py-2 text-sm font-medium text-sky-600 transition hover:bg-sky-100 md:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-slate-700" />
            ) : (
              <Menu className="h-5 w-5 text-slate-700" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-5 mb-4 rounded-2xl border border-sky-200 bg-white p-4 md:hidden"
          >
            <div className="grid gap-3 text-sm">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <button
                className="text-left"
                onClick={() => setMobileMegaOpen((prev) => !prev)}
              >
                What We Do
              </button>
              <AnimatePresence>
                {mobileMegaOpen ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid gap-2 overflow-hidden"
                  >
                    {cards.map(({ slug, title, description, Icon }) => (
                      <Link
                        key={slug}
                        to={`/services/${slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-xl border border-sky-100 bg-sky-50/60 p-3"
                      >
                        <div className="mb-1 flex items-center gap-2">
                          <Icon className="h-4 w-4 text-sky-600" />
                          <span className="font-semibold">{title}</span>
                        </div>
                        <p className="text-xs text-slate-600">{description}</p>
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
              <a href="/#showcase" onClick={() => setMobileOpen(false)}>
                Showcase
              </a>
              <a href="/#contact" onClick={() => setMobileOpen(false)}>
                Contact
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        className="h-1 origin-left bg-gradient-to-r from-sky-500 to-blue-400"
        style={{ scaleX: progressScale }}
      />
    </header>
  );
}

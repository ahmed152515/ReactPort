import { Link, useParams } from "react-router-dom";
import { SiteHeader } from "../components/SiteHeader";
import { serviceCards } from "../data/serviceCards";
import { SiteFooter } from "../components/SiteFooter";
import { ChatAssistant } from "../components/ChatAssistant";

const serviceMedia = {
  websites:
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
  crm: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
  applications:
    "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80",
  softwares:
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80",
  agents:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
  chatbots:
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1600&q=80"
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = serviceCards.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50">
        <SiteHeader />
        <main className="mx-auto mt-28 max-w-4xl px-5 py-16">
          <div className="glass rounded-3xl p-8">
            <h1 className="text-3xl font-bold">Service not found</h1>
            <Link to="/" className="mt-4 inline-flex text-sky-700">
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto mt-28 max-w-5xl px-5 py-16">
        <section className="glass overflow-hidden rounded-3xl">
          <img
            src={serviceMedia[slug]}
            alt={`${service.title} service`}
            className="h-56 w-full object-cover md:h-72"
            loading="lazy"
          />
          <div className="p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            ReactPort Service
          </p>
          <h1 className="mt-3 text-4xl font-bold">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-slate-600">{service.description}</p>
          <p className="mt-6 text-slate-600">
            We deliver this service with structured discovery, premium UI standards, scalable
            engineering, QA validation, and post-launch optimization.
          </p>
          <Link
            to="/#contact"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 font-semibold text-white"
          >
            Start a Project
          </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            "Discovery and requirement mapping",
            "UX wireframing and technical planning",
            "Development, QA and deployment"
          ].map((item, index) => (
            <article key={item} className="glass rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                Phase 0{index + 1}
              </p>
              <h3 className="mt-2 font-semibold text-slate-900">{item}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Structured milestone delivery with transparent communication and measurable outputs.
              </p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-bold">What you receive</h2>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              <li>- UX-first interface and design system consistency</li>
              <li>- Performance optimization and clean code architecture</li>
              <li>- Security best practices and reliability guardrails</li>
              <li>- Documentation and handover support</li>
            </ul>
          </article>
          <article className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-bold">Typical outcomes</h2>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              <li>- Better conversion and stronger user engagement</li>
              <li>- Faster workflows for teams and operations</li>
              <li>- Higher trust through premium digital presence</li>
              <li>- Scalable foundation for future enhancements</li>
            </ul>
          </article>
        </section>
      </main>
      <SiteFooter />
      <ChatAssistant />
    </div>
  );
}

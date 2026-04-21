import { Link } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";

export function SiteFooter({ children }) {
  return (
    <footer id="contact" className="mx-auto w-full max-w-7xl px-5 py-16">
      <div className="glass rounded-3xl p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <BrandLogo compact />
            <p className="mt-3 text-sm text-slate-600">
              We design and engineer premium digital products for ambitious companies.
            </p>
            <p className="mt-4 text-sm text-slate-600">Email: sayyedwp@gmail.com</p>
            <p className="text-sm text-slate-600">Phone: +91 8530070721</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Quick Links</h4>
            <div className="mt-3 grid gap-2 text-sm text-slate-600">
              <a href="/#features">Features</a>
              <a href="/#showcase">Case Studies</a>
              <a href="/#what-we-do">What We Do</a>
              <Link to="/services/websites">Services</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Office</h4>
            <p className="mt-3 text-sm text-slate-600">
              Office No. 20, Kondhwa, Pune
              <br />
              Maharashtra, India
            </p>
            <p className="mt-3 text-sm text-slate-600">Mon - Sat: 10:00 AM to 7:00 PM</p>
          </div>
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
        <div className="mt-8 border-t border-sky-100 pt-5 text-sm text-slate-500">
          © {new Date().getFullYear()} ReactPort. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

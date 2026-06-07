"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* =============================================
   NAVBAR COMPONENT
   ============================================= */
function Navbar({ scrolled }: { scrolled: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Despre Noi", href: "#despre" },
    { label: "Programul", href: "#program" },
    { label: "Destinații", href: "#destinatii" },
    { label: "Testimoniale", href: "#testimoniale" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">
              <img
                src="/logo.jpg"
                alt="Wild West Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "1px solid rgba(245, 158, 11, 0.4)"
                }}
              />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-title">Wild west</span>
              <span className="nav-logo-subtitle">work & travel</span>
            </div>
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta">
                Aplică Acum
              </a>
            </li>
          </ul>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Deschide meniu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button
          className="mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Închide meniu"
        >
          ✕
        </button>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary"
          onClick={() => setMobileOpen(false)}
        >
          Aplică Acum
        </a>
      </div>
    </>
  );
}

/* =============================================
   TOP BAR COMPONENT
   ============================================= */
function TopBar({ scrolled }: { scrolled: boolean }) {
  return (
    <div className={`top-bar ${scrolled ? "hidden" : ""}`}>
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <a href="tel:+40723234567">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +40 723 234 567
          </a>
          <a href="mailto:howdy@wildwesttravel.ro">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
            howdy@wildwesttravel.ro
          </a>
        </div>
        <div className="top-bar-right">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          Vara 2027 · Locuri disponibile
        </div>
      </div>
    </div>
  );
}

/* =============================================
   HERO SECTION
   ============================================= */
function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-bg-desktop" style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/hero-desktop.png"
            alt="Monument Valley desert landscape at sunset"
            fill
            style={{ objectFit: "cover" }}
            preload
            quality={85}
          />
        </div>
        <div className="hero-bg-mobile" style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/hero-mobile.png"
            alt="Monument Valley desert landscape at sunset"
            fill
            style={{ objectFit: "cover" }}
            preload
            quality={85}
          />
        </div>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          NOU! Work &amp; Travel Reinventat · 2027
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line1">Aventura ta</span>
          <span className="hero-title-line2">Americană începe</span>
          <span className="hero-title-accent">Aici</span>
        </h1>

        <p className="hero-subtitle">
          Un nou concept de Work &amp; Travel:{" "}
          <strong>mai ieftin, mai rapid, mai simplu.</strong> Fără birocrație
          inutilă, fără costuri ascunse. Doar tu și aventura ta americană.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary" id="hero-cta">
            🤠 Înscrie-te Acum
          </a>
          <a href="#despre" className="btn-secondary">
            Află Mai Multe
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-icon">👥</div>
            <div className="hero-stat-value">-30%</div>
            <div className="hero-stat-label">Mai ieftin</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-icon">⚡</div>
            <div className="hero-stat-value">2x</div>
            <div className="hero-stat-label">Mai Rapid</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-icon">⭐</div>
            <div className="hero-stat-value">0</div>
            <div className="hero-stat-label">Costuri Ascunse</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   ABOUT SECTION
   ============================================= */
function AboutSection() {
  return (
    <section className="about-section" id="despre">
      <div className="about-inner">
        <div className="section-header">
          <div className="section-badge">🌵 Despre Noi</div>
          <h2 className="section-title">
            De ce{" "}
            <span className="section-title-accent">Wild West Travel</span>?
          </h2>
          <p className="section-subtitle">
            Nu suntem doar o agenție. Suntem partenerul tău în cea mai tare
            aventură din viața ta.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>Reinventăm Work &amp; Travel</h3>
            <p>
              Am pornit Wild West Travel cu un scop simplu: să facem experiența
              Work &amp; Travel accesibilă, transparentă și memorabilă. Știm că
              visul american începe cu o decizie curajoasă – și noi suntem aici
              să te ajutăm în fiecare pas.
            </p>
            <p>
              Echipa noastră este formată din foști participanți W&amp;T care
              cunosc procesul din interior. De la obținerea vizei J-1, la
              găsirea jobului ideal și a cazării perfecte – te ghidăm cu
              experiență reală, nu doar promisiuni.
            </p>
          </div>
          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-icon">💰</div>
              <h4>Prețuri Transparente</h4>
              <p>Zero taxe ascunse. Plătești doar ce vezi, cu posibilitate de rate.</p>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">📋</div>
              <h4>Suport Complet</h4>
              <p>Te asistăm de la aplicare până la întoarcere. 24/7 pe WhatsApp.</p>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">✈️</div>
              <h4>Joburi Garantate</h4>
              <p>Parteneriate cu angajatori verificați în cele mai cool locații.</p>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">🏠</div>
              <h4>Cazare Asigurată</h4>
              <p>Cazare aranjată înainte de plecare, lângă locul de muncă.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   PROGRAM (STEPS) SECTION
   ============================================= */
function ProgramSection() {
  const steps = [
    {
      number: 1,
      title: "Înscrie-te Online",
      desc: "Completezi formularul online în 5 minute. Este gratuit și fără obligații. Te contactăm noi.",
    },
    {
      number: 2,
      title: "Consiliere Gratuită",
      desc: "Discutăm opțiunile tale, alegem destinația ideală și planificăm totul împreună.",
    },
    {
      number: 3,
      title: "Obținere Viză J-1",
      desc: "Te ghidăm pas cu pas prin procesul de obținere a vizei. Rata de succes: 98%.",
    },
    {
      number: 4,
      title: "Plecare în SUA!",
      desc: "Cu jobul și cazarea puse la punct, tot ce-ți rămâne e să trăiești aventura!",
    },
  ];

  return (
    <section className="program-section" id="program">
      <div className="program-inner">
        <div className="section-header">
          <div className="section-badge">📍 Programul</div>
          <h2 className="section-title">
            Cum{" "}
            <span className="section-title-accent">Funcționează</span>?
          </h2>
          <p className="section-subtitle">
            4 pași simpli de la visul american la realitate. Noi ne ocupăm de
            birocrație, tu te concentrezi pe aventură.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================
   DESTINATIONS SECTION
   ============================================= */
function DestinationsSection() {
  const destinations = [
    {
      name: "Ocean City",
      state: "Maryland",
      jobs: "Restaurante, Hoteluri, Retail",
      image: "/dest-ocean-city.png",
      tag: "Popular",
    },
    {
      name: "Virginia Beach",
      state: "Virginia",
      jobs: "Ospitalitate, Entertainment",
      image: "/dest-virginia-beach.png",
      tag: "Recomandat",
    },
    {
      name: "Myrtle Beach",
      state: "South Carolina",
      jobs: "Resort, Food & Beverage",
      image: "/dest-myrtle-beach.png",
      tag: "Nou 2027",
    },
  ];

  return (
    <section className="destinations-section" id="destinatii">
      <div className="destinations-inner">
        <div className="section-header">
          <div className="section-badge">🗺️ Destinații</div>
          <h2 className="section-title">
            Locurile Tale de{" "}
            <span className="section-title-accent">Aventură</span>
          </h2>
          <p className="section-subtitle">
            Cele mai populare destinații Work &amp; Travel din SUA, cu joburi
            garantate și cazare asigurată.
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map((dest) => (
            <div className="destination-card" key={dest.name}>
              <Image
                src={dest.image}
                alt={`${dest.name}, ${dest.state} - destinație Work & Travel`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="destination-overlay">
                <h3 className="destination-name">{dest.name}</h3>
                <p className="destination-state">{dest.state}</p>
                <p className="destination-jobs">{dest.jobs}</p>
              </div>
              <span className="destination-tag">{dest.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================
   TESTIMONIALS SECTION
   ============================================= */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alexandra P.",
      initials: "AP",
      location: "Ocean City, 2024",
      text: "Cea mai tare vară din viața mea! Echipa Wild West m-a ajutat cu tot — de la viză la cazare. Am lucrat la un restaurant pe boardwalk și am făcut prieteni din toată lumea.",
    },
    {
      name: "Andrei M.",
      initials: "AM",
      location: "Virginia Beach, 2024",
      text: "Am ales Wild West pentru prețul corect și transparența lor. Zero surprize, zero costuri ascunse. Recomand cu mare drag oricui vrea o experiență reală în SUA!",
    },
    {
      name: "Maria D.",
      initials: "MD",
      location: "Myrtle Beach, 2023",
      text: "La început am fost sceptică, dar echipa m-a convins prin profesionalism. Mi-au răspuns la orice întrebare pe WhatsApp instant. Experiența a fost de 10/10!",
    },
  ];

  return (
    <section className="testimonials-section" id="testimoniale">
      <div className="testimonials-inner">
        <div className="section-header">
          <div className="section-badge">💬 Testimoniale</div>
          <h2 className="section-title">
            Ce Spun{" "}
            <span className="section-title-accent">Călătorii Noștri</span>
          </h2>
          <p className="section-subtitle">
            Peste 500 de studenți au trăit aventura americană cu noi. Iată ce
            gândesc ei.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <span className="testimonial-star" key={i}>
                    ★
                  </span>
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================
   FAQ SECTION
   ============================================= */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Cât costă programul Work & Travel cu Wild West?",
      a: "Prețul nostru pornește de la 1.490€, cu tot inclus: taxa de program, asistență viză, plasare la job și suport continuu. Fără costuri ascunse! Oferim și posibilitate de plată în rate.",
    },
    {
      q: "Am nevoie de experiență anterioară de muncă?",
      a: "Nu! Programul Work & Travel este deschis tuturor studenților cu vârsta între 18-28 ani, înscriși la o universitate. Nu ai nevoie de experiență – angajatorii oferă training complet.",
    },
    {
      q: "Ce tip de joburi sunt disponibile?",
      a: "Joburile variază de la ospitalitate (hoteluri, restaurante) la retail, parcuri de distracții și lifeguard. Majoritatea sunt în zone turistice de pe coasta de est a SUA.",
    },
    {
      q: "Cazarea este inclusă?",
      a: "Da! Ne asigurăm că ai cazare aranjată înainte de plecare, aproape de locul de muncă. Costul cazării este separat (plătit din salariul tău) dar o organizăm noi integral.",
    },
    {
      q: "Cât de greu este să obții viza J-1?",
      a: "Cu pregătirea noastră, rata de succes la interviul de viză este de 98%. Te pregătim cu sesiuni de simulare și toată documentația necesară.",
    },
    {
      q: "Pot să lucrez oriunde în SUA?",
      a: "Viza J-1 îți permite să lucrezi doar la angajatorul specificat în contract. Însă după terminarea contractului ai 30 de zile de travel pentru a explora SUA!",
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <div className="section-header">
          <div className="section-badge">❓ FAQ</div>
          <h2 className="section-title">
            Întrebări{" "}
            <span className="section-title-accent">Frecvente</span>
          </h2>
          <p className="section-subtitle">
            Răspundem la cele mai comune întrebări despre Work &amp; Travel.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              key={i}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                id={`faq-q-${i}`}
              >
                {faq.q}
                <span className="faq-arrow">▼</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================
   CALCULATOR SECTION
   ============================================= */
function CalculatorSection() {
  const [hoursPerWeek, setHoursPerWeek] = useState(35);
  const [hourlyRate, setHourlyRate] = useState(13);
  const [weeks, setWeeks] = useState(14);
  const [monthlyRent, setMonthlyRent] = useState(350);
  const [monthlyExpenses, setMonthlyExpenses] = useState(250);

  const grossEarnings = hoursPerWeek * hourlyRate * weeks;
  const taxRate = 0.12;
  const taxes = Math.round(grossEarnings * taxRate);
  const netAfterTax = grossEarnings - taxes;
  const months = weeks / 4.33;
  const totalRent = Math.round(monthlyRent * months);
  const totalExpenses = Math.round(monthlyExpenses * months);
  const takeHome = netAfterTax - totalRent - totalExpenses;
  const savingsPercent = Math.max(0, Math.min(100, Math.round((takeHome / grossEarnings) * 100)));

  const fmt = (n: number) => "$" + Math.abs(n).toLocaleString("en-US");

  return (
    <section className="calculator-section" id="calculator">
      <div className="calculator-inner">
        <div className="section-header">
          <div className="section-badge">💰 Calculator</div>
          <h2 className="section-title">
            Cât Poți <span className="section-title-accent">Câștiga</span>?
          </h2>
          <p className="section-subtitle">
            Calculează-ți câștigurile estimate pentru întreaga perioadă de Work
            &amp; Travel. Ajustează valorile după preferințele tale.
          </p>
        </div>

        <div className="calculator-layout">
          <div className="calculator-controls">
            <div className="calc-field">
              <div className="calc-field-header">
                <span className="calc-field-label">
                  <span className="calc-field-label-icon">⏰</span> Ore pe săptămână
                </span>
                <span className="calc-field-value">{hoursPerWeek}h</span>
              </div>
              <input type="range" className="calc-slider" min="20" max="50" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(Number(e.target.value))} id="calc-hours" />
              <div className="calc-slider-range"><span>20h</span><span>50h</span></div>
            </div>

            <div className="calc-field">
              <div className="calc-field-header">
                <span className="calc-field-label">
                  <span className="calc-field-label-icon">💵</span> Salariu pe oră (USD)
                </span>
                <span className="calc-field-value">${hourlyRate}</span>
              </div>
              <input type="range" className="calc-slider" min="8" max="20" step="0.5" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} id="calc-rate" />
              <div className="calc-slider-range"><span>$8</span><span>$20</span></div>
            </div>

            <div className="calc-field">
              <div className="calc-field-header">
                <span className="calc-field-label">
                  <span className="calc-field-label-icon">📅</span> Durata contractului
                </span>
                <span className="calc-field-value">{weeks} săpt.</span>
              </div>
              <input type="range" className="calc-slider" min="8" max="20" value={weeks} onChange={(e) => setWeeks(Number(e.target.value))} id="calc-weeks" />
              <div className="calc-slider-range"><span>8 săptămâni</span><span>20 săptămâni</span></div>
            </div>

            <div className="calc-field">
              <div className="calc-field-header">
                <span className="calc-field-label">
                  <span className="calc-field-label-icon">🏠</span> Chirie lunară (USD)
                </span>
                <span className="calc-field-value">${monthlyRent}</span>
              </div>
              <input type="range" className="calc-slider" min="150" max="700" step="25" value={monthlyRent} onChange={(e) => setMonthlyRent(Number(e.target.value))} id="calc-rent" />
              <div className="calc-slider-range"><span>$150</span><span>$700</span></div>
            </div>

            <div className="calc-field">
              <div className="calc-field-header">
                <span className="calc-field-label">
                  <span className="calc-field-label-icon">🍔</span> Cheltuieli lunare (USD)
                </span>
                <span className="calc-field-value">${monthlyExpenses}</span>
              </div>
              <input type="range" className="calc-slider" min="100" max="600" step="25" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(Number(e.target.value))} id="calc-expenses" />
              <div className="calc-slider-range"><span>$100</span><span>$600</span></div>
            </div>
          </div>

          <div className="calculator-results">
            <div className="calc-result-main">
              <p className="calc-result-main-label">Economii estimate</p>
              <p className="calc-result-main-value">{takeHome >= 0 ? fmt(takeHome) : "-" + fmt(takeHome)}</p>
              <p className="calc-result-main-sub">bani rămași după toate cheltuielile</p>
            </div>

            <div className="calc-result-breakdown">
              <div className="calc-result-card">
                <div className="calc-result-card-icon">💰</div>
                <p className="calc-result-card-label">Venit Brut</p>
                <p className="calc-result-card-value amber">{fmt(grossEarnings)}</p>
              </div>
              <div className="calc-result-card">
                <div className="calc-result-card-icon">🏛️</div>
                <p className="calc-result-card-label">Taxe (~12%)</p>
                <p className="calc-result-card-value negative">-{fmt(taxes)}</p>
              </div>
              <div className="calc-result-card">
                <div className="calc-result-card-icon">🏠</div>
                <p className="calc-result-card-label">Chirie Totală</p>
                <p className="calc-result-card-value negative">-{fmt(totalRent)}</p>
              </div>
              <div className="calc-result-card">
                <div className="calc-result-card-icon">🍽️</div>
                <p className="calc-result-card-label">Cheltuieli Totale</p>
                <p className="calc-result-card-value negative">-{fmt(totalExpenses)}</p>
              </div>
            </div>

            <div className="calc-progress-bar">
              <div className="calc-progress-label">
                <span>Procent economisit din venit</span>
                <span>{savingsPercent}%</span>
              </div>
              <div className="calc-progress-track">
                <div className="calc-progress-fill" style={{ width: `${savingsPercent}%` }} />
              </div>
            </div>

            <p className="calc-note">* Estimare orientativă. Sumele reale pot varia în funcție de locație, angajator și stil de viață.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   CTA / CONTACT SECTION
   ============================================= */
function CTASection() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-inner">
        <div className="section-badge">🤠 Aplică Acum</div>
        <h2 className="cta-title">
          Pregătit pentru{" "}
          <span className="section-title-accent">aventură</span>?
        </h2>
        <p className="cta-subtitle">
          Completează formularul și te contactăm noi în 24 de ore. Este gratuit
          și fără obligații!
        </p>

        <form
          className="cta-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "Mulțumim! Te vom contacta în curând. 🤠"
            );
          }}
          id="contact-form"
        >
          <div className="cta-input-row">
            <input
              className="cta-input"
              type="text"
              placeholder="Nume complet"
              required
              id="contact-name"
            />
            <input
              className="cta-input"
              type="tel"
              placeholder="Număr de telefon"
              required
              id="contact-phone"
            />
          </div>
          <input
            className="cta-input"
            type="email"
            placeholder="Adresa de email"
            required
            id="contact-email"
          />
          <input
            className="cta-input"
            type="text"
            placeholder="Universitatea la care ești student"
            id="contact-university"
          />
          <button type="submit" className="btn-primary" id="contact-submit">
            🚀 Trimite Aplicația
          </button>
        </form>
      </div>
    </section>
  );
}

/* =============================================
   FOOTER
   ============================================= */
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <a href="#" className="nav-logo" style={{ marginBottom: "0.5rem" }}>
              <div className="nav-logo-icon">
                <img
                  src="/logo.jpg"
                  alt="Wild West Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "1px solid rgba(245, 158, 11, 0.4)"
                  }}
                />
              </div>
              <div className="nav-logo-text">
                <span className="nav-logo-title">Wild west</span>
                <span className="nav-logo-subtitle">work & travel</span>
              </div>
            </a>
            <p className="footer-brand-desc">
              Agenție de Work &amp; Travel premium din România. Ajutăm studenții
              să trăiască aventura americană fără stres și fără costuri ascunse.
            </p>
            <div className="footer-socials">
              <a
                href="https://instagram.com"
                className="footer-social"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷
              </a>
              <a
                href="https://facebook.com"
                className="footer-social"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                📘
              </a>
              <a
                href="https://tiktok.com"
                className="footer-social"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎵
              </a>
              <a
                href="https://wa.me/40723234567"
                className="footer-social"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Linkuri Rapide</h4>
            <ul>
              <li><a href="#despre">Despre Noi</a></li>
              <li><a href="#program">Programul</a></li>
              <li><a href="#destinatii">Destinații</a></li>
              <li><a href="#testimoniale">Testimoniale</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Destinații</h4>
            <ul>
              <li><a href="#destinatii">Ocean City, MD</a></li>
              <li><a href="#destinatii">Virginia Beach, VA</a></li>
              <li><a href="#destinatii">Myrtle Beach, SC</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+40723234567">+40 723 234 567</a></li>
              <li><a href="mailto:howdy@wildwesttravel.ro">howdy@wildwesttravel.ro</a></li>
              <li><a href="https://wa.me/40723234567">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2027 Wild West Travel. Toate drepturile rezervate.</p>
          <div className="footer-bottom-links">
            <a href="#">Termeni și Condiții</a>
            <a href="#">Politica de Confidențialitate</a>
            <a href="#">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =============================================
   MAIN PAGE
   ============================================= */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Intersection Observer for scroll animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <TopBar scrolled={scrolled} />
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <DestinationsSection />
      <CalculatorSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

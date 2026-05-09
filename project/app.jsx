/* ORCA KITS landing — single-page React app */
const { useState, useEffect, useRef } = React;

/* ============================================================
   CONFIG  ◇ replace FORM_URL with your Microsoft Form link
   ============================================================ */
const FORM_URL = "https://forms.office.com/r/your-form-id"; // ← replace me

/* Tweakable defaults — see Tweaks panel */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headlineMode": "future",
  "galleryDensity": "balanced",
  "showProcess": true,
  "showSpecs": true
} /*EDITMODE-END*/;

/* ============================================================
   Atoms
   ============================================================ */
function ArrowCTA({ large, children, href = FORM_URL }) {
  return (
    <a
      className={`arrow-cta ${large ? "arrow-cta--lg" : ""}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      <span className="arrow-cta__label">{children}</span>
      <span className="arrow-cta__arrow" aria-hidden="true">→</span>
    </a>);

}

function GhostButton({ children, href = "#edge" }) {
  return (
    <a className="ghost-btn" href={href}>
      <span>{children}</span>
      <span aria-hidden="true" style={{ color: "var(--bone-dim)" }}>↓</span>
    </a>);

}

function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span className="dot" />
      {children}
    </div>);

}

/* ============================================================
   Nav
   ============================================================ */
function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a href="#top" className="brand" aria-label="ORCA KITS — home">
          <span className="brand__logo" role="img" aria-label="ORCA KITS" />
        </a>
        <a className="nav__cta" href={FORM_URL} target="_blank" rel="noopener noreferrer">
          <span className="nav__cta-label">CONTACT US</span>
          <span className="arrow">→</span>
        </a>
      </div>
    </header>);

}

/* ============================================================
   Hero
   ============================================================ */
function Hero({ headlineMode, showSpecs }) {
  const headlines = {
    future: <>The Future of Framing<br />is <em>Flat-Packed.</em></>,
    precision: <>Engineered to the<br /><em>Millimeter.</em><br />Shipped Flat.</>,
    speed: <>Foundation to <em>Framed</em><br />in Days, Not Weeks.</>
  };

  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <video
          className="hero__video"
          src="assets/clip-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true">
        </video>
        <image-slot
          id="hero-image"
          shape="rect"
          placeholder="HERO — modern home with exposed LGS frame">
        </image-slot>
      </div>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__shade" aria-hidden="true" />

      <div className="wrap hero__content">
        <div className="hero__meta reveal">
          <span className="pill pill--oak" style={{ fontFamily: "Inter" }}>◇ Light-Gauge Steel</span>
          <span className="pill">Flat-Pack Kits</span>
          <span className="pill">Ships BC + AB Only</span>
        </div>

        <h1 className="h-display hero__headline reveal">
          {headlines[headlineMode] || headlines.future}
        </h1>

        <p className="body-lg hero__sub reveal">
          Transforming digital design into deployable housing systems through
          distributed manufacturing, engineered systems, and local participation.
        </p>

        <p className="body-lg hero__sub hero__sub--secondary reveal">
          ORCA is building a new approach to housing delivery — moving construction
          toward scalable production using engineered light-gauge steel systems,
          pre-engineered sub-assemblies, and distributed manufacturing.
        </p>

        <ul className="hero__principles reveal" aria-label="Designed to be">
          <li><span className="hero__principles-mark" aria-hidden="true">◇</span>Simple</li>
          <li><span className="hero__principles-mark" aria-hidden="true">◇</span>Fast</li>
          <li><span className="hero__principles-mark" aria-hidden="true">◇</span>Scalable</li>
          <li><span className="hero__principles-mark" aria-hidden="true">◇</span>Efficient in labour &amp; materials</li>
          <li><span className="hero__principles-mark" aria-hidden="true">◇</span>Higher quality, less waste</li>
        </ul>

        <div className="hero__ctas reveal">
          <ArrowCTA large>Apply for Founding Access</ArrowCTA>
          <GhostButton>Explore the ORCA Network</GhostButton>
        </div>

        <div className="hero__feature reveal" data-comment-anchor="cc-1">
          <span className="proof__media-tag">◇ Featured Build</span>
          <image-slot
            id="hero-feature"
            shape="rect"
            placeholder="LARGE FEATURE — hero project / signature steel kit">
          </image-slot>
        </div>

        {showSpecs &&
        <dl className="hero__specs reveal">
            <div className="spec">
              <dt>Tolerance</dt>
              <dd>±1 mm</dd>
            </div>
            <div className="spec">
              <dt>Assembly</dt>
              <dd>2–4 Days</dd>
            </div>
            <div className="spec">
              <dt>SNOW ,WIND & SEISMIC</dt>
              <dd>Engineered</dd>
            </div>
          </dl>
        }
      </div>
    </section>);

}

/* ============================================================
   Technical Edge — 4 cells
   ============================================================ */
function MarkPrecision() {
  return (
    <div className="mark mark--precision">
      <span className="mark__ring" />
      <span className="mark__sq crossv" />
      <span className="mark__sq crossh" />
      <span className="ctr" />
    </div>);

}
function MarkShield() {
  return (
    <div className="mark mark--shield">
      <span className="mark__ring" />
      <span className="ring2" />
      <span className="ctr" />
    </div>);

}
function MarkSteps() {
  return (
    <div className="mark mark--steps">
      <span className="step s1" />
      <span className="step s2" />
      <span className="step s3" />
      <span className="step s4" />
    </div>);

}
function MarkRapid() {
  return (
    <div className="mark mark--rapid">
      <span className="bar b1" />
      <span className="bar b2" />
      <span className="bar b3" />
      <span className="arrow" />
    </div>);

}

const EDGE_DATA = [
{
  n: "01",
  Mark: MarkPrecision,
  title: "Millimeter Precision",
  body: "CNC-cut, jig-built members arrive numbered and labeled. No warping, no shrinking, no twisting — ever.",
  stat: { num: "±1 mm", lbl: "Tolerance" }
},
{
  n: "02",
  Mark: MarkShield,
  title: "Fire & Rot Resilient",
  body: "Galvanized steel resists fire, termites, mold, and moisture — engineered for West Coast climates.",
  stat: { num: "Class A", lbl: "Fire Rated" }
},
{
  n: "03",
  Mark: MarkSteps,
  title: "Seismic-Engineered",
  body: "Steel’s strength-to-weight ratio handles lateral and uplift loads with ease — engineered for BC and Alberta seismic zones.",
  stat: { num: "Lateral", lbl: "Engineered" }
},
{
  n: "04",
  Mark: MarkRapid,
  title: "Rapid Flat-Pack Assembly",
  body: "One-pallet delivery. Two-person crew. Foundation to fully framed envelope in a fraction of stick-build time.",
  stat: { num: "3–7d", lbl: "Frame-Up" }
}];


function Why() {
  return (
    <section className="section why" id="why">
      <div className="wrap">
        <div className="why__inner reveal">
          <Eyebrow>The Why</Eyebrow>
          <h2 className="h-section why__title">
            Help people <em style={{ color: "var(--bone)", fontStyle: "normal" }}>help themselves.</em>
          </h2>
          <p className="why__lede">
            Canada needs faster, more accessible housing &mdash; and the people closest
            to the problem are too often locked out of the solution. ORCA opens up the
            systems, tools, and technology so communities, builders, and individuals
            can participate directly in housing delivery.
          </p>
          <p className="why__pull">
            Not built by a few with a lot &mdash;<br />
            <em style={{ fontStyle: "normal", color: "var(--bone)" }}>built by many with a bit.</em>
          </p>
        </div>
      </div>
    </section>);

}


function How() {
  const stages = [
    { n: "01", title: "Digital Design", body: "Parametric models tuned for buildable geometry — every wall, joist, and panel resolved before fabrication." },
    { n: "02", title: "Engineered Systems", body: "Stamped light-gauge steel assemblies replace ad-hoc framing with repeatable, load-tested kits." },
    { n: "03", title: "Sub-Assemblies", body: "Pre-built panels, floors, and modules leave the plant ready to bolt — labour shifts from cutting to connecting." },
    { n: "04", title: "Distributed Manufacturing", body: "Regional plants produce close to the build site. Shorter supply chains, faster delivery, local jobs." }
  ];
  return (
    <section className="section how" id="how">
      <div className="wrap">
        <div className="section__head reveal">
          <Eyebrow>The How</Eyebrow>
          <h2 className="h-section section__title">
            From construction<br />to <em style={{ color: "var(--bone)", fontStyle: "normal" }}>production.</em>
          </h2>
          <p className="section__lede">
            ORCA combines digital design, engineered housing systems, pre-engineered
            sub-assemblies, and distributed manufacturing into a new engine for
            construction &mdash; one that can be manufactured, assembled, and scaled
            with the discipline of a factory floor.
          </p>
        </div>

        <ol className="how__flow reveal">
          {stages.map((s, i) => (
            <li key={s.n} className="how__stage">
              <div className="how__stage-num">{s.n}</div>
              <div className="how__stage-body">
                <h3 className="how__stage-title">{s.title}</h3>
                <p className="how__stage-desc">{s.body}</p>
              </div>
              {i < stages.length - 1 && <span className="how__stage-arrow" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>

        <div className="how__pull reveal">
          <span className="how__pull-l">Digital</span>
          <span className="how__pull-arrow" aria-hidden="true">
            <span className="how__pull-line" />
            <span className="how__pull-tip">→</span>
          </span>
          <span className="how__pull-r"><em style={{ fontStyle: "normal", color: "var(--bone)" }}>Physical.</em></span>
        </div>
      </div>
    </section>);

}


function What() {
  const apps = [
    {
      n: "01",
      title: "ADUs & Backyard Housing",
      body: "Laneway homes, garden suites, and infill kits for tight urban lots.",
      Icon: () => (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="8" y="38" width="48" height="18" />
          <path d="M8 38 L32 20 L56 38" />
          <rect x="26" y="44" width="12" height="12" />
        </svg>
      )
    },
    {
      n: "02",
      title: "Single-Family & Cabins",
      body: "Detached homes and recreational structures, from compact to estate-scale.",
      Icon: () => (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="34" width="36" height="22" />
          <path d="M6 34 L24 18 L42 34" />
          <rect x="42" y="40" width="16" height="16" />
          <path d="M42 40 L50 32 L58 40" />
        </svg>
      )
    },
    {
      n: "03",
      title: "Missing Middle Housing",
      body: "Duplexes, triplexes, fourplexes, and townhome rows that fit existing neighborhoods.",
      Icon: () => (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="22" width="14" height="34" />
          <rect x="20" y="14" width="14" height="42" />
          <rect x="36" y="22" width="14" height="34" />
          <rect x="52" y="30" width="8" height="26" />
        </svg>
      )
    },
    {
      n: "04",
      title: "Workforce & Community",
      body: "Affordable housing for essential workers, students, and supportive communities.",
      Icon: () => (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="8" y="14" width="48" height="42" />
          <path d="M8 28 H56 M8 42 H56 M22 14 V56 M40 14 V56" />
        </svg>
      )
    },
    {
      n: "05",
      title: "Large-Scale Deployment",
      body: "Multi-site rollouts where repeatability turns weeks into days at scale.",
      Icon: () => (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="34" width="14" height="22" />
          <rect x="20" y="26" width="14" height="30" />
          <rect x="36" y="18" width="14" height="38" />
          <rect x="52" y="10" width="8" height="46" />
        </svg>
      )
    }
  ];
  return (
    <section className="section what" id="what">
      <div className="wrap">
        <div className="section__head reveal">
          <Eyebrow>The What</Eyebrow>
          <h2 className="h-section section__title">
            Engineered <em style={{ color: "var(--bone)", fontStyle: "normal" }}>housing systems.</em>
          </h2>
          <p className="section__lede">
            ORCA develops standardized systems that scale across the housing
            spectrum &mdash; from a single backyard suite to a regional rollout.
          </p>
        </div>

        <ul className="what__grid reveal">
          {apps.map(({ n, title, body, Icon }) => (
            <li key={n} className="what__card">
              <div className="what__card-head">
                <span className="what__card-num">{n}</span>
                <span className="what__card-icon"><Icon /></span>
              </div>
              <h3 className="what__card-title">{title}</h3>
              <p className="what__card-desc">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>);

}


function TechnicalEdge() {
  return (
    <section className="section edge" id="edge">
      <div className="wrap">
        <div className="section__head reveal">
          <Eyebrow>The Technical Edge</Eyebrow>
          <h2 className="h-section section__title">
            Built like a&nbsp;<em style={{ color: "var(--oak-300)", fontStyle: "normal" }}>spec sheet,</em> not a&nbsp;sales&nbsp;brochure.
          </h2>
          <p className="section__lede">Every ORCA kit is engineered, stamped, and pre-assembled into modules that land on your site ready to Screwed together. Here’s what that buys you.


          </p>
        </div>

        <div className="edge__grid reveal">
          {EDGE_DATA.map(({ n, Mark, title, body, stat }) =>
          <div className="edge__cell" key={n}>
              <div className="edge__num">{n} / 04</div>
              <div className="edge__mark"><Mark /></div>
              <h3 className="edge__title">{title}</h3>
              <p className="edge__body">{body}</p>
              <div className="stat">
                <span className="num">{stat.num}</span>
                <span className="lbl">{stat.lbl}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   Steel Showcase — large in-shop / material imagery
   ============================================================ */
function SteelShowcase() {
  return (
    <section className="section steel" id="steel">
      <div className="wrap">
        <div className="section__head reveal">
          <Eyebrow>The Material</Eyebrow>
          <h2 className="h-section section__title">
            Cold-formed steel.<br />
            <em style={{ color: "var(--oak-300)", fontStyle: "normal" }}>Numbered. Stamped. Stacked.</em>
          </h2>
          <p className="section__lede">
            Galvanized to G90, cold-formed in our regional plant, and palletized in build order.
            Every member arrives labeled to a stamped shop drawing &mdash; no guesswork on site.
          </p>
        </div>

        <div className="steel__grid reveal">
          <div className="steel__cell steel__cell--lead">
            <span className="proof__media-tag">◇ STUD PROFILE</span>
            <image-slot
              id="steel-1"
              shape="rect"
              placeholder="LARGE: cold-formed steel coil / roll-form line in plant">
            </image-slot>
          </div>
          <div className="steel__cell">
            <span className="proof__media-tag">◇ TYPICAL WALL BUILD UP</span>
            <image-slot
              id="steel-2"
              shape="rect"
              placeholder="Detail: numbered LGS studs / track">
            </image-slot>
          </div>
          <div className="steel__cell">
            <span className="proof__media-tag">◇ WOOD VS STEEL</span>
            <image-slot
              id="steel-3"
              shape="rect"
              placeholder="Pallet: complete kit strapped & ready to ship">
            </image-slot>
          </div>
        </div>

        <dl className="steel__specs reveal">
          <div className="item"><dt>Coating</dt><dd>G90 Galvanized</dd></div>
          <div className="item"><dt>Gauge</dt><dd>18 – 22</dd></div>
          <div className="item"><dt>Cut</dt><dd>CNC, Pre-Punched</dd></div>
          <div className="item"><dt>Delivery</dt><dd>One Pallet</dd></div>
        </dl>
      </div>
    </section>);

}

/* ============================================================
   Visual Proof — Gallery
   ============================================================ */
function Proof({ density }) {
  return (
    <section className="section proof" id="proof">
      <div className="wrap">
        <div className="section__head reveal">
          <Eyebrow>The Visual Proof</Eyebrow>
          <h2 className="h-section section__title">
            Modern lines.<br />Built fast. <em style={{ color: "var(--oak-300)", fontStyle: "normal" }}>Built right.</em>
          </h2>
        </div>

        {/* Row 1 — full-width hero image */}
        <div className="proof__row proof__row--full reveal">
          <div className="proof__media">
            <span className="proof__media-tag">◇ ADUs &amp; Luxury Homes</span>
            <image-slot
              id="proof-1"
              shape="rect"
              placeholder="Full-bleed: modern home — glass + metal + wood cladding">
            </image-slot>
          </div>
          <div className="proof__copy">
            <div>
              <h3 className="proof__title">
                Designed for life. <em>Built to last.</em>
              </h3>
            </div>
            <p className="proof__txt">
              Designed for primary residences, secondaries, and ADU infill.
              Our kits ship pre-engineered, ready for high-performance envelopes.
            </p>
          </div>
        </div>

        {/* Row 2 — image left, copy right */}
        <div className="proof__row reveal">
          <div className="proof__media">
            <image-slot
              id="proof-2"
              shape="rect"
              placeholder="Detail shot — LGS frame interior with daylight">
            </image-slot>
          </div>
          <div className="proof__copy">
            <div className="proof__kicker"></div>
            <h3 className="proof__title">
               <em>Framing to lock-up in 11 days.</em>
            </h3>
            <p className="proof__txt">
              Long open spans, cathedral ceilings, and floor-to-ceiling glass —
              all engineered into the kit before it ships. Your trades arrive to
              a structure that&rsquo;s already plumb.
            </p>
            <ul className="proof__list">
              <li><span className="proof__list-mark" aria-hidden="true">◇</span>Long open spans &amp; cathedral ceilings</li>
              <li><span className="proof__list-mark" aria-hidden="true">◇</span>Floor-to-ceiling glazing pre-engineered</li>
              <li><span className="proof__list-mark" aria-hidden="true">◇</span>Trades arrive to a structure already plumb</li>
            </ul>
          </div>
        </div>

        {/* Row 3 — copy left, image right */}
        {density !== "compact" &&
        <div className="proof__row proof__row--reverse reveal">
            <div className="proof__media">
              <image-slot
              id="proof-3"
              shape="rect"
              placeholder="Exterior — twilight, modern facade, mixed cladding">
            </image-slot>
            </div>
            <div className="proof__copy">
              <div className="proof__kicker"></div>
              <h3 className="proof__title">
                Multi-unit builds,<br />
                <em>without the chaos.</em>
              </h3>
              <p className="proof__txt">
                Repeatable kits mean repeatable timelines. Developers stage builds
                in parallel — one unit frames while the next sets, while another
                clads — without stick-build surprises pulling the schedule sideways.
              </p>
              <ul className="proof__list">
                <li><span className="proof__list-mark" aria-hidden="true">◇</span>Repeatable kits, repeatable timelines</li>
                <li><span className="proof__list-mark" aria-hidden="true">◇</span>Stage builds in parallel across units</li>
                <li><span className="proof__list-mark" aria-hidden="true">◇</span>Pre-stamped permit-ready drawings</li>
              </ul>
            </div>
          </div>
        }
      </div>
    </section>);

}

/* ============================================================
   Process strip
   ============================================================ */
const PROCESS = [
{ n: "01", name: "Pick a Plan", day: "Week 1", desc: "Choose from our library of architecturally pre-designed kits — already engineered, optimized, and ready to build for speed and efficiency." },
{ n: "02", name: "Engineering", day: "Weeks 2–4", desc: "Stamped LGS shop drawings, energy modeling, and a finalized cut list." },
{ n: "03", name: "Fabrication", day: "Weeks 5–7", desc: "CNC-cut, jig-built, numbered, and palletized in our regional plant." },
{ n: "04", name: "On-Site Build", day: "Days, not weeks", desc: "Two-person crew stand the kit together. You move on to envelope and finishes." }];


function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap" style={{ paddingBlock: 80 }}>
        <div className="section__head reveal" style={{ marginBottom: 44 }}>
          <Eyebrow>The Path to Framed</Eyebrow>
          <h2 className="h-section section__title" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
            Four steps. <em style={{ color: "var(--oak-300)", fontStyle: "normal" }}>One pallet.</em>
          </h2>
        </div>
        <div className="process__list reveal">
          {PROCESS.map((p) =>
          <div className="process__step" key={p.n}>
              <div className="process__num">{p.n} ◇</div>
              <h3 className="process__name">{p.name}</h3>
              <p className="process__desc">{p.desc}</p>
              <div className="process__day">{p.day}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ============================================================
   Final CTA
   ============================================================ */
function FinalCTA() {
  return (
    <section className="final" id="contact">
      <video
        className="final__video"
        src="assets/clip-2.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true">
      </video>
      <div className="wrap final__inner">
        <div className="reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <Eyebrow>Lock Your Build Schedule</Eyebrow>
          <h2 className="h-display final__title">
            Ready to <em>Build?</em>
          </h2>
          <p className="final__sub">Get the catalog, current pricing, and a project consult. 


          </p>
        </div>

        <div className="final__cta-wrap reveal">
          <ArrowCTA large>Apply for Founding Access</ArrowCTA>
        </div>

        <div className="final__sig reveal">
          <span>British Columbia + Alberta</span>
          <span className="dot" />
          <span>Seismic-Engineered</span>
          <span className="dot" />
          <span>Class A Fire</span>
        </div>
      </div>
    </section>);

}

/* ============================================================
   Footer
   ============================================================ */
function Foot() {
  return (
    <footer className="foot">
      <div className="wrap foot__inner">
        <div className="foot__brand">
          <span className="foot__logo" role="img" aria-label="ORCA KITS" />
          <span>© 2026 ORCA KITS — Light-Gauge Steel, Flat-Packed.</span>
        </div>
        <div className="foot__links">
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer">Request Catalog</a>
          <a href="#edge">Edge</a>
          <a href="#proof">Gallery</a>
          <a href="#process">Process</a>
        </div>
      </div>
    </footer>);

}

/* ============================================================
   Tweaks
   ============================================================ */
function TweaksUI({ tweaks, setTweak }) {
  return (
    <TweaksPanel>
      <TweakSection title="Hero">
        <TweakSelect
          label="Headline"
          value={tweaks.headlineMode}
          options={[
          { value: "future", label: "The Future of Framing is Flat-Packed." },
          { value: "precision", label: "Engineered to the Millimeter." },
          { value: "speed", label: "Foundation to Framed in Days." }]
          }
          onChange={(v) => setTweak("headlineMode", v)} />
        
        <TweakToggle
          label="Show Hero Spec Strip"
          value={tweaks.showSpecs}
          onChange={(v) => setTweak("showSpecs", v)} />
        
      </TweakSection>

      <TweakSection title="Gallery">
        <TweakRadio
          label="Density"
          value={tweaks.galleryDensity}
          options={[
          { value: "compact", label: "2 Cases" },
          { value: "balanced", label: "3 Cases" }]
          }
          onChange={(v) => setTweak("galleryDensity", v)} />
        
      </TweakSection>

      <TweakSection title="Sections">
        <TweakToggle
          label="Process Strip"
          value={tweaks.showProcess}
          onChange={(v) => setTweak("showProcess", v)} />
        
      </TweakSection>
    </TweaksPanel>);

}

/* ============================================================
   Reveal-on-scroll hook
   ============================================================ */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

/* ============================================================
   App
   ============================================================ */
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();

  return (
    <>
      <Nav />
      <Hero headlineMode={tweaks.headlineMode} showSpecs={tweaks.showSpecs} />
      <Why />
      <How />
      <What />
      <TechnicalEdge />
      <SteelShowcase />
      <Proof density={tweaks.galleryDensity} />
      {tweaks.showProcess && <Process />}
      <FinalCTA />
      <Foot />
      <TweaksUI tweaks={tweaks} setTweak={setTweak} />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
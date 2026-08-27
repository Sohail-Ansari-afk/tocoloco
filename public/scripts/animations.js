/**
 * animations.js — Taco Loco Cantina Mexicana
 * Shared GSAP ScrollTrigger + IntersectionObserver animation system.
 * Runs once after DOMContentLoaded. Components add data-reveal / data-stagger attributes.
 * 
 * Emil Kowalski principles applied:
 * - No window.addEventListener('scroll') — uses IntersectionObserver / ScrollTrigger
 * - prefers-reduced-motion check is the FIRST thing executed
 * - CSS handles base states; JS only adds .revealed class
 * - GSAP loaded lazily after page is interactive (not blocking LCP)
 */

(function () {
  'use strict';

  // ── Reduced Motion Guard ──────────────────────────────────────────────────
  // If user prefers reduced motion, CSS already handles it via media query.
  // Skip ALL JS animation initialisation entirely for maximum performance.
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Force-reveal all hidden elements so content is accessible
    document.querySelectorAll('[data-reveal], [data-stagger], [data-reveal-clip]').forEach(el => {
      el.classList.add('revealed');
    });
    return; // Stop — no animations for reduced motion users
  }

  // ── IntersectionObserver — lightweight scroll reveal ──────────────────────
  // Used for: section reveals, stagger containers, image clip-path reveals
  // MUCH lighter than GSAP ScrollTrigger for simple enter-on-scroll patterns
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          // Apply stagger delays to direct children of [data-stagger] containers
          if (el.hasAttribute('data-stagger')) {
            const children = Array.from(el.children);
            children.forEach((child, i) => {
              child.style.transitionDelay = `${i * 60}ms`;
            });
          }

          el.classList.add('revealed');
          revealObserver.unobserve(el); // Once fired, never again — performance
        }
      });
    },
    {
      threshold: 0.12,       // Trigger when 12% of element is visible
      rootMargin: '0px 0px -60px 0px', // Start slightly before fully in view
    }
  );

  // Observe all data-reveal and data-stagger elements
  function initReveal() {
    document.querySelectorAll('[data-reveal], [data-stagger], [data-reveal-clip]').forEach((el) => {
      revealObserver.observe(el);
    });
  }

  // ── GSAP ScrollTrigger — used ONLY for complex animations ─────────────────
  // Loaded lazily so it doesn't block initial render
  async function initGSAP() {
    // Dynamic import — GSAP only loads after page is interactive
    // This prevents it from blocking LCP (Largest Contentful Paint)
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    // ── Hero headline staggered line reveal ──
    const heroLines = document.querySelectorAll('.hero-title-line');
    if (heroLines.length) {
      gsap.fromTo(
        heroLines,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
          stagger: 0.1,
          delay: 0.1,
        }
      );
    }

    // ── Hero CTA + perks entrance ──
    const heroCta = document.querySelector('.hero-cta-group');
    if (heroCta) {
      gsap.fromTo(
        heroCta,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.55 }
      );
    }

    // ── Green feature band headline reveal (translateX from left) ──
    const featureHeadline = document.querySelector('.feature-band-headline');
    if (featureHeadline) {
      ScrollTrigger.create({
        trigger: featureHeadline,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            featureHeadline,
            { opacity: 0, x: -32 },
            { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }
          );
        },
        once: true,
      });
    }

    // ── Red energy band headline kinetic entry ──
    const energyHeadline = document.querySelector('.energy-band-headline');
    if (energyHeadline) {
      ScrollTrigger.create({
        trigger: energyHeadline,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            energyHeadline,
            { opacity: 0, x: 32 },
            { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }
          );
        },
        once: true,
      });
    }

    // ── Floating order button — slide up after 1s ──
    const floatingBtn = document.querySelector('.floating-taco-btn');
    if (floatingBtn) {
      gsap.fromTo(
        floatingBtn,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 1.2 }
      );
    }
  }

  // ── Navbar sticky — IntersectionObserver on hero sentinel ────────────────
  // Replaces window.addEventListener('scroll', ...) — MUCH more performant
  function initNavScroll() {
    const header = document.getElementById('cantinaHeader');
    const sentinel = document.getElementById('navSentinel');
    if (!header || !sentinel) return;

    const navObserver = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle('scrolled', !entry.isIntersecting);
      },
      { threshold: 0 }
    );

    navObserver.observe(sentinel);
  }

  // ── Reservation triggers ────────────────────────────────────────────
  const GOOGLE_RESERVE_URL = 'https://www.google.com/maps/reserve/v/dine/c/0hxd20-gUKU?source=pa&opi=79508299&hl=en-IN&gei=EL6PauOABevQwcsP1JSfoAE&ahbb=1&sourceurl=https://www.google.com/maps/preview/place?authuser%3D0%26hl%3Den%26gl%3Din%26pb%3D!1m14!1s0x47a851dbd1c782e9:0xe4e5b3aac100aaca!3m12!1m3!1d50109.128351697895!2d73.89408309999999!3d18.847821250000003!2m3!1f0!2f0!3f0!3m2!1i2552!2i1274!4f13.1!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m5!1sA76Pasy_JcyywcsP89HToAc:53!2s1i:0,t:150714,p:A76Pasy_JcyywcsP89HToAc:53!7e81!12e3!17sA76Pasy_JcyywcsP89HToAc:60!15m110!1m28!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m17!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!90m2!1m1!1e2!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!128m1!1b1!21m28!1m6!1m2!i0!2i0!2m2!1i530!2i1274!1m6!1m2!i2502!2i0!2m2!1i2552!2i1274!1m6!1m2!i0!2i0!2m2!1i2552!2i20!1m6!1m2!i0!2i1254!2m2!1i2552!2i1274!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i792!39sTaco%2BLoco%2BCantina%2BMexicana,%2BReinhardtstra%25C3%259Fe,%2BBerlin,%2BGermany%26q%3DTaco%2BLoco%2BCantina%2BMexicana,%2BReinhardtstra%25C3%259Fe,%2BBerlin,%2BGermany';

  function initModal() {
    document.querySelectorAll('.open-reserve-btn').forEach((btn) => {
      if (btn.tagName !== 'A') {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          window.open(GOOGLE_RESERVE_URL, '_blank', 'noopener,noreferrer');
        });
      }
    });
  }

  // ── Mobile Drawer ─────────────────────────────────────────────────────────
  function initDrawer() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const drawerClose = document.getElementById('drawerCloseBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');

    const openDrawer = () => {
      mobileDrawer?.classList.add('open');
      mobileDrawer?.setAttribute('aria-hidden', 'false');
      mobileToggle?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      mobileDrawer?.classList.remove('open');
      mobileDrawer?.setAttribute('aria-hidden', 'true');
      mobileToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    mobileToggle?.addEventListener('click', openDrawer);
    drawerClose?.addEventListener('click', closeDrawer);

    document.addEventListener('click', (e) => {
      if (
        mobileDrawer?.classList.contains('open') &&
        !mobileDrawer.contains(e.target) &&
        !mobileToggle?.contains(e.target)
      ) {
        closeDrawer();
      }
    });
  }

  // ── Init everything on DOM ready ──────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    initNavScroll();
    initDrawer();
    initModal();
    initReveal();

    // GSAP loads lazily — doesn't block DOMContentLoaded
    // requestIdleCallback ensures it runs when browser is not busy
    if ('requestIdleCallback' in window) {
      requestIdleCallback(initGSAP, { timeout: 2000 });
    } else {
      setTimeout(initGSAP, 200);
    }
  }
})();

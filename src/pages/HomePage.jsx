import { useState, useEffect } from 'react'
import { Link } from '../router'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Import original assets
import housingHeroImg from '../assets/housing.avif'
import panchkulaHousingImg from '../assets/pankchkulaHousing.avif'
import fortofinoImg from '../assets/fortofino.avif'
import milkPointImg from '../assets/milk-point.avif'
import comDevraImg from '../assets/projects/com-devra.jpg'
import schoolsHeroImg from '../assets/schools.avif'
import msSchoolImg from '../assets/projects/sch-ms-school.avif'
import hospitalityHeroImg from '../assets/hospitality.avif'
import castleGreyImg from '../assets/projects/hos-castle-grey.avif'
import farmHouseHeroImg from '../assets/farmHouse.avif'
import gillsFarmhouseImg from '../assets/projects/fh-gills.avif'
import nagraFarmhouseImg from '../assets/nagra-farmhouse.avif'

// Residential project images
import res121Img from '../assets/projects/res-121-122.avif'
import villa361Img from '../assets/projects/res-villa-361.avif'
import villa58Img from '../assets/projects/res-villa-58.jpg'
import villa303Img from '../assets/projects/res-villa-303.jpg'
import villa201dImg from '../assets/projects/res-villa-201d.jpg'
import kangsImg from '../assets/projects/res-kangs.avif'
import supreetImg from '../assets/projects/res-supreet.jpg'
import midhasImg from '../assets/projects/res-midhas.avif'
import minzsImg from '../assets/projects/res-minzs.jpg'

// Projects List
const featuredProjects = [
  {
    id: 'res-villa361',
    title: 'Villa 361 PH-3 Cassia',
    category: 'Residential',
    tag: 'Private Residence',
    desc: 'Crafted with elegance, blending modern design, comfort, and timeless architectural excellence.',
    img: villa361Img,
    layout: 'tall',
    colSpan: 'span 4',
    to: '/services/residential/villa-361'
  },
  {
    id: 'hou-panchkula',
    title: 'Panchkula Housing',
    category: 'Housing',
    tag: 'Housing',
    desc: 'Clean geometry and functional high-rise planning.',
    img: panchkulaHousingImg,
    layout: 'standard',
    colSpan: 'span 2',
    to: '/services/housing/panchkula-housing'
  },
  {
    id: 'com-fortofino',
    title: 'FortoFino Boutique',
    category: 'Commercial',
    tag: 'Commercial',
    desc: 'Refined retail interior featuring sculpted arches and soft lighting.',
    img: fortofinoImg,
    layout: 'standard',
    colSpan: 'span 2',
    to: '/services/commercial/fortofino'
  },
  {
    id: 'meridian',
    title: 'Meridian Office Block',
    category: 'Commercial',
    tag: 'Commercial',
    desc: 'A compact glass and stone office that opens skyward, built to Devera\'s full-service delivery model.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80',
    layout: 'wide',
    colSpan: 'span 6',
    to: '/services/commercial/devra-architects'
  },
  {
    id: 'res-121',
    title: '121 & 122 PH-1 Omaxe',
    category: 'Residential',
    tag: 'Private Residence',
    desc: 'A contemporary residence defined by strong horizontal planes and interlocking volumes.',
    img: res121Img,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/residential/121-122'
  },
  {
    id: 'fh-gills',
    title: 'Gill\'s Farmhouse',
    category: 'Farm houses',
    tag: 'Farm House',
    desc: 'Exquisite brick volumes coupled with custom perforated jaali screens.',
    img: gillsFarmhouseImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/farm-houses/gill-s-farmhouse'
  }
]

const originalProjects = [
  // Residential
  {
    id: 'res-villa58',
    title: 'Villa 58 PH-3 Cassia',
    category: 'Residential',
    tag: 'Residential',
    desc: 'A modern multi-generational home optimized for daylight and cross ventilation.',
    img: villa58Img,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/residential/villa-58'
  },
  {
    id: 'res-villa303',
    title: 'Villa 303 PH-1 Cassia',
    category: 'Residential',
    tag: 'Residential',
    desc: 'Striking geometric volumes combined with rich brick textures.',
    img: villa303Img,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/residential/villa-303'
  },
  {
    id: 'res-villa201d',
    title: 'Villa 201D PH-3 Cassia',
    category: 'Residential',
    tag: 'Residential',
    desc: 'A compact luxury villa maximizing indoor-outdoor spatial connections.',
    img: villa201dImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/residential/villa-201d'
  },
  {
    id: 'res-kangs',
    title: 'The Kang\'s',
    category: 'Residential',
    tag: 'Residential',
    desc: 'A warm family home with clean lines and bespoke detailing throughout.',
    img: kangsImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/residential/the-kangs'
  },
  {
    id: 'res-supreet',
    title: 'Col. Supreet Ji',
    category: 'Residential',
    tag: 'Residential',
    desc: 'A classic brick-and-mortar home with timeless colonial influences.',
    img: supreetImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/residential/col-supreet'
  },
  {
    id: 'res-midhas',
    title: 'The Midha\'s',
    category: 'Residential',
    tag: 'Residential',
    desc: 'Earthy concrete textures coupled with floor-to-ceiling glass paneling.',
    img: midhasImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/residential/the-midhas'
  },
  {
    id: 'res-minzs',
    title: 'The Minz\'s',
    category: 'Residential',
    tag: 'Residential',
    desc: 'Artistic details combined with practical storage solutions and private courtyards.',
    img: minzsImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/residential/the-minzs'
  },

  // Housing
  {
    id: 'hou-sansarg',
    title: 'Sansarg',
    category: 'Housing',
    tag: 'Housing',
    desc: 'A dynamic housing development defined by sculpted terraces and balconies.',
    img: housingHeroImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/housing/sansarg'
  },

  // Commercial
  {
    id: 'com-devra',
    title: 'Devra Architects Office',
    category: 'Commercial',
    tag: 'Office',
    desc: 'A refined workspace crafted with soft lighting and neutral tones.',
    img: comDevraImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/commercial/devra-architects'
  },
  {
    id: 'com-milkpoint',
    title: 'Milk Point Retail',
    category: 'Commercial',
    tag: 'Retail Store',
    desc: 'Elegantly balancing display clarity with experiential client movement.',
    img: milkPointImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/commercial/milk-point'
  },

  // Schools
  {
    id: 'sch-ms',
    title: 'M S School Campus',
    category: 'Schools',
    tag: 'Campus',
    desc: 'A structured, breathable school layout prioritizing order and fresh air.',
    img: msSchoolImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/schools/m-s-school'
  },
  {
    id: 'sch-jp',
    title: 'J P International School',
    category: 'Schools',
    tag: 'Campus',
    desc: 'A dynamic institutional landmark built with exposed brick and concrete bands.',
    img: schoolsHeroImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/schools/j-p-international'
  },

  // Hospitality
  {
    id: 'hos-castle',
    title: 'Castle Grey Lounge',
    category: 'Hospitality',
    tag: 'Restaurant / Lounge',
    desc: 'Integrating slatted timber panels and suspended greens.',
    img: castleGreyImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/hospitality/castle-grey'
  },

  // Farm houses
  {
    id: 'fh-nagra',
    title: 'Nagra Farmhouse',
    category: 'Farm houses',
    tag: 'Farm House',
    desc: 'A timeless courtyard layout defined by elegant classical columns.',
    img: nagraFarmhouseImg,
    layout: 'standard',
    colSpan: 'span 3',
    to: '/services/farm-houses/nagra-farmhouse'
  }
]

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('All')
  const [preloaderState, setPreloaderState] = useState('init')
  const [introStep, setIntroStep] = useState(1)

  const preloaderImgs = [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=70',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=70',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=70',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=70',
    'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?auto=format&fit=crop&w=900&q=70',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=70',
  ]

  const heroSlides = [
    { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80' },
    { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80' },
    { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80' },
  ]

  const allProjects = [...featuredProjects, ...originalProjects]

  // Filter projects by tab
  const filteredProjects = activeTab === 'All'
    ? featuredProjects
    : allProjects.filter(p => p.category.toLowerCase() === activeTab.toLowerCase())

  // Preloader animation lifecycle
  useEffect(() => {
    document.body.classList.add('locked')
    let stepCount = 0
    const totalSteps = preloaderImgs.length * 2

    const cycle = setInterval(() => {
      setIntroStep(prev => (prev % preloaderImgs.length) + 1)
      stepCount++

      const barFill = document.getElementById('introBarFill')
      if (barFill) {
        barFill.style.width = Math.min(100, (stepCount / totalSteps) * 100) + '%'
      }

      if (stepCount >= totalSteps) {
        clearInterval(cycle)
        setPreloaderState('meta-hide')

        // Step 1: hide counter/bar (250ms), then expand frame from center
        setTimeout(() => {
          setPreloaderState('expanded')

          // Step 2: once frame fully covers screen, fade out preloader bg and reveal site
          setTimeout(() => {
            // Fade the preloader overlay out (0.7s transition defined in CSS)
            const preloaderEl = document.getElementById('preloader')
            if (preloaderEl) preloaderEl.classList.add('hide')

            setTimeout(() => {
              setPreloaderState('hidden')
              document.body.classList.remove('locked')
              document.body.classList.add('loaded')
            }, 750)
          }, 1450)
        }, 250)
      }
    }, 130)

    return () => clearInterval(cycle)
  }, [])

  // Hero auto-slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % heroSlides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  // Scroll handler for reveal & parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Parallax effect on Hero
      const heroEl = document.getElementById('home')
      if (heroEl) {
        const heroRect = heroEl.getBoundingClientRect()
        if (heroRect.bottom > 0) {
          const shift = scrollY * 0.22
          const slides = document.querySelectorAll('.slide')
          slides.forEach(s => {
            s.style.transform = `translateY(${shift}px)`
          })
        }
      }

      // Parallax on Projects
      const parallaxCards = document.querySelectorAll('.p-media')
      const winH = window.innerHeight
      parallaxCards.forEach(el => {
        const r = el.parentElement.getBoundingClientRect()
        if (r.bottom > -100 && r.top < winH + 100) {
          const centerDelta = (r.top + r.height / 2) - winH / 2
          const shift = Math.max(-34, Math.min(34, centerDelta * -0.08))
          el.style.transform = `translateY(${shift}px)`
        }
      })

      // Reveal elements
      const revealEls = document.querySelectorAll('.reveal')
      revealEls.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('in')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    setTimeout(handleScroll, 100)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [preloaderState])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* PRELOADER / INTRO */}
      {preloaderState !== 'hidden' && (
        <div id="preloader" className={preloaderState === 'meta-hide' ? 'hide' : ''}>
          <div className="intro-word">DEVERA</div>
          <div className={`intro-frame ${preloaderState === 'expanded' ? 'expand' : ''}`}>
            {preloaderImgs.map((imgUrl, index) => (
              <img 
                key={index}
                className={`intro-img ${introStep === index + 1 ? 'active' : ''}`}
                src={imgUrl} 
                alt="" 
              />
            ))}
          </div>
          <div className={`intro-meta ${preloaderState === 'expanded' || preloaderState === 'meta-hide' ? 'hide' : ''}`}>
            <span className="intro-count">
              <span>{String(introStep).padStart(2, '0')}</span> / 06
            </span>
            <div className="intro-bar">
              <div className="intro-bar-fill" id="introBarFill"></div>
            </div>
          </div>
        </div>
      )}

      {/* SHARED HEADER */}
      <Header variant="overlay" />

      {/* HERO SLIDER */}
      <section className="hero" id="home">
        {heroSlides.map((slide, idx) => (
          <div 
            key={idx}
            className={`slide ${activeSlide === idx ? 'active' : ''}`}
            style={{ backgroundImage: `url('${slide.img}')` }}
          />
        ))}

        <div className="hero-content">
          <span className="eyebrow">Building Spaces. Elevating Lives.</span>
          <h1>We Design. We Build.<br />We <em>Deliver</em>.</h1>
          <div className="hero-divider"></div>
          <div className="hero-btns">
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="btn btn-dark">Explore Projects →</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="btn btn-outline">Our Services →</a>
          </div>
        </div>

        <div className="slide-nav">
          {heroSlides.map((_, idx) => (
            <div 
              key={idx}
              className={`slide-dot ${activeSlide === idx ? 'active' : ''}`}
              onClick={() => setActiveSlide(idx)}
            />
          ))}
        </div>
        <div className="scroll-cue">Scroll</div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container section-head reveal">
          <span className="eyebrow">What We Do</span>
          <h2>Every discipline a residence <em>requires</em>, under one studio.</h2>
        </div>
        <div className="services-grid reveal">
          <Link to="/residential-architects-chandigarh" className="service-card">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80" alt="Architectural Design" />
            <span className="service-num">01</span>
            <div className="service-label"><h3>Architectural<br />Design</h3><div className="stub"></div></div>
          </Link>
          <Link to="/housing-architects-chandigarh" className="service-card">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80" alt="Construction" />
            <span className="service-num">02</span>
            <div className="service-label"><h3>Construction</h3><div className="stub"></div></div>
          </Link>
          <Link to="/residential-architects-chandigarh" className="service-card">
            <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80" alt="Interior Design" />
            <span className="service-num">03</span>
            <div className="service-label"><h3>Interior<br />Design</h3><div className="stub"></div></div>
          </Link>
          <Link to="/commercial-architects-chandigarh" className="service-card">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80" alt="Project Management" />
            <span className="service-num">04</span>
            <div className="service-label"><h3>Project<br />Management</h3><div className="stub"></div></div>
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Selected Work</span>
            <h2>Residences and spaces shaped by <em>light</em> and material.</h2>
            <p>A cross-section of homes and commercial spaces where Devera has led design through delivery.</p>
          </div>

          {/* PROJECT CATEGORY TABS */}
          <div className="projects-tabs reveal" style={{ marginBottom: '48px' }}>
            {['All', 'Residential', 'Housing', 'Commercial', 'Schools', 'Hospitality', 'Farm houses'].map(tab => (
              <button 
                key={tab}
                className={`tab-btn ${activeTab.toLowerCase() === tab.toLowerCase() ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="project-grid reveal">
            {filteredProjects.map((project, idx) => (
              <Link 
                key={project.id || idx}
                to={project.to}
                className={`p-card ${project.layout || 'standard'}`}
                style={{ gridColumn: project.colSpan || 'span 3' }}
              >
                <div className="p-media">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="p-overlay">
                  <span className="p-tag">{project.tag}</span>
                  <div className="p-title">{project.title}</div>
                  <p className="p-desc">{project.desc}</p>
                  <span className="p-link">View Project →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement reveal">
        <div className="container">
          <blockquote>A purposeful dialogue between <em>classical proportion</em> and the way people actually want to live today.</blockquote>
          <cite>— Devera Design Philosophy</cite>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How We Work</span>
            <h2>One studio, from first sketch to <em>final handover</em>.</h2>
          </div>
          <div className="process-list reveal">
            <div className="process-item">
              <span className="num">01</span>
              <h3>Discover</h3>
              <p>Site, budget, and brief — we listen before we draw a single line.</p>
            </div>
            <div className="process-item">
              <span className="num">02</span>
              <h3>Design</h3>
              <p>Concept through construction drawings, refined together with you.</p>
            </div>
            <div className="process-item">
              <span className="num">03</span>
              <h3>Build</h3>
              <p>Our own crews and vetted trades execute to the drawings, on schedule.</p>
            </div>
            <div className="process-item">
              <span className="num">04</span>
              <h3>Deliver</h3>
              <p>A final walkthrough, snag list closed, and keys handed over.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band reveal" id="contact">
        <div className="container">
          <h2>Have a site, or just a site in mind?</h2>
          <Link to="/contact" className="btn btn-dark" style={{ display: 'inline-flex', margin: '0 auto' }}>Start a Conversation →</Link>
        </div>
      </section>

      {/* SHARED FOOTER */}
      <Footer />
    </>
  )
}

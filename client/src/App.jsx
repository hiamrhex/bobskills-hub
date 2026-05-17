import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import SkillGrid from './components/SkillGrid';
import SkillModal from './components/SkillModal';
import { GithubIcon, SunIcon, MoonIcon, GridIcon } from './components/Icons';
import { useScrollReveal } from './hooks/useScrollReveal';

const API_URL = import.meta.env.VITE_API_URL || '';
const CATEGORIES = ['All', 'Testing', 'Docs', 'Security', 'Onboarding', 'Refactor'];

const STATS = [
  { value: '11+',  label: 'Curated Skills'  },
  { value: '100%', label: 'Bob Native'       },
  { value: '48h',  label: 'Hackathon Built'  },
];

export default function App() {
  const [skills, setSkills]     = useState([]);
  const [search, setSearch]     = useState('');
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState(null);
  const [theme, setTheme]       = useState('dark');
  const [loading, setLoading]   = useState(true);
  // Preview state per skill (persists across modal reopens)
  const [previewStates, setPreviewStates] = useState({});

  const [heroRef,  heroVisible]  = useScrollReveal(0);
  const [statsRef, statsVisible] = useScrollReveal(100);
  const [gridRef,  gridVisible]  = useScrollReveal(60);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    setLoading(true);
    const url = API_URL ? `${API_URL}/api/skills` : '/api/skills';
    axios
      .get(`${url}?search=${search}&category=${category}`)
      .then(r => { setSkills(r.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [search, category]);

  const isDark = theme === 'dark';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative' }}>

      {/* Deep ambient glow */}
      <div style={{
        position: 'fixed', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: 900, height: 600,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(124,106,247,0.1) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'fixed', bottom: 0, right: 0,
        width: 500, height: 400,
        background: 'radial-gradient(ellipse at 100% 100%, rgba(124,106,247,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── Nav ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        height: 54,
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'background 0.4s',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{
            width: 26, height: 26, borderRadius: 8,
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 16px var(--accent-glow)',
            flexShrink: 0,
          }}>
            <GridIcon size={13} />
          </div>
          <span style={{
            fontSize: 14.5, fontWeight: 700,
            letterSpacing: '-0.4px',
            color: 'var(--text-1)',
          }}>
            BobSkills Hub
          </span>
          <span style={{
            fontSize: 9, fontFamily: 'var(--mono)',
            color: 'var(--accent)', letterSpacing: '0.8px',
            background: 'var(--accent-dim)',
            border: '1px solid rgba(124,106,247,0.18)',
            padding: '2px 7px', borderRadius: 4,
            textTransform: 'uppercase',
          }}>
            beta
          </span>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          {/* IBM BOB · HACKATHON 2026 */}
          <span style={{
            fontSize: 9.5, fontFamily: 'var(--mono)',
            color: 'var(--text-3)', letterSpacing: '0.8px',
            textTransform: 'uppercase',
            display: 'none',
          }}
          className="nav-hack-label"
          >
            IBM BOB · HACKATHON 2026
          </span>

          <a
            href="https://github.com/hiamrhex/bobskills-hub"
            target="_blank"
            rel="noreferrer"
            title="View on GitHub"
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '6px 12px', borderRadius: 8,
              border: '1px solid var(--border)',
              color: 'var(--text-2)',
              fontSize: 12, fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)';
              e.currentTarget.style.color = 'var(--text-1)';
              e.currentTarget.style.background = 'var(--bg-surface)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-2)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <button
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            title="Toggle theme"
            style={{
              width: 34, height: 34, borderRadius: 8,
              border: '1px solid var(--border)',
              background: 'transparent',
              cursor: 'pointer',
              color: 'var(--text-2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--border-hover)';
              e.currentTarget.style.color = 'var(--text-1)';
              e.currentTarget.style.background = 'var(--bg-surface)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-2)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {isDark ? <SunIcon size={14} /> : <MoonIcon size={14} />}
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className={`reveal ${heroVisible ? 'visible' : ''}`}
        style={{
          position: 'relative', zIndex: 1,
          maxWidth: 820, margin: '0 auto',
          padding: '96px 2rem 56px',
          textAlign: 'center',
        }}
      >
        {/* Badge */}
        <div className="fade-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 10, fontFamily: 'var(--mono)',
          color: 'var(--accent)', letterSpacing: '1.2px',
          textTransform: 'uppercase',
          background: 'var(--accent-dim)',
          border: '1px solid rgba(124,106,247,0.2)',
          padding: '5px 13px', borderRadius: 100,
          marginBottom: 34,
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: '50%',
            background: 'var(--accent)',
            display: 'inline-block',
            animation: 'pulse 2.2s ease infinite',
          }} />
          IBM Bob Hackathon 2026
        </div>

        {/* Headline */}
        <h1 className="fade-up" style={{
          fontSize: 'clamp(38px, 6.5vw, 66px)',
          fontWeight: 700,
          letterSpacing: '-3px',
          lineHeight: 1.07,
          color: 'var(--text-1)',
          marginBottom: 20,
          animationDelay: '0.07s',
        }}>
          The missing layer
          <br />
          <span style={{
            background: 'linear-gradient(128deg, var(--accent) 0%, var(--accent-2) 55%, var(--accent-3) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            for IBM Bob.
          </span>
        </h1>

        {/* Sub */}
        <p className="fade-up" style={{
          fontSize: 15.5,
          color: 'var(--text-2)',
          lineHeight: 1.85,
          maxWidth: 440,
          margin: '0 auto 50px',
          animationDelay: '0.14s',
        }}>
          Discover, preview live, and install production-ready Bob Skills.
          Stop writing prompts from scratch — find the skill, ship the feature.
        </p>

        {/* Search */}
        <div className="fade-up" style={{ animationDelay: '0.2s' }}>
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Filters */}
        <div className="fade-up" style={{ marginTop: 16, animationDelay: '0.26s' }}>
          <CategoryFilter categories={CATEGORIES} active={category} onChange={setCategory} />
        </div>
      </section>

      {/* ── Stats ── */}
      <div
        ref={statsRef}
        style={{
          position: 'relative', zIndex: 1,
          maxWidth: 820, margin: '0 auto',
          padding: '0 2rem 52px',
        }}
      >
        <div style={{
          display: 'flex',
          border: '1px solid var(--border)',
          borderRadius: 12, overflow: 'hidden',
          background: 'var(--bg-card)',
        }}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`reveal ${statsVisible ? 'visible' : ''}`}
              style={{
                flex: 1, padding: '18px 0',
                textAlign: 'center',
                borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <div style={{
                fontSize: 21, fontWeight: 700,
                letterSpacing: '-0.8px',
                color: 'var(--text-1)',
                marginBottom: 3,
                fontFamily: 'var(--mono)',
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: '0.3px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <section
        ref={gridRef}
        className={`reveal ${gridVisible ? 'visible' : ''}`}
        style={{
          position: 'relative', zIndex: 1,
          maxWidth: 1080, margin: '0 auto',
          padding: '0 2rem 10rem',
        }}
      >
        {/* Section header */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20, paddingBottom: 16,
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontSize: 10.5, fontFamily: 'var(--mono)',
              color: 'var(--text-3)', letterSpacing: '0.6px',
              textTransform: 'uppercase',
            }}>
              Skills
            </span>
            <span style={{
              fontSize: 9.5, fontFamily: 'var(--mono)',
              color: 'var(--accent)',
              background: 'var(--accent-dim)',
              padding: '1.5px 7px', borderRadius: 4,
              border: '1px solid rgba(124,106,247,0.15)',
            }}>
              {skills.length}
            </span>
          </div>
          <span style={{
            fontSize: 9.5, fontFamily: 'var(--mono)',
            color: 'var(--text-3)', letterSpacing: '0.5px',
          }}>
            BOBSKILLS HUB · v1.0
          </span>
        </div>

        <SkillGrid skills={skills} loading={loading} onSelect={setSelected} />
      </section>

      {selected && (
        <SkillModal
          skill={selected}
          onClose={() => setSelected(null)}
          previewCode={previewStates[selected.id]?.code ?? ''}
          setPreviewCode={(code) => setPreviewStates(prev => ({
            ...prev,
            [selected.id]: { ...prev[selected.id], code }
          }))}
          previewOutput={previewStates[selected.id]?.output ?? ''}
          setPreviewOutput={(output) => setPreviewStates(prev => ({
            ...prev,
            [selected.id]: { ...prev[selected.id], output }
          }))}
        />
      )}
    </div>
  );
}
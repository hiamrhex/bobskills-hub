import { useEffect, useState } from 'react';
import BobPreview from './BobPreview';
import InstallCommand from './InstallCommand';
import { CloseIcon, StarIcon } from './Icons';

const CAT_COLOR = {
  Testing:    '#4ade80',
  Docs:       '#818cf8',
  Security:   '#f87171',
  Onboarding: '#fb923c',
  Refactor:   '#60a5fa',
};

const TABS = ['Overview', 'SKILL.md', 'Preview', 'Install'];

export default function SkillModal({ skill, onClose }) {
  const [tab, setTab] = useState('Overview');
  const [code, setCode] = useState(skill.example_input || '');
  const color = CAT_COLOR[skill.category] || '#818cf8';

  useEffect(() => {
    const fn = e => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fade-in"
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        className="scale-in"
        style={{
          background: 'var(--bg-modal)',
          border: '1px solid var(--border-hover)',
          borderRadius: 18,
          width: '100%', maxWidth: 720,
          maxHeight: '88vh',
          position: 'relative',
          display: 'flex', flexDirection: 'column',
          boxShadow: 'var(--shadow-modal)',
          overflow: 'hidden',
        }}
      >
        {/* Top accent line */}
        <div style={{
          height: 2,
          background: `linear-gradient(90deg, transparent 0%, ${color} 30%, ${color} 70%, transparent 100%)`,
          opacity: 0.7,
          flexShrink: 0,
        }} />

        {/* Header */}
        <div style={{
          padding: '1.4rem 1.75rem 0',
          borderBottom: '1px solid var(--border)',
          flexShrink: 0,
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            marginBottom: '1.1rem',
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
                <span style={{
                  fontSize: 9, fontWeight: 600, textTransform: 'uppercase',
                  color, fontFamily: 'var(--mono)', letterSpacing: '0.9px',
                  background: color + '12',
                  border: `1px solid ${color}30`,
                  padding: '2px 8px', borderRadius: 5,
                }}>
                  {skill.category}
                </span>
                <span style={{
                  display: 'flex', alignItems: 'center', gap: 3,
                  fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--mono)',
                }}>
                  <StarIcon size={9} />
                  {skill.rating}
                </span>
                <span style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
                  · {skill.installs?.toLocaleString() ?? '0'} installs
                </span>
              </div>
              <h2 style={{
                fontSize: 19, fontWeight: 700,
                letterSpacing: '-0.5px',
                color: 'var(--text-1)',
                lineHeight: 1.3,
              }}>
                {skill.name}
              </h2>
            </div>

            <button
              onClick={onClose}
              style={{
                width: 32, height: 32, borderRadius: 8, flexShrink: 0, marginLeft: 16,
                border: '1px solid var(--border)',
                background: 'transparent', cursor: 'pointer',
                color: 'var(--text-3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-hover)';
                e.currentTarget.style.color = 'var(--text-1)';
                e.currentTarget.style.background = 'var(--bg-surface)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-3)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <CloseIcon size={13} />
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 2, marginBottom: -1 }}>
            {TABS.map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`tab-btn ${tab === t ? 'active' : ''}`}
                style={{
                  borderBottom: tab === t
                    ? `2px solid ${color}`
                    : '2px solid transparent',
                  borderRadius: '7px 7px 0 0',
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{
          padding: '1.6rem 1.75rem',
          overflowY: 'auto',
          flex: 1,
        }}>
          {tab === 'Overview' && (
            <div style={{ animation: 'fadeUp 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
              <p style={{
                fontSize: 13.5, color: 'var(--text-2)',
                lineHeight: 1.8, marginBottom: '1.5rem',
              }}>
                {skill.description}
              </p>

              {/* Tags */}
              {skill.tags?.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {skill.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: 11, fontFamily: 'var(--mono)',
                      color: 'var(--text-3)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border)',
                      padding: '3px 10px', borderRadius: 6,
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === 'SKILL.md' && (
            <div style={{ animation: 'fadeUp 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
              <pre style={{
                background: '#03030c',
                border: '1px solid var(--border)',
                borderRadius: 10, padding: '1.25rem',
                fontSize: 11.5, color: '#a5b4fc',
                overflowX: 'auto', lineHeight: 1.85,
                fontFamily: 'var(--mono)', whiteSpace: 'pre-wrap',
              }}>
                {skill.skill_md}
              </pre>
            </div>
          )}

          {tab === 'Preview' && (
            <div style={{ animation: 'fadeUp 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
              <BobPreview skill={skill} code={code} setCode={setCode} />
            </div>
          )}

          {tab === 'Install' && (
            <div style={{ animation: 'fadeUp 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
              <p style={{
                fontSize: 13, color: 'var(--text-2)',
                lineHeight: 1.75, marginBottom: '1.25rem',
              }}>
                Run this command in your terminal to install this skill globally.
                Bob will auto-activate it when a task matches the skill description.
              </p>
              <InstallCommand skillId={skill.id} />

              <div style={{
                marginTop: '1.25rem', padding: '1rem 1.25rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: 10, fontSize: 12,
                color: 'var(--text-2)', lineHeight: 1.7,
                fontFamily: 'var(--mono)',
              }}>
                <span style={{ color: 'var(--accent)' }}>~/.bob/skills/</span>{skill.id}/SKILL.md
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
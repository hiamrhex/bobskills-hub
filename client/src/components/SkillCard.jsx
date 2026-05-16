import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { StarIcon, ArrowRight } from './Icons';

const CAT = {
  Testing:    { color: 'var(--cat-testing)',   bg: 'rgba(74,222,128,0.07)'   },
  Docs:       { color: 'var(--cat-docs)',      bg: 'rgba(129,140,248,0.07)'  },
  Security:   { color: 'var(--cat-security)', bg: 'rgba(248,113,113,0.07)'  },
  Onboarding: { color: 'var(--cat-onboard)',  bg: 'rgba(251,146,60,0.07)'   },
  Refactor:   { color: 'var(--cat-refactor)', bg: 'rgba(96,165,250,0.07)'   },
};

export default function SkillCard({ skill, onClick, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useScrollReveal(index * 50);
  const cat = CAT[skill.category] || CAT.Docs;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg-hover)' : 'var(--bg-card)',
        border: `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
        borderRadius: 14,
        padding: '1.4rem 1.5rem',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? 'var(--shadow-lift)' : 'var(--shadow-card)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${index * 0.025}s`,
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Top accent line — animated opacity */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1.5,
        background: `linear-gradient(90deg, transparent 0%, ${cat.color} 40%, ${cat.color} 60%, transparent 100%)`,
        opacity: hovered ? 0.9 : 0.3,
        transition: 'opacity 0.3s',
      }} />

      {/* Subtle glow on hover */}
      {hovered && (
        <div style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '60%', height: 80,
          background: `radial-gradient(ellipse at 50% 0%, ${cat.color}18 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
      )}

      {/* Header row */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 13,
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          fontSize: 9, fontWeight: 600,
          fontFamily: 'var(--mono)', letterSpacing: '0.9px',
          textTransform: 'uppercase',
          color: cat.color,
          background: cat.bg,
          padding: '3px 9px', borderRadius: 5,
          border: `1px solid ${cat.color}22`,
        }}>
          {skill.category}
        </span>
        <span style={{
          display: 'flex', alignItems: 'center', gap: 3.5,
          fontSize: 11, color: 'var(--text-3)',
          fontFamily: 'var(--mono)',
        }}>
          <StarIcon size={9} />
          {skill.rating}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 14.5, fontWeight: 600,
        color: 'var(--text-1)',
        letterSpacing: '-0.3px',
        lineHeight: 1.4,
        marginBottom: 9,
      }}>
        {skill.name}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: 12.5,
        color: 'var(--text-2)',
        lineHeight: 1.75,
        flex: 1,
        marginBottom: 18,
      }}>
        {skill.description}
      </p>

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 13,
        borderTop: '1px solid var(--border)',
      }}>
        <span style={{
          fontSize: 10.5, color: 'var(--text-3)',
          fontFamily: 'var(--mono)',
        }}>
          {skill.installs?.toLocaleString() ?? '0'} installs
        </span>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 5,
          fontSize: 11, fontFamily: 'var(--mono)',
          color: hovered ? cat.color : 'var(--text-3)',
          fontWeight: 500,
          transition: 'color 0.22s',
        }}>
          Preview
          <div style={{
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.22s cubic-bezier(0.16,1,0.3,1)',
            display: 'flex', alignItems: 'center',
          }}>
            <ArrowRight size={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
import { useMemo } from 'react';
import SkillCard from './SkillCard';

function SkeletonCard({ minHeight }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 14,
      padding: '1.4rem 1.5rem',
      display: 'flex', flexDirection: 'column', gap: 12,
      minHeight: minHeight || '280px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="skeleton" style={{ width: 64, height: 20 }} />
        <div className="skeleton" style={{ width: 32, height: 16 }} />
      </div>
      <div className="skeleton" style={{ width: '70%', height: 18 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div className="skeleton" style={{ width: '100%', height: 13 }} />
        <div className="skeleton" style={{ width: '85%', height: 13 }} />
        <div className="skeleton" style={{ width: '60%', height: 13 }} />
      </div>
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 13, display: 'flex', justifyContent: 'space-between' }}>
        <div className="skeleton" style={{ width: 70, height: 12 }} />
        <div className="skeleton" style={{ width: 55, height: 12 }} />
      </div>
    </div>
  );
}

export default function SkillGrid({ skills, loading, onSelect }) {
  // Generate consistent heights for each skill based on their ID
  const cardHeights = useMemo(() => {
    if (!skills || skills.length === 0) return {};
    
    const heights = {};
    skills.forEach((skill) => {
      // Use skill ID to generate a consistent height
      const hash = skill.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const minHeight = 280;
      const maxHeight = 380;
      const range = maxHeight - minHeight;
      heights[skill.id] = minHeight + (hash % range);
    });
    return heights;
  }, [skills]);

  if (loading) {
    const skeletonHeights = [320, 350, 290, 360, 310, 340];
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
        gridAutoRows: 'auto',
        gap: '14px',
      }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} minHeight={`${skeletonHeights[i]}px`} />
        ))}
      </div>
    );
  }

  if (skills.length === 0) return (
    <div style={{
      textAlign: 'center', padding: '7rem 0',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 22,
      }}>
        ⌀
      </div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.6px' }}>
        NO SKILLS FOUND
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-3)' }}>
        Try a different search or category
      </div>
    </div>
  );

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
      gridAutoRows: 'auto',
      gap: '14px',
    }}>
      {skills.map((s, i) => (
        <SkillCard
          key={s.id}
          skill={s}
          index={i}
          onClick={() => onSelect(s)}
          minHeight={cardHeights[s.id]}
        />
      ))}
    </div>
  );
}
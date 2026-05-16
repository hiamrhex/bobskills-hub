const CATS = {
  All:        { color: null,                    label: 'All'        },
  Testing:    { color: 'var(--cat-testing)',    label: 'Testing'    },
  Docs:       { color: 'var(--cat-docs)',       label: 'Docs'       },
  Security:   { color: 'var(--cat-security)',   label: 'Security'   },
  Onboarding: { color: 'var(--cat-onboard)',    label: 'Onboarding' },
  Refactor:   { color: 'var(--cat-refactor)',   label: 'Refactor'   },
};

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center',
      gap: 5, flexWrap: 'wrap',
      justifyContent: 'center',
    }}>
      {categories.map(cat => {
        const isActive = active === cat;
        const c = CATS[cat] || CATS.All;
        const color = c.color || 'var(--text-1)';

        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            style={{
              padding: '6px 14px',
              borderRadius: 100,
              fontSize: 11.5,
              fontWeight: isActive ? 600 : 400,
              fontFamily: 'var(--font)',
              cursor: 'pointer',
              border: `1px solid ${isActive
                ? (c.color ? c.color + '40' : 'var(--border-hover)')
                : 'var(--border)'}`,
              background: isActive
                ? (c.color ? c.color + '12' : 'var(--bg-surface)')
                : 'transparent',
              color: isActive ? color : 'var(--text-3)',
              transition: 'all 0.2s cubic-bezier(0.16,1,0.3,1)',
              transform: isActive ? 'scale(1.04)' : 'scale(1)',
              letterSpacing: '0.15px',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.color = 'var(--text-2)';
                e.currentTarget.style.borderColor = 'var(--border-hover)';
                e.currentTarget.style.background = 'var(--bg-surface)';
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.color = 'var(--text-3)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            {isActive && c.color && (
              <span style={{
                width: 5, height: 5, borderRadius: '50%',
                background: color,
                display: 'inline-block',
                flexShrink: 0,
                animation: 'pulse 2.2s ease infinite',
              }} />
            )}
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
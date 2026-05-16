import { useRef } from 'react';
import { SearchIcon } from './Icons';

export default function SearchBar({ value, onChange }) {
  const inputRef = useRef(null);

  return (
    <div style={{ position: 'relative', maxWidth: 520, margin: '0 auto' }}>
      {/* Search icon */}
      <div style={{
        position: 'absolute', left: 16, top: '50%',
        transform: 'translateY(-50%)',
        color: 'var(--text-3)',
        display: 'flex', alignItems: 'center',
        pointerEvents: 'none',
        transition: 'color 0.2s',
      }}>
        <SearchIcon size={15} />
      </div>

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search skills..."
        style={{
          width: '100%',
          padding: '13px 48px 13px 44px',
          fontSize: 14,
          fontFamily: 'var(--font)',
          background: 'var(--bg-input)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          color: 'var(--text-1)',
          outline: 'none',
          transition: 'border-color 0.2s, box-shadow 0.2s, background 0.2s',
          letterSpacing: '-0.1px',
        }}
        onFocus={e => {
          e.target.style.borderColor = 'var(--border-focus)';
          e.target.style.boxShadow = '0 0 0 3px var(--accent-glow-2)';
          e.target.style.background = 'var(--bg-card)';
        }}
        onBlur={e => {
          e.target.style.borderColor = 'var(--border)';
          e.target.style.boxShadow = 'none';
          e.target.style.background = 'var(--bg-input)';
        }}
      />

      {/* Kbd hint */}
      {!value && (
        <div style={{
          position: 'absolute', right: 14, top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', alignItems: 'center', gap: 3,
          pointerEvents: 'none',
        }}>
          <kbd style={{
            fontSize: 10, fontFamily: 'var(--mono)',
            color: 'var(--text-3)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 5, padding: '2px 7px',
            letterSpacing: '0.3px',
          }}>/</kbd>
        </div>
      )}

      {/* Clear button */}
      {value && (
        <button
          onClick={() => onChange('')}
          style={{
            position: 'absolute', right: 12, top: '50%',
            transform: 'translateY(-50%)',
            width: 22, height: 22, borderRadius: '50%',
            border: 'none',
            background: 'var(--bg-surface)',
            color: 'var(--text-2)',
            cursor: 'pointer',
            fontSize: 14, lineHeight: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--border-hover)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-surface)'}
        >
          ×
        </button>
      )}
    </div>
  );
}
import { useState } from 'react';
import { CopyIcon, CheckIcon, TerminalIcon } from './Icons';

export default function InstallCommand({ skillId }) {
  const [copied, setCopied] = useState(false);
  const command = `bob skill install ${skillId}`;

  const copy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div style={{
        fontSize: 10, fontFamily: 'var(--mono)',
        color: 'var(--text-3)', letterSpacing: '0.6px',
        textTransform: 'uppercase', marginBottom: 10,
      }}>
        Install
      </div>
      <div style={{
        display: 'flex', alignItems: 'center',
        background: '#03030c',
        border: '1px solid var(--border)',
        borderRadius: 10, overflow: 'hidden',
      }}>
        <div style={{
          padding: '11px 14px',
          color: 'var(--text-3)',
          display: 'flex', alignItems: 'center',
          borderRight: '1px solid var(--border)',
          flexShrink: 0,
        }}>
          <TerminalIcon size={13} />
        </div>
        <code style={{
          flex: 1, padding: '11px 14px',
          fontSize: 12, fontFamily: 'var(--mono)',
          color: '#a5b4fc', whiteSpace: 'nowrap',
          overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {command}
        </code>
        <button
          onClick={copy}
          style={{
            padding: '11px 16px',
            background: copied ? 'rgba(74,222,128,0.08)' : 'transparent',
            border: 'none', borderLeft: '1px solid var(--border)',
            color: copied ? 'var(--cat-testing)' : 'var(--text-3)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 5,
            fontSize: 11, fontFamily: 'var(--mono)',
            transition: 'all 0.18s', whiteSpace: 'nowrap', flexShrink: 0,
          }}
          onMouseEnter={e => { if (!copied) e.currentTarget.style.color = 'var(--text-1)'; }}
          onMouseLeave={e => { if (!copied) e.currentTarget.style.color = 'var(--text-3)'; }}
        >
          {copied ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
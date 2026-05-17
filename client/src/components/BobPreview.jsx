import { useState, useEffect, useRef } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { BoltIcon, CopyIcon, CheckIcon } from './Icons';

const API_URL = import.meta.env.VITE_API_URL || '';

export default function BobPreview({
  skill,
  code,
  setCode,
  output,
  setOutput,
  loading,
  setLoading,
  error,
  setError,
  viewMode,
  setViewMode
}) {
  const [copied, setCopied] = useState(false);
  const [displayedOutput, setDisplayedOutput] = useState('');
  const animationRef = useRef(null);
  const hasAnimatedRef = useRef(new Set());

  const run = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setOutput('');
    setDisplayedOutput('');
    setError(null);
    try {
      const res = await fetch(API_URL ? `${API_URL}/api/preview` : '/api/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skillId: skill.id, skillMd: skill.skill_md, code }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        // Handle API errors
        setError(data.error || `Server error: ${res.status}`);
        setOutput('');
        setDisplayedOutput('');
      } else {
        const newOutput = data.output || 'No output returned.';
        setOutput(newOutput);
        setError(null);
        // Mark this output as needing animation
        hasAnimatedRef.current.delete(newOutput);
      }
    } catch (err) {
      setError('Failed to connect to server. Make sure the backend is running at ' + API_URL);
      setOutput('');
      setDisplayedOutput('');
    }
    setLoading(false);
  };

  // Typewriter animation effect - only on first generation
  useEffect(() => {
    // If there's no output, reset displayed output
    if (!output) {
      setDisplayedOutput('');
      // Clear any existing animation
      if (animationRef.current) {
        clearTimeout(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    // Check if this output has already been animated
    if (hasAnimatedRef.current.has(output)) {
      // Output already exists in state - display instantly without animation
      setDisplayedOutput(output);
      return;
    }

    // Mark this output as animated before starting animation
    hasAnimatedRef.current.add(output);

    // Clear any existing animation
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }

    // Start typewriter animation for new output
    let currentIndex = 0;
    setDisplayedOutput('');

    const typeNextCharacter = () => {
      if (currentIndex < output.length) {
        setDisplayedOutput(output.slice(0, currentIndex + 1));
        currentIndex++;
        animationRef.current = setTimeout(typeNextCharacter, 10);
      }
    };

    typeNextCharacter();

    // Cleanup function
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [output]);

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Label */}
      <div style={{
        fontSize: 10, fontFamily: 'var(--mono)',
        color: 'var(--text-3)', letterSpacing: '0.6px',
        textTransform: 'uppercase', marginBottom: 10,
      }}>
        Live Bob Preview
      </div>

      {/* Textarea */}
      <textarea
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Paste your code here..."
        rows={7}
        style={{
          width: '100%', padding: '0.85rem 1rem',
          fontSize: 12,
          fontFamily: 'var(--mono)',
          border: '1px solid var(--border)',
          borderRadius: 10,
          background: 'var(--bg-input)',
          color: 'var(--text-1)',
          resize: 'vertical', outline: 'none',
          lineHeight: 1.75,
          transition: 'border-color 0.18s, box-shadow 0.18s',
        }}
        onFocus={e => {
          e.target.style.borderColor = 'var(--border-focus)';
          e.target.style.boxShadow = '0 0 0 3px var(--accent-glow-2)';
        }}
        onBlur={e => {
          e.target.style.borderColor = 'var(--border)';
          e.target.style.boxShadow = 'none';
        }}
      />

      {/* Run button */}
      <button
        onClick={run}
        disabled={loading || !code.trim()}
        style={{
          width: '100%', marginTop: 10, padding: '0.85rem',
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
          color: '#fff',
          border: '1px solid var(--border)',
          borderRadius: 10, fontSize: 13.5, fontWeight: 600,
          cursor: loading || !code.trim() ? 'not-allowed' : 'pointer',
          opacity: !code.trim() ? 0.4 : 1,
          transition: 'all 0.2s',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          letterSpacing: '-0.2px',
        }}
        onMouseEnter={e => { if (!loading && code.trim()) e.currentTarget.style.opacity = '0.88'; }}
        onMouseLeave={e => { if (!loading && code.trim()) e.currentTarget.style.opacity = '1'; }}
      >
        {loading ? (
          <>
            <span style={{
              width: 13, height: 13,
              border: '2px solid rgba(255,255,255,0.3)',
              borderTopColor: '#fff',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'spin 0.65s linear infinite',
            }} />
            Bob is thinking...
          </>
        ) : (
          <>
            <BoltIcon size={13} />
            Preview with Bob
          </>
        )}
      </button>

      {/* Error Message */}
      {error && (
        <div style={{
          marginTop: '1rem',
          animation: 'fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) both',
          background: 'rgba(248, 113, 113, 0.1)',
          border: '1px solid rgba(248, 113, 113, 0.3)',
          borderRadius: 10,
          padding: '0.85rem 1rem',
        }}>
          <div style={{
            fontSize: 10,
            fontFamily: 'var(--mono)',
            color: '#f87171',
            letterSpacing: '0.6px',
            marginBottom: 6,
          }}>
            ERROR
          </div>
          <div style={{
            fontSize: 12,
            color: '#fca5a5',
            lineHeight: 1.6,
          }}>
            {error}
          </div>
        </div>
      )}

      {/* Output */}
      {displayedOutput && (
        <div style={{ marginTop: '1rem', animation: 'fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 8,
          }}>
            <div style={{ fontSize: 10, fontFamily: 'var(--mono)', color: 'var(--text-3)', letterSpacing: '0.6px' }}>
              BOB'S OUTPUT
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {/* View Mode Toggle */}
              <div style={{
                display: 'flex',
                background: 'var(--bg-input)',
                border: '1px solid var(--border)',
                borderRadius: 6,
                padding: 2,
              }}>
                <button
                  onClick={() => setViewMode('raw')}
                  style={{
                    fontSize: 10.5,
                    fontFamily: 'var(--mono)',
                    color: viewMode === 'raw' ? 'var(--text-1)' : 'var(--text-3)',
                    background: viewMode === 'raw' ? 'var(--bg-surface)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    padding: '4px 8px',
                    borderRadius: 4,
                  }}
                >
                  Raw
                </button>
                <button
                  onClick={() => setViewMode('rendered')}
                  style={{
                    fontSize: 10.5,
                    fontFamily: 'var(--mono)',
                    color: viewMode === 'rendered' ? 'var(--text-1)' : 'var(--text-3)',
                    background: viewMode === 'rendered' ? 'var(--bg-surface)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    padding: '4px 8px',
                    borderRadius: 4,
                  }}
                >
                  Rendered
                </button>
              </div>
              <button onClick={copyOutput} style={{
                display: 'flex', alignItems: 'center', gap: 5,
                fontSize: 10.5, fontFamily: 'var(--mono)',
                color: copied ? 'var(--cat-testing)' : 'var(--text-3)',
                background: 'transparent', border: 'none',
                cursor: 'pointer', transition: 'color 0.2s',
                padding: '3px 6px', borderRadius: 5,
              }}>
                {copied ? <CheckIcon size={11} /> : <CopyIcon size={11} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          {viewMode === 'raw' ? (
            <pre style={{
              background: 'var(--bg-input)',
              border: '1px solid var(--border)',
              borderRadius: 10, padding: '1rem',
              fontSize: 11.5, color: 'var(--text-2)',
              whiteSpace: 'pre-wrap',
              fontFamily: 'var(--mono)',
              lineHeight: 1.8, overflowX: 'auto',
            }}>
              {displayedOutput}
            </pre>
          ) : (
            <div
              style={{
                background: 'var(--bg-input)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '1rem',
                fontSize: 13,
                color: 'var(--text-1)',
                lineHeight: 1.8,
                overflowX: 'auto',
              }}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(displayedOutput)) }}
            />
          )}
        </div>
      )}
    </div>
  );
}
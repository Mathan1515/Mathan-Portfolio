import { useEffect, useState } from 'react';
export default function useMedia(query: string) {
    const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
    useEffect(() => { const m = window.matchMedia(query); const update = () => setMatches(m.matches); update(); m.addEventListener('change', update); return () => m.removeEventListener('change', update); }, [query]);
    return matches;
}

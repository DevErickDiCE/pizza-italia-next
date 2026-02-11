'use client';

import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

// Global Lenis instance so modal can access it
let lenisInstance: Lenis | null = null;

export function getLenis(): Lenis | null {
    return lenisInstance;
}

export function SmoothScroll() {
    const rafId = useRef<number>(0);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenisInstance = lenis;

        function raf(time: number) {
            lenis.raf(time);
            rafId.current = requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId.current);
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);

    return null;
}

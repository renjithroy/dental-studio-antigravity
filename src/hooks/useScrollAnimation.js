import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, stop observing
                    observer.unobserve(element);
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [options.threshold, options.rootMargin]);

    return { ref, isVisible };
}

export function useMultipleScrollAnimations(count) {
    const refs = useRef([]);
    const [visibleStates, setVisibleStates] = useState(Array(count).fill(false));

    useEffect(() => {
        const observers = refs.current.map((element, index) => {
            if (!element) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleStates((prev) => {
                            const newStates = [...prev];
                            newStates[index] = true;
                            return newStates;
                        });
                        observer.unobserve(element);
                    }
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px',
                }
            );

            observer.observe(element);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, [count]);

    const setRef = (index) => (el) => {
        refs.current[index] = el;
    };

    return { setRef, visibleStates };
}

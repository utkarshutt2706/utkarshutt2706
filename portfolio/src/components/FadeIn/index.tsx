import {
    CSSProperties,
    ReactNode,
    RefObject,
    useEffect,
    useRef,
    useState,
} from 'react';

export function useInView(
    threshold = 0.15,
): [RefObject<HTMLDivElement>, boolean] {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref as React.RefObject<HTMLDivElement>, visible];
}

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    style?: CSSProperties;
}

export default function FadeIn({
    children,
    delay = 0,
    className = '',
    style = {},
}: FadeInProps) {
    const [ref, visible] = useInView();

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
                ...style,
            }}
        >
            {children}
        </div>
    );
}

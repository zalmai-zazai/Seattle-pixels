// Simple animation utility to reduce performance impact
export const useOptimizedAnimation = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Delay animations on mobile to prevent stuttering
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const delay = isMobile ? 300 : 100;

    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return shouldAnimate;
};

// Reduced animation classes for mobile
export const getAnimationClasses = (isVisible, delay = 0) => {
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    // Simplified animations for mobile
    return `transition-all duration-300 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`;
  }

  // Full animations for desktop
  return `transition-all duration-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;
};

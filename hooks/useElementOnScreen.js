import { useEffect, useRef } from "react";

function useElementOnScreen(options) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(function () {
        videoRef.current?.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }, 1000);
    } else {
      clearTimeout(timeoutRef.current);
      videoRef.current?.pause();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);
    // if (containerRef.current) observer.observe(containerRef.current);

    // let newRef = containerRef.current;
    return () => {
      clearTimeout(timeoutRef.current);
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [containerRef, videoRef];
}

export default useElementOnScreen;

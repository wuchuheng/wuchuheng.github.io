import React, { useState, useRef, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";

interface Props {
  children: React.ReactNode;
  url: string;
}

export const CodesanboxRender = ({ url }: Props): JSX.Element => {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ height: "500px" }}>
      {isVisible ? (
        <>
          <iframe
            src={url}
            style={{
              width: "100%",
              height: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            onLoad={() => setShowLoading(false)}
          />
        </>
      ) : (
        <></>
      )}
      {showLoading && <LoadingSpinner />}
    </div>
  );
};

export default CodesanboxRender;

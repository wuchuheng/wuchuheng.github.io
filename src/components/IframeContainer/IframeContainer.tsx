import React, { useState, useEffect, useRef } from "react";
import LoadingSpinner from "../LoadingSpinner";

interface IframeContainerProps {
  src: string;
  style: { [key: string]: string };
}

const CODESANDBOX_ATTRIBUTES = {
  sandbox:
    "allow-modals allow-forms allow-popups allow-scripts allow-same-origin",
  allow:
    "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",
};

const CODESANDBOX_STYLE = {
  width: "100%",
  height: "500px",
  border: "0",
  borderRadius: "4px",
  overflow: "hidden",
};

const IframeContainer = ({
  src,
  style,
}: IframeContainerProps): React.ReactElement => {
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isCodesandbox = src.match(/codesandbox\.io/) != null;

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

  const iframeStyle = isCodesandbox
    ? CODESANDBOX_STYLE
    : {
        width: "100%",
        height: "100%",
        ...style,
        display: showLoading ? "none" : "block",
      };

  return (
    <div ref={containerRef}>
      {isVisible ? (
        <>
          <iframe
            src={src}
            style={iframeStyle}
            onLoad={() => setShowLoading(false)}
            {...(isCodesandbox ? CODESANDBOX_ATTRIBUTES : {})}
          />
          {showLoading && <LoadingSpinner style={style} />}
        </>
      ) : (
        <div style={iframeStyle} />
      )}
    </div>
  );
};

export default IframeContainer;

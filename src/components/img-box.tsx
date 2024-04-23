// ImageBox.js

import { useState } from "react";

const ImageBox = ({ url, onLoad }: { url: string; onLoad: () => void }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    onLoad();
  };

  return (
    <div className="image-box">
      <img src={url} alt="Gallery" onLoad={handleLoad} />
      {!loaded && <div className="loading-overlay">Loading...</div>}
    </div>
  );
};

export default ImageBox;

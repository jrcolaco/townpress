
'use client';
import { useEffect, useMemo, useState } from 'react';

type Props = {
  images: string[];
  autoplaySeconds?: number;
};

export default function HeaderImage({ images, autoplaySeconds = 8 }: Props) {
  const [idx, setIdx] = useState(0);
  const enabled = images.length > 1 && autoplaySeconds > 0;

  useEffect(() => {
    if (!enabled) return;
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), autoplaySeconds * 1000);
    return () => clearInterval(t);
  }, [enabled, images.length, autoplaySeconds]);

  const current = useMemo(() => images[idx], [images, idx]);

  return (
    <div className="header-bg">
      <div className="header-image" data-autoplay={autoplaySeconds}>
        {/* Mimic image-layer blocks */}
        <div className="image-layer" style={{ backgroundImage: `url('${current}')` }} />
      </div>
    </div>
  );
}

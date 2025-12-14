import * as React from 'react';
import { CONTENT } from '@/lib/constants';

interface VideoSectionProps {
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  autoplay = false,
  muted = true,
  loop = true,
  controls = false,
}) => {
  return (
    <section className="relative bg-kshatra-white py-0">
      {/* Top border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-kshatra-black opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Video container with aspect ratio */}
          <div className="relative w-full aspect-video bg-kshatra-black/5 rounded-lg overflow-hidden shadow-2xl">
            {/* Video element */}
            
            <video
              src={CONTENT.video.videoSrc}
              poster={CONTENT.video.posterImage}
              autoPlay={autoplay}
              muted={muted}
              loop={loop}
              controls={controls}
              playsInline
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-kshatra-black opacity-20" />
    </section>
  );
};

VideoSection.displayName = 'VideoSection';

export { VideoSection };

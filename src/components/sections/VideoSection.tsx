import * as React from 'react';
import Image from 'next/image';
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
            {/* Placeholder image */}
            <Image
              src={CONTENT.video.posterImage}
              alt="Video preview"
              fill
              className="object-cover object-center"
              quality={90}
            />

            {/* Video element (commented out - to be enabled when video is added) */}
            {/*
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
            */}

            {/* Overlay text for placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-kshatra-black/40">
              <div className="text-center space-y-4 p-8">
                <div className="w-20 h-20 mx-auto border-4 border-kshatra-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-kshatra-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-kshatra-white text-sm sm:text-base font-medium">
                  Video placeholder - To be added
                </p>
              </div>
            </div>
          </div>

          {/* Instructions for adding video */}
          <div className="mt-6 text-center text-sm text-kshatra-black/60">
            <p>
              To add your video, place the video file at{' '}
              <code className="px-2 py-1 bg-kshatra-black/5 rounded font-mono text-xs">
                /public/videos/main-video.mp4
              </code>
              {' '}and uncomment the video element in VideoSection.tsx
            </p>
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

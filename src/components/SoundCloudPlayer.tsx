import React from 'react';

interface SoundCloudPlayerProps {
  trackUrl: string;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ trackUrl }) => {
  return (
    <div className="w-full h-[120px] bg-black/30 rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="120"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff69b4&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
      />
    </div>
  );
};

export default SoundCloudPlayer;
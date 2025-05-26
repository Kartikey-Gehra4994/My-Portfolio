'use client';

import Lottie from 'react-lottie';
import animationData from '@/data/confetti.json';

const ConfettiLottie = ({ copied }: { copied: boolean }) => {
  return (
    <Lottie
      options={{
        loop: copied,
        autoplay: copied,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      height={300}
      width={300}
    />
  );
};

export default ConfettiLottie;

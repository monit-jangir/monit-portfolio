'use client';

import React from 'react';
const Sports = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          🏅 Beyond the Code
        </h2>
        <p className="mt-2 text-muted-foreground text-lg">
          How I stay balanced and inspired.
        </p>
      </div>

      <div className="space-y-6 text-muted-foreground text-base">
        <p>
          While my main passion lies in technology and AI, I believe a balanced life fuels creativity. When I'm not in front of a screen, you can often find me on the road. 🏍️ Bike rides are my go-to for clearing my mind and thinking through complex problems from a fresh perspective.
        </p>
        <p>
          For a bit of friendly competition and a great workout, I love a good game of badminton 🏸. It’s fast-paced and strategic, which is a great parallel to the problem-solving I do in my work.
        </p>
        <p>
          I'm also a big believer in the joy of discovery. I love exploring hidden gems in my city ✨, whether it's a new trail, a quiet cafe, or a local spot with a unique story. This sense of curiosity is what drives me both in my personal life and in my professional pursuit of innovative tech solutions.
        </p>
      </div>
    </div>
  );
};

export default Sports;
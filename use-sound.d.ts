declare module 'use-sound' {
    interface PlayFunction {
      (options?: { id?: string, playbackRate?: number, volume?: number }): void;
      src: string;
    }
  
    type Options = {
      volume?: number;
      playbackRate?: number;
      loop?: boolean;
      soundEnabled?: boolean;
      interrupt?: boolean;
      sprite?: Record<string, [number, number]>;
      onload?: () => void;
      onend?: () => void;
      onerror?: () => void;
      html5?: boolean;
      format?: string[];
    };
  
    export default function useSound(url: string | string[], options?: Options): [PlayFunction, { stop: () => void, pause: () => void, isPlaying: boolean }];
  }
  
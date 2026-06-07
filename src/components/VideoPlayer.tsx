"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX, Loader2 } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster: string;
  type?: "background" | "card" | "testimonial";
  className?: string;
  overlay?: boolean;
}

function isMobile(): boolean {
  if (typeof window === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export default function VideoPlayer({
  src,
  poster,
  type = "card",
  className = "",
  overlay = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [mobileTapped, setMobileTapped] = useState(false);
  const mobile = isMobile();

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  }, []);

  const handleMobilePlay = useCallback(() => {
    setMobileTapped(true);
    const v = videoRef.current;
    if (v) {
      v.play();
      setIsPlaying(true);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current && type !== "background") {
          if (!mobile) {
            videoRef.current.play();
            setIsPlaying(true);
          }
        } else if (videoRef.current && type !== "background") {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [type, mobile]);

  useEffect(() => {
    if (type === "background" && !mobile && isInView) {
      const v = videoRef.current;
      if (v) {
        v.play();
        setIsPlaying(true);
      }
    }
  }, [type, mobile, isInView]);

  if (type === "background") {
    if (mobile && !mobileTapped) {
      return (
        <div
          className={`absolute inset-0 bg-cover bg-center cursor-pointer ${className}`}
          style={{ backgroundImage: `url(${poster})` }}
          onClick={handleMobilePlay}
        >
          {overlay && <div className="absolute inset-0 bg-navy/60" />}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cyan/90 text-navy flex items-center justify-center backdrop-blur-sm shadow-lg hover:bg-cyan transition-colors active:scale-95">
              <Play className="w-7 h-7 md:w-8 md:h-8 ml-1" />
            </div>
          </div>
          <p className="absolute bottom-8 left-0 right-0 text-center text-white/60 text-xs z-10">
            Tap to play video
          </p>
        </div>
      );
    }

    return (
      <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          onLoadedData={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
        {overlay && <div className="absolute inset-0 bg-navy/60" />}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative group overflow-hidden rounded-xl bg-navy ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {hasError ? (
        <div className="aspect-video flex items-center justify-center bg-navy-light">
          <div className="text-center p-4">
            <Loader2 className="w-8 h-8 text-grey-400 mx-auto mb-2" />
            <p className="text-grey-400 text-xs">Video unavailable</p>
          </div>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            poster={poster}
            preload="none"
            onLoadedData={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className="w-full aspect-video object-cover cursor-pointer"
            onClick={togglePlay}
          >
            <source src={src} type="video/mp4" />
          </video>

          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-navy/80">
              <Loader2 className="w-8 h-8 text-cyan animate-spin" />
            </div>
          )}

          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isPlaying && !showControls ? "opacity-0" : "opacity-100"
            }`}
          >
            <button
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-cyan/90 text-navy flex items-center justify-center hover:bg-cyan transition-colors backdrop-blur-sm"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>
          </div>

          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-navy/60 text-white flex items-center justify-center hover:bg-navy/80 transition-colors opacity-0 group-hover:opacity-100"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {type === "testimonial" && (
            <div
              className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-navy/60 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              onClick={togglePlay}
            >
              {isPlaying ? "Pause" : "Play"}
            </div>
          )}
        </>
      )}
    </div>
  );
}

import React, { useRef, useState } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useLanguage } from '../i18n/LanguageContext';
import { X, Volume2, VolumeX } from 'lucide-react';

interface ShowreelModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly triggerElement?: HTMLElement | null;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  triggerElement,
}) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  // Focus trap hook ensures Esc handling, tab containment and focus return to reel card
  const modalRef = useFocusTrap(isOpen, onClose, triggerElement);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-primary/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="showreel-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="w-full max-w-5xl bg-primary border-2 border-primary overflow-hidden flex flex-col shadow-[12px_12px_0px_var(--color-secondary-container)] focus:outline-none"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-space-md py-space-sm bg-primary text-on-primary border-b border-outline-variant/30">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" aria-hidden="true" />
            <span
              id="showreel-modal-title"
              className="font-mono text-label-sm uppercase font-bold tracking-widest"
            >
              {t.showreelModal.title}
            </span>
          </div>

          <div className="flex items-center gap-space-sm">
            <button
              type="button"
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.muted = !videoRef.current.muted;
                  setIsMuted(videoRef.current.muted);
                }
              }}
              className="p-1.5 text-on-primary hover:text-secondary-container transition-colors cursor-pointer"
              aria-label={isMuted ? t.showreelModal.unmuteAria : t.showreelModal.muteAria}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-on-primary hover:text-secondary-container transition-colors cursor-pointer"
              aria-label={t.showreelModal.closeAria}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <video
            ref={videoRef}
            autoPlay
            controls
            playsInline
            className="w-full h-full object-cover"
            poster="https://lh3.googleusercontent.com/aida-public/AB6AXuAaE7kBNGFPgKTzSo4kEWoluc4grKSvAQxrzTNxImlohsZCsgkoGjaekNBPpZ5NIsNm_Ows1MPZmtTBEli6SkQ0hVXq44q8LeCgwIGZswkOEn_ulsxHKMCMnv04yQtBywe6nUaFMqSJuPX_w-dT7BDmfMPltQPvZsVWpFMP3__rodU-gUkhM3NDIlVf6ilTV1gqccOThUDY5B_G_BnmarkapMb6tzM_3MxoyAzmC50M7XBTEWieo117mQ"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
            />
            {t.showreelModal.videoFallback}
          </video>
        </div>

        {/* Bottom bar */}
        <div className="px-space-md py-3 bg-primary text-on-primary font-mono text-label-sm flex flex-wrap justify-between items-center gap-2 border-t border-outline-variant/30">
          <span>{t.showreelModal.bottomTechnical}</span>
          <span className="text-secondary-container font-semibold">
            {t.showreelModal.bottomHint}
          </span>
        </div>
      </div>
    </div>
  );
};

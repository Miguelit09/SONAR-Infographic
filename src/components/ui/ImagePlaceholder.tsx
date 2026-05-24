import type { ImageSlot } from '../../config/images';

type ImagePlaceholderProps = {
  slot: ImageSlot;
  className?: string;
};

export function ImagePlaceholder({ slot, className = '' }: ImagePlaceholderProps) {
  const hasSrc = slot.src.trim().length > 0;

  return (
    <figure className={`image-slot ${className}`.trim()}>
      {hasSrc ? (
        <img
          src={slot.src}
          alt={slot.alt}
          loading="lazy"
          className="image-slot__img"
        />
      ) : (
        <div className="image-slot__placeholder" role="img" aria-label={slot.alt}>
          <svg
            className="image-slot__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8.5" cy="10" r="1.5" fill="currentColor" stroke="none" />
            <path d="M3 16l5-5 4 4 3-3 6 6" />
          </svg>
          <p className="image-slot__alt-text">{slot.alt}</p>
          <p className="image-slot__hint">
            Imagen pendiente — edita <code>src</code> en{' '}
            <code>images.ts</code>
          </p>
          <p className="image-slot__id">
            ID: <code>{slot.id}</code>
          </p>
        </div>
      )}
      {slot.caption && (
        <figcaption className="image-slot__caption">{slot.caption}</figcaption>
      )}
    </figure>
  );
}

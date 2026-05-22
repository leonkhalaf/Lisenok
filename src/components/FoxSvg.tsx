interface FoxSvgProps {
  className?: string;
  color?: string;
}

export function FoxSvg({ className = "", color = "currentColor" }: FoxSvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Triangle frame */}
      <path
        d="M100 15L185 175H15L100 15Z"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.3"
        fill="none"
      />
      {/* Fox head - minimalist line art */}
      <g stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Ears */}
        <path d="M70 75L55 45L85 60" />
        <path d="M130 75L145 45L115 60" />
        {/* Head shape */}
        <path d="M70 75Q100 55 130 75L120 115Q100 130 80 115Z" />
        {/* Eyes */}
        <circle cx="88" cy="88" r="3" fill={color} fillOpacity="0.4" stroke="none" />
        <circle cx="112" cy="88" r="3" fill={color} fillOpacity="0.4" stroke="none" />
        {/* Nose */}
        <path d="M100 108L96 115H104L100 108Z" fill={color} fillOpacity="0.5" />
        {/* Mouth line */}
        <path d="M100 115V122" />
        <path d="M100 122Q92 126 88 120" />
        <path d="M100 122Q108 126 112 120" />
        {/* Cheek fur lines */}
        <path d="M75 95Q68 100 72 108" strokeOpacity="0.5" />
        <path d="M125 95Q132 100 128 108" strokeOpacity="0.5" />
        {/* Whisker dots */}
        <circle cx="82" cy="105" r="1" fill={color} fillOpacity="0.3" stroke="none" />
        <circle cx="118" cy="105" r="1" fill={color} fillOpacity="0.3" stroke="none" />
      </g>
    </svg>
  );
}

export function FoxLogo({ className = "", color = "currentColor" }: FoxSvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M8 10L5 4L10 8" />
        <path d="M16 10L19 4L14 8" />
        <path d="M8 10Q12 7 16 10L14 16Q12 19 10 16Z" />
        <circle cx="10.5" cy="12" r="1.5" fill={color} fillOpacity="0.4" stroke="none" />
        <circle cx="13.5" cy="12" r="1.5" fill={color} fillOpacity="0.4" stroke="none" />
        <path d="M12 15L10 17H14L12 15Z" fill={color} fillOpacity="0.5" />
      </g>
    </svg>
  );
}

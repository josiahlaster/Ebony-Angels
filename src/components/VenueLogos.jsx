// Custom SVG logos for each venue

export function OroLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="oroGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F4E5B2" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      <text x="60" y="38" textAnchor="middle" fontSize="32" fontWeight="bold" fontFamily="serif" fill="url(#oroGold)">
        ORO
      </text>
      <text x="60" y="52" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#D4AF37" letterSpacing="4">
        RESTAURANT & LOUNGE
      </text>
      <line x1="15" y1="45" x2="40" y2="45" stroke="#D4AF37" strokeWidth="0.5" />
      <line x1="80" y1="45" x2="105" y2="45" stroke="#D4AF37" strokeWidth="0.5" />
    </svg>
  );
}

export function LenovoCenterLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lenovoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2231A" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
      </defs>
      {/* Arena shape */}
      <path d="M20 45 Q60 15 100 45" stroke="url(#lenovoGrad)" strokeWidth="3" fill="none" />
      <path d="M25 45 Q60 20 95 45" stroke="#D4AF37" strokeWidth="1" fill="none" />
      {/* Vertical lines representing seating */}
      <line x1="35" y1="38" x2="35" y2="45" stroke="#D4AF37" strokeWidth="1" />
      <line x1="50" y1="32" x2="50" y2="45" stroke="#D4AF37" strokeWidth="1" />
      <line x1="60" y1="28" x2="60" y2="45" stroke="#D4AF37" strokeWidth="1" />
      <line x1="70" y1="32" x2="70" y2="45" stroke="#D4AF37" strokeWidth="1" />
      <line x1="85" y1="38" x2="85" y2="45" stroke="#D4AF37" strokeWidth="1" />
      <text x="60" y="55" textAnchor="middle" fontSize="7" fontFamily="sans-serif" fill="#D4AF37" letterSpacing="2">
        LENOVO CENTER
      </text>
    </svg>
  );
}

export function SaunaHouseLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="steamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Steam waves */}
      <path d="M35 35 Q40 25 35 15" stroke="url(#steamGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M50 35 Q55 25 50 15" stroke="url(#steamGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M65 35 Q70 25 65 15" stroke="url(#steamGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Water/pool representation */}
      <ellipse cx="50" cy="42" rx="30" ry="8" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
      {/* Text */}
      <text x="90" y="28" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="sans-serif" fill="#D4AF37">
        SAUNA
      </text>
      <text x="90" y="40" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="sans-serif" fill="#D4AF37">
        HOUSE
      </text>
      <text x="90" y="52" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fill="#ffffff80">
        DURHAM
      </text>
    </svg>
  );
}

export function ZincHouseLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#5C0000" />
        </linearGradient>
      </defs>
      {/* Wine glass silhouette */}
      <path d="M25 15 L20 30 Q25 38 30 30 L25 15" fill="url(#wineGrad)" />
      <line x1="25" y1="38" x2="25" y2="48" stroke="#D4AF37" strokeWidth="1.5" />
      <line x1="20" y1="48" x2="30" y2="48" stroke="#D4AF37" strokeWidth="1.5" />
      {/* Grape cluster */}
      <circle cx="40" cy="22" r="3" fill="#8B0000" />
      <circle cx="45" cy="20" r="3" fill="#8B0000" />
      <circle cx="42" cy="27" r="3" fill="#8B0000" />
      <circle cx="47" cy="25" r="3" fill="#8B0000" />
      <path d="M44 15 Q50 12 48 18" stroke="#4a7c4e" strokeWidth="1.5" fill="none" />
      {/* Text */}
      <text x="80" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fontFamily="serif" fill="#D4AF37">
        ZincHouse
      </text>
      <text x="80" y="38" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fill="#ffffff80" letterSpacing="1">
        WINERY & BREWERY
      </text>
      <line x1="55" y1="42" x2="105" y2="42" stroke="#D4AF37" strokeWidth="0.5" />
    </svg>
  );
}

export function EllisStationLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="stationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      {/* Train station roof shape */}
      <path d="M20 35 L40 18 L60 35" stroke="url(#stationGrad)" strokeWidth="2" fill="none" />
      <rect x="25" y="35" width="30" height="15" stroke="#D4AF37" strokeWidth="1" fill="none" />
      {/* Door */}
      <rect x="35" y="40" width="10" height="10" fill="#D4AF3720" stroke="#D4AF37" strokeWidth="0.5" />
      {/* Windows */}
      <rect x="28" y="38" width="5" height="5" fill="#D4AF3720" stroke="#D4AF37" strokeWidth="0.5" />
      <rect x="47" y="38" width="5" height="5" fill="#D4AF3720" stroke="#D4AF37" strokeWidth="0.5" />
      {/* Clock */}
      <circle cx="40" cy="26" r="4" stroke="#D4AF37" strokeWidth="1" fill="none" />
      <line x1="40" y1="26" x2="40" y2="23" stroke="#D4AF37" strokeWidth="0.5" />
      <line x1="40" y1="26" x2="42" y2="26" stroke="#D4AF37" strokeWidth="0.5" />
      {/* Text */}
      <text x="85" y="28" textAnchor="middle" fontSize="11" fontWeight="bold" fontFamily="serif" fill="#D4AF37">
        ELLIS
      </text>
      <text x="85" y="42" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#D4AF37">
        STATION
      </text>
      <line x1="65" y1="48" x2="105" y2="48" stroke="#D4AF37" strokeWidth="0.5" />
    </svg>
  );
}

export function AngierHouseLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="houseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>
      {/* House outline */}
      <path d="M15 32 L35 15 L55 32" stroke="url(#houseGrad)" strokeWidth="2" fill="none" />
      <rect x="20" y="32" width="30" height="20" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
      {/* Door with arch */}
      <path d="M30 52 L30 40 Q35 36 40 40 L40 52" stroke="#D4AF37" strokeWidth="1" fill="#D4AF3720" />
      {/* Windows */}
      <rect x="23" y="36" width="5" height="6" stroke="#D4AF37" strokeWidth="0.5" fill="#D4AF3710" />
      <rect x="42" y="36" width="5" height="6" stroke="#D4AF37" strokeWidth="0.5" fill="#D4AF3710" />
      {/* Chimney */}
      <rect x="45" y="18" width="5" height="10" stroke="#D4AF37" strokeWidth="1" fill="none" />
      {/* Text */}
      <text x="85" y="22" textAnchor="middle" fontSize="6" fontFamily="sans-serif" fill="#ffffff80" letterSpacing="2">
        THE
      </text>
      <text x="85" y="35" textAnchor="middle" fontSize="11" fontWeight="bold" fontFamily="serif" fill="#D4AF37">
        ANGIER
      </text>
      <text x="85" y="48" textAnchor="middle" fontSize="9" fontFamily="serif" fill="#D4AF37">
        HOUSE
      </text>
    </svg>
  );
}

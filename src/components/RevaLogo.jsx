import { REVA_LOGO_SRC, REVA_BRAND_NAME, REVA_TAGLINE } from '../constants/revaBrand'

const sizeMap = {
  xs: 14,
  sm: 18,
  md: 24,
  lg: 32,
  xl: 40,
  '2xl': 56,
  '3xl': 64,
}

/** REVA brand mark — use wherever the product logo should appear. */
export default function RevaLogo({ size = 'md', ring = false, className = '', alt = REVA_BRAND_NAME }) {
  const px = typeof size === 'number' ? size : (sizeMap[size] ?? sizeMap.md)

  return (
    <div
      className={`inline-flex flex-shrink-0 items-center justify-center overflow-hidden ${ring ? 'ring-2 ring-accent/30' : ''} ${className}`}
      style={{ width: px, height: px, borderRadius: px >= 32 ? 10 : Math.max(6, px * 0.22) }}
    >
      <img src={REVA_LOGO_SRC} alt={alt} className="w-full h-full object-cover" draggable={false} />
    </div>
  )
}

export function RevaLogoWithLabel({ size = 'sm', label = REVA_BRAND_NAME, sublabel = REVA_TAGLINE, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <RevaLogo size={size} ring />
      <div className="min-w-0">
        <p className="font-semibold text-white leading-tight">{label}</p>
        {sublabel && <p className="text-[11px] text-white/40 truncate">{sublabel}</p>}
      </div>
    </div>
  )
}

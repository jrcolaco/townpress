
'use client';
type Props = { open: boolean; onToggle: () => void };
export default function MapToggle({ open, onToggle }: Props) {
  return (
    <button type="button" className="header-gmap-switcher" title={open ? 'Hide Map' : 'Show on Map'} onClick={onToggle}>
      <i className={open ? 'ico-close tp tp-cross' : 'ico-open tp tp-map2'} />
      <span>Map</span>
    </button>
  );
}


'use client';
import SearchForm from './SearchForm';
import MapToggle from './MapToggle';

type Props = { mapOpen: boolean; onToggleMap: () => void };

export default function HeaderTools({ mapOpen, onToggleMap }: Props) {
  return (
    <div className="header-tools">
      <SearchForm />
      <MapToggle open={mapOpen} onToggle={onToggleMap} />
    </div>
  );
}

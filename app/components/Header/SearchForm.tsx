
'use client';
export default function SearchForm() {
  return (
    <div className="header-search">
      <form method="get" action="/search-results.html" className="c-search-form" role="search">
        <div className="form-fields">
          <input type="text" name="s" placeholder="Search this site..." aria-label="Search" />
          <button type="submit" className="submit-btn" aria-label="Submit search">
            <i className="tp tp-magnifier" />
          </button>
        </div>
      </form>
    </div>
  );
}

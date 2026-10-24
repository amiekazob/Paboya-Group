"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import NewsCard, { type NewsCardUpdate } from "@/components/NewsCard";

type NewsListingProps = {
  updates: NewsCardUpdate[];
};

export default function NewsListing({ updates }: NewsListingProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const categories = Array.from(new Set(updates.map((update) => update.category)));
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredUpdates = updates.filter((update) => {
    const matchesCategory = category === "all" || update.category === category;
    const searchableText = `${update.title} ${update.description} ${update.category}`;
    return matchesCategory && searchableText.toLocaleLowerCase().includes(normalizedQuery);
  });

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <section aria-labelledby="news-page-title" className="news-hero">
        <div className="container">
          <nav aria-label="Breadcrumb" className="news-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">News &amp; Insights</span>
          </nav>

          <div className="news-hero__panel">
            <h1 id="news-page-title">News &amp; Insights</h1>

            <form className="news-search" onSubmit={handleSearch} role="search">
              <svg
                aria-hidden="true"
                className="news-search__icon"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 4.2 4.2" />
              </svg>
              <label className="visually-hidden" htmlFor="news-search-input">
                Search news
              </label>
              <input
                autoComplete="off"
                id="news-search-input"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                type="search"
                value={query}
              />
              <button aria-label="Search news" className="news-search__submit" type="submit">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
                  <path d="M4.5 12h14m-6-6 6 6-6 6" />
                </svg>
              </button>
            </form>

            <div className="news-filters">
              <button
                aria-controls="news-filter-panel"
                aria-expanded={filtersOpen}
                className="news-filters__toggle"
                onClick={() => setFiltersOpen((open) => !open)}
                type="button"
              >
                <span>Filters</span>
                <span aria-hidden="true" className="news-filters__chevron">
                  <svg fill="none" viewBox="0 0 16 16">
                    <path d="m4 6 4 4 4-4" />
                  </svg>
                </span>
              </button>

              {filtersOpen && (
                <div className="news-filters__panel" id="news-filter-panel">
                  <label htmlFor="news-category-filter">News category</label>
                  <select
                    id="news-category-filter"
                    onChange={(event) => setCategory(event.target.value)}
                    value={category}
                  >
                    <option value="all">All categories</option>
                    {categories.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="News stories" className="news-page__content">
        <div className="container">
          {filteredUpdates.length > 0 ? (
            <div className="news-page-grid" id="news-results">
              {filteredUpdates.map((update) => (
                <NewsCard key={update.slug} listing update={update} />
              ))}
            </div>
          ) : (
            <p className="news-empty" id="news-results" role="status">
              No stories match your search. Try another word or category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

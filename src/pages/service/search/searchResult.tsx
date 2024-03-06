import Header from "@/components/Header";
import SearchResultComponent from "@/components/SearchResultComponent";
import router, { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function SearchResult() {
  const router = useRouter();
  const { query } = router.query;

  return (
    <div>
      <Header initialSearchQuery={query} />
      <SearchResultComponent />
    </div>
  );
}

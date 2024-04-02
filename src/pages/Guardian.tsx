import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Guardian } from "@/types";
import { getData } from "@/util/http";
import { Spinner } from "@/components/Spinner";
import { useStateContext } from "@/context/provider";

import Error from "@/components/Error";
import NewsItem from "@/components/NewsItem";
import NewsWrapper from "@/components/NewsWrapper";

const GuardianPage = () => {
  const { search } = useLocation();
  const {
    term,
    date,
    source,
    category,
    updateTerm,
    updateDate,
    updateSource,
    updateCategory,
  } = useStateContext();

  const { data, isLoading, isError } = useQuery<Guardian>({
    queryKey: ["Guardian", { term, date, source, category }],
    queryFn: () => getData({ search: term, date, category, source }),
  });

  useEffect(() => {
    const params = new URLSearchParams(search);
    const date = params.get("date");
    const term = params.get("search");
    const source = params.get("source");
    const category = params.get("category");

    updateDate(date);
    updateTerm(term);
    updateSource(source);
    updateCategory(category);
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error />;
  }

  if (data && data.response.results.length === 0) {
    return (
      <h1 className="text-center text-indigo-600 text-xl">
        Opp's no data found
      </h1>
    );
  }

  return (
    <>
      {data && (
        <NewsWrapper>
          {data.response.results.map((item) => (
            <NewsItem
              key={item.id}
              url={item.webUrl}
              title={item.webTitle}
              createdAt={item.webPublicationDate}
            />
          ))}
        </NewsWrapper>
      )}
    </>
  );
};

export default GuardianPage;

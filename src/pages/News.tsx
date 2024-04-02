import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Error from "@/components/Error";
import NewsItem from "@/components/NewsItem";
import NewsWrapper from "@/components/NewsWrapper";

import { News } from "@/types";
import { getNews } from "@/util/http";
import { Spinner } from "@/components/Spinner";
import { useStateContext } from "@/context/provider";

const NewsPage = () => {
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

  const { data, isLoading, isError } = useQuery<News>({
    queryKey: ["news", { term, date, source, category }],
    queryFn: () => getNews({ date, search: term, source, category }),
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

  if (isError || data?.status === "error") {
    return <Error />;
  }

  if (data && data.articles.length === 0) {
    return (
      <h1 className="text-center text-indigo-600 text-xl">
        Opp's no data found
      </h1>
    );
  }

  return (
    <NewsWrapper>
      {data &&
        data.articles.map((article) => (
          <NewsItem
            url={article.url}
            key={article.title}
            title={article.title}
            author={article.author}
            img={article.urlToImage}
            content={article.content}
            createdAt={article.publishedAt}
            description={article.description}
          />
        ))}
    </NewsWrapper>
  );
};

export default NewsPage;

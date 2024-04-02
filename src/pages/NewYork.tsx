import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { NewYork } from "@/types";
import { getNewWorkData } from "@/util/http";
import { Spinner } from "@/components/Spinner";
import { useStateContext } from "@/context/provider";

import Error from "@/components/Error";
import NewsItem from "@/components/NewsItem";
import NewsWrapper from "@/components/NewsWrapper";

const NewYorkPage = () => {
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

  const { data, isLoading, isError } = useQuery<NewYork>({
    queryKey: ["new-yourk", { term, date, category, source }],
    queryFn: () => getNewWorkData({ search: term, date, category, source }),
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

  if (data && data.response.docs.length === 0) {
    return (
      <h1 className="text-center text-indigo-600 text-xl">
        Opp's no data found
      </h1>
    );
  }

  if (data) {
    const { docs } = data.response;

    return (
      <NewsWrapper>
        {docs.map((doc) => (
          <NewsItem
            url={doc.web_url}
            key={doc.abstract}
            title={doc.abstract}
            createdAt={doc.pub_date}
          />
        ))}
      </NewsWrapper>
    );
  }
};

export default NewYorkPage;

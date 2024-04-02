import URI from "urijs";

type GetDataProps = {
  search: string | null;
  date: string | null;
  source: string | null;
  category: string | null;
};

export async function getData({
  search,
  date,
  category,
  source,
}: GetDataProps) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const base = `https://content.guardianapis.com/search?api-key=${apiKey}&page-size=20`;
  let uri = URI(base);

  if (search) {
    uri = uri.addQuery("q", search);
  }

  if (date) {
    uri = uri.addQuery("from-date", date);
  }

  if (source) {
    uri = uri.addQuery("source", source);
  }

  if (category) {
    uri = uri.addQuery("category", category);
  }

  const res = await fetch(uri.toString());
  const data = await res.json();
  return data;
}

export const getNews = async ({
  date,
  search,
  source,
  category,
}: GetDataProps) => {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  let term = "sport";

  if (search) term = search;

  const api = `https://newsapi.org/v2/top-headlines?q=${term}&apiKey=${apiKey}`;
  let uri = URI(api);

  if (date) {
    uri = uri.addQuery("from", date);
  }

  if (source) {
    uri = uri.addQuery("country", source);
  }

  if (category) {
    uri = uri.addQuery("category", category);
  }

  const res = await fetch(uri.toString());
  const data = await res.json();
  return data;
};

export const getNewWorkData = async ({
  date,
  search,
  category,
}: GetDataProps) => {
  const apiKey = import.meta.env.VITE_NEW_York_API_KEY;
  const api = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}`;

  let uri = URI(api);

  if (date) {
    uri = uri.addQuery("begin_date", date);
  }

  if (category) {
    uri = uri.addQuery("fq", category);
  }

  if (search) {
    uri = uri.addQuery("q", search);
  }

  const res = await fetch(uri.toString());
  const data = await res.json();
  return data;
};

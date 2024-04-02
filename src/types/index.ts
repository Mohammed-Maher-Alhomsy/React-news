export type GuardianResult = {
  id: string;
  type: string;
  webUrl: string;
  apiUrl: string;
  isHosted: false;
  webTitle: string;
  pillarId: string;
  sectionId: string;
  pillarName: string;
  sectionName: string;
  webPublicationDate: string;
};

export type Guardian = {
  response: {
    pages: number;
    total: number;
    status: string;
    orderBy: string;
    userTier: string;
    pageSize: number;
    startIndex: number;
    currentPage: number;
    results: GuardianResult[];
  };
};

type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type News = {
  status: string;
  totalResults: number;
  articles: Article[];
};

type Meta = {
  time: number;
  offset: number;
  hits: number;
};

type Doc = {
  abstract: string;
  pub_date: string;
  section_name: string;
  web_url: string;
  source: string;
};

export type NewYork = {
  copyright: string;
  ststua: string;
  response: {
    docs: Doc[];
    meta: Meta;
  };
};

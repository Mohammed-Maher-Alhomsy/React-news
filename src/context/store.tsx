import { type ReactNode, createContext, useState } from "react";

type AppCtx = {
  term: string | null;
  date: string | null;
  source: string | null;
  category: string | null;

  updateTerm: (value: string | null) => void;
  updateDate: (value: string | null) => void;
  updateSource: (value: string | null) => void;
  updateCategory: (value: string | null) => void;
};

export const AppStore = createContext<AppCtx | null>(null);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [term, setTerm] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [source, setSource] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const updateTerm = (value: string | null) => setTerm(value);

  const updateDate = (value: string | null) => setDate(value);
  const updateSource = (value: string | null) => setSource(value);
  const updateCategory = (value: string | null) => setCategory(value);

  return (
    <AppStore.Provider
      value={{
        date,
        category,
        source,
        term,
        updateTerm,
        updateDate,
        updateSource,
        updateCategory,
      }}
    >
      {children}
    </AppStore.Provider>
  );
};

export default AppContextProvider;

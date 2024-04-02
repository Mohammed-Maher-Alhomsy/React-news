import { useEffect, useMemo, useRef } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "@/components/Header";
import FilterBy from "@/components/FilterBy";
import { Input } from "@/components/ui/input";
import { category, source } from "@/constants";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/DatePicker";

import { useStateContext } from "@/context/provider";

const Layout = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { updateTerm, term } = useStateContext();
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const params = useMemo(() => new URLSearchParams(search), [search]);

  const searchHandler = () => {
    if (
      inputSearchRef.current &&
      inputSearchRef.current.value.trim().length > 0
    ) {
      params.set("search", inputSearchRef.current.value);
    } else {
      updateTerm(null);
      params.delete("search");
    }
    navigate({ search: params.toString() });
  };

  useEffect(() => {
    const termParams = params.get("search");

    updateTerm(termParams);
    navigate({ search: params.toString() });
  }, [params, navigate]);

  return (
    <>
      <Header />

      <main>
        <div className="mb-4 flex flex-col md:flex-row justify-evenly gap-3 px-7">
          <div className="flex gap-3">
            <Input
              defaultValue={term ?? undefined}
              ref={inputSearchRef}
              placeholder="Search ..."
            />

            <Button
              onClick={searchHandler}
              className="bg-indigo-500 hover:text-indigo-500 hover:bg-white"
            >
              Search
            </Button>
          </div>

          <FilterBy list={source} type="source" />
          <FilterBy list={category} type="category" />
          <DatePicker />
        </div>

        <Outlet />
      </main>
    </>
  );
};

export default Layout;

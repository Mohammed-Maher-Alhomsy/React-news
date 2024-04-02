import { ReactNode } from "react";

const NewsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <ul className="md:flex gap-4 flex-wrap justify-center">{children}</ul>
    </section>
  );
};

export default NewsWrapper;

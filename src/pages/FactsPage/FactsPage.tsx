import { useEffect, useState } from "react";
import { IFact } from "../../types/FactsTypes";
import { getFacts } from "../../services/Facts/api";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { FactCard } from "../../components/FactCard";
import { Loader } from "../../components/Loader";

export const FactsPage = () => {
  const [facts, setFacts] = useState<IFact[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (fetching) {
      getFacts(currentPage)
        .then((response) => {
          setFacts([...facts, ...response.items]);
          setTotalCount(response.totalCount);
          setCurrentPage(currentPage + 1);
        })
        .finally(() => {
          setIsLoading(false);
          setFetching(false);
        });
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      facts.length < totalCount
    ) {
      setFetching(true);
    }
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex justify-between items-start flex-wrap">
          {facts?.map((fact) => (
            <FactCard fact={fact} key={fact.factId} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

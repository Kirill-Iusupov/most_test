import { useEffect, useState } from "react";
import { IComb } from "../../types/CombinationsTypes";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { CombinationsCard } from "../../components/CombinationCard";
import { getCombinations } from "../../services/Combinations/api";
import { Loader } from "../../components/Loader";

export const CombinationsPage = () => {
  const [combinations, setCombinations] = useState<IComb[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (fetching) {
      getCombinations(currentPage)
        .then((response) => {
          setCombinations([...combinations, ...response.items]);
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
      combinations.length < totalCount
    ) {
      setFetching(true);
    }
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-between items-start flex-wrap">
            {combinations?.map((combination) => (
              <CombinationsCard
                item={combination}
                key={combination.combinationId}
              />
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
};

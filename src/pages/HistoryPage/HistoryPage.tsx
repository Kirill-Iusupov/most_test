import { useState, useEffect } from "react";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { IDate } from "../../types/HistoryTypes";
import { getHistory } from "../../services/History/api";
import { HistoryCard } from "../../components/HistoryCard/HistoryCard";

export const HistoryPage = () => {
  const [dates, setDates] = useState<IDate[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (fetching) {
      getHistory(currentPage)
        .then((response) => {
          setDates([...dates, ...response.items]);
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
      dates.length < totalCount
    ) {
      setFetching(true);
    }
  };

  return (
    <Wrapper>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div className="flex justify-between items-start flex-wrap">
            {dates?.map((date) => (
              <HistoryCard item={date} key={date.mileStoneId} />
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
};

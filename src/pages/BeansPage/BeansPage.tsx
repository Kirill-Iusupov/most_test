import { useEffect, useState } from "react";
import { getBeans } from "../../services/Beans/api";
import { IBean } from "../../types/BeansTypes";
import { BeanCard } from "../../components/BeanCard";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { Loader } from "../../components/Loader";

export const BeansPage = () => {
  const [beans, setBeans] = useState<IBean[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(1);
  const [fetching, setFetching] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (fetching) {
      getBeans(currentPage)
        .then((response) => {
          setBeans([...beans, ...response.items]);
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
      beans.length < totalCount
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
            {beans?.map((bean) => (
              <BeanCard item={bean} key={bean.beanId} />
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
};

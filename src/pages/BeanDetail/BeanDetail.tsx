import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBeanById } from "../../services/Beans/api";
import { IBean } from "../../types/BeansTypes";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { Loader } from "../../components/Loader";

export const BeanDetail = () => {
  const { id } = useParams<string>();

  const [detail, setDetail] = useState<IBean>();
  const [isLoading, setIsLoading] = useState(true);

  console.log(detail);

  useEffect(() => {
    try {
      id &&
        getBeanById(id)
          .then(setDetail)
          .finally(() => setIsLoading(false));
    } catch (error) {
      console.error("Error fetching bean data:", error);
      setIsLoading(false);
    }
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex">
            <img
              src={detail?.imageUrl}
              alt={detail?.description}
              className="w-1/2"
            />
            <div>
              <h2>Flavor: {detail?.flavorName}</h2>
              <p>
                Description:
                {detail?.description}
              </p>
              <ul>
                Ingridiens:
                {detail?.ingredients.map((ingridient, idx) => (
                  <li key={idx}>{ingridient}</li>
                ))}
              </ul>
              <p>Sugar Free: {detail?.sugarFree ? "Yes" : "No"}</p>
              <p>Gluten Free: {detail?.glutenFree ? "Yes" : "No"}</p>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};

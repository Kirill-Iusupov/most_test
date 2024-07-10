import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
          <div className="w-[900px] bg-[white] text-red-400 border-2 border-red-200 rounded-[20px] p-[24px] m-auto my-[16px]">
            <div className="flex flex-col items-center justify-center">
              <p className="text-5xl font-bold text-[red]">
                {detail?.flavorName}
              </p>
              <p className="my-[16px]">{detail?.description}</p>
              <div className="w-[500px] h-[500px] flex items-center justify-center border-2 border-[red] rounded-[50%]">
                <img src={detail?.imageUrl} alt={detail?.description} />
              </div>
            </div>

            <div>
              Ingridiens:
              <br />
              {detail?.ingredients.join(", ")}
            </div>
            <div className="flex items-center justify-around">
              <p>Kosher: {detail?.kosher ? "Yes" : "No"}</p>
              <p>Sugar Free: {detail?.sugarFree ? "Yes" : "No"}</p>
              <p>Gluten Free: {detail?.glutenFree ? "Yes" : "No"}</p>
            </div>
            <Link to="/" className="hover:underline text-[18px] text-red-700">
              Back
            </Link>
          </div>
        </>
      )}
    </Wrapper>
  );
};

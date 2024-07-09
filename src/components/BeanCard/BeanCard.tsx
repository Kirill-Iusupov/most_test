import { Link } from "react-router-dom";
import { IBean } from "../../types/BeansTypes";

type BeanCard = {
  item: IBean;
};

export const BeanCard: React.FC<BeanCard> = ({ item }) => {
  return (
    <div className="w-[350px] h-[450px] p-[25px] text-center flex flex-col items-center justify-around my-[24px] hover:bg-[white] hover:border-[3px] hover:border-red-200 hover:rounded-[20px]">
      <p className="">{item.flavorName}</p>

      <img src={item.imageUrl} alt={item.description} />

      <span>{item.description}</span>
      <button>
        <Link to={`/bean/${item.beanId}`}>More details</Link>
      </button>
    </div>
  );
};

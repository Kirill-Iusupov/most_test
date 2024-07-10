import { Link } from "react-router-dom";
import { IBean } from "../../types/BeansTypes";

type BeanCard = {
  item: IBean;
};

export const BeanCard: React.FC<BeanCard> = ({ item }) => {
  return (
    <div className="box-border w-[350px] h-[450px] p-[8px] text-center flex flex-col items-center justify-around my-[24px] bg-white border-[1px] border-red-400 rounded-[20px]">
      <Link
        to={`/bean/${item.beanId}`}
        className="text-red-600 text-[22px] hover:text-[red] hover:text-[24px] hover:underline transition-all duration-75"
      >
        {item.flavorName}
      </Link>

      <img src={item.imageUrl} alt={item.description} className="w-[300px]" />
      <span className="text-[13px] text-red-400">{item.description}</span>
    </div>
  );
};

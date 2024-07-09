import { IComb } from "../../types/CombinationsTypes";

interface CombinationCardProps {
  item: IComb;
}

export const CombinationsCard: React.FC<CombinationCardProps> = ({ item }) => {
  return (
    <div className="w-[350px] my-[16px] text-center p-[16px] border-[2px] border-red-200 rounded-[20px]">
      <p>
        {item.combinationId}. {item.name}
      </p>
      <span>{item.tag.join(" ")}</span>
    </div>
  );
};

import { IComb } from "../../types/CombinationsTypes";

interface CombinationCardProps {
  item: IComb;
}

export const CombinationsCard: React.FC<CombinationCardProps> = ({ item }) => {
  return (
    <div className="w-[350px] h-[120px] text-red-400 my-[16px] p-[8px] text-center border-[1px] bg-white border-red-400 rounded-[20px] box-border">
      <p className="text-[red] border-b-2 border-red-300 mb-[8px]">
        {item.combinationId}. {item.name}
      </p>
      <span>{item.tag.join(" ")}</span>
    </div>
  );
};

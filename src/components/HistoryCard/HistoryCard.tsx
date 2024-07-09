import { IDate } from "../../types/HistoryTypes";

interface HistoryCardProps {
  item: IDate;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({ item }) => {
  console.log(item);

  return (
    <div className="w-[350px] my-[16px] text-center p-[16px] border-[2px] border-red-200 rounded-[20px]">
      <p>{item.year}</p>
      <span>{item.description}</span>
    </div>
  );
};

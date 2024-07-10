import { IDate } from "../../types/HistoryTypes";

interface HistoryCardProps {
  item: IDate;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({ item }) => {
  console.log(item);

  return (
    <div className="w-[350px] h-[180px] text-red-500 my-[16px] p-[8px] text-center border-[1px] bg-white border-red-400 rounded-[20px] box-border">
      <p className="text-[red] border-b-2 border-red-300 mb-[8px]">
        {item.year}
      </p>
      <span className="text-[14px]">{item.description}</span>
    </div>
  );
};

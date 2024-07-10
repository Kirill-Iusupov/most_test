import { IFact } from "../../types/FactsTypes";

interface FactCard {
  fact: IFact;
}

export const FactCard: React.FC<FactCard> = ({ fact }) => {
  return (
    <div className="w-[350px] text-red-500 h-[180px] my-[16px] p-[8px] text-center bg-white border-[1px] border-red-400 rounded-[20px] box-border">
      <p className="text-[red] border-b-2 border-red-300 mb-[8px]">
        {fact.factId}. {fact.title}
      </p>
      <span className="text-[14px]">{fact.description}</span>
    </div>
  );
};

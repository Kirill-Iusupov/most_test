import { IFact } from "../../types/FactsTypes";

interface FactCard {
  fact: IFact;
}

export const FactCard: React.FC<FactCard> = ({ fact }) => {
  return (
    <div className="w-[350px] h-[180px] my-[16px] p-[8px] text-center hover:border-[1px] hover:border-red-400 hover:rounded-[20px] box-border">
      <p className="text-red-500">
        {fact.factId}. {fact.title}
      </p>
      <span className="text-[14px]">{fact.description}</span>
    </div>
  );
};

import { IFact } from "../../types/FactsTypes";

interface FactCard {
  fact: IFact;
}

export const FactCard: React.FC<FactCard> = ({ fact }) => {
  return (
    <div className="w-[350px] my-[16px] text-center p-[16px] border-[2px] border-red-200 rounded-[20px]">
      <p>
        {fact.factId}. {fact.title}
      </p>
      <span>{fact.description}</span>
    </div>
  );
};

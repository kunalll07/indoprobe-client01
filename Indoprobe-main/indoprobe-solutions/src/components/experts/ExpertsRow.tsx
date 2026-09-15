import { experts } from "@/data/experts";
import { ExpertCard } from "./ExpertCard";

export function ExpertsRow() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
      {experts.map((expert, index) => (
        <ExpertCard key={expert.slug} expert={expert} index={index} />
      ))}
    </div>
  );
}

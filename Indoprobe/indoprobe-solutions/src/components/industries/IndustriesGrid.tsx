import { industries } from "@/data/industries";
import { IndustryCard } from "./IndustryCard";

export function IndustriesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry, index) => {
        const Icon = industry.icon;
        return (
          <IndustryCard
            key={industry.slug}
            icon={<Icon className="h-5 w-5" strokeWidth={1.75} />}
            title={industry.title}
            description={industry.description}
            index={index}
          />
        );
      })}
    </div>
  );
}

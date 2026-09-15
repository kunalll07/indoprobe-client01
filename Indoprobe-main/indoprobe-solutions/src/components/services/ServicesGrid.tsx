import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <ServiceCard
            key={service.slug}
            icon={<Icon className="h-5 w-5" strokeWidth={1.75} />}
            title={service.title}
            description={service.description}
            items={service.items}
            index={index}
          />
        );
      })}
    </div>
  );
}

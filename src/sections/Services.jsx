import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((serivce) => (
        <ServiceCard key={serivce.label} {...serivce} />
      ))}
    </section>
  );
}

export default Services;

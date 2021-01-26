import { serviceData, service_url } from "./services_data";
import Showcase from "../../components/showcase/Showcase";

const Services = () => {
  let categories = [
    "Web Design & Development",
    "Mobile & App Development",
    "Digital Marketing",
    "Content & Copy Writing",
  ];

  return (
    <section>
      <div>
        {categories.map((cat, index) => (
          <Showcase
            key={cat}
            image={service_url[index]}
            heading={cat}
            desc={serviceData[cat]}
            reverse={index % 2 === 0 ? true : false}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

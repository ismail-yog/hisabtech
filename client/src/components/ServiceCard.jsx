import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="block p-8 bg-white border border-gray-100 rounded-2xl hover-float group h-full"
    >
      <div className="w-14 h-14 bg-primary/5 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-400">
        <Icon size={26} />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-6">{service.shortDesc}</p>
      
      <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
        Learn More <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
      </span>
    </Link>
  );
};

export default ServiceCard;

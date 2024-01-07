import { Link } from "react-router-dom";
import HeartButton from "../Button/HeartButton";

const Card = ({ place }) => {
  console.log(place)
  return (
    <Link
      to={`/place/${place._id}`}
      className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          ">
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={place.image}
            alt="Place"
          />
          <div
            className="
            absolute
            top-3
            right-3
          ">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">{place.location}</div>
        <div className="font-normal text-neutral-900">
         {place.title}
        </div>
        <div className="font-normal text-neutral-900">
        Expertise: {place.category}
        </div>
        <div className="font-normal text-neutral-900">
          Experience Year: {place.guests}
        </div>
        
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold text-neutral-700">Consultation Fee: {place.price}</div>
          <div className="font-light">Taka</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const EducationCard = ({ title, college, location, details, image }) => {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody
        className="
          relative
          group/card
          h-100
          w-90
          rounded-xl
        "
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-gray-800 w-full"
        >
          {title}
        </CardItem>

        <CardItem as="p" translateZ="60" className="text-sm mt-5 text-gray-600">
          <span className="font-semibold text-gray-800">{college}</span>
          <br />
          {location}
        </CardItem>

        {image && (
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={image}
              width="1000"
              className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={title}
            />
          </CardItem>
        )}

        <CardItem
          translateZ="20"
          className="px-4 py-2 mt-5 text-base font-normal text-gray-700"
        >
          {details}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default EducationCard;

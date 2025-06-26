import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeatureImages } from "@/store/common-slice";

function MiddleSide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { featureImageList } = useSelector((state) => state.commonFeature);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="relative w-[700px] h-[430px] overflow-hidden">
      {featureImageList && featureImageList.length > 0
        ? featureImageList.map((slide, index) => (
            <img
              src={slide?.image}
              key={index}
              className={`${
                index === currentSlide ? "opacity-100" : "opacity-0"
              } absolute top-0 left-0 w-[50fr] md:w-full md:h-full object-fit transition-opacity duration-1000`}
            />
          ))
        : null}
      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          setCurrentSlide(
            (prevSlide) =>
              (prevSlide - 1 + featureImageList.length) % featureImageList.length
          )
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() =>
          setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length)
        }
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
      >
        <ChevronRightIcon className="w-4 h-4" />
      </Button>
    </div>
  );
}

export default MiddleSide;
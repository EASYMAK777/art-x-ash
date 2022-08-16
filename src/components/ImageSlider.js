import { SliderData } from "./SliderData";

const ImageSlider = () => {
  return (
    <div>
      {SliderData.map((slide, index) => {
        return (
          <img src={SliderData.image} alt="generic" height={200} width={200} />
        );
      })}
    </div>
  );
};

export default ImageSlider;

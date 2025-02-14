import ActiveBubble from "../card-picture/ActiveBubble";
import CarouselCard from "../card-picture/CarouselCard";
import Counter from "../card-picture/Counter";
import InteractiveTitle from "../card-picture/InteractiveTitle";

export default function Home() {
  return (
    <div className="container-home">
      <InteractiveTitle />
      <CarouselCard />
      {/* <Counter /> */}
      <ActiveBubble />
    </div>
  );
}

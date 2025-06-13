import { cards } from "@/data/helperNote.data";
import HelperNote from "../components/HelperNote";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-6 justify-center items-center">
      {cards.map((card, index) => (
        <HelperNote
          key={index}
          indexCard={index + 1}
          code={card.code}
          title={card.title}
          description={card.description}
          uploadDate={card.uploadDate}
          updatedDate={card.updatedDate}
          state={card.state}
        />
      ))}
    </div>
  );
}

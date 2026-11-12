import { talents } from "@/data/talents";
import TalentCard from "./TalentCard";

export default function TalentLibrary() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {talents.map((talent, i) => (
        <TalentCard key={talent.slug} talent={talent} index={i} />
      ))}
    </div>
  );
}

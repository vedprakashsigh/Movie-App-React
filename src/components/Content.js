import { InfoCard } from "./InfoCard";
import { Pagenation } from "./Pagenation";

export const Content = () => {
  return (
    <main className="main-content">
      <section className="genre"></section>
      <InfoCard />
      <Pagenation />
    </main>
  );
};

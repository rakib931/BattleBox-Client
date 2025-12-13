import Contests from "../../components/Home/Contests";
import ContestBanner from "./ContestBanner";
import WinnersSection from "./WinersSection";
const Home = () => {
  return (
    <div>
      {/* Banner section  */}
      <ContestBanner />
      <Contests />
      {/* winers section */}
      <WinnersSection />
    </div>
  );
};

export default Home;

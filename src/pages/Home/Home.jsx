import Contests from "../../components/Home/Contests";
import ContestBanner from "./ContestBanner";
import Reviews from "./Reviews";
import WinnersSection from "./Winners/WinersSection";
const Home = () => {
  return (
    <div>
      {/* Banner section  */}
      <ContestBanner />
      {/* Popular section  */}
      <Contests />
      {/* winers section */}
      <WinnersSection />
      {/* Review section  */}
      <Reviews />
    </div>
  );
};

export default Home;

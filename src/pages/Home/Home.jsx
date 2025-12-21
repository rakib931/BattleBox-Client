import Contests from "../../components/Home/Contests";
import ContestBanner from "./ContestBanner";
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
    </div>
  );
};

export default Home;

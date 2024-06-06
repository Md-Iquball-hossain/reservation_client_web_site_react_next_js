import Header from "./pages/Header/page";
import Explore from "@/components/Room&Suits/page";
import WelcomeHotel from "@/components/Home/WelcomeHotel";
import BestRooms from "@/components/Home/BestRooms";
import ServiceTools from "@/components/Home/ServiceTools";
import Review from "@/components/Home/Review";

export default function Home() {
  return (
    <main>
      <div className="text-center text-base py-1 bg-[#F4F4F3] text-slate-600">
        <p>
          ‘Appy stays – stay any 5 nights, get 1 free night on App bookings.{" "}
          <span className="underline font-semibold">Learn more</span>
        </p>
      </div>
      <div className="text-black">
        <Header />
        <WelcomeHotel />
        <BestRooms />
        <ServiceTools />
        {/* <RecentSearch /> */}
        {/* <Trending /> */}
        <Explore />
        <Review />
      </div>
    </main>
  );
}

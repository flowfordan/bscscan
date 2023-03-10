import { AppHeader, ItemData } from "widgets";
import "./ui.scss";

export const Home = () => {
  return (
    <div className="homePage">
      <AppHeader />
      <ItemData />
    </div>
  );
};

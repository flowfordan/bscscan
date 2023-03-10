import { useEffect, useState } from "react";
import "./itemData.scss";

export const ItemData = () => {
  const [itemData, setItemData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //
  }, []);
  return (
    <div className="itemData">
      <div className="itemData__content">
        <div className="itemData__content__imgContainer">Image</div>
        <div className="itemData__content__dataContainer">
          <span>Name</span>
          <span>Data</span>
        </div>
      </div>
    </div>
  );
};

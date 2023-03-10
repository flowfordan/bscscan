import { useEffect, useState } from "react";
import "./itemData.scss";
import { ITrData, Property, trData } from "shared";
import Card from "@mui/material/Card";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const ItemData = () => {
  const [itemData, setItemData] = useState<ITrData | null>();
  const [isImgLoading, setImgLoading] = useState(false);
  useEffect(() => {
    setItemData(trData);
    setImgLoading(true);
  }, []);
  return (
    <div className="itemData">
      {itemData && (
        <div className="itemData__content">
          <Card className="itemData__content__imgContainerWrapper">
            <Card className="itemData__content__imgContainerWrapper__container">
              {isImgLoading && <div>Loading</div>}
              <img
                src={trData.image}
                alt="picture"
                onLoad={() => setImgLoading(false)}
              />
            </Card>
          </Card>

          <div className="itemData__content__dataContainer">
            <Card className="itemData__content__dataContainer__title">
              {itemData.name}
            </Card>
            <Card>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="asset-desc"
                  id="asset-desc"
                >
                  <Typography>Description:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {itemData.description === ""
                      ? "No description provided"
                      : itemData.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="asset-data"
                  id="asset-data"
                >
                  <Typography>Asset Data:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {itemData.attributes.map((a) => {
                    return (
                      <Property
                        name={a.trait_type}
                        value={a.value}
                        key={a.trait_type}
                        valueType={
                          a.trait_type === "Owner Wallet"
                            ? "walletLink"
                            : a.trait_type === "Owner E-mail"
                            ? "email"
                            : "txt"
                        }
                      />
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

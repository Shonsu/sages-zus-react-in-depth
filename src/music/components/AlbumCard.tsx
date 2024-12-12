import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";

type Props = {};

const AlbumCard = (props: Props) => {
  return (
    <Card
    //   title="Advanced Card"
      subTitle="Card subtitle"
      header={
        <img src="https://placecats.com/millie/300/300" alt="album name" />
      }
      footer={<Button size="small">Details</Button>}
      //   className="md:w-25rem"
    >
      {/* <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p> */}
    </Card>
  );
};

export default AlbumCard;

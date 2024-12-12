import { Button } from "primereact/button";
import { Card } from "primereact/card";
import React from "react";
import { Album } from "../../common/model/Album";

type Props = {
  album: Album;
};

const AlbumCard = ({ album }: Props) => {
  return (
    <Card
      //   title="Advanced Card"
      subTitle={<div className="line-clamp-1">{album.name}</div>}
      header={<img src={album.images[0].url} alt="album name" />}
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

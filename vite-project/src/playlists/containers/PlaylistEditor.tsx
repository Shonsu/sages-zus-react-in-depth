import React, { type ChangeEvent } from "react";
import AppButton from "../../common/components/AppButton";

type Props = {};

const PlaylistEditor = (props: Props) => {
  const playlist = {
    id: 123,
    name: "Playlist 123",
    public: true,
    description: "Best playlist",
  };

  // const handleChange = (event: ??) => {
  // const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  // const handleChange = (event: ChangeEvent<HTMLInputElement >) => {
  // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {

  // const handleChange = (event: "left shoe") => {
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.target;
  // };
  
  const handler = (event: React.ChangeEvent<HTMLInputElement>): void => {};

  return (
    <div>
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>
          <input type="text" defaultValue={playlist.name} onChange={handler} />
        </div>

        <div className="grid gap-2">
          <label>
            <input type="checkbox" defaultChecked={playlist.public} />
            Public
          </label>
        </div>

        <div className="grid gap-2">
          <label>Description</label>
          <textarea defaultValue={playlist.description}></textarea>
        </div>

        <div className="flex justify-between">
          <AppButton>Save</AppButton>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEditor;

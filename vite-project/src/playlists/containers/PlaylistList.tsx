import React from 'react'

type Props = {}

const playlists = [{
  id: 123,
  name: "Playlist 123",
  public: true,
  description: "Awesome playlist",
},{
  id: 234,
  name: "Playlist 234",
  public: false,
  description: "Best playlist",
},{
  id: 345,
  name: "Playlist 345",
  public: true,
  description: "Cool playlist",
}];


const PlaylistList = (props: Props) => {
  return (
    <div>
      
      {/* .divide-y.divide-slate-400.divide-solid>div*3.px-2.py-5{$. Playlist $$$} */}
      <div className="divide-y divide-slate-400 divide-solid">
        <div className="px-2 py-5">1. Playlist 001</div>
        <div className="px-2 py-5">2. Playlist 002</div>
        <div className="px-2 py-5">3. Playlist 003</div>
      </div>

    </div>
  )
}

export default PlaylistList
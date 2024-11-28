import React from 'react'
import PlaylistList from '../containers/PlaylistList'
import PlaylistDetails from '../containers/PlaylistDetails'
import PlaylistEditor from '../containers/PlaylistEditor'

type Props = {}

const PlaylistsView = (props: Props) => {
  return (
    <div>

        {/* .grid.grid-cols-2.gap-5>div*2   */} {/* Ctrl+Space ..select.. Enter */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <PlaylistList/>
          </div>
          <div>
            <PlaylistDetails/>
            <PlaylistEditor/>
          </div>
        </div>  


    </div>
  )
}

export default PlaylistsView
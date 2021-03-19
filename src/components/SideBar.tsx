import { useEffect, useState } from 'react';
import { GenreResponseProps } from '../App'
import { Button } from './Button'

import '../styles/sidebar.scss';


interface SideBarProps {
  genres: GenreResponseProps[]
  currentItemClicked: (id: number) => void
  currentGenreId: number

}




export function SideBar({ genres, currentItemClicked, currentGenreId }: SideBarProps) {


  function handleClickButton(id: number) {
    currentItemClicked(id)
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={currentGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
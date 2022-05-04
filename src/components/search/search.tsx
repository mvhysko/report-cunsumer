import React from 'react'
import cl from './search.css';

export type SearchProps = React.HTMLProps<HTMLInputElement>;

export const Search = React.forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  return (
    <input
      ref={ref}
      placeholder='search...'
      className={cl.searchInput}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
      {...props}
    />
  )
})

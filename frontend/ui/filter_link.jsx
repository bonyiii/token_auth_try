const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  if (currentFilter == filter) {
    return <span>{children}</span>
  } else {
    return(
      <a href="#"
         onClick={ e =>{
             e.preventDefault()
             store.dispatch({
               type: 'SET_VISIBILITY_FILTER',
               filter
             })
           }}
      >
        {children}
      </a>
    )
  }
}

export default FilterLink

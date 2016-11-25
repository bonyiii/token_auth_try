import FilterLink from '../components/filter_link.jsx'

const Footer = ({
  visibilityFilter,
  onFilterClick
}) => (
  <p>
    Show:
    { ' ' }
    <FilterLink
        filter="SHOW_ALL"
    >
      All
    </FilterLink>
    { ' ' }
    <FilterLink
        filter="SHOW_ACTIVE"
    >
      Active
    </FilterLink>
    { ' ' }
    <FilterLink
        filter="SHOW_COMPLETED"
    >
      Completed
    </FilterLink>
  </p>
)
export default Footer

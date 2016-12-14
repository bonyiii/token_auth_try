import FilterLink from '../components/filter_link.jsx'

const Footer = ({
  store
}) => (
  <p>
    Show:
    { ' ' }
    <FilterLink
        filter="all"
    >
      All
    </FilterLink>
    { ' ' }
    <FilterLink
        filter="/pages/show/active"
    >
      Active
    </FilterLink>
    { ' ' }
    <FilterLink
        filter="/pages/show/completed"
    >
      Completed
    </FilterLink>
  </p>
)
export default Footer

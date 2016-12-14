import { Link } from 'react-router'

const FilterLink = ({ filter, children }) => (
  <Link
      to={'/pages/show/' + (filter === 'all' ? '' : filter)}
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
  >
    {children}
  </Link>
)

export default FilterLink

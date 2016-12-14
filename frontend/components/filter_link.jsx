import { Link } from 'react-router'

const FilterLink = ({ filter, children }) => (
  <Link
  to={filter === 'all' ? '/pages/show/' : '/pages/show/' + filter}
  activeStyle={{
    textDecoration: 'none',
    color: 'black'
  }}
  >
  {children}
  </Link>
)

export default FilterLink

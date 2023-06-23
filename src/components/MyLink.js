import { Link, useMatch } from "react-router-dom";

function MyLink({children, to, ...props}) {
  const match = useMatch(to);

  return (
    <Link
      {...props}
      to={to}
      className={match ? 'menu__item menu__item-active' : 'menu__item'}
    >
      {children}
    </Link>
  )
}

export default MyLink;
import MyLink from './MyLink'

function Menu() {
  return (
    <nav className='menu'>
      <MyLink to="/">Главная</MyLink>
      <MyLink to="/drift">Дрифт-такси</MyLink>
      <MyLink to="/timeattack">Time Attack</MyLink>
      <MyLink to="/forza">Forza Karting</MyLink>
    </nav>
  );
}

export default Menu;
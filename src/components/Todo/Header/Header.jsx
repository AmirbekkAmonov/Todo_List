import './header2.scss'

function Header() {
  return (
    <header>
        <div className='menu'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <input type="text" placeholder='search...' />
        <div className='profile'>
          <img src="night.png" alt="" />
        </div>
    </header>
  )
}

export default Header
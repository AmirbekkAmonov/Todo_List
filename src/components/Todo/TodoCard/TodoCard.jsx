import './TodoCard.scss'

const TodoCard = () => {
  return (
      <div className='card'>
        <div className='profile'>
          <img src="profile.png" alt="" />
          <b><strong>F.I:</strong> Ali Murodov</b>
        </div>
        <div className='text'>
          <p><strong>Email:</strong> <a href="mailto:5U8oU@example.com">5U8oU@example.com</a></p>
          <p><strong>Tel:</strong> <a href="tel:+998901234567">998901234567</a></p>
          <p><strong>Tavallud:</strong> 12.12.2000</p>
          <p><strong>Jisn:</strong> Erkak</p>
          <p><strong>Hobbi:</strong> Futbol...</p>
          <p><strong>Mamlakat:</strong> Toshkent</p>
          <p><strong>Comment:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          <div className='buttons'>
            <button className='edit'>Edit</button>
            <button className='delete'>Delete</button>
          </div>
        </div>
      </div>
  );
};

export default TodoCard;
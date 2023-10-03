import Empty from '../../assets/placeholder-img.jpeg';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Tooltip} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem({tool, removeItem, index}) {
  return (
    <div className='cart-item'>
      <img
        src={tool.thumbnail ? tool.thumbnail : Empty}
        alt='tool thumbnail'
        className='cart-item-thumbnail'
        loading='lazy'
      />
      <aside className='cart-item-details'>
        <p>{tool.name}</p>
        <p>${tool.price}</p>
      </aside>
      <Tooltip title='Remove'>
        <DeleteIcon color='#3C415C'
          className='cart-item-delete'
          onClick={() => removeItem(index)}
        />
      </Tooltip>
    </div>
  );
}

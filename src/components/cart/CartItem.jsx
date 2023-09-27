import Empty from '../../assets/placeholder-img.jpeg';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Tooltip} from '@mui/material';

export default function CartItem({tool, removeItem, index}) {
  return (
    <div className='cart-item'>
      <img
        src={tool.thumbnail ? tool.thumbnail : Empty}
        alt='tool thumbnail'
        className='cart-item-thumbnail'
      />
      <aside className='cart-item-details'>
        <p>{tool.name}</p>
        <p>{tool.price}</p>
      </aside>
      <Tooltip title='Remove'>
        <DeleteForeverIcon
          className='cart-item-delete'
          onClick={() => removeItem(index)}
        />
      </Tooltip>
    </div>
  );
}

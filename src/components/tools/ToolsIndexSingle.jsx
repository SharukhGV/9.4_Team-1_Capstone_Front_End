import {useNavigate} from 'react-router-dom';
export default function ToolsIndexSingle({tool, index}) {
  const navigate = useNavigate();
  return (
    <div
      className='tools-tool-view'
      onClick={() => navigate(`/tools/${tool.tool_id}`)}
    >
      <img src={tool.thumbnail} className='tool-thumbnail' />
      <aside>
        <p className='tools-tool-name'>{tool.name}</p>
        <p>{tool.description}</p>
      </aside>
      <p className='item-price'>
        <b>${tool.price.toFixed(2)}</b>
      </p>
    </div>
  );
}

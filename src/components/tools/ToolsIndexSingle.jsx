import {Link} from 'react-router-dom';
export default function ToolsIndexSingle({individualTool, index}) {
  return (
    <tbody>
      <tr>
        <td>{(index += 1)}</td>
        <td>
          <Link to={`/tools/${individualTool.tool_id}`}>
            {individualTool.name}
          </Link>
        </td>
        <td>{individualTool.price}</td>
      </tr>
    </tbody>
  );
}

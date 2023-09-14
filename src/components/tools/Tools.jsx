import ToolsCard from "./ToolsCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";

function Tools() {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/tools`)
      .then((response) => setTools(response.data))
      .catch((e) => console.error("catch", e));
  }, [API]);

  // console.log(tools)
  return (
    <Carousel>
      {tools.map((individualTool, index) => {
        return (
          <ToolsCard
            inKEY={individualTool.tool_id}
            name={individualTool.name_tools}
            description={individualTool.description}
            price={individualTool.price}
            quantity={individualTool.stock_quantity}
            condition={individualTool.item_condition}
            thumbnail={individualTool.thumbnail}
            userid={individualTool.user_id}
            index={index}
          />
        );
      })}
    </Carousel>
  );
}

export default Tools;
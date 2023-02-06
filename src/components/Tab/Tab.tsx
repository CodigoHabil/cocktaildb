import { useState } from "react";

const Tab = (props:any) => {
  const { list } = props;
  const [selected, setSelected] = useState(props.list[0].name);
  return (
  <div>
    {
      list.map((item:any) => {
        console.log(item)
        return <div>this is an item</div>
      })
    }
  </div>
  )
};

export default Tab;

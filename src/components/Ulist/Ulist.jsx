const ListItem = (props) => {
  return (
    <li>
      <input type="checkbox" name={props.value} id={props.value + "-id"} />
      <label htmlFor={props.value + "-id"}>props.value</label>
    </li>
  );
};

const Ulist = (props) => {
  const elements = props.list.map((item, index) => (
    <ListItem key={index} value={item} />
  ));
  return <ul>{elements}</ul>;
};

export default Ulist;

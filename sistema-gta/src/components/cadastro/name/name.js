import "./name.css";

const Name = (props) => {
  const { title } = props;
  return (
    <div className="dado">
      <h3>{title}</h3>
      <input type="text" />
    </div>
  );
};

export default Name;

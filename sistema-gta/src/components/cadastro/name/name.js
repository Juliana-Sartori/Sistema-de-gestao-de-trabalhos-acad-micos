import "./name.css";

const Name = (props) => {
    const { title, info } = props;
    return (
        <div className="dado">
            <h3>{title}</h3>
            <p>{info}</p>

        </div>);
};


export default Name;
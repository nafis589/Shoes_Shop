import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div className="cl">
      <h2 className="sidebar-title color-title">Couleur</h2>
      <div className="mlt2">
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name="test2" />
          <span className="checkmark all"></span>Tout
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Noir"
          name="test1"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Rouge"
          name="test1"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Vert"
          name="test1"
          color="green"
        />
        <label className="sidebar-label-container">
          <input
            type="radio"
            onChange={handleChange}
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ backgound: "white", border: "2px solid black" }}
          ></span>
          Blanc
        </label>
      </div>
    </div>
  );
};

export default Colors;

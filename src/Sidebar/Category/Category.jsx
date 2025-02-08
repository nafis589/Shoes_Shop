import Input from "../../components/Input";
import "./Category.css";

const Category = ({ handleChange }) => {
  return (
    <div className="div">
      <h2 className="sidebar-title">Category</h2>
      <div className="mlt">
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name="test" />
          <span className="checkmark"></span>Tout
        </label>
        <Input
          handleChange={handleChange}
          value="Sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Ballerine"
          title="Ballerine"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Sandales"
          title="Sandales"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Talon"
          title="Talon"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;

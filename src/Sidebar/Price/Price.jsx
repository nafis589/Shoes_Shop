import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Prix (FCFA)</h2>
      <div className="mlt1">
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" name="test2" />
          <span className="checkmark"></span>Tout
        </label>
        <Input
          handleChange={handleChange}
          value={30000}
          title="0 - 30,000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={60000}
          title="30,000 - 60,000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={90000}
          title="60,000 - 90,000"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={120000}
          title="Plus de 90,000"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;

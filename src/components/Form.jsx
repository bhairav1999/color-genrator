import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState({
    colorbox: "",
  });
  const handlChange = (e) => {
    const { name, value } = e.target;
    setColor({ ...color, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color.colorbox);
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          name="colorbox"
          type="color"
          value={color.colorbox}
          onChange={handlChange}
        />
        <input
          type="text"
          name="inputbox"
          value={color.colorbox}
          onChange={handlChange}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;

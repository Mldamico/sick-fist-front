import useForm from "../lib/useForm";
import Form from "./styles/Form";
export const CreateProduct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: "Nice",
    price: 23412,
    image: "",
    description: ""
  });
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <fieldset>
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" onChange={handleChange} />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="textarea"
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={clearForm}>
          + Add Product
        </button>
      </fieldset>
    </Form>
  );
};

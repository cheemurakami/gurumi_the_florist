export const addFlower = (flower) => {
  const {title, description, price, id} = flower;
  return {
    type: "ADD_FLOWER",
    title,
    description,
    price,
    id
  }

}
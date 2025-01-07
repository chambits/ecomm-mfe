import { faker } from "@faker-js/faker";

// let cartText = `<div>You have ${faker.datatype.number({
//   min: 1,
//   max: 5,
// })} items in your cart</div>`;

// document.querySelector("#div-cart").innerHTML = cartText;

const mount = (el) => {
  let cartText = `<div>You have ${faker.datatype.number({
    min: 1,
    max: 5,
  })} items in your cart</div>`;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

export { mount };

import { faker } from "@faker-js/faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    products += `<div>${faker.commerce.productName()}</div>`;
  }
  el.innerHTML = products;
};

// Context/Situation#1:
// We are running this code in isolation
// We are using the local index.html file
// Which defines a div with id="dev-products"
// We want to render our app into that div
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    mount(el);
  }
}

// Context/Situation#2:
// We are running this code in development or production
// through the container application
// No div with id="dev-products" is defined
// We need to export the mount function so that the container can call it
export { mount };

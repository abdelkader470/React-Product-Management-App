/**
 * Validates a product object based on specified criteria for each property.
 *
 * @param {Object} product - The product object to be validated.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.imageURL - The URL of the product image.
 * @param {string} product.price - The price of the product.
 * @returns {Object} - An object containing error messages for each property.
 *
 */
export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validUrl = /^(https|ftp|https):\/\/[^ "]+$/.test(product.imageURL);
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Title must be between 10 and 80 characters";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description = "Description must be between 10 and 900 characters";
  }
  if (!product.description.trim() || !validUrl) {
    errors.imageURL = "valid image url is required";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "valid price is required";
  }
  return errors;
};

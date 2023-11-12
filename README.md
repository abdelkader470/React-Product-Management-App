# React Product Management App

This repository contains a React application for managing products in an inventory. Users can add, edit, and delete products with features like color selection and category assignment.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-product-management-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-product-management-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Features

- **Add Product:** Click the "ADD PRODUCT" button to open a modal for adding a new product. Fill in the required information, select colors, and choose a category before submitting.

- **Edit Product:** Click on a product card to open an edit modal. Update the product details, select colors, and choose a new category before submitting.

- **Delete Product:** In the edit modal, there is an option to remove the product. A confirmation modal will appear before deletion.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Toast Notifications

## Folder Structure

- `components/`: React components used in the application.
- `data/`: Static data for categories, colors, and initial product list.
- `interfaces/`: TypeScript interfaces used for data structures.
- `types/`: TypeScript types used in the application.
- `validation/`: Input validation functions.
- `ui/`: Reusable UI components.

## Contributing

Contributions are welcome! Fork the repository, create a branch, commit your changes, and open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

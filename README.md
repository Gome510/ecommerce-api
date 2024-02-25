# Tasks

## Done

Retrieve All Products:

Endpoint: /api/products
Method: GET
Description: Retrieve a list of all products.
Response: An array of product objects with details such as id, name, price, category, etc.

Retrieve a Specific Product:

Endpoint: /api/products/:productId
Method: GET
Description: Retrieve details of a specific product. v 
Parameters: productId - The unique identifier of the product.
Response: Detailed information about the specified product.

## To-do
Add a New Product:

Endpoint: /api/products
Method: POST
Description: Add a new product to the store.
Request Body: JSON object containing product details (e.g., name, price, category).
Authentication: Admin privilege required.
Response: Details of the newly added product.

Update a Product:

Endpoint: /api/products/:productId
Method: PUT
Description: Update details of a specific product.
Parameters: productId - The unique identifier of the product.
Request Body: JSON object containing updated product details.
Authentication: Admin privilege required.
Response: Details of the updated product.
Delete a Product:

Endpoint: /api/products/:productId
Method: DELETE
Description: Remove a specific product from the store.
Parameters: productId - The unique identifier of the product.
Authentication: Admin privilege required.
Response: Success message indicating the deletion.
Input Validation:

Implement validation for input data to ensure that required fields are present and have valid formats.
Validate that the price is a positive number.
Ensure that the product name is unique.
Error Handling:

Return appropriate HTTP status codes for successful and unsuccessful requests.
Provide meaningful error messages in the response for failed requests.
Documentation:

Include clear documentation for each endpoint, specifying the expected request format, response format, and authentication requirements.
Testing:

Write unit tests to ensure that product management endpoints function correctly.
Test edge cases, such as updating or deleting non-existent products.

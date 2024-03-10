1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram

Ans. In the provided schema example, there is a relationship between the "Product" and "Product_Category" entities. Specifically, in the "Product" schema, there is a field named category_id that is defined as a reference to the "Product_Category" model.

This field category_id is of type id int which is the unique id of the category in product category table thus it holds unique reference to the record in product_category table

In summary, the relationship between "Product" and "Product_Category" entities is one where each product belongs to a specific category, and this association is established through the category_id field in the "Product" schema.

2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

Ans. We can ensure that each product in the product table has a valid category by firstly by establishing a relationship by providing a field named category_id in the Product model that is defined as a reference to the "Product_Category" model and Secondly by creating a validate function which checks if the categrory id mentioned is present in the Product_category model if it is then it is considered a valid id otherwise it returns an error

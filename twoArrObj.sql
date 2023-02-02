CREATE DATABASE favoritedishesDB;
CREATE TABLE cuisines(
    CuisineID int,
    CuisineName varchar(40),

)
CREATE TABLE IndianDishes(
    IndianDishID int,
    IndianDishName varchar(60)


)

CREATE TABLE MediterraneanDishes(
    MediterraneanDishID int,
    MediterraneanDishName varchar(60)
    

)

CREATE TABLE MyFavsCuisines(
    SELECT * FROM cuisines
)
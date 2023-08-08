INSERT INTO `happytummy`.`menu` (`MenuID`, `MenuName`, `MenuDescription`, `MenuImage`) VALUES ('1', 'Indian', 'Fresh Indian', 'https://tinyurl.com/mrxks9f6');
INSERT INTO `happytummy`.`menu` (`MenuID`, `MenuName`, `MenuDescription`, `MenuImage`) VALUES ('2', 'Chinese', 'diverse dishes', 'https://tinyurl.com/yfabhert');
INSERT INTO `happytummy`.`menu` (`MenuID`, `MenuName`, `MenuDescription`, `MenuImage`) VALUES ('3', 'Continental', 'All round cuisine', 'https://tinyurl.com/2p9dxes4');
INSERT INTO `happytummy`.`menu` (`MenuID`, `MenuName`, `MenuDescription`, `MenuImage`) VALUES ('4', 'Italian', 'Mouth watering dishes', 'https://tinyurl.com/n4rj565b');
INSERT INTO `happytummy`.`menu` (`MenuID`, `MenuName`, `MenuDescription`, `MenuImage`) VALUES ('5', 'Thai', 'spicy as hell', 'https://tinyurl.com/7rewhy2m');



INSERT INTO `happytummy`.`category` (`CategoryID`, `CategoryName`, `CategoryDescription`, `CategoryImage`) VALUES ('1', 'breakfast', 'lightweight', 'https://tinyurl.com/5exsaj2f');
INSERT INTO `happytummy`.`category` (`CategoryID`, `CategoryName`, `CategoryDescription`, `CategoryImage`) VALUES ('2', 'starters', 'mouthlicking', 'https://tinyurl.com/5exsaj2f');
INSERT INTO `happytummy`.`category` (`CategoryID`, `CategoryName`, `CategoryDescription`, `CategoryImage`) VALUES ('3', 'mainCourse', 'heritageindiandishes', 'https://tinyurl.com/5exsaj2f');
INSERT INTO `happytummy`.`category` (`CategoryID`, `CategoryName`, `CategoryDescription`, `CategoryImage`) VALUES ('4', 'beverages', 'appetizers', 'https://tinyurl.com/5exsaj2f');
INSERT INTO `happytummy`.`category` (`CategoryID`, `CategoryName`, `CategoryDescription`, `CategoryImage`) VALUES ('5', 'wines', 'signingofftheday', 'https://tinyurl.com/5exsaj2f');


INSERT INTO `happytummy`.`dish` (`DishID`, `DishName`, `DishDescription`, `DishPrice`, `DishImage`, `Nature`) VALUES ('1', 'chicken-biriyani', 'rice', '100', 'https://tinyurl.com/5exsaj2f', 'non-veg');
INSERT INTO `happytummy`.`dish` (`DishID`, `DishName`, `DishDescription`, `DishPrice`, `DishImage`, `Nature`) VALUES ('2', 'veg-biriyani', 'rice', '200', 'https://tinyurl.com/5exsaj2f', 'veg');
INSERT INTO `happytummy`.`dish` (`DishID`, `DishName`, `DishDescription`, `DishPrice`, `DishImage`, `Nature`) VALUES ('3', 'fish-tikka', 'fish', '300', 'https://tinyurl.com/5exsaj2f', 'non-veg');
INSERT INTO `happytummy`.`dish` (`DishID`, `DishName`, `DishDescription`, `DishPrice`, `DishImage`, `Nature`) VALUES ('4', 'noodles', 'chowmien', '150', 'https://tinyurl.com/5exsaj2f', 'veg');

INSERT INTO `happytummy`.`MenuCategory` (`MenuID`, `CategoryID`, `DisplayOrder`) VALUES ('1', '1', '25');
INSERT INTO `happytummy`.`MenuCategory` (`MenuID`, `CategoryID`, `DisplayOrder`) VALUES ('1', '2', '5');
INSERT INTO `happytummy`.`MenuCategory` (`MenuID`, `CategoryID`, `DisplayOrder`) VALUES ('2', '1', '10');
INSERT INTO `happytummy`.`MenuCategory` (`MenuID`, `CategoryID`, `DisplayOrder`) VALUES ('2', '2', '15');
INSERT INTO `happytummy`.`MenuCategory` (`MenuID`, `CategoryID`, `DisplayOrder`) VALUES ('2', '3', '20');


INSERT INTO `happytummy`.`CategoryDish` (`CategoryID`, `DishID`) VALUES ('1', '1');
INSERT INTO `happytummy`.`CategoryDish` (`CategoryID`, `DishID`) VALUES ('1', '2');
INSERT INTO `happytummy`.`CategoryDish` (`CategoryID`, `DishID`) VALUES ('1', '3');
INSERT INTO `happytummy`.`CategoryDish` (`CategoryID`, `DishID`) VALUES ('2', '2');
INSERT INTO `happytummy`.`CategoryDish` (`CategoryID`, `DishID`) VALUES ('2', '3');
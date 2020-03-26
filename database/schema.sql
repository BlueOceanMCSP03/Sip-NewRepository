DROP DATABASE IF EXISTS sip;
CREATE DATABASE sip;

USE sip;

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL UNIQUE, 
    user_location VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_image VARCHAR(255) NOT NULL
);

CREATE TABLE stores (
    store_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    store_name VARCHAR (255) NOT NULL,
    store_location VARCHAR (255)NOT NULL,
    store_longitude VARCHAR (255) NOT NULL,
    store_latitude VARCHAR (255) NOT NULL
);

CREATE TABLE reviews (
    review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_drink VARCHAR(255) NOT NULL,
    store_name VARCHAR(255) NOT NULL ,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    rating INT NOT NULL,
    comment VARCHAR(14000) ,
    review_time VARCHAR(255) NOT NULL,
    drink_image VARCHAR(255) NOT NULL,
    favorite_drink BOOLEAN
);



INSERT INTO stores (store_name, store_location, store_longitude, store_latitude) VALUES ('Starbucks', 'Austin,TX', '30.2652', '-97.7477'),('Epoch coffee', 'Houston,TX','30.2672','-97.7555');


INSERT INTO users (user_name, user_location, user_password, user_image) VALUES ('Admin' , 'Austin , TX' , 'password1' ,  'https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg'), ('Admin2', 'Houston , TX' , 'password2' , 'https://cdn.lifehack.org/wp-content/uploads/2015/02/what-makes-people-happy.jpeg');

INSERT INTO reviews (name_drink, store_name, user_id, rating, comment, review_time, drink_image, favorite_drink) VALUES ('Mocha' , 'Starbucks' , 1, 5 , 'The Caramel Mocha was more then i was thinking it was going to be it was great. ' , '2020-03-01 09:30:30' , 'https://www.vitamix.com/media/other/images/xPeppermint-Mocha-470x449.jpg.pagespeed.ic.9UPpFKssT3.jpg', FALSE), ('Latte', 'Epoch' , 2, 3 , 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' , '2020-01-03 10:30:31' , 'https://www.baristainstitute.com/sites/default/files/styles/1x_medium_page_header_image/public/images/Christmas_latte_a5%20%281%29.jpg?itok=TY9SROno', TRUE);



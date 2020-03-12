DROP DATABASE IF EXISTS sip;
CREATE DATABASE sip;

USE sip;

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL UNIQUE KEY, 
    user_location VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_image VARCHAR (255) NOT NULL
);

CREATE TABLE reviews(
    review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_drink VARCHAR(255) NOT NULL,
    store VARCHAR(255) NOT NULL,
    rating INT (255) NOT NULL,
    comment VARCHAR(14000) ,
    review_time VARCHAR(255) NOT NULL,
    drink_image VARCHAR(255) NOT NULL
    
);

CREATE TABLE drinks(
    drink_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL, 
    FOREIGN KEY (user_id) REFERENCES users(user_id), 
    drink_name VARCHAR (255) NOT NULL,
    drink_image_id VARCHAR(255) NOT NULL,
    favorite_drink BOOLEAN 
);

-- INSERT INTO users (user_name, user_location, user_password, profile_image) VALUES ('Admin' , 'Austin , TX' , 'password1' ,  'https://cdn.vox-cdn.com/thumbor/Oi6jzvQzWetJGlkpwLqlP1L9p28=/0x0:5568x3712/1200x800/filters:focal(2858x720:3748x1610)/cdn.vox-cdn.com/uploads/chorus_image/image/62207705/922984782.jpg.0.jpg') , ('Admin2', 'Houston , TX' , 'password2' , 'https://cdn.lifehack.org/wp-content/uploads/2015/02/what-makes-people-happy.jpeg');

-- INSERT INTO reviews (name_drink, store, rating, comment, review_time, drink_image) VALUES ('Mocha' , 'Starbucks' , 5 , 'The Caramel Mocha was more then i was thinking it was going to be it was great. ' , '2020-03-01 09:30:30' , 'https://www.vitamix.com/media/other/images/xPeppermint-Mocha-470x449.jpg.pagespeed.ic.9UPpFKssT3.jpg'), ('Latte', 'Epoch Coffee' , 3 , 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' , '2020-01-03 10:30:31' , 'https://www.baristainstitute.com/sites/default/files/styles/1x_medium_page_header_image/public/images/Christmas_latte_a5%20%281%29.jpg?itok=TY9SROno');

-- INSERT INTO drinks (user_name, drink_name, drink_image_id, favorite_drink) VALUES ('Admin' , 'Mocha' , 'https://www.vitamix.com/media/other/images/xPeppermint-Mocha-470x449.jpg.pagespeed.ic.9UPpFKssT3.jpg' , TRUE) , ('Admin2' , 'Latte' , 'https://www.baristainstitute.com/sites/default/files/styles/1x_medium_page_header_image/public/images/Christmas_latte_a5%20%281%29.jpg?itok=TY9SROno' , FALSE );


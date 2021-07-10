-- Delete Table
DROP TABLE images;

-- Create Table
CREATE TABLE images (
	id serial PRIMARY KEY,
	path varchar(250),
	description varchar(250),
	likes integer default 0
	
);

-- Populate Table with data
INSERT INTO images ("path", "description")
	VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
	('https://m.media-amazon.com/images/I/81gUrfk01uL._CR204,0,1224,1224_UX256.jpg', 'I really like pizza.'),
	('https://pm1.narvii.com/7549/7935e5d6c4cac5c845f2499103c97d6f544eafbcr1-256-256v2_00.jpg', 'Star Wars is good');

-- Select all rows from Table
SELECT * FROM images;
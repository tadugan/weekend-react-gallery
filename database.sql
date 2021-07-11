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
	VALUES ('images/pizza.jpeg', 'There are only 2 kinds of pizza: great pizza and fine pizza. I will take what I can get.'),
	('images/burritos.jpeg', 'Breakfast, Lunch, or Dinner, a burrito is always a wise choice.'),
	('images/chicken_wings.jpeg', 'I usually makes these in the air fryer. But I hit up D-spot Wings whenever I''m in the area.'),
	('images/donut.jpeg', 'Any excuse to eat dessert in the morning works for me.'),
	('images/milkshakes.jpeg', 'Even my mild lactose intolerance cannot stand between me and a milkshake.'),
	('images/steak.jpeg', 'As I get older, I prefer my steak less and less done. I''m down to Medium-rare now.'),
	('images/sushi.png', 'I discovered sushi relatively recently, and it has quickly become my main take0out go to,');


-- Select all rows from Table
SELECT * FROM images;
CREATE TABLE Users(
	id SERIAL,
	email VARCHAR(80) NOT NULL,
	password VARCHAR(200) NOT NULL,
	name VARCHAR(80),
	surname VARCHAR(80),
	idRol INT NOT NULL,
	urlImage VARCHAR(300),
	publicId VARCHAR(200),
	enable BOOL NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (idRol) REFERENCES Rol (id)
);

CREATE TABLE SocialMedia(
	id SERIAL,
	name VARCHAR(50),
	username VARCHAR(80),
	urlimage VARCHAR(300),
	publicid VARCHAR(200),
	urlProfile VARCHAR(300),
	PRIMARY KEY(id)
);

CREATE TABLE ContactForm(
	id SERIAL,
	name VARCHAR(100),
	email VARCHAR(80),
	phone VARCHAR(300),
	description VARCHAR(1000),
	country VARCHAR(80),
	dates TIMESTAMP,
	enable Bool,
	PRIMARY KEY(id)
);
CREATE TABLE Sponsor(
	id SERIAL,
	name VARCHAR(80),
	email VARCHAR(80),
	web VARCHAR(80),
	facebook VARCHAR(80),
	instagram VARCHAR(80),
	youtube VARCHAR(80),
	twitter VARCHAR(80),
	urlimage VARCHAR(300),
	publicid VARCHAR(200),
	PRIMARY KEY(id)
);

SELECT * FROM Sponsor


SELECT * FROM ContactForm
SELECT * FROM SOCIALMEDIA
SELECT * FROM Users

INSERT INTO Rol(rol) VALUES('admin');
INSERT INTO USERS(email, password, idRol) VALUES('julio@email.com', '123', '1', true);

SELECT * FROM Rol

UPDATE USERS SET name = 'maria', surname='torres' WHERE id = 5
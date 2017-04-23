CREATE DATABASE market;

-- statusAccount = 0: deleted  1: enabled  2: disabled

CREATE TABLE admin(
	rut VARCHAR(10) NOT NULL PRIMARY KEY,
	password VARCHAR(15),
	name VARCHAR(15) NOT NULL,
	lastName VARCHAR(25) NOT NULL,
	birth VARCHAR(14) NOT NULL,
	phone VARCHAR(9),
	email VARCHAR(30),
	comune VARCHAR(20),
	country VARCHAR(20),
	avaibleDays INT NOT NULL,
	accountPlan VARCHAR(20),
	accountPay INT,
	accountsAvaibles INT,
	id_market INT,
	keygen VARCHAR(8),
	type INT,
	statusAccount INT
);

CREATE TABLE admin_superMarket(
	rut_admin VARCHAR(10),
	id_market INT,
	action VARCHAR(255)
);

CREATE TABLE admin_user(
	rut_admin VARCHAR(10),
	rut_user VARCHAR(10),
	action VARCHAR(255)
);

CREATE TABLE user(
	rut VARCHAR(10) NOT NULL PRIMARY KEY,
	password VARCHAR(15),
	name VARCHAR(15) NOT NULL,
	lastName VARCHAR(25) NOT NULL,
	birth VARCHAR(14) NOT NULL,
	phone VARCHAR(9),
	email VARCHAR(30),
	comune VARCHAR(20),
	country VARCHAR(20),
	avaibleDays INT NOT NULL,
	id_market INT,
	type INT,
	statusAccount INT
);

CREATE TABLE user_superMarket(
	rut_user VARCHAR(10),
	id_market INT
);

CREATE TABLE superMarket(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	rut_admin VARCHAR(10),
	totalBoxes INT,
	comune VARCHAR(20),
	address VARCHAR(255),
	country VARCHAR(20),
	type VARCHAR(20)
);

CREATE TABLE days(
	id_d INT PRIMARY KEY,
	name VARCHAR(10),
	numberDay INT
);

CREATE TABLE turns(
	id_user VARCHAR(10),
	id_hour INT,
	id_day INT,
	id_superMarket INT
);

CREATE TABLE hours(
	id_h INT PRIMARY KEY,
	value VARCHAR(13)
);

ALTER TABLE admin ADD CONSTRAINT admin_fk1 FOREIGN KEY(id_market) REFERENCES superMarket(id);
ALTER TABLE user ADD CONSTRAINT user_fk1 FOREIGN KEY(id_market) REFERENCES superMarket(id);

ALTER TABLE admin_superMarket ADD CONSTRAINT admin_superMarket_fk1 FOREIGN KEY(rut_admin) REFERENCES admin(rut);
ALTER TABLE admin_superMarket ADD CONSTRAINT admin_superMarket_fk2 FOREIGN KEY(id_market) REFERENCES superMarket(id);

ALTER TABLE admin_user ADD CONSTRAINT admin_user_fk1 FOREIGN KEY(rut_admin) REFERENCES admin(rut);
ALTER TABLE admin_user ADD CONSTRAINT admin_user_fk2 FOREIGN KEY(rut_user) REFERENCES user(rut);

ALTER TABLE user_superMarket ADD CONSTRAINT user_superMarket_fk1 FOREIGN KEY(rut_user) REFERENCES user(rut);
ALTER TABLE user_superMarket ADD CONSTRAINT user_superMarket_fk2 FOREIGN KEY(id_market) REFERENCES superMarket(id);

ALTER TABLE turns ADD CONSTRAINT turns_fk1 FOREIGN KEY(id_user) REFERENCES user(rut);
ALTER TABLE turns ADD CONSTRAINT turns_fk2 FOREIGN KEY(id_hour) REFERENCES hours(id_h);
ALTER TABLE turns ADD CONSTRAINT turns_fk3 FOREIGN KEY(id_day) REFERENCES days(id_d);
ALTER TABLE turns ADD CONSTRAINT turns_fk4 FOREIGN KEY(id_superMarket) REFERENCES superMarket(id);

ALTER TABLE superMarket ADD CONSTRAINT superMarket_fk1 FOREIGN KEY(rut_admin) REFERENCES admin(rut);

INSERT INTO days(id_d, name, numberDay) VALUES(0, "Lunes" , 1);
INSERT INTO days(id_d, name, numberDay) VALUES(1, "Martes" , 2);
INSERT INTO days(id_d, name, numberDay) VALUES(2, "Miercoles" , 3);
INSERT INTO days(id_d, name, numberDay) VALUES(3, "Jueves" , 4);
INSERT INTO days(id_d, name, numberDay) VALUES(4, "Viernes" , 5);
INSERT INTO days(id_d, name, numberDay) VALUES(5, "Sabado" , 6);
INSERT INTO days(id_d, name, numberDay) VALUES(6, "Domingo" , 7);

INSERT INTO hours(id_h, value) VALUES(0, "08:00 - 10:00");
INSERT INTO hours(id_h, value) VALUES(1, "10:00 - 12:00");
INSERT INTO hours(id_h, value) VALUES(2, "12:00 - 14:00");
INSERT INTO hours(id_h, value) VALUES(3, "14:00 - 16:00");
INSERT INTO hours(id_h, value) VALUES(4, "16:00 - 18:00");
INSERT INTO hours(id_h, value) VALUES(5, "18:00 - 20:00");
INSERT INTO hours(id_h, value) VALUES(6, "20:00 - 22:00");

INSERT INTO admin(rut, password, name, lastName, birth, phone, email, comune, country, avaibleDays, accountPlan, accountPay, accountsAvaibles, id_market, keygen, type, statusAccount) VALUES('1-1', '12345', 'Draaakos', 'Pro', '16/03/2000', '989248502', 'orlando.andaur.c@gmail.com', 'Valpo', 'Chile', 30, 'Personalizado', 20000, 10, null, 'JJDH2834', 0,1);


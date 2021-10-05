USE TuTurismoDB;

SELECT count(correo) 
FROM TuTurismoDB
WHERE correo LIKE "%gmail.com";
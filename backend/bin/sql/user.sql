CREATE TABLE account(
    id          SERIAL PRIMARY KEY,
    email       VARCHAR(254) UNIQUE,
    nickname    VARCHAR(64),
    passhash    CHAR(60)
);
CREATE TABLE events
(
    id             SERIAL PRIMARY KEY,
    name           VARCHAR(255)   NOT NULL,
    description    TEXT           NOT NULL,
    location       VARCHAR(255)   NOT NULL,
    eventDate      TIMESTAMP      NOT NULL,
    price          NUMERIC(10, 2) NOT NULL,
    totalTickets   INT            NOT NULL,
    userId         VARCHAR(255)   NOT NULL,
    imageStorageId UUID,
    is_cancelled   BOOLEAN
);

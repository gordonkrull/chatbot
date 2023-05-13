CREATE TABLE chat_messages (
   id serial PRIMARY KEY,
   username VARCHAR ( 25 ) NOT NULL,
   message VARCHAR ( 500 ) NOT NULL,
   timestamp timestamp default current_timestamp
);
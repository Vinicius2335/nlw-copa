CREATE TABLE IF NOT EXISTS poll (
  id VARCHAR(36) NOT NULL,
   title VARCHAR(255) NOT NULL,
   code VARCHAR(255) NOT NULL,
   created_at datetime,
   CONSTRAINT pk_poll PRIMARY KEY (id)
);

ALTER TABLE poll ADD CONSTRAINT uc_poll_code UNIQUE (code);
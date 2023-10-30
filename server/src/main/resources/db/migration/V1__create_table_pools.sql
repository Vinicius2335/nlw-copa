CREATE TABLE IF NOT EXISTS pool (
  id VARCHAR(36) NOT NULL,
   title VARCHAR(255) NOT NULL,
   code VARCHAR(255) NOT NULL,
   created_at datetime,
   CONSTRAINT pk_pool PRIMARY KEY (id)
);

ALTER TABLE pool ADD CONSTRAINT uc_pool_code UNIQUE (code);
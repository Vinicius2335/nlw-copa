ALTER TABLE user ADD password VARCHAR(255) NOT NULL AFTER email;

UPDATE
  user
SET
  password = 'john123'
WHERE
    id = "edc85e0f-1025-4823-bfaf-1a42de153426";
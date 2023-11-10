ALTER TABLE user ADD password VARCHAR(255) NOT NULL AFTER email;

-- Senha John Doe = john123
UPDATE
  user
SET
  password = '$2a$10$uPCken9LY40h4bAhCj5CCuwSYYhpKZix3vWEgDoCyl0NeoitKUV0K'
WHERE
    id = "edc85e0f-1025-4823-bfaf-1a42de153426";

-- Senha Vinicius Vieira = devdojo
UPDATE
  user
SET
  password = '$2a$10$tt0AulXsSyhCwBpLWW4AYeH4Kzau3DXkobC.zOZ.mPWoZkjciljCi'
WHERE
    id = "9140824e-a97b-45a1-8fba-feb232c4dc82";
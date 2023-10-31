-- Criando um usuário
INSERT
INTO
  user
  (id, name, email, avatar_url, created_at)
VALUES
  ('edc85e0f-1025-4823-bfaf-1a42de153426', 'John Doe', 'john.doe@gmail.com', 'https://github.com/spring-projects.png', NOW());

-- Criando um bolão
INSERT
INTO
  pool
  (id, title, code, owner_id, created_at)
VALUES
  ('9a7cfacb-4a46-42ec-9ebf-ef3222c209a3', 'Example Pool', 'BOL123', 'edc85e0f-1025-4823-bfaf-1a42de153426', NOW());

-- Criando um Participante
INSERT
INTO
  participant
  (id, user_id, pool_id, created_at)
VALUES
  ('c9fa488e-c370-4d34-8738-dec284797450', 'edc85e0f-1025-4823-bfaf-1a42de153426', '9a7cfacb-4a46-42ec-9ebf-ef3222c209a3', NOW());

-- Criando dois jogo, um sem palpites, um com palpites
INSERT
INTO
  game
  (id, date, first_team_country_code, second_team_country_code)
VALUES
  ('03e6c4a7-c142-44a1-8cb1-da00681cf101', NOW(), 'DE', 'BR');

INSERT
INTO
  game
  (id, date, first_team_country_code, second_team_country_code, created_at)
VALUES
  ('f5edcfdf-e221-4b25-ba92-c15bbaa17df3', NOW(), 'BR', 'AR', NOW());

-- Criando um palpite para o jogo 2
INSERT
INTO
  guess
  (id, first_team_points, second_team_points, game_id, participant)
VALUES
  ('cb05061f-e4ac-4233-b5e0-239c08699f73', 2, 1, 'f5edcfdf-e221-4b25-ba92-c15bbaa17df3', 'c9fa488e-c370-4d34-8738-dec284797450');
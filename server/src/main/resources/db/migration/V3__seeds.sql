-- Criando usuários
INSERT
INTO
  user
  (id, name, email, avatar_url, created_at)
VALUES
  ('edc85e0f-1025-4823-bfaf-1a42de153426', 'John Doe', 'john.doe@gmail.com', 'https://github.com/spring-projects.png', NOW());

INSERT
INTO
  user
  (id, name, email, avatar_url, created_at)
VALUES
  ('9140824e-a97b-45a1-8fba-feb232c4dc82', 'Vinicius Vieira', 'vinicius@gmail.com', 'https://github.com/Vinicius2335.png', NOW());

-- Criando bolão
INSERT
INTO
  poll
  (id, title, code, owner_id, created_at)
VALUES
  ('9a7cfacb-4a46-42ec-9ebf-ef3222c209a3', 'Bolão do Diegão', 'BOL123', 'edc85e0f-1025-4823-bfaf-1a42de153426', NOW());

INSERT
INTO
  poll
  (id, title, code, owner_id, created_at)
VALUES
  ('85cb7820-1ee2-4859-bffe-32f9a62a880e', 'Bolão do Rodrigão', 'BOL456', 'edc85e0f-1025-4823-bfaf-1a42de153426', NOW());

-- Criando Participantes
INSERT
INTO
  participant
  (id, user_id, poll_id, created_at)
VALUES
  ('c9fa488e-c370-4d34-8738-dec284797450', 'edc85e0f-1025-4823-bfaf-1a42de153426', '9a7cfacb-4a46-42ec-9ebf-ef3222c209a3', NOW());

INSERT
INTO
  participant
  (id, user_id, poll_id, created_at)
VALUES
  ('11025842-208f-4049-a152-bf58fc2c867a', 'edc85e0f-1025-4823-bfaf-1a42de153426', '85cb7820-1ee2-4859-bffe-32f9a62a880e', NOW());

INSERT
INTO
  participant
  (id, user_id, poll_id, created_at)
VALUES
  ('ea0af513-18a1-461e-8a7d-a97be73c49b1', '9140824e-a97b-45a1-8fba-feb232c4dc82', '85cb7820-1ee2-4859-bffe-32f9a62a880e', NOW());

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
  (id, first_team_points, second_team_points, game_id, participant_id, created_at)
VALUES
  ('cb05061f-e4ac-4233-b5e0-239c08699f73', 2, 1, 'f5edcfdf-e221-4b25-ba92-c15bbaa17df3', 'c9fa488e-c370-4d34-8738-dec284797450', NOW());
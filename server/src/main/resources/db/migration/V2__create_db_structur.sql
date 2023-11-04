-- Usuário
CREATE TABLE IF NOT EXISTS user (
  id VARCHAR(36) NOT NULL,
   created_at TIMESTAMP,
   name VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   avatar_url VARCHAR(255),
   CONSTRAINT pk_user PRIMARY KEY (id)
);

ALTER TABLE user ADD CONSTRAINT uc_user_email UNIQUE (email);

-- Refac table poll
DROP TABLE IF EXISTS poll;
CREATE TABLE IF NOT EXISTS poll (
  id VARCHAR(36) NOT NULL,
   title VARCHAR(255) NOT NULL,
   code VARCHAR(6) NOT NULL,
   created_at TIMESTAMP,
   owner_id VARCHAR(36),
   CONSTRAINT pk_poll PRIMARY KEY (id)
);

ALTER TABLE poll ADD CONSTRAINT uc_poll_code UNIQUE (code);

ALTER TABLE poll ADD CONSTRAINT FK_POLL_ON_OWNER FOREIGN KEY (owner_id) REFERENCES user (id);

-- Participante
CREATE TABLE IF NOT EXISTS participant (
  id VARCHAR(36) NOT NULL,
   created_at TIMESTAMP,
   user_id VARCHAR(36) NOT NULL,
   poll_id VARCHAR(36) NOT NULL,
   CONSTRAINT pk_participant PRIMARY KEY (id)
);

ALTER TABLE participant ADD CONSTRAINT FK_PARTICIPANT_ON_POLL FOREIGN KEY (poll_id) REFERENCES poll (id);

ALTER TABLE participant ADD CONSTRAINT FK_PARTICIPANT_ON_USER FOREIGN KEY (user_id) REFERENCES user (id);

-- Jogo
CREATE TABLE IF NOT EXISTS game (
  id VARCHAR(36) NOT NULL,
   created_at TIMESTAMP,
   date TIMESTAMP NOT NULL,
   first_team_country_code VARCHAR(2) NOT NULL,
   second_team_country_code VARCHAR(2) NOT NULL,
   CONSTRAINT pk_game PRIMARY KEY (id)
);

-- Palpites
CREATE TABLE IF NOT EXISTS guess (
  id VARCHAR(36) NOT NULL,
   created_at TIMESTAMP,
   first_team_points INT NOT NULL,
   second_team_points INT NOT NULL,
   game_id VARCHAR(36) NOT NULL,
   participant VARCHAR(36) NOT NULL,
   CONSTRAINT pk_guess PRIMARY KEY (id)
);

ALTER TABLE guess ADD CONSTRAINT FK_GUESS_ON_GAME FOREIGN KEY (game_id) REFERENCES game (id);

ALTER TABLE guess ADD CONSTRAINT FK_GUESS_ON_PARTICIPANT FOREIGN KEY (participant) REFERENCES participant (id);


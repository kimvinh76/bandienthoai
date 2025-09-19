-- Migration: add password and roles to users table
ALTER TABLE users
  ADD COLUMN password VARCHAR(255) NOT NULL,
  ADD COLUMN roles VARCHAR(255);

-- Set default role for existing users
UPDATE users SET roles = 'ROLE_USER' WHERE roles IS NULL;
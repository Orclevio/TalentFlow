CREATE DATABASE talentflow;

USE talentflow;

CREATE TABLE companies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  contact_info VARCHAR(255) NOT NULL
);

CREATE TABLE recruiters (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL
);

CREATE TABLE candidates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  resume LONGTEXT NOT NULL,
  test_scores VARCHAR(255) NOT NULL
);

CREATE TABLE jobs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  requirements VARCHAR(255) NOT NULL,
  compensation VARCHAR(255) NOT NULL
);

CREATE TABLE tests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  test_name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  questions VARCHAR(255) NOT NULL,
  answers VARCHAR(255) NOT NULL
);

CREATE TABLE interviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  interview_date DATE NOT NULL,
  interview_time TIME NOT NULL,
  location VARCHAR(255) NOT NULL,
  questions VARCHAR(255) NOT NULL
);

CREATE TABLE applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  application_date DATE NOT NULL,
  status VARCHAR(255) NOT NULL,
  notes VARCHAR(255) NOT NULL
);

ALTER TABLE candidates
  ADD FOREIGN KEY (company_id) REFERENCES companies (id);

ALTER TABLE interviews
  ADD FOREIGN KEY (candidate_id) REFERENCES candidates (id);

ALTER TABLE applications
  ADD FOREIGN KEY (candidate_id) REFERENCES candidates (id);

ALTER TABLE applications
  ADD FOREIGN KEY (job_id) REFERENCES jobs (id);

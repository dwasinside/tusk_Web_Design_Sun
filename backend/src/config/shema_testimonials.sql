
CREATE DATABASE testimonials;
USE testimonials;

CREATE TABLE Reviewers (
    ReviewerID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Email VARCHAR(255) UNIQUE
);

CREATE TABLE Employees (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Position VARCHAR(255),
    UniqueEmployeeNumber VARCHAR(36) UNIQUE
);

CREATE TABLE Companies (
    CompanyID INT AUTO_INCREMENT PRIMARY KEY,
    CompanyName VARCHAR(255),
    Description TEXT
);

CREATE TABLE Reviews (
    ReviewID INT AUTO_INCREMENT PRIMARY KEY,
    Rating DECIMAL(3,1),
    ReviewText TEXT,
    ReviewerID INT,
    EmployeeID INT,
    CompanyID INT,
    FOREIGN KEY (ReviewerID) REFERENCES Reviewers (ReviewerID),
    FOREIGN KEY (EmployeeID) REFERENCES Employees (EmployeeID),
    FOREIGN KEY (CompanyID) REFERENCES Companies (CompanyID)
);
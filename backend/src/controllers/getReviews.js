import { db } from '../services/database.js';

// gives name, description, rating, employee, employees position, name company
const sql = `
  SELECT
    Reviewers.Name AS Name,
    Reviews.ReviewText AS description,
    Reviews.Rating AS rating,
    Employees.Name AS employee,
    Employees.Position AS employees_position,
    Companies.CompanyName AS company_name
  FROM Reviews
  INNER JOIN Reviewers ON Reviews.ReviewerID = Reviewers.ReviewerID
  INNER JOIN Employees ON Reviews.EmployeeID = Employees.EmployeeID
  INNER JOIN Companies ON Reviews.CompanyID = Companies.CompanyID
  ORDER BY Reviewers.ReviewerID
  LIMIT ? OFFSET ?;
`;

// get all rewiews with pagination
export const getReviews = async (req, res) => {
  try {
    // query parameters for pagination
    const page = req.query.page || 1;
    const perPage = req.query.perPage || 10;

    // get the total number of pages
    const countQuery = 'SELECT COUNT(*) AS total FROM Reviews';
    const [countResult] = await db.query(countQuery);

    const totalItems = countResult[0].total;
    const totalPages = Math.ceil(totalItems / perPage);

    const offset = (page - 1) * perPage;

    const [result] = await db.query(sql, [parseInt(perPage), parseInt(offset)]);
    res.status(200).json({ data: result, totalPages });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Intetial server error' });
  }
};

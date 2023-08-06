import { Link } from "react-router-dom";

const AdminPanelPage = () => {
  return (
    <>
      <h1>Admin Panel</h1>
      <Link to="/admin/all-pets">See all Pets </Link>
      <br />
      <Link to="/admin/all-forms"> See all Pending Forms</Link>
    </>
  );
};

export default AdminPanelPage;

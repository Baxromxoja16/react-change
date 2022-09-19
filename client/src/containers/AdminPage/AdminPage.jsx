import React from "react";
import "./AdminPage.sass";
import Navbar from "../../components/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <>
      <Navbar />
      <div className="admin_page">
        <aside>
          <ul>
            <li>
              <Link to="/admin/home">Home</Link>
            </li>
            <li>
              <Link to="/admin/courses">Courses</Link>
            </li>
            <li>
              <Link to="/admin/openlesson">Open lessons</Link>
            </li>
            <li>
              <Link to="/admin/contact">Contacts</Link>
            </li>
          </ul>
        </aside>

        <main className="admin_main">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AdminPage;

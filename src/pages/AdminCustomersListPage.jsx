import { useEffect, useState } from "react";
import axios from "axios";
import env from "../config";
import { adminService } from "../services/admin.service";

export const AdminCustomersListPage = () => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const response = await adminService.fetchCustomersData();
    if (response.status === 200) {
      setCustomers(
        response.data.filter((customer) => customer.role != "admin")
      );
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  const handleDeleteCustomer = async (id) => {
    const response = await axios.delete(`${env.URL_BASE}/admin/customer/${id}`);
    if (response.status === 201) {
      setCustomers([...customers.filter((customer) => customer._id != id)]);
    }
  };

  return !customers ? (
    <i className="loader --1"></i>
  ) : (
    <div className="container">
      <h1>Customers' List</h1>
      <div className="content-lg">
        {customers.map((customer) => {
          return (
            <>
              <div className="user-card">
                <h3>{customer.fullname.toUpperCase()} </h3>
                <p>{customer.email} </p>
                <button
                  className="buttonLink"
                  onClick={() => handleDeleteCustomer(customer._id)}
                >
                  {" "}
                  delete
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

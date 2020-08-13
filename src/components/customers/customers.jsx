import React, { useState, useEffect } from "react";
import { getCustomers } from "../../services/customers.service";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(({ data: customers }) => setCustomers([...customers]));
  }, []);
  return (
    <div>
      <ul>
        {customers.map((_, i) => (
          <li key={i}>{JSON.stringify(_)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;

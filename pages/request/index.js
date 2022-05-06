import Request from "../../src/components/Request";
import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import CopyRight from "../../src/components/Copyright";
const LoanRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loan: "",
    address: "",
    register: "",
    salary: "",
    description: "",
  });
  const handleForm = async (e) => {
    e.preventDefault();
    const form = {
      name: formData.name,
      email: formData.email,
      loan: formData.loan,
      address: formData.address,
      phone: formData.phone,
      register: formData.register,
      salary: formData.salary,
      description: formData.description,
    };
    const res = fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setFormData((formData) => ({
      ...formData,
      name: "",
      email: "",
      phone: "",
      loan: "",
      address: "",
      register: "",
      salary: "",
      description: "",
    }));
  };
  return (
    <>
      <Navbar />
      <Request
        handleForm={handleForm}
        formData={formData}
        setFormData={setFormData}
      />
      <Footer />
      <CopyRight />
    </>
  );
};

export default LoanRequest;

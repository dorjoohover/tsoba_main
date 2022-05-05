import Request from "../../src/components/Request";
import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Navbar";
import Footer from '../../src/components/Footer'
import CopyRight from '../../src/components/Copyright'
const LoanRequest = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const handleForm = async (e) => {
    e.preventDefault();
    const form = {
      name: formData.name,
      email: formData.email,
      date: formData.date,
      time: formData.time,
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
      time: "",
      date: "",
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

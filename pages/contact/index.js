import Navbar from "../../src/components/Navbar";
import { useState } from "react";
import Footer from "../../src/components/Footer";
import Copyright from "../../src/components/Copyright";
import { Circle, Home } from "@mui/icons-material";
import { Box } from "@mui/material";
const Contact = () => {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const handleForm = async (e) => {
    e.preventDefault();
    const form = {
      name: contact.name,
      email: contact.email,
      message: contact.message,
    };
    const res = fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    console.log(res);
    setContact((contact) => ({
      ...contact,
      name: "",
      email: "",
      message: "",
    }));
  };
  return (
    <>
      <Navbar color={"black"} />
      <div className="mt-24">
        <Box
          sx={{
            height: "35vh",
            backgroundImage: "url('/img/contact.jpg')",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <span className="bg-black opacity-50 absolute inset-0 z-10"></span>
          <div className="text-white relative z-20">
            <h1 className="text-4xl mb-6 font-semibold">Contact Us</h1>
            <div className="flex uppercase relative items-center z-20">
              <h5 className="uppercase mr-4 text-sm tracking-widest">home</h5>
              <Circle
                sx={{ marginRight: "1rem", width: "0.5rem", fill: "#b9a25f" }}
              />
              <h5 className="uppercase mr-4 text-sm tracking-widest">
                contact us
              </h5>
            </div>
          </div>
        </Box>
        <div className="py-48 grid grid-cols-3 contact_grid gap-8">
          <div className="flex flex-col items-center py-16">
            <Home sx={{ fill: "#b9a25f", width: "60px", height: "60px" }} />
            <h2 className="text-2xl font-semibold my-6">Address</h2>
            <p>2159 Ralph, Brooklyn, NY, United States</p>
          </div>
          <div className="flex flex-col items-center py-16">
            <Home sx={{ fill: "#b9a25f", width: "60px", height: "60px" }} />
            <h2 className="text-2xl font-semibold my-6">Address</h2>
            <p>2159 Ralph, Brooklyn, NY, United States</p>
          </div>
          <div className="flex flex-col items-center contact_grid_item py-16">
            <Home sx={{ fill: "#b9a25f", width: "60px", height: "60px" }} />
            <h2 className="text-2xl font-semibold my-6">Address</h2>
            <p>2159 Ralph, Brooklyn, NY, United States</p>
          </div>
        </div>
        <div className="contact_grid flex pb-48">
          <div className="pr-16 w-3/5">
            <iframe
              src="https://maps.google.com/maps?q=2159%20Ralph%2C%20Brooklyn%2C%20NY%2C%20United%20States&t=m&z=14&output=embed&iwloc=near"
              frameBorder="0"
              title="2159"
              scrolling="no"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="w-2/5">
            <form action="" className="w-full" onSubmit={handleForm}>
              <h1 className="text-6xl font-bold capitalize mb-12">
                get in touch!
              </h1>
              <div className="flex flex-col mb-10">
                <label htmlFor="name" className="uppercase text-sm mb-2">
                  full name *
                </label>
                <input
                  type="text"
                  className="p-4 border-zinc-300"
                  value={contact.name}
                  onChange={(e) =>
                    setContact((contact) => ({
                      ...contact,
                      name: e.target.value,
                    }))
                  }
                  placeholder="e.g., Jonh Doe"
                />
              </div>
              <div className="flex flex-col mb-10">
                <label htmlFor="email" className="uppercase text-sm mb-2">
                  your email *
                </label>
                <input
                  type="email"
                  className="p-4 border-zinc-300"
                  value={contact.email}
                  onChange={(e) =>
                    setContact((contact) => ({
                      ...contact,
                      email: e.target.value,
                    }))
                  }
                  placeholder="name@company.com"
                />
              </div>
              <div className="flex flex-col mb-10">
                <label htmlFor="email" className="uppercase text-sm mb-2">
                  your message *
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="p-4 border-zinc-300"
                  value={contact.message}
                  onChange={(e) =>
                    setContact((contact) => ({
                      ...contact,
                      message: e.target.value,
                    }))
                  }
                  placeholder="Write your message *"
                ></textarea>
              </div>
              <input
                type="submit"
                value="get in touch"
                className="uppercase text-white px-10 py-3 tracking-widest bg_primary_color font-semibold cursor-pointer"
              />
            </form>
          </div>
        </div>
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default Contact;

import Navbar from "../../src/components/Navbar";
import { useState } from "react";
import Footer from "../../src/components/Footer";
import Copyright from "../../src/components/Copyright";
import {
  Circle,
  HomeRounded,
  EmailRounded,
  LocalPhoneRounded,
} from "@mui/icons-material";
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
    setContact((contact) => ({
      ...contact,
      name: "",
      email: "",
      message: "",
    }));
  };
  return (
    <>
      <Navbar />
      <div>
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
            <h1 className="text-4xl mb-6 font-semibold">Бидэнтэй холбогдох</h1>
            <div className="flex uppercase relative items-center z-20">
              <h5 className="uppercase mr-4 text-sm tracking-widest">нүүр</h5>
              <Circle
                sx={{ marginRight: "1rem", width: "0.5rem", fill: "#b9a25f" }}
              />
              <h5 className="uppercase mr-4 text-sm tracking-widest">
                бидэнтэй холбогдох
              </h5>
            </div>
          </div>
        </Box>
        <div className="py-48 grid grid-cols-3 contact_grid gap-8">
          <div className="flex flex-col items-center py-16">
            <HomeRounded
              sx={{ fill: "#b9a25f", width: "60px", height: "60px" }}
            />
            <h2 className="text-2xl font-semibold my-6">Хаяг</h2>
            <p>СХД 8-р хороо Болгарын гудамж 27-802</p>
          </div>
          <div className="flex flex-col items-center py-16">
            <EmailRounded
              sx={{ fill: "#b9a25f", width: "60px", height: "60px" }}
            />
            <h2 className="text-2xl font-semibold my-6">Цахим хаяг</h2>
            <p>altantsetseg.b@homey.mn</p>
          </div>
          <div className="flex flex-col items-center contact_grid_item py-16">
            <LocalPhoneRounded
              sx={{ fill: "#b9a25f", width: "60px", height: "60px" }}
            />
            <h2 className="text-2xl font-semibold my-6">Утасны дугаар</h2>
            <p>+(976-11) 77005434 , 80115262</p>
          </div>
        </div>
        <div className="contact_grid flex pb-48">
          <div className="pr-16 w-3/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5347.457180780221!2d106.9294049!3d47.9222888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96923e34aba525%3A0x19a223edc2940202!2z0JHQvtC70LPQsNGA0YvQvSDQk9GD0LTQsNC80LYsIFVsYWFuYmFhdGFy!5e0!3m2!1sen!2smn!4v1651579871352!5m2!1sen!2smn"
              frameBorder="0"
              title="2159"
              scrolling="no"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="w-2/5">
            <form action="" className="w-full" onSubmit={handleForm}>
              <h1 className="text-6xl font-bold capitalize mb-12">
                Санал хүсэлт
              </h1>
              <div className="flex flex-col mb-10">
                <label htmlFor="name" className="uppercase text-sm mb-2">
                  Нэр
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
                  placeholder="Овог, нэр"
                />
              </div>
              <div className="flex flex-col mb-10">
                <label htmlFor="email" className="uppercase text-sm mb-2">
                  Цахим хаяг
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
                  placeholder="Цахим хаяг@example.com"
                />
              </div>
              <div className="flex flex-col mb-10">
                <label htmlFor="email" className="uppercase text-sm mb-2">
                  Хүсэлт
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
                  placeholder="Хүсэлтээ бичнэ үү"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Илгээх"
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
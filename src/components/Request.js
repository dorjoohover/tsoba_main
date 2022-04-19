import Image from "next/image";
import Parthner from "./Parthner";
const Request = ({ formData, setFormData, handleForm }) => {
  return (
    <div className="request relative">
      <span className="absolute bg-white bottom-0 z-10 h-2/5 w-full"></span>
      <form
        action=""
        onSubmit={handleForm}
        className="flex flex-col mx-auto relative z-30  "
      >
        <h1 className="font-bold text-6xl text-center mb-8">Request a Visit</h1>
        <input
          type="text"
          placeholder="E.G., JOHN DOE"
          value={formData.name}
          name="name"
          onChange={(e) =>
            setFormData((formData) => ({ ...formData, name: e.target.value }))
          }
          className="my-5"
        />
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((formData) => ({ ...formData, email: e.target.value }))
          }
          className="my-5"
          placeholder="CONTACT@YOURSITE.COM"
        />
        <div className="flex">
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={(e) =>
              setFormData((formData) => ({ ...formData, date: e.target.value }))
            }
            placeholder="MM / DD / YYYY"
            className="mr-10 my-5 flex-1"
          />
          <select
            name="time"
            id="time"
            value={formData.time}
            onChange={(e) =>
              setFormData((formData) => ({ ...formData, time: e.target.value }))
            }
            className=" my-5 flex-1"
          >
            <option>TIME AVAILABLE</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="20:00">20:00</option>
          </select>
        </div>
        <input
          type="submit"
          value="Contact"
          className="uppercase text-center text-white bg_primary_color py-4 mt-5 font-bold"
        />
      </form>
      <div className="my-32 mx-24">
        <Parthner />
      </div>
    </div>
  );
};

export default Request;

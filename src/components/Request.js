import Image from "next/image";
import Parthner from "./Parthner";
const Request = ({ formData, setFormData, handleForm }) => {
  return (
    <div id="request" className="request relative">
      <span className="absolute bg-white bottom-0 z-10 h-2/5 w-full"></span>
      <form
        action=""
        onSubmit={handleForm}
        className="flex flex-col mx-auto relative z-30  "
      >
        <h1 className="font-semibold text-4xl text-center mb-8">
          Зээлийн хүсэлт илгээх
        </h1>
        <p className="mt-4 mb-4">
          Та манай “Homey Mortgage”-ээс өөрийн мөрөөдлийн амины орон сууцаа
          худалдан авах зээлд хамрагдах боломжтой эсэхээ доорх хүсэлтийг бөглөн
          шалгуулаарай. Хүсэлтийг илгээснээр манай зээлийн мэргэжилтэн тантай
          холбогдох болно.
        </p>

        <label htmlFor="address" className="mt-2 mx-3 text-sm font-bold">
          Нэр
        </label>
        <input
          type="text"
          placeholder="Овог, нэр"
          value={formData.name}
          name="name"
          onChange={(e) =>
            setFormData((formData) => ({ ...formData, name: e.target.value }))
          }
          className="my-2"
          required
        />
        <label htmlFor="address" className="mt-2 mx-3 text-sm font-bold">
          Утасны дугаар
        </label>
        <input
          type="tel"
          placeholder="Олон улсын гарах кодын хамт оруулаарай."
          value={formData.phone}
          name="name"
          pattern="[0-9]{8}|[0-9]{3}-[0-9]{2}-[0-9]{3}"
          onChange={(e) =>
            setFormData((formData) => ({ ...formData, phone: e.target.value }))
          }
          className="my-2"
          required
        />
        <label htmlFor="address" className="mt-2 mx-3 text-sm font-bold">
          Цахим хаяг
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((formData) => ({ ...formData, email: e.target.value }))
          }
          className="my-2"
          placeholder="example@email.com"
          required
        />
        <label htmlFor="address" className="mt-2 mx-3 text-sm font-bold">
          Хүсэж буй зээлийн хэмжээ
        </label>
        <input
          type="number"
          name="loan"
          id="loan"
          value={formData.loan}
          onChange={(e) =>
            setFormData((formData) => ({ ...formData, loan: e.target.value }))
          }
          placeholder="Тоогоор"
          className="my-2 flex-1"
          required
        />
        <label htmlFor="address" className="mt-2 mx-3 text-sm font-bold">
          Регистрийн дугаар
        </label>
        <input
          type="text"
          name="register"
          id="register"
          value={formData.register}
          onChange={(e) =>
            setFormData((formData) => ({
              ...formData,
              register: e.target.value,
            }))
          }
          placeholder="Регистрийн дугаар"
          className=" my-2 flex-1"
          required
        />
        <label htmlFor="address" className="mt-2 mx-3 text-sm font-bold">
          Гэрийн хаяг
        </label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={(e) =>
            setFormData((formData) => ({
              ...formData,
              address: e.target.value,
            }))
          }
          placeholder="Одоо оршин суугаа улс, хот"
          className=" my-2 flex-1"
          required
        />
        <label htmlFor="salary" className="mt-2 mx-3 text-sm font-bold">
          Таны цалингийн хэмжээ /бизнессийн орлоготой бол ашгийн хэмжээ /
        </label>
        <input
          type="number"
          name="salary"
          id="salary"
          value={formData.salary}
          onChange={(e) =>
            setFormData((formData) => ({ ...formData, salary: e.target.value }))
          }
          placeholder="Таны цалингийн хэмжээ"
          className="my-2 flex-1"
          required
        />
        <label htmlFor="description" className="mt-2 mx-3 text-sm font-bold">
          Цалингийн орлоготой бол ажлын нэр бизнесийн орлоготой бол үйл
          ажиллагааны товч танилцуулга
        </label>
        <textarea
          name="description"
          id="description"
          className="h-24 my-2"
          value={formData.description}
          onChange={(e) =>
            setFormData((formData) => ({
              ...formData,
              description: e.target.value,
            }))
          }
          placeholder="Орлогийн тайлбар"
          required
        ></textarea>

        <input
          type="submit"
          value="Илгээх"
          className="uppercase text-center text-white bg_primary_color py-4 mt-5 cursor-pointer font-bold btn-ext"
        />
      </form>
    </div>
  );
};

export default Request;

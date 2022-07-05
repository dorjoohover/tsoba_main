import Image from "next/image";
import Parthner from "./Parthner";
import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
const Request = ({ formData, setFormData, handleForm, alert }) => {
  const [open, setOpen] = React.useState(true);
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

        <label htmlFor="address" className="mt-2 mx-3 text-base font-bold">
          Нэр
        </label>
        <input
          type="text"
          placeholder="Овог, нэр"
          value={formData.name}
          name="name"
          onChange={(e) =>
            setFormData((formData) => ({
              ...formData,
              name: e.target.value,
            }))
          }
          className="my-2"
          required
        />

        <label htmlFor="address" className="mt-2 mx-3 text-base font-bold">
          Утасны дугаар болон холбогдох холбоосыг бичнэ үү. (Жишээ: Viber,
          Wechat, WhatsApp, Line, Kakao talk гэх мэт...)
        </label>
        <input
          type="text"
          placeholder="Олон улсын гарах кодын хамт оруулаарай."
          value={formData.phone}
          name="name"
          onChange={(e) =>
            setFormData((formData) => ({
              ...formData,
              phone: e.target.value,
            }))
          }
          className="my-2"
          required
        />
        <label htmlFor="address" className="mt-2 mx-3 text-base font-bold">
          Цахим хаяг
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((formData) => ({
              ...formData,
              email: e.target.value,
            }))
          }
          className="my-2"
          placeholder="example@email.com"
          required
        />
        <label htmlFor="address" className="mt-2 mx-3 text-base font-bold">
          Таны сонирхож буй хотхоны нэр
        </label>
        {/* <input
          type="text"
          placeholder="Хаус хотхоны нэр"
          value={formData.interest}
          name="interest"
          onChange={(e) =>
            setFormData((formData) => ({
              ...formData,
              interest: e.target.value,
            }))
          }
          className="my-2"
          required
        /> */}
        <select
          name="interest"
          id="interest"
          placeholder="Хаус хотхоны нэр"
          onChange={(e) => {
            setFormData((formData) => ({
              ...formData,
              interest: e.target.value,
            }));
          }}
          value={formData.interest}
          required
          className="bg-transparent"
        >
          {/* <option value="Хадат Вилла 2">Хадат Вилла 2</option> */}
          <option value="Хадат Вилла 4">Хадат Вилла 4</option>
        </select>
        <label htmlFor="address" className="mt-2 mx-3 text-base font-bold">
          Оршин суугаа улс болон хот
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
          placeholder="Оршин суугаа улс, хотын нэр"
          className=" my-2 flex-1"
          required
        />
        <label htmlFor="salary" className="mt-2 mx-3 text-base font-bold">
          Таны цалингийн хэмжээ
        </label>
        <input
          type="number"
          name="salary"
          id="salary"
          value={formData.salary}
          onChange={(e) =>
            setFormData((formData) => ({
              ...formData,
              salary: e.target.value,
            }))
          }
          placeholder="Тоогоор илэрхийлнэ үү."
          className="my-2 flex-1"
          step="100000"
          required
        />
        <label htmlFor="address" className="mt-2 mx-3 text-base font-bold">
          Цалингийн орлоготой бол ажлын нэр
        </label>
        <input
          type="text"
          name="business"
          id="business"
          value={formData.business}
          onChange={(e) =>
            setFormData((formData) => ({
              ...formData,
              business: e.target.value,
            }))
          }
          placeholder="Ажиллаж буй байгууллагын нэр"
          className=" my-2 flex-1"
          required
        />
        <label htmlFor="description" className="mt-2 mx-3 text-base font-bold">
          Бизнесийн орлоготой бол үйл ажиллагааны товч танилцуулга
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
          placeholder="Танилцуулга"
          required
        ></textarea>
        {alert && (
          <Box sx={{ width: "100%" }}>
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Амжилттай илгээгдлээ.
              </Alert>
            </Collapse>
          </Box>
        )}
        <input
          onClick={() => {
            setOpen(true);
          }}
          type="submit"
          value="Илгээх"
          className="uppercase text-center text-white bg_primary_color py-4 mt-5 cursor-pointer font-bold btn-ext"
        />
      </form>
    </div>
  );
};

export default Request;

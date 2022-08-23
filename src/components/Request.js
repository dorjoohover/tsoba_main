import Image from "next/image";
import Parthner from "./Parthner";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Telegram } from "@mui/icons-material";
import { Select, MenuItem, InputLabel, FormControl, Grid } from "@mui/material";
import { FaViber, FaTelegramPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Request = ({ formData, setFormData, handleForm, alert }) => {
  //   const [open, setOpen] = React.useState(false);
  //   const [active, setActive] = React.useState(true);
  //   const handleChange = (e) => {
  //     e.preventDefault();
  //     console.log(e.target.value);
  //   };

  const notify = () => toast("Амжилттай илгээлээ.");



  return (
    <div id="request" className="request relative">
      <span className="absolute bg-white bottom-0 z-10 h-2/5 w-full"></span>
      <form
        onSubmit={(e) => handleForm(e)}
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
          Утасны дугаар
        </label>

        <input
          type="text"
          placeholder="Олон улсын гарах кодын хамт оруулаарай."
          value={formData.phone}
          name="phone"
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
          Холбогдох холбоосыг бичнэ үү. (Жишээ: Viber, Telegram)
        </label>
        <Grid container spacing={2} mx={"auto"} mt={2}>
          <Grid xs={9}>
            <input
              type="text"
              placeholder="Утасны дугаар"
              value={formData.phonePlatform}
              name="phonePlatform"
              onChange={(e) =>
                setFormData((formData) => ({
                  ...formData,
                  phonePlatform: e.target.value,
                }))
              }
              className="my-2 w-11/12"
            />
          </Grid>

          <Grid xs={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {formData.platform == "" && (
                  <>
                    <span className="form_desktop">
                      <Telegram /> Telegram
                    </span>
                    <span className="form_mobile">
                      <Telegram />
                    </span>
                  </>
                )}
                {(formData.platform == "telegram" ||
                  formData.platform == "Telegram") && (
                  <>
                    <span className="flex justify-center items-center">
                      <FaTelegramPlane className="text-xl mr-2" />
                    </span>
                  </>
                )}
                {(formData.platform == "viber" ||
                  formData.platform == "Viber") && (
                  <>
                    <span className="flex justify-center items-center">
                      <FaViber className="text-xl mr-2" />
                    </span>
                  </>
                )}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.platform}
                p={1}
                label={"Сонгох"}
                onChange={(e) =>
                  setFormData((formData) => ({
                    ...formData,
                    platform: e.target.value,
                  }))
                }
              >
                <MenuItem value="Telegram" className="form_desktop">
                  <span className="flex justify-center items-center">
                    <FaTelegramPlane className="text-xl mr-2" /> Telegram
                  </span>
                </MenuItem>
                <MenuItem value="Viber" className="form_desktop">
                  <span className="flex justify-center items-center">
                    <FaViber className="text-xl mr-2" /> Viber
                  </span>
                </MenuItem>
                <MenuItem value="telegram" className="form_mobile">
                  <span className="flex justify-center items-center">
                    <FaTelegramPlane className="text-xl mr-2" />
                  </span>
                </MenuItem>
                <MenuItem value="viber" className="form_mobile">
                  <span className="flex justify-center items-center">
                    <FaViber className="text-xl mr-2" />
                  </span>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
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
        {/* {alert && (
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
        )} */}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
        <input
          onClick={notify}
          type="submit"
          value="Илгээх"
          className="uppercase text-center text-white bg_primary_color py-4 mt-5 cursor-pointer font-bold btn-ext"
        />
      </form>
    </div>
  );
};

export default Request;

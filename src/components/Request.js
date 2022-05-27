import Image from 'next/image';
import Parthner from './Parthner';
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
					Та манай “Homey Mortgage”-ээс өөрийн мөрөөдлийн амины
					орон сууцаа худалдан авах зээлд хамрагдах боломжтой
					эсэхээ доорх хүсэлтийг бөглөн шалгуулаарай. Хүсэлтийг
					илгээснээр манай зээлийн мэргэжилтэн тантай холбогдох
					болно.
				</p>

				<label
					htmlFor="address"
					className="mt-2 mx-3 text-sm font-bold"
				>
					Нэр
				</label>
				<input
					type="text"
					placeholder="Овог, нэр"
					value={formData.name}
					name="name"
					onChange={e =>
						setFormData(formData => ({
							...formData,
							name: e.target.value,
						}))
					}
					className="my-2"
					required
				/>

				<label
					htmlFor="address"
					className="mt-2 mx-3 text-sm font-bold"
				>
					Утасны дугаар болон холбогдох холбоосыг бичнэ үү.
					(Жишээ: Viber, Wechat, WhatsApp, Line, Kakao talk гэх
					мэт...)
				</label>
				<input
					type="text"
					placeholder="Олон улсын гарах кодын хамт оруулаарай."
					value={formData.phone}
					name="name"
					onChange={e =>
						setFormData(formData => ({
							...formData,
							phone: e.target.value,
						}))
					}
					className="my-2"
					required
				/>
				<label
					htmlFor="address"
					className="mt-2 mx-3 text-sm font-bold"
				>
					Цахим хаяг
				</label>
				<input
					type="email"
					name="email"
					id="email"
					value={formData.email}
					onChange={e =>
						setFormData(formData => ({
							...formData,
							email: e.target.value,
						}))
					}
					className="my-2"
					placeholder="example@email.com"
					required
				/>
				<label
					htmlFor="address"
					className="mt-2 mx-3 text-sm font-bold"
				>
					Таны сонирхож буй хаус хотхон? Бичиж үлдээнэ үү.
				</label>
				<input
					type="text"
					placeholder="Хаус хотхоны нэр"
					value={formData.interest}
					name="interest"
					onChange={e =>
						setFormData(formData => ({
							...formData,
							interest: e.target.value,
						}))
					}
					className="my-2"
					required
				/>
				<label
					htmlFor="address"
					className="mt-2 mx-3 text-sm font-bold"
				>
					Оршин суугаа улс болон хот
				</label>
				<input
					type="text"
					name="address"
					id="address"
					value={formData.address}
					onChange={e =>
						setFormData(formData => ({
							...formData,
							address: e.target.value,
						}))
					}
					placeholder="Оршин суугаа улс, хотын нэр"
					className=" my-2 flex-1"
					required
				/>
				<label
					htmlFor="salary"
					className="mt-2 mx-3 text-sm font-bold"
				>
					Таны цалингийн хэмжээ
				</label>
				<input
					type="number"
					name="salary"
					id="salary"
					value={formData.salary}
					onChange={e =>
						setFormData(formData => ({
							...formData,
							salary: e.target.value,
						}))
					}
					placeholder="Тоогоор илэрхийлнэ үү."
					className="my-2 flex-1"
					required
				/>
				<label
					htmlFor="address"
					className="mt-2 mx-3 text-sm font-bold"
				>
					Цалингийн орлоготой бол ажлын нэр
				</label>
				<input
					type="text"
					name="business"
					id="business"
					value={formData.business}
					onChange={e =>
						setFormData(formData => ({
							...formData,
							business: e.target.value,
						}))
					}
					placeholder="Ажиллаж буй байгууллагын нэр"
					className=" my-2 flex-1"
					required
				/>
				<label
					htmlFor="description"
					className="mt-2 mx-3 text-sm font-bold"
				>
					Бизнесийн орлоготой бол үйл ажиллагааны товч
					танилцуулга
				</label>
				<textarea
					name="description"
					id="description"
					className="h-24 my-2"
					value={formData.description}
					onChange={e =>
						setFormData(formData => ({
							...formData,
							description: e.target.value,
						}))
					}
					placeholder="Танилцуулга"
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

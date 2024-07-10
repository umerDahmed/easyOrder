import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createQuery } from "../features/contact/contactSlice";

let contactSchema = yup.object({
	name: yup.string().required("First Name is Required"),
	email: yup
		.string()
		.required("Email is Required")
		.email("Email Should be valid"),
	mobile: yup.number().required().positive().integer("Mobile No is Required"),
	comment: yup.string().required("comments is Required"),
});

const Contact = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			mobile: "",
			comment: "",
		},
		validationSchema: contactSchema,
		onSubmit: (values) => {
			dispatch(createQuery(values));
		},
	});
	return (
		<>
			<Meta title={"Contact Us"} />
			<BreadCrumb title='Contact Us' />
			<Container class1='contact-wrapper py-5 home-wrapper-2'>
				<div className='row'>
					<div className='col-12 mt-5'>
						<div className='contact-inner-wrapper d-flex justify-content-between '>
							<div>
								<h3 className='contact-title mb-4'>Contact</h3>
								<form
									action=''
									onSubmit={formik.handleSubmit}
									className='d-flex flex-column gap-15'
								>
									<div>
										<input
											type='text'
											className='form-control'
											placeholder='Name'
											name='name'
											onChange={formik.handleChange("name")}
											onBlur={formik.handleBlur("name")}
											value={formik.values.name}
										/>
										<div className='error'>
											{formik.touched.name && formik.errors.name}
										</div>
									</div>

									<div>
										<input
											type='email'
											className='form-control'
											placeholder='Email'
											name='email'
											onChange={formik.handleChange("email")}
											onBlur={formik.handleBlur("email")}
											value={formik.values.email}
										/>
										<div className='error'>
											{formik.touched.email && formik.errors.email}
										</div>
									</div>
									<div>
										<input
											type='tel'
											className='form-control'
											placeholder='Mobile Number'
											name='mobile'
											onChange={formik.handleChange("mobile")}
											onBlur={formik.handleBlur("mobile")}
											value={formik.values.mobile}
										/>
										<div className='error'>
											{formik.touched.mobile && formik.errors.mobile}
										</div>
									</div>
									<div>
										<textarea
											id=''
											className='w-100 form-control'
											cols='30'
											rows='4'
											placeholder='Comments'
											name='comment'
											onChange={formik.handleChange("comment")}
											onBlur={formik.handleBlur("comment")}
											value={formik.values.comment}
										></textarea>
										<div className='error'>
											{formik.touched.comment && formik.errors.comment}
										</div>
									</div>
									<div>
										<button className='button border-0'>Submit</button>
									</div>
								</form>
							</div>
							<div>
								<h3 className='contact-title mb-4'>Get in touch with us</h3>
								<div>
									<ul className='ps-0'>
										<li className='mb-3 d-flex gap-15 align-items-center'>
											<AiOutlineHome className='fs-5' />
											<address className='mb-0'>
												Hno : First Lancer , Masab Tank Hyderabad,Telangana
											</address>
										</li>
										<li className='mb-3 d-flex gap-15 align-items-center'>
											<BiPhoneCall className='fs-5' />
											<a href='tel:+91 9949385723'>+91 9949385723</a>
										</li>
										<li className='mb-3 d-flex gap-15 align-items-center'>
											<AiOutlineMail className='fs-5' />
											<a href='mailto:umerahmed4aq@gmail.com'>
												umerahmed4aq@gmail.com
											</a>
										</li>
										<li className='mb-3 d-flex gap-15 align-items-center'>
											<BiInfoCircle className='fs-5' />
											<p className='mb-0'>Monday – Friday 10 AM – 8 PM</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Contact;

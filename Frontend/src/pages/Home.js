import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlilce";
import ReactStars from "react-rating-stars-component";

const Home = () => {
	const productState = useSelector((state) => state?.product?.product);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = () => {
		dispatch(getAllProducts());
	};

	return (
		<>
			<Container class1='home-wrapper-1 py-5'>
				<div className='row'>
					<div className='col-6'>
						<div className='main-banner position-relative '>
							<img
								src='images/main-banner-1.jpg'
								className='img-fluid rounded-3'
								alt='main banner'
							/>
							<div className='main-banner-content position-absolute'>
								<h4>SUPERCHARGED FOR PROS.</h4>
								<h5>iPad S13+ Pro.</h5>
								<p>From Rs. 81,900.00 </p>
								<Link className='button'>BUY NOW</Link>
							</div>
						</div>
					</div>
					<div className='col-6'>
						<div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
							<div className='small-banner position-relative'>
								<img
									src='images/catbanner-01.jpg'
									className='img-fluid rounded-3'
									alt='main banner'
								/>
								<div className='small-banner-content position-absolute'>
									<h4>Best Sake</h4>
									<h5>MacBook Pro.</h5>
									<p>
										From Rs. 1,29,900.00 <br />
									</p>
								</div>
							</div>
							<div className='small-banner position-relative'>
								<img
									src='images/catbanner-02.jpg'
									className='img-fluid rounded-3'
									alt='main banner'
								/>
								<div className='small-banner-content position-absolute'>
									<h4>NEW ARRIVAL</h4>
									<h5>But IPad Air</h5>
									<p>
										From Rs. 21,625.00 <br />
									</p>
								</div>
							</div>
							<div className='small-banner position-relative '>
								<img
									src='images/catbanner-03.jpg'
									className='img-fluid rounded-3'
									alt='main banner'
								/>
								<div className='small-banner-content position-absolute'>
									<h4>NEW ARRIVAL</h4>
									<h5>But IPad Air</h5>
									<p>
										From Rs. 41,900.00 <br />
									</p>
								</div>
							</div>
							<div className='small-banner position-relative '>
								<img
									src='images/catbanner-04.jpg'
									className='img-fluid rounded-3'
									alt='main banner'
								/>
								<div className='small-banner-content position-absolute'>
									<h4>NEW ARRIVAL</h4>
									<h5>But Headphone</h5>
									<p>
										From Rs. 41,000.00 <br />
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container class1='featured-wrapper py-5 home-wrapper-2'>
				<div className='row'>
					<div className='col-12'>
						<h3 className='section-heading'>Featured Collection</h3>
					</div>
					{productState &&
						productState?.map((item, index) => {
							if (item.tags === "featured") {
								return (
									<div key={index} className={"col-3"}>
										<div className='product-card position-relative'>
											<div className='wishlist-icon position-absolute'>
												<button className='border-0 bg-transparent'></button>
											</div>
											<div className='product-image'>
												<img
													src={item?.images[0]?.url}
													//className="img-fluid d"
													alt='product image'
													height={"250px"}
													width={"260px"}
													onClick={() => navigate("/product/" + item?._id)}
												/>
											</div>
											<div className='product-details'>
												<h6 className='brand'>{item?.brand}</h6>
												<h5 className='product-title'>
													{item?.title?.substr(0, 70) + "..."}
												</h5>
												<ReactStars
													count={5}
													size={24}
													value={item?.totalrating.toString()}
													edit={false}
													activeColor='#ffd700'
												/>

												<p className='price'>Rs. {item?.price}</p>
											</div>
											<div className='action-bar position-absolute'>
												<div className='d-flex flex-column gap-15'></div>
											</div>
										</div>
									</div>
								);
							}
						})}
				</div>
			</Container>

			<Container class1='famous-wrapper py-5 home-wrapper-2'>
				<div className='row'>
					<div className='col-3'>
						<div className='famous-card position-relative'>
							<img
								src='images/famous-1.webp'
								className='img-fluid'
								alt='famous'
							/>
							<div className='famous-content position-absolute'>
								<h5>Big Screen</h5>
								<h6>Smart Watch Series 7</h6>
								<p>From Rs. 399</p>
							</div>
						</div>
					</div>
					<div className='col-3'>
						<div className='famous-card position-relative'>
							<img
								src='images/famous-2.webp'
								className='img-fluid'
								alt='famous'
							/>
							<div className='famous-content position-absolute'>
								<h5 className='text-dark'>Studio Display</h5>
								<h6 className='text-dark'>600 nits of brightness.</h6>
								<p className='text-dark'>27-inch 5K Retina display</p>
							</div>
						</div>
					</div>
					<div className='col-3'>
						<div className='famous-card position-relative'>
							<img
								src='images/famous-3.webp'
								className='img-fluid'
								alt='famous'
							/>
							<div className='famous-content position-absolute'>
								<h5 className='text-dark'>smartphones</h5>
								<h6 className='text-dark'>Iphone 14 Pro.</h6>
								<p className='text-dark'>Now in Green. From Rs. 61,000.00</p>
							</div>
						</div>
					</div>
					<div className='col-3'>
						<div className='famous-card position-relative'>
							<img
								src='images/famous-3.webp'
								className='img-fluid'
								alt='famous'
							/>
							<div className='famous-content position-absolute'>
								<h5 className='text-dark'>home speakers</h5>
								<h6 className='text-dark'>Room-filling sound.</h6>
								<p className='text-dark'>From Rs. 699</p>
							</div>
						</div>
					</div>
				</div>
			</Container>

			<Container class1='special-wrapper py-5 home-wrapper-2'>
				<div className='row'>
					<div className='col-12'>
						<h3 className='section-heading'>Special Products</h3>
					</div>
				</div>
				<div className='row'>
					{productState &&
						productState?.map((item, index) => {
							if (item.tags === "special") {
								//console.log(item?._id);
								return (
									<SpecialProduct
										key={index}
										id={item?._id}
										title={item?.title}
										brand={item?.brand}
										totalrating={item?.totalrating.toString()}
										price={item?.price}
										img={item?.images[0].url}
										sold={item?.sold}
										quantity={item?.quantity}
									/>
								);
							}
						})}
				</div>
			</Container>
			<Container class1='popular-wrapper py-5 home-wrapper-2'>
				<div className='row'>
					<div className='col-12'>
						<h3 className='section-heading'>Our Popular Products</h3>
					</div>
				</div>
				<div className='row'>
					{productState &&
						productState?.map((item, index) => {
							if (item.tags === "popular") {
								return (
									<div key={index} className={"col-3"}>
										<div className='product-card position-relative'>
											<div className='wishlist-icon position-absolute'>
												<button className='border-0 bg-transparent'></button>
											</div>
											<div className='product-image'>
												<img
													src={item?.images[0].url}
													// className="img-fluid d"
													alt='product image'
													height={"250px"}
													width={"100%"}
													onClick={() => navigate("/product/" + item?._id)}
												/>
											</div>
											<div className='product-details'>
												<h6 className='brand'>{item?.brand}</h6>
												<h5 className='product-title'>
													{item?.title?.substr(0, 70) + "..."}
												</h5>
												<ReactStars
													count={5}
													size={24}
													value={item?.totalrating.toString()}
													edit={false}
													activeColor='#ffff'
												/>

												<p className='price'>Rs. {item?.price}</p>
											</div>
											<div className='action-bar position-absolute'>
												<div className='d-flex flex-column gap-15'>
													<button className='border-0 bg-transparent'>
														<img src={prodcompare} alt='compare' />
													</button>
													<button className='border-0 bg-transparent'>
														<img
															onClick={() => navigate("/product/" + item?._id)}
															src={view}
															alt='view'
														/>
													</button>
												</div>
											</div>
										</div>
									</div>
								);
							}
						})}
				</div>
			</Container>
			<Container class1='marque-wrapper home-wrapper-2 py-5'>
				<div className='row'>
					<div className='col-12'>
						<div className='marquee-inner-wrapper card-wrapper'>
							<Marquee className='d-flex'>
								<div className='mx-4 w-25'>
									<img src='images/brand-01.png' alt='brand' />
								</div>
								<div className='mx-4 w-25'>
									<img src='images/brand-02.png' alt='brand' />
								</div>
								<div className='mx-4 w-25'>
									<img src='images/brand-03.png' alt='brand' />
								</div>
								<div className='mx-4 w-25'>
									<img src='images/brand-04.png' alt='brand' />
								</div>
								<div className='mx-4 w-25'>
									<img src='images/brand-05.png' alt='brand' />
								</div>
								<div className='mx-4 w-25'>
									<img src='images/brand-06.png' alt='brand' />
								</div>
								<div className='mx-4 w-25'>
									<img src='images/brand-07.png' alt='brand' />
								</div>
								<div className='mx-4 w-25'>
									<img src='images/brand-08.png' alt='brand' />
								</div>
							</Marquee>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Home;

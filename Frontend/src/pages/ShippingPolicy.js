import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const ShippingPolicy = () => {
	return (
		<>
			<Meta title={"Shipping Policy"} />
			<BreadCrumb title='Shipping Policy' />
			<Container class1='policy-wrapper py-5 home-wrapper-2'>
				<div className='row'>
					<div className='col-12'>
						<div className='policy'>
							<h1>Shipping Policy</h1>

							<h2>Order Processing</h2>
							<p>
								All orders are processed within [1-3] business days. Orders are
								not shipped or delivered on weekends or holidays.
							</p>
							<p>
								If we are experiencing a high volume of orders, shipments may be
								delayed by a few days. Please allow additional days in transit
								for delivery. If there will be a significant delay in the
								shipment of your order, we will contact you via email or
								telephone.
							</p>

							<h2>Shipping Rates & Delivery Estimates</h2>
							<p>
								Shipping charges for your order will be calculated and displayed
								at checkout.
							</p>
							<ul>
								<li>
									<strong>Standard Shipping:</strong> [Cost] – [Estimated
									Delivery Time]
								</li>
								<li>
									<strong>Expedited Shipping:</strong> [Cost] – [Estimated
									Delivery Time]
								</li>
								<li>
									<strong>Overnight Shipping:</strong> [Cost] – [Estimated
									Delivery Time]
								</li>
							</ul>
							<p>Delivery delays can occasionally occur.</p>

							<h2>Shipment to P.O. Boxes or APO/FPO Addresses</h2>
							<p>
								[Your Company Name] ships to addresses within the U.S., U.S.
								Territories, and APO/FPO/DPO addresses.
							</p>

							<h2>Shipment Confirmation & Order Tracking</h2>
							<p>
								You will receive a Shipment Confirmation email once your order
								has shipped containing your tracking number(s). The tracking
								number will be active within 24 hours.
							</p>

							<h2>Customs, Duties, and Taxes</h2>
							<p>
								[Your Company Name] is not responsible for any customs and taxes
								applied to your order. All fees imposed during or after shipping
								are the responsibility of the customer (tariffs, taxes, etc.).
							</p>

							<h2>Damages</h2>
							<p>
								[Your Company Name] is not liable for any products damaged or
								lost during shipping. If you received your order damaged, please
								contact the shipment carrier to file a claim.
							</p>
							<p>
								Please save all packaging materials and damaged goods before
								filing a claim.
							</p>

							<h2>International Shipping Policy</h2>
							<p>We currently do not ship outside the U.S.</p>

							<h2>Returns Policy</h2>
							<p>
								Our Return & Refund Policy provides detailed information about
								options and procedures for returning your order.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default ShippingPolicy;

import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPloicy = () => {
	return (
		<>
			<Meta title={"Refund Policy"} />
			<BreadCrumb title='Refund Policy' />
			<Container class1='policy-wrapper py-5 home-wrapper-2'>
				<div className='row'>
					<div className='col-12'>
						<div className='policy'>
							<h1>Refund Policy</h1>

							<h2>1. Refund Eligibility</h2>
							<p>1.1 Items must be returned within 30 days of receipt.</p>
							<p>
								1.2 To be eligible for a refund, the item must be unused and in
								the same condition that you received it. It must also be in the
								original packaging.
							</p>
							<p>
								1.3 Certain types of goods are exempt from being returned,
								including:
							</p>
							<ul>
								<li>Perishable goods (e.g., food, flowers)</li>
								<li>Intimate or sanitary goods</li>
								<li>Hazardous materials</li>
								<li>Flammable liquids or gases</li>
								<li>Gift cards</li>
								<li>Downloadable software products</li>
								<li>Some health and personal care items</li>
							</ul>

							<h2>2. Initiating a Refund</h2>
							<p>
								2.1 To initiate a return, contact our customer service team at{" "}
								<a href='mailto:customer.service@example.com'>
									customer.service@example.com
								</a>{" "}
								with your order number and reason for return.
							</p>
							<p>
								2.2 Once your return request is approved, you will receive a
								return authorization and instructions on how to send your item
								back to us.
							</p>

							<h2>3. Processing Refunds</h2>
							<p>
								3.1 Once your return is received and inspected, we will notify
								you of the approval or rejection of your refund.
							</p>
							<p>
								3.2 If approved, your refund will be processed, and a credit
								will automatically be applied to your original method of payment
								within 7-10 business days.
							</p>

							<h2>4. Late or Missing Refunds</h2>
							<p>
								4.1 If you haven’t received a refund yet, first check your bank
								account again.
							</p>
							<p>
								4.2 Then contact your credit card company; it may take some time
								before your refund is officially posted.
							</p>
							<p>
								4.3 Next, contact your bank. There is often some processing time
								before a refund is posted.
							</p>
							<p>
								4.4 If you’ve done all of this and you still have not received
								your refund yet, please contact us at{" "}
								<a href='mailto:customer.service@example.com'>
									customer.service@example.com
								</a>
								.
							</p>

							<h2>5. Shipping Costs</h2>
							<p>
								5.1 You will be responsible for paying for your own shipping
								costs for returning your item. Shipping costs are
								non-refundable.
							</p>
							<p>
								5.2 If you receive a refund, the cost of return shipping will be
								deducted from your refund.
							</p>

							<h2>6. Exchanges</h2>
							<p>
								6.1 We only replace items if they are defective or damaged. If
								you need to exchange it for the same item, contact us at{" "}
								<a href='mailto:customer.service@example.com'>
									customer.service@example.com
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default RefundPloicy;

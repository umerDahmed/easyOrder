import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndContions = () => {
	return (
		<>
			<Meta title={"Term And Conditions"} />
			<BreadCrumb title='Term And Conditions' />
			<Container className='policy-wrapper py-5 home-wrapper-2'>
				<div className='row'>
					<div className='col-12'>
						<div className='policy'>
							<h1>Terms and Conditions</h1>

							<h2>Introduction</h2>
							<p>
								Welcome to Easy Order. These Terms and Conditions ("Terms")
								govern your use of the Easy Order website and services
								(collectively referred to as the "Service"). By accessing or
								using the Service, you agree to be bound by these Terms. If you
								do not agree with any part of these Terms, you may not access
								the Service.
							</p>

							<h2>Use of Our Website</h2>
							<p>
								By using our Site, you represent that you are at least the age
								of majority in your state or province of residence, or that you
								are the age of majority in your state or province of residence
								and you have given us your
							</p>

							<h2>Account Registration</h2>
							<p>
								To access certain features of the Service, you may be required
								to register for an account. You agree to provide accurate,
								current, and complete information during the registration
								process and to update such information to keep it accurate,
								current, and complete.
							</p>
							<p>
								Account Security: You are responsible for maintaining the
								confidentiality of your account login information and are fully
								responsible for all activities that occur under your account.
								You agree to immediately notify us of any unauthorized use, or
								suspected unauthorized use, of your account or any other breach
								of security.
							</p>

							<h2>Orders and Purchases</h2>
							<p>
								Product Availability: All orders are subject to product
								availability. We may, in our sole discretion, limit or cancel
								the quantities offered on our Site or limit the sales of our
								products or services to any person, household, geographic
								region, or jurisdiction.
							</p>
							<p>
								Pricing and Payment: Prices for products are subject to change
								without notice. We reserve the right to refuse or cancel any
								order at any time for reasons including but not limited to
								product or service availability, errors in the description or
								price of the product or service, or payment issues.
							</p>
							<p>
								Shipping: Our shipping policies are detailed in our Shipping
								Policy, which forms part of these Terms and Conditions.
							</p>

							<h2>User Content</h2>
							<p>
								Content: Users may post reviews, comments, and other content on
								the Service ("User Content"). You are solely responsible for
								your User Content and the consequences of posting or publishing
								it.
							</p>
							<p>
								Rights to User Content: By posting User Content on the Service,
								you grant us a perpetual, irrevocable, worldwide, royalty-free,
								and non-exclusive license to use, distribute, reproduce, modify,
								adapt, publicly perform, and publicly display such User Content.
							</p>

							<h2>Intellectual Property</h2>
							<p>
								Ownership: The Service and its original content, features, and
								functionality are and will remain the exclusive property of Easy
								Order and its licensors. The Service is protected by copyright,
								trademark, and other laws of [Country/Region].
							</p>
							<p>
								License: We grant you a limited, non-exclusive,
								non-transferable, and revocable license to access and use the
								Service for your personal, non-commercial use.
							</p>

							<h2>Limitation of Liability</h2>
							<p>
								Disclaimer: The Service is provided on an "as-is" and "as
								available" basis. Easy Order makes no representations or
								warranties of any kind, express or implied, regarding the
								Service or the information, content, materials, or products
								included on the Service.
							</p>
							<p>
								Limitation: In no event shall Easy Order, its directors,
								officers, employees, or agents be liable to you or any third
								party for any direct, indirect, consequential, exemplary,
								incidental, special, or punitive damages arising out of or in
								connection with your use of the Service, whether based on
								warranty, contract, tort (including negligence), or any other
								legal theory, even if advised of the possibility of such
								damages.
							</p>

							<h2>Governing Law</h2>
							<p>
								These Terms and Conditions shall be governed by and construed in
								accordance with the laws of [Country/Region], without regard to
								its conflict of law principles.
							</p>

							<h2>Changes to Terms and Conditions</h2>
							<p>
								We reserve the right, at our sole discretion, to modify or
								replace these Terms and Conditions at any time. If a revision is
								material, we will provide at least [number] days' notice prior
								to any new terms taking effect. What constitutes a material
								change will be determined at our sole discretion.
							</p>

							<h2>Contact Us</h2>
							<p>
								If you have any questions about these Terms and Conditions,
								please contact us at [Contact Email].
							</p>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default TermAndContions;

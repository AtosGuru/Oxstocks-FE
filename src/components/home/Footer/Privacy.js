import React, { Fragment, useEffect } from 'react';
import '../../../assets/css/Footer/Privacy.scss';
import Nav from '../../include/Nav';
import { Link } from 'react-router-dom';
import Resbtn from '../../include/Resbtn';

const Privacy = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
        return (
            <Fragment>
                <div className="privacy_section_1">
                    <div className="container">
                        <div id="nav_box1" style={{display: "flex", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                            <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "20%", left: "0" }} /></Link>
                            <Nav />
                        </div>
                        <div id="nav_box2" style={{display: "none", justifyContent: "flex-end", alignItems: "center", position: "relative"}}>
                            <Link to="/"><img className="img-fluid" src="assets/img/index/logo.png" width="200" height="30" alt="" style={{ position: "absolute", top: "40%", left: "0" }} /></Link>
                            {/* <Link to="" className="nav-link navbar_rightbox" href="#" >
                            &nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Iconawesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account
                                
                            </Link> */}
                            <Resbtn />
                        </div>
                    </div>
                </div>
                <div className="privacy_section_2">
                    <div className="container">
                        <p className="privacy_title">Privacy</p>
                        <div className="panel1">
                            <p className="privacy_title">1. We respect your privacy</p>
                            <p className="privacy_subtitle">(a) OX STOCKS PTY LTD respects your right to privacy and is committed to safeguarding the privacy of our customers and website visitors. We adhere to the Australian Privacy Principles contained in the Privacy Act 1988 (Cth). This policy sets out how we collect and treat your personal information.</p>
                            <p className="privacy_subtitle">(b) "Personal information" is information we hold which is identifiable as being about you.</p>
                        </div>
                        <div className="panel2">
                            <p className="privacy_title">2. Collection of personal information</p>
                            <p className="privacy_subtitle">(a) OX STOCKS PTY LTD will, from time to time, receive and store personal information you enter onto our website, provided to us directly or given to us in other forms.</p>
                            <p className="privacy_subtitle">(b) You may provide basic information such as your name, phone number, address and email address to enable us to send information, provide updates and process your product or service order. We may collect additional information at other times, including but not limited to, when you provide feedback, when you provide information about your personal or business affairs, change your content or email preference, respond to surveys and/or promotions, provide financial or credit card information, or communicate with our customer support.</p>
                            <p className="privacy_subtitle">(c) Additionally, we may also collect any other information you provide while interacting with us.</p>
                        </div>
                        <div className="panel3">
                            <p className="privacy_title">3. How we collect your personal information</p>
                            <p className="privacy_subtitle">(a) OX STOCKS PTY LTD collects personal information from you in a variety of ways, including when you interact with us electronically or in person, when you access our website and when we provide our services to you. We may receive personal information from third parties. If we do, we will protect it as set out in this Privacy Policy.</p>
                        </div>
                        <div className="panel4">
                            <p className="privacy_title">4. Use of your personal information</p>
                            <p className="privacy_subtitle">(a) OX STOCKS PTY LTD may use personal information collected from you to provide you with information, updates and our services. We may also make you aware of new and additional products, services and opportunities available to you. We may use your personal information to improve our products and services and better understand your needs.</p>
                            <p className="privacy_subtitle">(b) OX STOCKS PTY LTD may contact you by a variety of measures including, but not limited to telephone, email, sms or mail.</p>
                        </div>
                        <div className="panel5">
                            <p className="privacy_title">5. Disclosure of your personal information</p>
                            <p className="privacy_subtitle">(a) We may disclose your personal information to any of our employees, officers, insurers, professional advisers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in this Policy. Personal information is only supplied to a third party when it is required for the delivery of our services.</p>
                            <p className="privacy_subtitle">(b) We may from time to time need to disclose personal information to comply with a legal requirement, such as a law, regulation, court order, subpoena, warrant, in the course of a legal proceeding or in response to a law enforcement agency request.</p>
                            <p className="privacy_subtitle">(c) We may also use your personal information to protect the copyright, trademarks, legal rights, property or safety of OX STOCKS PTY LTD, oxstocks.com, its customers or third parties.</p>
                            <p className="privacy_subtitle">(d) Information that we collect may from time to time be stored, processed in or transferred between parties located in countries outside of Australia.</p>
                            <p className="privacy_subtitle">(e) If there is a change of control in our business or a sale or transfer of business assets, we reserve the right to transfer to the extent permissible at law our user databases, together with any personal information and non-personal information contained in those databases. This information may be disclosed to a potential purchaser under an agreement to maintain confidentiality. We would seek to only disclose information in good faith and where required by any of the above circumstances.</p>
                            <p className="privacy_subtitle">(f) By providing us with personal information, you consent to the terms of this Privacy Policy and the types of disclosure covered by this Policy. Where we disclose your personal information to third parties, we will request that the third party follow this Policy regarding handling your personal information.</p>
                        </div>
                        <div className="panel6">
                            <p className="privacy_title">6. Security of your personal information</p>
                            <p className="privacy_subtitle">(a) OX STOCKS PTY LTD is committed to ensuring that the information you provide to us is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure information and protect it from misuse, interference, loss and unauthorised access, modification and disclosure.</p>
                            <p className="privacy_subtitle">(b) The transmission and exchange of information is carried out at your own risk. We cannot guarantee the security of any information that you transmit to us, or receive from us. Although we take measures to safeguard against unauthorised disclosures of information, we cannot assure you that personal information that we collect will not be disclosed in a manner that is inconsistent with this Privacy Policy.</p>
                        </div>
                        <div className="panel7">
                            <p className="privacy_title">7. Access to your personal information</p>
                            <p className="privacy_subtitle">(a) You may request details of personal information that we hold about you in accordance with the provisions of the Privacy Act 1988 (Cth). A small administrative fee may be payable for the provision of information. If you would like a copy of the information, which we hold about you or believe that any information we hold on you is inaccurate, out of date, incomplete, irrelevant or misleading, please email us at info@oxstocks.com.</p>
                            <p className="privacy_subtitle">(b) We reserve the right to refuse to provide you with information that we hold about you, in certain circumstances set out in the Privacy Act.</p>
                        </div>
                        <div className="panel8">
                            <p className="privacy_title">8. Complaints about privacy</p>
                            <p className="privacy_subtitle">(a) If you have any complaints about our privacy practises, please feel free to send in details of your complaints to Po Box 33 Sylvania, New South Wales, 2224. We take complaints very seriously and will respond shortly after receiving written notice of your complaint.</p>
                        </div>
                        <div className="panel9">
                            <p className="privacy_title">9. Changes to Privacy Policy</p>
                            <p className="privacy_subtitle">(a) Please be aware that we may change this Privacy Policy in the future. We may modify this Policy at any time, in our sole discretion and all modifications will be effective immediately upon our posting of the modifications on our website or notice board. Please check back from time to time to review our Privacy Policy.</p>
                        </div>
                        <div className="panel10">
                            <p className="privacy_title">10. Website</p>
                            <p className="privacy_subtitle_p">(a) When you visit our website</p>
                            <p className="privacy_subtitle">When you come to our website (oxstocks.com) we may collect certain information such as browser type, operating system, website visited immediately before coming to our site, etc. This information is used in an aggregated manner to analyse how people use our site, such that we can improve our service.</p>

                            <p className="privacy_subtitle_p">(b) Cookies</p>
                            <p className="privacy_subtitle">We may from time to time use cookies on our website. Cookies are very small files which a website uses to identify you when you come back to the site and to store details about your use of the site. Cookies are not malicious programs that access or damage your computer. Most web browsers automatically accept cookies but you can choose to reject cookies by changing your browser settings. However, this may prevent you from taking full advantage of our website. Our website may from time to time use cookies to analyses website traffic and help us provide a better website visitor experience. In addition, cookies may be used to serve relevant ads to website visitors through third party services such as Google Adwords. These ads may appear on this website or other websites you visit.</p>

                            <p className="privacy_subtitle_p">(c) Third party sites</p>
                            <p className="privacy_subtitle">Our site may from time to time have links to other websites not owned or controlled by us. These links are meant for your convenience only. Links to third party websites do not constitute sponsorship or endorsement or approval of these websites. Please be aware that OX STOCKS PTY LTD is not responsible for the privacy practises of other such websites. We encourage our users to be aware, when they leave our website, to read the privacy statements of each and every website that collects personal identifiable information.</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}

export default Privacy;
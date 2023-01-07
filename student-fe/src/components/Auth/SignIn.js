import React, { useState } from 'react';
import {Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {signin} from '../../redux/action/authAction';
import {useNavigate} from 'react-router-dom';

let SignIn = ({
    auth , error , signin
}) => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const navigate = useNavigate();

    return (
        <section id = 'pricing' className = 'pricing'>
            <Row>
                <div className="col-lg-6 col-md-6 mt-4 m-auto">
                    <div className="box featured" data-aos="zoom-in" data-aos-delay="100">
                    <h3>Sign In</h3>
                    {/* <h4><sup>$</sup>19<span> / month</span></h4>
                    <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li className="na">Massa ultricies mi</li>
                    </ul> */}
                    <form  method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-12 form-group mt-3 mt-md-3">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required
                                value = {email}
                                onChange  = {e => setEmail(e.target.value)}
                            />
                            <span>{error.errors.user?error.errors.user:""}</span>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="Your Password"
                                value = {password}
                                onChange = {e => setPassword(e.target.value)}
                                required
                            />
                            <span>{error.errors.password?error.errors.password:""}</span>
                        </div>
                    </form>
                    <div className="btn-wrap" onClick={() => signin({email , password} , navigate)}>
                        <a href="#" className="btn-buy">Sign In</a>
                    </div>
                    </div>
                </div>
            </Row>
        </section>

    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
});

SignIn = connect(mapStateToProps , {signin})(SignIn);

export {SignIn};

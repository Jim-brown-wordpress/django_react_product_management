import React, { useState } from 'react';
import {Row} from 'react-bootstrap';
import { connect } from 'react-redux';
import { signup } from '../../redux/action/authAction';

let SingUp = ({
    auth,
    error,
    signup
}) => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    return (
        <section id = 'pricing' className = 'pricing'>
            <Row>
                <div className="col-lg-6 col-md-6 mt-4 m-auto">
                    <div className="box featured" data-aos="zoom-in" data-aos-delay="100">
                    <h3>Sign Up</h3>
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
                            <div className="col-md-12 form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                required
                                value = {name}
                                onChange = {e => setName(e.target.value)}
                            />
                            {
                                error.errors.name?
                                <span>{error.errors.name}</span>
                                :
                                ""
                            }
                            </div>
                            <div className="col-md-12 form-group mt-3 mt-md-3">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                required
                                value = {email}
                                onChange = {e => setEmail(e.target.value)}
                            />
                            {
                                error.errors.email?
                                <span>{error.errors.email}</span>
                                :
                                ""
                            }
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input
                                type="password"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Your Password"
                                required
                                value = {password}
                                onChange = {e => setPassword(e.target.value)}
                            />
                            {
                                error.errors.password?
                                <span>{error.errors.password}</span>
                                :
                                ""
                            }
                        </div>
                    </form>
                    <div className="btn-wrap" onClick={e => signup({name , email , password})}>
                        <a href="#" className="btn-buy">Sign Up</a>
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
})

SingUp = connect(mapStateToProps , {signup})(SingUp);

export {SingUp};

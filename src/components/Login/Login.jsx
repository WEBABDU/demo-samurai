import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth_reducer";
import { requared } from "../../utils/validators/validators";
import { createField, Input } from "../cammon/FormsControl/formsControl";
import s from "./../cammon/FormsControl/formsControl.module.css";

const LoginForm = (props) => {
  return (
    <form className={s.loginForm} onSubmit={props.handleSubmit}>
      {createField("login", "email", Input, [requared], {
        type: "text",
        className: s.authInput,
      })}
      {createField("password", "password", Input, [requared], {
        type: "password",
        className: s.authInput,
      })}
      {createField(null, "rememberMe", Input, null, { type: "checkbox" })}

      {props.error && <div className={s.formSummaryError}>{props.error}</div>}

      <div>
        <button className={s.formButton}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  let onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);

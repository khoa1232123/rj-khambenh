import CIcon from "@coreui/icons-react";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { authActionCreators } from "src/redux";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [visibleError, setVisibleError] = useState(0);

  const { message } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { register } = bindActionCreators(authActionCreators, dispatch);

  useEffect(() => {
    if (message !== "") {
      setErrorMsg(message);
      setVisibleError(10);
    }
  }, [message]);

  const handleClick = () => {
    if (username === "") {
      setErrorMsg("Username không được để trống!");
      setVisibleError(10);
      return;
    }
    if (email === "") {
      setErrorMsg("Email không được để trống!");
      setVisibleError(10);
      return;
    }
    if (password === "") {
      setErrorMsg("Password không được để trống!");
      setVisibleError(10);
      return;
    }
    if (password.length < 6) {
      setErrorMsg("Password ít nhất phải 6 ký tự!");
      setVisibleError(10);
      return;
    }
    if (password !== verifyPassword) {
      setErrorMsg("Confirm password không khớp!");
      setVisibleError(10);
      return;
    }
    if (password === verifyPassword && password !== "") {
      register({ email, username, password });
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>

                  <CAlert
                    color="danger"
                    show={visibleError}
                    closeButton
                    onShowChange={setVisibleError}
                  >
                    {errorMsg}
                  </CAlert>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                      onChange={(e) => setVerifyPassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CButton color="success" block onClick={handleClick}>
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block>
                      <span>twitter</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;

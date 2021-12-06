import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputFile,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import dateFormat from "dateformat";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import { userActionCreators } from "src/redux";

const UpdateUser = () => {
  const FE = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useLocation();
  const history = useHistory();
  const [updateUser, setUpdateUser] = useState(user);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const { updateUser: updateUserAction } = bindActionCreators(
    userActionCreators,
    dispatch
  );

  if (!user) {
    history.push("/users");
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUpdateUser({ ...updateUser, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    updateUserAction(updateUser, image);
  };

  console.log(dateFormat(updateUser.birth));

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>Update User</CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Username</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="username"
                      name="username"
                      placeholder="Username"
                      disabled
                      value={updateUser.username || ""}
                      onChange={handleChange}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Email</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="email"
                      name="email"
                      placeholder="Email"
                      disabled
                      value={updateUser.email || ""}
                      onChange={handleChange}
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">First Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={updateUser.firstName || ""}
                      onChange={handleChange}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Last Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={updateUser.lastName || ""}
                      onChange={handleChange}
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Birth day</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="date"
                      id="birth"
                      name="birth"
                      placeholder="Birth day"
                      value={
                        (updateUser.birth &&
                          dateFormat(updateUser.birth, "yyyy-mm-dd")) ||
                        ""
                      }
                      onChange={handleChange}
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectLg">Gender</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      custom
                      name="gender"
                      id="gender"
                      onChange={handleChange}
                      defaultValue={updateUser.gender || ""}
                    >
                      <option value="">Please select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CLabel col md="3">
                    File input
                  </CLabel>
                  <CCol xs="12" md="9">
                    <CLabel
                      style={{
                        maxWidth: "50%",
                        border: "1px solid #d8dbe0",
                        padding: 2,
                        borderRadius: "5px",
                      }}
                      htmlFor="file-input"
                    >
                      <img
                        src={
                          image
                            ? URL.createObjectURL(image)
                            : user.avatar
                            ? FE + user.avatar
                            : "avatars/no-avatar.png"
                        }
                        alt=""
                        style={{ maxWidth: "100%" }}
                      />
                    </CLabel>
                    <CInputFile
                      id="file-input"
                      name="file-input"
                      onChange={(e) => setImage(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton
                type="submit"
                size="sm"
                color="success"
                onClick={handleClick}
              >
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default UpdateUser;

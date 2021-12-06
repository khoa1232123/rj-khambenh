import React, { useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

// import usersData from "./UsersData";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "src/redux/action-creators";
import { useHistory } from "react-router-dom";

const User = ({ match }) => {
  const FE = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUser(match.params.id));
  }, [dispatch, match]);

  console.log(user);

  const userDetails = user
    ? Object.entries(user)
    : [
        [
          "id",
          <span>
            <CIcon className="text-muted" name="cui-icon-ban" /> Not found
          </span>,
        ],
      ];

  const handleUpdate = (e) => {
    e.preventDefault();
    history.push({ pathname: "/users/update/" + user._id, user: user });
  };

  return (
    <CRow>
      <CCol
        lg={12}
        style={{
          marginBottom: 20,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CButton color="success" onClick={handleUpdate}>
          Update
        </CButton>
      </CCol>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>User id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {userDetails.map(([key, value], index) => {
                  return (
                    <tr key={index.toString()}>
                      <td style={{ width: "30%" }}>{`${key}:`}</td>
                      <td>
                        <strong>
                          {key === "avatar" ? (
                            <img
                              src={FE + value}
                              alt=""
                              style={{ maxWidth: "50%" }}
                            />
                          ) : (
                            value
                          )}
                        </strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;

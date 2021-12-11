import {
  CButton,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { randomMaso } from "src/helpers";
import { getKhoas, createKhoa, updateKhoa } from "src/redux/action-creators";

const ModalKhoa = ({ modal, setModal, oldKhoa }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKhoas());
  }, [dispatch]);

  const [khoa, setKhoa] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setKhoa({ ...khoa, [name]: value });
  };

  useEffect(() => {
    if (oldKhoa) {
      setKhoa(oldKhoa);
    }
  }, [oldKhoa]);

  const handleClick = () => {
    console.log({ khoa, oldKhoa });
    if (khoa.ten !== "") {
      if (Object.keys(oldKhoa).length === 0) {
        khoa["mso"] = randomMaso("ka");

        dispatch(createKhoa(khoa));
      } else {
        dispatch(updateKhoa(khoa));
      }
      setKhoa({});
      setModal(false);
    }
  };

  const closeModal = () => {
    setKhoa({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Khoa</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Title</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ten"
                name="ten"
                placeholder="Tên Khoa"
                value={khoa.ten || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={handleClick}>
          Do Something
        </CButton>{" "}
        <CButton color="secondary" onClick={closeModal}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ModalKhoa;

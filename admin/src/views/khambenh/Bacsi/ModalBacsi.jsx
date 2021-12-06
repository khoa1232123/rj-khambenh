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
  CSelect,
  CTextarea,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderGioitinh } from "src/helpers";
import { randomMaso } from "src/helpers";
import { renderKhoa } from "src/helpers/renderKhoa";
import {
  getBacsis,
  createBacsi,
  updateBacsi,
  getKhoas,
} from "src/redux/action-creators";

const ModalBacsi = ({ modal, setModal, oldBacsi }) => {
  const dispatch = useDispatch();

  const { khoas } = useSelector((state) => state.khoa);

  useEffect(() => {
    dispatch(getBacsis());
    dispatch(getKhoas());
  }, [dispatch]);

  const [bacsi, setBacsi] = useState({});

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setBacsi({ ...bacsi, [name]: value });
  };

  useEffect(() => {
    if (oldBacsi) {
      setBacsi(oldBacsi);
    }
  }, [oldBacsi]);

  const handleClick = () => {
    console.log({ bacsi, oldBacsi });
    if (bacsi.ten !== "") {
      if (Object.keys(oldBacsi).length === 0) {
        bacsi["mso"] = randomMaso("bs");

        dispatch(createBacsi(bacsi));
      } else {
        dispatch(updateBacsi(bacsi));
      }
      setBacsi({});
      dispatch(getBacsis());
      setModal(false);
    }
  };

  const closeModal = () => {
    setBacsi({});
    setModal(false);
  };

  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Bacsi</CModalTitle>
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
                placeholder="Tên Bacsi"
                value={bacsi.ten || ""}
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
                value={bacsi.email || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Số điện thoại</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="sodienthoai"
                name="sodienthoai"
                placeholder="Số Điện Thoại"
                value={bacsi.sodienthoai || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Giới tính</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect
                id="gioitinh"
                name="gioitinh"
                value={bacsi.gioitinh || ""}
                onChange={handleChange}
              >
                {renderGioitinh()}
              </CSelect>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Địa chỉ</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="diachi"
                name="diachi"
                placeholder="Địa chỉ"
                value={bacsi.diachi || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Khoa</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect
                id="khoa"
                name="khoa"
                value={bacsi.khoa || ""}
                onChange={handleChange}
              >
                {renderKhoa(khoas)}
              </CSelect>
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

export default ModalBacsi;

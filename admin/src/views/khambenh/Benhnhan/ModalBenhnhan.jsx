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
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomMaso } from "src/helpers";
import { renderKhoa } from "src/helpers/renderKhoa";
import {
  createBenhnhan,
  getBenhnhans,
  getKhoas,
  updateBenhnhan,
} from "src/redux/action-creators";

const ModalBenhnhan = ({ modal, setModal, oldBenhnhan }) => {
  const dispatch = useDispatch();

  const { khoas } = useSelector((state) => state.khoa);

  useEffect(() => {
    dispatch(getBenhnhans());
    dispatch(getKhoas());
  }, [dispatch]);

  const [benhnhan, setBenhnhan] = useState({});

  const handleChange = (e) => {
    console.log(benhnhan);
    const name = e.target.name;
    const value = e.target.value;
    setBenhnhan({ ...benhnhan, [name]: value });
  };

  useEffect(() => {
    if (oldBenhnhan) {
      setBenhnhan(oldBenhnhan);
    }
  }, [oldBenhnhan]);

  const handleClick = () => {
    console.log({ benhnhan, oldBenhnhan });
    if (benhnhan.ten !== "") {
      if (Object.keys(oldBenhnhan).length === 0) {
        benhnhan["mso"] = randomMaso("bn");

        dispatch(createBenhnhan(benhnhan));
      } else {
        dispatch(updateBenhnhan(benhnhan));
      }
      setBenhnhan({});
      setModal(false);
    }
  };

  const closeModal = () => {
    setBenhnhan({});
    setModal(false);
  };
  return (
    <CModal show={modal} onClose={closeModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Benhnhan</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Họ tên</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ten"
                name="ten"
                required
                placeholder="Tên Benhnhan"
                value={benhnhan.ten || ""}
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
                required
                placeholder="Email"
                value={benhnhan.email || ""}
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
                required
                placeholder="Số Điện Thoại"
                value={benhnhan.sodienthoai || ""}
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
                value={benhnhan.gioitinh || ""}
                onChange={handleChange}
              >
                <option value="">--Select Options--</option>
                <option value="nam">Nam</option>
                <option value="nu">Nữ</option>
                <option value="khac">Khác</option>
              </CSelect>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Ngày sinh</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ngaysinh"
                type="date"
                name="ngaysinh"
                placeholder="Ngày sinh"
                value={benhnhan.ngaysinh || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Ngày tạo hồ sơ</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="ngaylap"
                type="date"
                name="ngaylap"
                placeholder="Ngày tạo hồ sơ"
                value={benhnhan.ngaylap || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Ngày hết hạn</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="hethan"
                type="date"
                name="hethan"
                placeholder="Ngày hết hạn"
                value={benhnhan.hethan || ""}
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

export default ModalBenhnhan;

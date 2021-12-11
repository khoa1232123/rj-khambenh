import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { formatDate } from "src/helpers";
import { getBenhnhans, deleteBenhnhan } from "src/redux/action-creators";
import ModalBenhnhan from "./ModalBenhnhan";

const Benhnhan = () => {
  const dispatch = useDispatch();
  const [oldBenhnhan, setOldBenhnhan] = useState({});
  const [modal, setModal] = useState(false);

  const { benhnhans } = useSelector((state) => state.benhnhan);

  useEffect(() => {
    dispatch(getBenhnhans());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setOldBenhnhan(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteBenhnhan(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  console.log(benhnhans);

  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Posts</span>
              <CButton color="success" onClick={handleClick}>
                Add Post
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={benhnhans}
                fields={[
                  "Mã Số",
                  "Họ Tên",
                  "email",
                  "Số điện thoại",
                  "Giới tính",
                  "Ngày sinh",
                  "Ngày tạo hồ sơ",
                  "Ngày hết hạn",
                  "actions",
                ]}
                striped
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  "Mã Số": (item) => <td>{item.mso}</td>,
                  "Họ Tên": (item) => <td>{item.ten}</td>,
                  "Số điện thoại": (item) => <td>{item.sodienthoai}</td>,
                  "Giới tính": (item) => <td>{item.gioitinh}</td>,
                  "Ngày sinh": (item) => <td>{formatDate(item.ngaysinh)}</td>,
                  "Ngày tạo hồ sơ": (item) => (
                    <td>{formatDate(item.ngaylap)}</td>
                  ),
                  "Ngày hết hạn": (item) => <td>{formatDate(item.hethan)}</td>,
                  actions: (item) => (
                    <td>
                      <CButton
                        color="warning"
                        onClick={(e) => handleUpdate(item)}
                      >
                        Edit
                      </CButton>{" "}
                      <CButton
                        color="danger"
                        onClick={(e) => handleDelete(item)}
                      >
                        Delete
                      </CButton>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <ModalBenhnhan
        modal={modal}
        setModal={setModal}
        oldBenhnhan={oldBenhnhan}
      />
    </>
  );
};

export default Benhnhan;

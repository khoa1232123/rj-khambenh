import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CLink,
  CRow,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { formatDate } from "src/helpers";
import { getBacsis } from "src/redux/action-creators";
import ModalBacsi from "./ModalBacsi";
// import PostForm from "./PostForm";

const Bacsi = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [oldBacsi, setOldBacsi] = useState({});

  const { bacsis } = useSelector((state) => state.bacsi);

  useEffect(() => {
    dispatch(getBacsis());
  }, [dispatch]);

  console.log(bacsis);

  const handleUpdate = (item) => {
    setOldBacsi(item);
  };

  const handleDelete = (item) => {};

  const handleClick = () => {
    setModal(true);
  };

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
                items={bacsis}
                fields={[
                  "Mã Số",
                  "Tên bác sĩ",
                  "Số Điện Thoại",
                  "email",
                  "Địa Chỉ",
                  "Giới tính",
                  "Ngày Sinh",
                  "Khoa",
                  "actions",
                ]}
                striped
                itemsPerPage={30}
                pagination
                scopedSlots={{
                  "Mã Số": (item) => <td>{item.mso}</td>,
                  "Tên bác sĩ": (item) => <td>{item.ten}</td>,
                  "Số Điện Thoại": (item) => <td>{item.sodienthoai}</td>,
                  "Địa Chỉ": (item) => <td>{item.diachi}</td>,
                  "Giới tính": (item) => <td>{item.gioitinh}</td>,
                  "Ngày Sinh": (item) => <td>{formatDate(item.ngaysinh)}</td>,
                  Khoa: (item) => <td>{item.khoa ? item.khoa.ten : ""}</td>,
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
      <ModalBacsi modal={modal} setModal={setModal} oldBacsi={oldBacsi} />
    </>
  );
};

export default Bacsi;

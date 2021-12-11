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
import { getKhoas, deleteKhoa } from "src/redux/action-creators";
import ModalKhoa from "./ModalKhoa";

const Khoa = () => {
  const dispatch = useDispatch();
  const [oldKhoa, setOldKhoa] = useState({});
  const [modal, setModal] = useState(false);

  const { khoas } = useSelector((state) => state.khoa);

  useEffect(() => {
    dispatch(getKhoas());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setOldKhoa(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteKhoa(item));
    }
  };

  const handleClick = () => {
    setModal(true);
  };

  console.log(khoas);

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
                items={khoas}
                fields={["_id", "Mã Số", "ten", "actions"]}
                striped
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  "Mã Số": (item) => <td>{item.mso}</td>,
                  ten: (item) => <td>{item.ten}</td>,
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
      <ModalKhoa modal={modal} setModal={setModal} oldKhoa={oldKhoa} />
    </>
  );
};

export default Khoa;

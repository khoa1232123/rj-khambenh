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
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "src/redux/action-creators";
import { deleteCategory } from "src/redux/action-creators/categoryActions";
import ModalCategory from "./ModalCategory";

const Categories = () => {
  const [updateCat, setUpdateCat] = useState({});
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  console.log(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleUpdate = (item) => {
    setUpdateCat(item);
    setModal(true);
  };

  const handleDelete = (item) => {
    dispatch(deleteCategory(item));
    console.log("delete");
  };

  const handleClick = () => {
    setUpdateCat({});
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
              <span>Striped Table</span>
              <CButton color="success" onClick={handleClick}>
                Add Category
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={categories}
                fields={["_id", "thumbnail", "title", "description", "actions"]}
                striped
                itemsPerPage={30}
                pagination
                scopedSlots={{
                  thumbnail: (item) => (
                    <td>
                      <img
                        src={
                          item.thumbnail
                            ? item.thumbnail
                            : "images/no-images.jpg"
                        }
                        alt=""
                        style={{ width: 100 }}
                      />
                    </td>
                  ),
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
      <ModalCategory modal={modal} setModal={setModal} updateCat={updateCat} />
    </>
  );
};

export default Categories;

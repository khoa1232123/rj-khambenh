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
import {
  getCategories,
  createCategory,
  updateCategory,
} from "src/redux/action-creators";

const ModalCategory = ({ modal, setModal, updateCat }) => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [category, setCategory] = useState({});
  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setCategory({ ...category, [name]: value });
  };

  useEffect(() => {
    if (updateCat) {
      setCategory(updateCat);
    }
  }, [updateCat]);

  console.log(updateCat);

  const handleClick = () => {
    if (category.title !== "") {
      if (Object.keys(updateCat).length === 0) {
        dispatch(createCategory(category));
      } else {
        dispatch(updateCategory(category));
      }
      dispatch(getCategories());
      setModal(false);
    } else {
    }
  };

  return (
    <CModal show={modal} onClose={setModal}>
      <CModalHeader closeButton>
        <CModalTitle>Update Category</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Title</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput
                id="title"
                name="title"
                placeholder="Title"
                value={category.title || ""}
                onChange={handleChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Title</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CTextarea
                id="Description"
                name="description"
                placeholder="Description"
                rows={5}
                value={category.description || ""}
                onChange={handleChange}
              ></CTextarea>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Parent</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect
                name="parent"
                value={category.parent || ""}
                onChange={handleChange}
              >
                <option value="">-- Choose --</option>
                {categories &&
                  categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.title}
                    </option>
                  ))}
              </CSelect>
            </CCol>
          </CFormGroup>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={handleClick}>
          Do Something
        </CButton>{" "}
        <CButton color="secondary" onClick={() => setModal(false)}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default ModalCategory;

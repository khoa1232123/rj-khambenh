import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CSelect,
  CTextarea,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "src/redux/action-creators";

const PostDetail = (props) => {
  // const local = useLocation();
  const { id } = props.match.params;
  const [goodPost, setGoodPost] = useState({});

  const { post } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    setGoodPost(post);
  }, [post]);

  console.log(goodPost);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGoodPost({ ...goodPost, [name]: value });
  };

  const [content, setContent] = useState("");
  return (
    <>
      <CRow>
        <CCol xs="12" sm="9">
          <CFormGroup>
            <CLabel htmlFor="name">Title Post</CLabel>
            <CInput
              id="name"
              name="title"
              placeholder="Enter Title"
              required
              value={goodPost.title || ""}
              onChange={handleChange}
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="name">Description</CLabel>
            <CTextarea
              rows="3"
              name="description"
              value={goodPost.description || ""}
              onChange={handleChange}
            ></CTextarea>
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="name">Content</CLabel>
            <Editor
              editorState={content}
              toolbarClassName="toolbar-class"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              localization={{
                locale: "ko",
              }}
              onEditorStateChange={(e) => setContent(e)}
            />
          </CFormGroup>
        </CCol>
        <CCol xs="12" sm="3">
          <CCard>
            <CCardHeader>
              Credit Card
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name">Name</CLabel>
                    <CInput id="name" placeholder="Enter your name" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Credit Card Number</CLabel>
                    <CInput
                      id="ccnumber"
                      placeholder="0000 0000 0000 0000"
                      required
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Month</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccyear">Year</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">CVV/CVC</CLabel>
                    <CInput id="cvv" placeholder="123" required />
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default PostDetail;

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
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts } from "src/redux/action-creators";
import PostForm from "./PostForm";

const Posts = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts);

  const handleUpdate = (item) => {};

  const handleDelete = (item) => {};

  const handleClick = () => {};

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
                items={posts}
                fields={["_id", "thumbnail", "title", "description", "actions"]}
                striped
                itemsPerPage={30}
                pagination
                scopedSlots={{
                  title: (item) => (
                    <td>
                      <CLink to={"/posts/updated/" + item._id}>
                        {item.title}
                      </CLink>
                    </td>
                  ),
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
    </>
  );
};

export default Posts;

export { PostForm };

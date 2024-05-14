import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import Auth from "../../Hooks/Auth";
import Footer from "../Shared/Footer";
import useAxiosHook from "../../Hooks/axiosHook";


const MyList = () => {
  // const {setLoading} = Auth()
  // setLoading(false)
  const { user } = Auth();
  const { email, displayName } = user;
  // console.log(user);

  // const loadData = useLoaderData();
  const [myList, setMyList] = useState([]);
  const axiosSecure = useAxiosHook()

  useEffect(() => {
      axiosSecure.get(`/allMenu/list/${email}`)
      .then(res=>{
        setMyList(res.data)
      })
  }, [email, axiosSecure]);

  const handleDelete = (id) => {
    // console.log(id);
    // console.log("item removed");
    Swal.fire({
      title: "Are you sure ?",
      text: "The data will be removed permanently",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("item delete");
        fetch(`http://localhost:5000/allMenu/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Item removed",
                text: "Your file has been removed.",
                icon: "success",
              });
              const remainingItems = myList.filter(
                (listItem) => listItem._id !== id
              );
              setMyList(remainingItems);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="w-10/12 mx-auto my-10">
        <Helmet>
          <title>{displayName}'s List</title>
        </Helmet>
        <table className="table">
          <thead>
            <tr className="font-bold">
              <th>Item No.</th>
              <th>Image</th>
              <th>Dish Name</th>
              <th>Category</th>
              <th>Point Person</th>
              <th className="md:pl-12">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myList.map((myItem, index) => (
              // console.log(myItem._id)
              <tr className="hover" key={myItem._id}>
                <td>{index + 1}</td>
                <td>
                  <img className="w-10" src={myItem.image} alt={myItem.name} />
                </td>
                <td>{myItem.name}</td>
                <td>{myItem.category}</td>
                <td>{user.displayName}</td>
                <td>
                  <button>
                    <Link
                      to={`/Update/${myItem._id}`}
                      // onClick={() => handleDelete}
                      className="btn hover:bg-transparent bg-transparent border-0 text-xl text-blue-500"
                    >
                      {" "}
                      <CiEdit />
                    </Link>
                  </button>
                  <button
                    onClick={() => handleDelete(myItem._id)}
                    className="btn hover:bg-transparent bg-transparent border-0 text-xl text-red-500"
                  >
                    <RiDeleteBin5Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyList;

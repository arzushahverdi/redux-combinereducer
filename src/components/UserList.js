import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/userSlice";

const UserList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((store) => store.user);
  console.log(users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      {users &&
        users.map((user) => (
          <React.Fragment key={user.id}>
            <p>{user.name}</p>
          </React.Fragment>
        ))}
    </div>
  );
};

export default UserList;

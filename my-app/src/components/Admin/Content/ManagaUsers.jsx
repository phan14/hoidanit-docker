import ModalCreateUser from "./ModalCreateUser";
import "./manageUser.scss";

const ManagaUsers = () => {
  return (
    <div className="manage-users-container">
      <div className="title">manage-users</div>
      <div className="user-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>table users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManagaUsers;

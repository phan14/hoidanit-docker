import ModalCreateUser from "./ModalCreateUser";

const ManagaUsers = () => {
  return (
    <div className="manage-users-container">
      <div className="title">manage-users</div>
      <div className="user-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          table users
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManagaUsers;

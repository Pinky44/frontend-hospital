import Modal from "src/components/Modal/Modal";

const ModalDelete = ({
  active,
  setActive,
  deleteVisit,
  id,
}) => {
  return (
    <Modal
      header="Удалить прием"
      active={active}
      setActive={setActive}
      modificationVisit={deleteVisit}
      id={id}
      modificationTittle="Удалить"
    >
      <div>Вы действительно хотите удалить прием?</div>
    </Modal>
  );
};

export default ModalDelete;

import React from 'react';
import { useSelector } from 'react-redux';
import component from './ModalsList';

const ModalRoot = () => {
  const modals = useSelector((state: any) => state.modals);

  if (!modals.length) return null;
  return (
    <>
      {/* TODO: define unique key */}
      {modals.map((modal) => {
        const Modal = component[modal.modalType];
        return <Modal key={modal.modalType} {...modal.modalProps} />;
      })}
    </>
  );
};

export default ModalRoot;

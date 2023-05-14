import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { hideModal } from '@/redux/modal/modal.action';
import sleep from '@/utils/steep';
import { MODAL_SAMPLE } from '../ModalsConstant';

const SampleModal = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);

  const closeModal = () => {
    sleep().then(() => {
      dispatch(hideModal({ modalType: MODAL_SAMPLE }));
    });
    setVisible(false);
  };

  return (
    <div>
      <Modal title="Basic Modal" visible={visible} onCancel={closeModal}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default SampleModal;

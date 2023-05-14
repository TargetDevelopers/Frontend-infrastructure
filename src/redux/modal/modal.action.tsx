import * as t from './modal.constant';

export const showModal = (modal) => (dispatch, getState) => {
  const { modals } = getState();
  // prevent duplicate modals...
  const isOpened = modals.find((m) => m.modalType === modal.modalType);
  if (!isOpened) dispatch({ type: t.SHOW_MODAL, payload: modal });
};
export const hideModal = (modal) => (dispatch, getState) => {
  const { modals } = getState();
  const filteredModals = modals.filter((m) => m.modalType !== modal.modalType);

  dispatch({ type: t.HIDE_MODAL, payload: filteredModals });
};
export const hideAllModals = () => ({
  type: t.HIDE_ALL_MODALS,
});

@author Majid Savalanpour <m.savalanpour@gmail.com>

this modal system use redux to manage modals. the modal will be disappear from dom when close. also you can pass props
to modal<br>
developed with ❤. All rights reserved.

# how to use modal system

## 1.add modal

1. create your modal component (sample also exist in `../components/Modal/modals/ModalSample.js`)
1. first add your modal unique name in `../components/Modal/modalsListConstants`
1. import your modal component in `../components/Modal/modalsList`

## 2.open modal

1. wrap your page with `../components/Modal/WithModalActions` hoc
2. import modal name from `../components/Modal/modalsListConstants`
3. use below function to open the modal:

```
  const dispatch = useDispatch();

  const showLogoutModal = () => {
    dispatch(
      showModal({
        modalType: 'MODAL_SAMPLE',
        modalProps: { foo: 'bar' },
      }),
    );
  };

```

## how to close modal

in your modal component, close your modal with this code:

```
  handleCloseModal = () => {
    this.props.hideModal({
      modalType: MODAL_SAMPLE,
    });
  };
```

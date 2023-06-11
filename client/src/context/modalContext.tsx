import { createContext, useState } from 'react';

interface ModalContextType {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  open: false,
  handleOpen: () => {},
  handleClose: () => {},
});

const ModalContextProvider = ({ children }:any) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open, handleOpen, handleClose }}>
       {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;

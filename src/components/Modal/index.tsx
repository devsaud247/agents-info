import type { FC } from "react";

import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export interface IModalProps {
  heading?: any;
  show: boolean;
  onHide?: any;
  children?: any;
  size: any;
}

const ModalBox: FC<IModalProps> = ({
  heading,
  show,
  onHide,
  children,
  size,
}) => {
  return (
    <div>
      <Modal show={show} onHide={onHide} size={size}>
        {heading && (
          <Modal.Header closeButton>
            <Modal.Title>{heading}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalBox;

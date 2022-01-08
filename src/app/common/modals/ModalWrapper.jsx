import React from "react";
import {useDispatch} from 'react-redux';
import { closeModal } from "./modalReducer";
import {Modal} from 'semantic-ui-react';

export default function ModalWrapper({children,size,header}){
    const dispatch = useDispatch();
    return (
        <Modal open={true} onClose={()=>dispatch(closeModal())} size={size}>
            {header && <Modal.Header>{header}</Modal.Header>}
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    )
}
import { Modal, Box } from "@mui/material"

export default function Assesment(props) {

    return (
        <>
        <Modal open={props.assesmentModalOpen} onClose={() => props.setAssesmentModalOpen(false)} >
            <Box sx={props.assesmentModalStyle} >
                <img src={props.craftopiaLogo} />
                        

            </Box>
        </Modal>
        </>
    )
}
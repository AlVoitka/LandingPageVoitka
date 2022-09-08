import { Box, Button, ButtonGroup } from "@mui/material";
import "./sidebar.scss";


const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];

function Sidebar() {
    return (
        <div className="sidebar">
            <Box>
                <ButtonGroup
                    orientation="vertical"
                    size="large"
                    variant="string"
                >
                    {buttons}
                </ButtonGroup>
            </Box>
        </div>
    )
}

export default Sidebar
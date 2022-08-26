import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FinancialBid from "../components/FinancialBid";
import TechnicalBid from "../components/TechnicalBid";
import BidderLayout from "../components/BidderLayout";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
        {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BidderApply({tender}) {
  const [value, setValue] = React.useState(0);
  console.log(tender);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<BidderLayout>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Tabs for Bid" centered={{
          md: true,
          xs: false
        }}
        >
          <Tab label="Financial Bid" {...a11yProps(0)} />
          <Tab label="Technical Bid" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FinancialBid tender={tender}/>
      </TabPanel>
      <TabPanel value={value} index={1} >
        <TechnicalBid tender={tender}/>
      </TabPanel>

    </Box>
    </BidderLayout>
  );
}

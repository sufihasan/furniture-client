import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import OrderTab from "../OrderTab/OrderTab";
import useFurniture from "../../../hooks/useFurniture";
import { useParams } from "react-router-dom";
import { useState } from "react";


const Order = () => {

    const categories = ['leavingroom', 'dining', 'bedroom']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [furnitures] = useFurniture();

    console.log(category);
    const leavingroom = furnitures.filter(item => item.category === 'leavingroom');
    const dining = furnitures.filter(item => item.category === 'dining');
    const bedroom = furnitures.filter(item => item.category === 'bedroom');


    return (
        <div>


            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
                <TabList >
                    <Tab>Leaving Room</Tab>
                    <Tab>Dining</Tab>
                    <Tab>Bedroom</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={leavingroom}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dining}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={bedroom}></OrderTab>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;
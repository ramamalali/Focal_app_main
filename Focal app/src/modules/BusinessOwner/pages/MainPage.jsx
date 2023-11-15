import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Mypage from "./Mypage";
import Information from "../components/Information";
import Posts from "../components/Posts";
import Blogs from "../components/Blogs";
import { useState } from "react";
import AddJob from './AddJob'
import ConfirmPayment from './ConfirmPayment'
import JobMain from './JobMain'
import StepperLogin from './StepperLogin'
import WithdrawalMoney from './WithdrawalMoney'
function MainPage() {

    const [Toggle, setToggle] = useState(true)
    const toggle = () => {
        setToggle(!Toggle)
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Mypage Toggle={Toggle} />,
            children: [
                {
                    index: true,
                    path: '/information',
                    element: <Information toggle={toggle} />
                },
                {
                    index: true,
                    path: '/Posts',
                    element: <Posts toggle={toggle} />
                },
                {
                    index: true,
                    path: '/Blogs',
                    element: <Blogs toggle={toggle} />
                }
            ]
        },
        {/******لاختبار تضاربات التنسيق******/},
        {
         path:"/AddJob",
         element:<AddJob/>
        },
        {
            path:"/ConfirmPayment",
            element:<ConfirmPayment/>
        },
        {
            path:"/JobMain",
            element:<JobMain/>
        },
        {
            path:"/StepperLogin",
            element:<StepperLogin/>
        },
        {
            path:"/WithdrawalMoney",
            element:<WithdrawalMoney/>
        }
    ])
    return (
        <RouterProvider router={router} />
    );
}

export default MainPage;
